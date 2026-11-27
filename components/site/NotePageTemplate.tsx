import Head from "next/head";
import Link from "next/link";
import type { ReactNode } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Layout from "../Layout";
import { profile } from "@/data";

interface NotePageTemplateProps {
  slug: string;
  title: string;
  description: string;
  meta: string;
  caseStudyHref: string;
  caseStudyLabel: string;
  children: ReactNode;
}

export default function NotePageTemplate({
  slug,
  title,
  description,
  meta,
  caseStudyHref,
  caseStudyLabel,
  children,
}: NotePageTemplateProps) {
  const url = `${profile.seo.siteUrl}/notes/${slug}`;

  return (
    <Layout>
      <Head>
        <title>{title} | {profile.name}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={profile.seo.ogImage} />
      </Head>

      <article className="max-w-3xl space-y-8">
        <Link href="/notes" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-ink">
          <FiArrowLeft aria-hidden /> Notes
        </Link>

        <header className="space-y-3">
          <p className="text-xs font-medium text-muted">{meta}</p>
          <h1 className="text-display-lg font-semibold text-ink">{title}</h1>
          <p className="text-body-lg text-muted">{description}</p>
        </header>

        <div className="space-y-4 text-base leading-relaxed text-ink/90">
          {children}
        </div>

        <p className="border-t border-line pt-6">
          <Link href={caseStudyHref} className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline">
            {caseStudyLabel} <FiArrowRight aria-hidden />
          </Link>
        </p>
      </article>
    </Layout>
  );
}
