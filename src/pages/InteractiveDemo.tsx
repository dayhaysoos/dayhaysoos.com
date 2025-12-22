import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

export default function InteractiveDemo() {
  return (
    <Layout>
      <Link
        to='/writing'
        className='text-sm text-muted-foreground hover:text-foreground transition-colors'
      >
        ← Back to writing
      </Link>

      <article className='mt-8'>
        <header className='mb-8'>
          <h1 className='text-3xl font-bold mb-2'>
            Scroll-Driven Animations Demo
          </h1>
          <time className='text-sm text-muted-foreground'>
            December 21, 2025
          </time>
        </header>
        <div className='relative w-full min-h-[150vh]'>
          <div className='sticky top-0 w-full min-h-screen flex items-center justify-center p-8'>
            <div className='space-y-8'>
              {/* Box 1 */}
              <div className='w-32 h-32 bg-blue-500 rounded-lg exit-down'></div>

              {/* Box 2 */}
              <div className='w-32 h-32 bg-purple-500 rounded-lg exit-left'></div>

              {/* Box 3 */}
              <div className='w-32 h-32 bg-pink-500 rounded-lg exit-right'></div>
            </div>
          </div>
          <div
            className='relative w-full min-h-[150vh]'
            data-timeline='scroller'
          ></div>
        </div>
        <div className='relative w-full min-h-[150vh]'>
          <div className='sticky top-0 w-full min-h-screen flex items-center justify-start p-8'>
            <div className='space-y-8'>
              {/* Box 1 */}
              <div className='w-32 h-32 bg-blue-500 rounded-lg end-left'></div>

              {/* Box 2 */}
              <div className='w-32 h-32 bg-purple-500 rounded-lg end-down'></div>

              {/* Box 3 */}
              <div className='w-32 h-32 bg-pink-500 rounded-lg end-right'></div>
            </div>
          </div>
          <div
            className='relative w-full min-h-[150vh]'
            data-timeline='targeted-scroller'
          ></div>
        </div>
      </article>
    </Layout>
  );
}
