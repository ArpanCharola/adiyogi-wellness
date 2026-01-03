// src/pages/Issues.tsx
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // Add your Footer component
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { issuesPosts } from "@/data/issuesData";

const Issues = () => {
  const [featured, ...rest] = issuesPosts;
  const secondary = rest.slice(0, 3);
  const tags = Array.from(
    new Set(issuesPosts.flatMap((post) => post.tags))
  ).slice(0, 10);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-28 pb-12 max-w-6xl">
        <header className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-wide text-primary/80">
              Issues
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Understanding What You're Facing
            </h1>
            <p className="mt-2 text-muted-foreground max-w-2xl text-sm sm:text-base">
              Learn about common mental health challenges through clear,
              compassionate explanations—no jargon, just understanding.
            </p>
          </div>
          <Link
            to="/treatments"
            className="mt-3 inline-flex items-center rounded-full bg-card px-4 py-2 text-xs font-medium text-foreground shadow-sm ring-1 ring-border hover:bg-muted transition-colors"
          >
            Explore Treatments →
          </Link>
        </header>

        <section className="grid gap-6 lg:grid-cols-[2fr,1.2fr]">
          {/* Left column: featured + secondary */}
          <div className="space-y-6">
            {/* Featured card */}
            {featured && (
              <Link to={`/issues/${featured.slug}`}>
                <Card className="group overflow-hidden bg-gradient-to-br from-primary/5 via-card to-card shadow-lg border-border/60 hover:shadow-xl transition-shadow">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="relative h-56 md:h-full">
                      <img
                        src={featured.heroImage}
                        alt={featured.title}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 text-xs font-medium text-foreground shadow">
                        {featured.category}
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 px-5 py-4 md:py-6">
                      <p className="text-xs text-muted-foreground">
                        Featured · {featured.readingTime}
                      </p>
                      <h2 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors">
                        {featured.title}
                      </h2>
                      {featured.highlight && (
                        <p className="text-sm text-muted-foreground">
                          {featured.highlight}
                        </p>
                      )}
                      <div className="mt-auto flex items-center justify-between gap-2 pt-2">
                        <p className="text-xs text-muted-foreground">
                          {featured.publishedAt}
                        </p>
                        <span className="text-xs font-semibold text-primary">
                          Read article →
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            )}

            {/* Secondary cards */}
            <div className="grid gap-4 md:grid-cols-2">
              {secondary.map((post) => (
                <Link key={post.slug} to={`/issues/${post.slug}`}>
                  <Card className="group flex h-full flex-col overflow-hidden border-border/60 hover:shadow-md transition-shadow">
                    <div className="h-32 w-full overflow-hidden">
                      <img
                        src={post.heroImage}
                        alt={post.title}
                        className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-2 px-4 py-3">
                      <p className="text-[11px] font-medium uppercase tracking-wide text-primary/80">
                        {post.category} · {post.readingTime}
                      </p>
                      <h3 className="text-sm font-semibold group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-3">
                        {post.shortDescription}
                      </p>
                      <span className="mt-auto pt-1 text-[11px] font-semibold text-primary">
                        Open →
                      </span>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Right column: tags & compact list */}
          <aside className="space-y-4">
            <Card className="p-4">
              <h3 className="mb-3 text-sm font-semibold">Explore by theme</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="rounded-full text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold">All issues</h3>
                <span className="text-[11px] text-muted-foreground">
                  {issuesPosts.length} articles
                </span>
              </div>
              <div className="space-y-2">
                {issuesPosts.map((post) => (
                  <Link
                    key={post.slug}
                    to={`/issues/${post.slug}`}
                    className="group flex items-start justify-between gap-3 rounded-lg px-2 py-2 hover:bg-muted/80 transition-colors"
                  >
                    <div className="flex-1">
                      <p className="text-[11px] text-muted-foreground">
                        {post.category}
                      </p>
                      <p className="text-xs font-medium group-hover:text-primary line-clamp-2">
                        {post.title}
                      </p>
                    </div>
                    <span className="mt-1 text-[10px] text-muted-foreground">
                      {post.readingTime}
                    </span>
                  </Link>
                ))}
              </div>
            </Card>
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Issues;
