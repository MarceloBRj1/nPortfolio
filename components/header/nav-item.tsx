import Link from "next/link"
import { usePathname } from "next/navigation";




interface NavItemProps {
  label: string;
  href: string;
}

export const NavItem = ({label, href}:NavItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  


  return (
    <Link href={href} className="flex items-center font-medium font-mono">
    <p className="text-emerald-400">#</p>
    {label}
    </Link>
  )
}