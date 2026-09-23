"use client";

import Link from "next/link";
import { motion } from "motion/react";

const Home = () => {
  return (
    <main className="landing-page flex min-h-[calc(100vh-4.5rem)] items-center justify-center bg-black px-6 text-white">
      <div className="w-full max-w-lg pb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8 text-base font-semibold tracking-[0.2em] text-white uppercase"
        >
          OneList
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
        >
          <h1 className="text-5xl font-semibold leading-tight tracking-[-0.05em] sm:text-6xl">
            A simpler way
            <br />
            to stay focused.
          </h1>
          <p className="mx-auto mt-5 max-w-sm text-base leading-7 text-neutral-400">
            Keep your tasks clear, organized, and moving forward.
          </p>
          <Link
            href="/todos"
            className="mt-8 inline-flex items-center gap-3 rounded-md bg-white px-5 py-3 text-sm font-medium text-black transition-colors hover:bg-neutral-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Get started
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </motion.div>
      </div>
    </main>
  );
};

export default Home;
