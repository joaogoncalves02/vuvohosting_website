import Link from "next/link";
import { Suspense } from "react";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <img
            src="/logo.svg"
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-top me-2"
          />
          NABO
        </Link>
        <div className="ms-auto" style={{ width: "200px" }}>
          <Suspense fallback={null}>
            <SearchBar />
          </Suspense>
        </div>
      </div>
    </nav>
  );
}
