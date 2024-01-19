import { HiArrowNarrowRight } from "react-icons/hi"
import { Link } from "../../../../Link"
import { HorizontalDivider } from "../../../../divider/horizontal"
import {SectionTitle} from "../../../../section-title"
import { ProjectCard } from "./project-card"

export const HighlightProjects = () => {
  return (
    <section className="container py-16">
      <SectionTitle title="Projetos" subtitle="destaques"/>
      <HorizontalDivider className="mb-16" />

      <div>
        <ProjectCard />
        <HorizontalDivider className="my-16" />
        <ProjectCard />
        <HorizontalDivider className="my-16" />

        <p className="flex items-center gap-1.5">
          <span className="text-gray-400">Se interessou?</span>
          <Link href='/projects' className="inline-flex">
            Ver todos
            <HiArrowNarrowRight size={18} />
          </Link>
        </p>
      </div>
    </section>
  )
}