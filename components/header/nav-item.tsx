
import Link from "next/link"




interface NavItemProps {
  label: string;
  href: string;
}

export const NavItem = ({label, href}:NavItemProps) => {
  
  


  return (
    <Link href={href} className="flex items-center font-medium font-mono">
    <p className="text-emerald-400">#</p>
    {label}
    </Link>
  )
}