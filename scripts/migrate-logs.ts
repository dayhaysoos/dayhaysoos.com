import { Database } from "bun:sqlite";
import logs from "../src/data/builder-log.json";

const db = new Database("builder.db");

// Create table
db.run(`
  CREATE TABLE IF NOT EXISTS logs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT,
    topic TEXT,
    content TEXT,
    tags TEXT
  )
`);

// Insert data
const insert = db.prepare(`
  INSERT INTO logs (date, topic, content, tags)
  VALUES ($date, $topic, $content, $tags)
`);

const insertMany = db.transaction((logs) => {
  for (const log of logs) {
    insert.run({
      $date: log.date,
      $topic: log.topic,
      $content: log.update,
      $tags: JSON.stringify(log.tags || [])
    });
  }
});

try {
  insertMany(logs);
  console.log(`Successfully migrated ${logs.length} logs to SQLite.`);
} catch (error) {
  console.error("Migration failed:", error);
}

