import Link from 'next/link';
import { Package } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen p-8 space-y-12">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl font-bold">
          Welcome to <span className="text-fd-accent text-shadow-2xs text-shadow-fd-accent-foreground">n1hal's Tools</span>
        </h1>
        <p className="text-fd-muted-foreground text-lg">
          A collection of small, dependency-free JavaScript/TypeScript utilities.
          Typed, documented, and ready for your projects.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <Link
            href="/docs"
            className="px-4 py-2 bg-fd-accent text-fd-primary rounded-lg font-semibold hover:bg-fd-accent/90 transition"
          >
            Getting Started
          </Link>
          <Link
            href="/docs/strx"
            className="px-4 py-2 bg-fd-accent text-fd-primary rounded-lg font-semibold hover:bg-fd-accent/90 transition"
          >
            Explore strx
          </Link>
        </div>
      </section>

      {/* Packages Section */}
      <section className="max-w-5xl w-full space-y-6">
        <h2 className="text-2xl font-bold text-center">Available Package</h2>
        <div className="flex items-center justify-center gap-6">
          <Link href="/docs/strx" className="group">
            <div className="p-6 bg-fd-accent rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-center space-y-4">
              <Package className="w-12 h-12 text-fd-primary" />
              <h3 className="font-semibold text-lg">@n1hal/strx</h3>
              <p className="text-fd-muted-foreground text-sm text-center">
                String manipulation helpers with TypeScript support and JS Docs.
              </p>
            </div>
          </Link>

          {/* <Link href="/docs/mathx" className="group">
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-center space-y-4">
              <Zap className="w-12 h-12 text-fd-accent group-hover:text-fd-accent/80" />
              <h3 className="font-semibold text-lg">@n1hal/mathx</h3>
              <p className="text-fd-muted-foreground text-sm text-center">
                Mathematics and number utilities for common operations.
              </p>
            </div>
          </Link>

          <Link href="/docs/formx" className="group">
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-center space-y-4">
              <BookOpen className="w-12 h-12 text-fd-accent group-hover:text-fd-accent/80" />
              <h3 className="font-semibold text-lg">@n1hal/formx</h3>
              <p className="text-fd-muted-foreground text-sm text-center">
                Form validation and helper utilities for HTML forms.
              </p>
            </div>
          </Link> */}
        </div>
      </section>

      {/* Quick Links Section
      <section className="max-w-3xl w-full text-center space-y-4">
        <h2 className="text-2xl font-bold">Quick Links</h2>
        <div className="flex justify-center flex-wrap gap-4 mt-2">
          <Link
            href="https://fumadocs.dev"
            className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg shadow-sm hover:shadow-md transition"
          >
            <BookOpen className="w-5 h-5" />
            FumaDocs
          </Link>
          <Link
            href="https://nextjs.org/docs"
            className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg shadow-sm hover:shadow-md transition"
          >
            <Zap className="w-5 h-5" />
            Next.js
          </Link>
          <Link
            href="https://github.com/n1hal"
            className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg shadow-sm hover:shadow-md transition"
          >
            <Github className="w-5 h-5" />
            GitHub
          </Link>
        </div>
      </section> */}
    </main>
  );
}
