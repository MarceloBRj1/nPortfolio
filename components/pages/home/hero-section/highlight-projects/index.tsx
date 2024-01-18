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
      </div>
    </section>
  )
}