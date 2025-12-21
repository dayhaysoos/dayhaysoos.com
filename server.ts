import { serveStatic } from "hono/bun";
import type { ViteDevServer } from "vite";
import { createServer as createViteServer } from "vite";
import config from "./zosite.json";
import { Hono } from "hono";
import { Database } from "bun:sqlite";

type Mode = "development" | "production";
const app = new Hono();
const db = new Database("builder.db");

const mode: Mode =
  process.env.NODE_ENV === "production" ? "production" : "development";

/**
 * Add any API routes here.
 */
app.get("/api/hello-zo", (c) => c.json({ msg: "Hello from Zo" }));

app.get("/api/logs", (c) => {
  try {
    const query = db.query("SELECT * FROM logs ORDER BY date DESC");
    const logs = query.all().map((log: any) => {
      try {
        return {
          ...log,
          tags: JSON.parse(log.tags),
        };
      } catch (e) {
        console.error("Error parsing tags for log:", log.id, e);
        return {
          ...log,
          tags: [],
        };
      }
    });
    return c.json(logs);
  } catch (err) {
    console.error("Error in /api/logs:", err);
    return c.json({ error: "Internal Server Error" }, 500);
  }
});

app.post("/api/logs", async (c) => {
  const body = await c.req.json();
  const { date, topic, content, tags } = body;
  
  const insert = db.prepare(`
    INSERT INTO logs (date, topic, content, tags)
    VALUES ($date, $topic, $content, $tags)
  `);
  
  insert.run({
    $date: date,
    $topic: topic,
    $content: content,
    $tags: JSON.stringify(tags || [])
  });
  
  return c.json({ success: true }, 201);
});

if (mode === "production") {
  configureProduction(app);
} else {
  await configureDevelopment(app);
}

/**
 * Determine port based on mode. In production, use the published_port if available.
 * In development, always use the local_port.
 * DO NOT edit this port manually. Ports are managed by the system via the zosite.json config.
 */
const port =
  mode === "production"
    ? (config.publish?.published_port ?? config.local_port)
    : config.local_port;

export default { fetch: app.fetch, port, idleTimeout: 255 };

/**
 * Configure routing for production builds.
 *
 * - Streams prebuilt assets from `dist`.
 * - Falls back to `index.html` for any other GET so the SPA router can resolve the request.
 */
function configureProduction(app: Hono) {
  app.use("/assets/*", serveStatic({ root: "./dist" }));
  app.use(async (c, next) => {
    if (c.req.method !== "GET") {
      return next();
    }

    const path = c.req.path;
    if (path.startsWith("/api/") || path.startsWith("/assets/")) {
      return next();
    }

    return serveStatic({ path: "./dist/index.html" })(c, next);
  });
}

/**
 * Configure routing for development builds.
 *
 * - Boots Vite in middleware mode for transforms.
 * - Mirrors production routing semantics so SPA routes behave consistently.
 */
async function configureDevelopment(app: Hono): Promise<ViteDevServer> {
  const vite = await createViteServer({
    server: { middlewareMode: true, hmr: false, ws: false },
    appType: "custom",
  });

  app.use("*", async (c, next) => {
    if (c.req.path.startsWith("/api/")) {
      return next();
    }

    const url = c.req.path;
    try {
      if (url === "/" || url === "/index.html") {
        let template = await Bun.file("./index.html").text();
        template = await vite.transformIndexHtml(url, template);
        return c.html(template);
      }

      let result;
      try {
        result = await vite.transformRequest(url);
      } catch {
        result = null;
      }

      if (result) {
        return new Response(result.code, {
          headers: {
            "Content-Type": "application/javascript",
            "Cache-Control": "no-cache",
          },
        });
      }
      const file = Bun.file(`.${url}`);
      if (await file.exists()) {
        return new Response(file, {
          headers: { "Cache-Control": "no-cache" },
        });
      }
      let template = await Bun.file("./index.html").text();
      template = await vite.transformIndexHtml("/", template);
      return c.html(template);
    } catch (error) {
      vite.ssrFixStacktrace(error as Error);
      console.error(error);
      return c.text("Internal Server Error", 500);
    }
  });

  return vite;
}






