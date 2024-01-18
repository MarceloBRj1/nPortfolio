import { ReactNode } from "react"
import { getRelativeTimeString } from "./get-relative-time"
type TechssProps = {
  tech: {
    icon: React.ReactNode;
    name: string;
    starDate: string;
  }
}

export const Techss = ({tech}: TechssProps) => {
  const relativeTime = getRelativeTimeString(new Date(tech.starDate), 'pt-BR',).replace('há', '')
  return (
    <div className="p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col gap-2 hover:text-emerald-500 hover:bg-gray-600/30 transition-all">
      <div className="flex items-center justify-between">
        <p className="font-medium">{tech.name}</p>
        {tech.icon}
      </div>
      <span>{relativeTime} de <span className="text-yellow-500 animate-pulse/2">EXP</span></span>
    </div>
  )
}