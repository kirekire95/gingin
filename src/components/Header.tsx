import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header >
    <nav className="flex items-center justify-between"> 
      <Link href="/">
        
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
        
      </Link>
      <ul className="flex gap-4 items-center">
        <li><Link href="/menu">Menu</Link></li>
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
    </header>
    
  );
}
