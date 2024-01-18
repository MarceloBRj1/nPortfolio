import { TbBrandGithub } from "react-icons/tb"
import { SectionTitle } from "../../../section-title"
import { Techss } from "./techss"

export const KnowTech = () => {
  return (
    <section className="container py-16">
      <SectionTitle title="Conhecimentos" subtitle="competências"/>

      <div className="grid grid-cols-[repeat(auto-fit,_minmax(264px,_1fr))] gap-3 mt-[60px]">
       {Array.from({length: 8}).map((_, index) => (
          <Techss key={index} tech={{icon: <TbBrandGithub />, name: "GitHub", starDate: "2023-06-08"}} />
       ))}
      </div>
    </section>
  )
}