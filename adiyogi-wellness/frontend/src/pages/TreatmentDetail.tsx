// src/pages/TreatmentDetail.tsx
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { treatmentsPosts } from "@/data/treatmentsData";
import { ArrowLeft } from "lucide-react";

const TreatmentDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = treatmentsPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 pt-28 pb-12 max-w-4xl">
          <p className="text-sm text-muted-foreground">
            Treatment not found.{" "}
            <Link to="/treatments" className="text-primary underline">
              Back to all treatments
            </Link>
          </p>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-28 pb-12 max-w-4xl">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-3 w-3" />
          Back
        </button>

        <article className="space-y-6">
          <Card className="overflow-hidden">
            <div className="h-56 w-full sm:h-72">
              <img
                src={post.heroImage}
                alt={post.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-3 px-5 py-4 sm:px-6 sm:py-5">
              <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <span className="font-semibold text-primary">
                  {post.category}
                </span>
                <span>• {post.readingTime}</span>
                <span>• {post.publishedAt}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold leading-snug">
                {post.title}
              </h1>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="rounded-full text-[11px]"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>

          {post.highlight && (
            <p className="text-sm italic text-muted-foreground border-l-4 border-primary/60 bg-card/40 px-4 py-3 rounded-md">
              {post.highlight}
            </p>
          )}

          <section className="prose prose-sm sm:prose-base max-w-none prose-headings:text-foreground prose-p:text-muted-foreground dark:prose-invert">
            {post.content.split("\n\n").map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </section>

          <div className="pt-4 text-xs text-muted-foreground">
            This article is for emotional awareness and self‑reflection only. It
            is not a substitute for professional diagnosis or emergency help.
          </div>
        </article>
      </main>
    </div>
  );
};

export default TreatmentDetail;
