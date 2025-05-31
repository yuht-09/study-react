"use client";

import React from 'react';
import Image from "next/image";
import Head from "next/head";
import { Footer } from "../components/footer";
import Links from "../components/links";
import Dictaphone from "../components/voice";

export default function About() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Head>
        <title>About Page</title>
        <meta name="description" content="About Page" />
      </Head>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              app/page.js
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.About Page
          </li>
        </ol>
        <Links />
        <Dictaphone />
      </main>
      <Footer />
    </div>
  );
}
