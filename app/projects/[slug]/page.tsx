import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectSlugs, getProject } from "@/lib/projects";
import ProjectView from "@/components/ProjectView";

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found — Sabrmotion" };
  return {
    title: `${project.title} — Sabrmotion`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!getProject(slug)) notFound();

  const idx = projectSlugs.indexOf(slug);
  const nextSlug = projectSlugs[(idx + 1) % projectSlugs.length];

  return <ProjectView slug={slug} nextSlug={nextSlug} />;
}
