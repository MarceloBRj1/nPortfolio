import Image from 'next/image'
import { HeroSection } from '../../components/pages/home/hero-section'
import { KnowTech } from '../../components/pages/home/know-tech'
import { HighlightProjects } from '../../components/pages/home/hero-section/highlight-projects'
import {Experiencia} from '../../components/pages/home/experiencia'
export default function Home() {
  return (
    <>
    <HeroSection />
    <KnowTech />
    <HighlightProjects />
    </>
  )
}
