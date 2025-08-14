"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [term, setTerm] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setTerm(searchParams.get("q") || "");
  }, [searchParams]);

  useEffect(() => {
    const handler = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (term) params.set("q", term);
      else params.delete("q");
      const query = params.toString();
      router.replace(`/?${query}`);
    }, 300);
    return () => clearTimeout(handler);
  }, [term]);

  return (
    <input
      type="search"
      className="form-control"
      placeholder="Search"
      value={term}
      onChange={(e) => setTerm(e.target.value)}
    />
  );
}
