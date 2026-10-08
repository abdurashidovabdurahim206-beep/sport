import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="logo">
        FIT<span>LIFE</span>
      </Link>

      <div className="navLinks">
        <Link href="/">Bosh sahifa</Link>
        <Link href="/sport">Sport</Link>
        <Link href="/timer">Taymer</Link>
        <Link href="/location">Lokatsiya</Link>
      </div>

      <Link href="/sport" className="navButton">
        Boshlash →
      </Link>
    </nav>
  );
}