import Link from "next/link";

export default function Nav() {
  return (
    <div className="navWrap">
      <div className="container nav">
        <Link href="/" className="brand">
          <div className="brandMark">EC</div>
          <div className="brandText">
            <strong>Emiliano Cuellar</strong>
            <span>Web3 Product Portfolio</span>
          </div>
        </Link>
        <div className="navLinks">
          <Link href="/about">About</Link>
          <Link href="/work">Work</Link>
          <Link href="/#contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}
