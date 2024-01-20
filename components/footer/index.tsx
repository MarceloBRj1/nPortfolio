import { IoRocketOutline } from "react-icons/io5";

export const Footer = () => {
  return (
    <footer className="h-14 w-full flex items-center justify-center bg-gray-950">
      <span className="flex items center gap-1.5 text-xs sm:text-sm font-mono text-gray-400">
        Feito por
        <IoRocketOutline className="text-emerald-400" size={13} />
        <strong className="font-medium">Marcelo</strong>
      </span>
    </footer>
  )
}