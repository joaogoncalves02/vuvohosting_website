"use client";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import AccountCard from "../components/AccountCard";

function Content() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") || "";
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`/api/accounts?q=${encodeURIComponent(q)}`)
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao carregar");
        return res.json();
      })
      .then((data) => {
        const results = Array.isArray(data) ? data : data.results || [];
        setItems(results);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [q]);

  return (
    <div className="container py-4">
      <h1>NABO: NOS Accounts Back Office</h1>
      <p className="text-muted mb-4">Lista de resultados</p>
      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}
      {!loading && !error && items.length === 0 && <p>Nenhum resultado.</p>}
      {!loading && !error &&
        items.map((acc, idx) => <AccountCard key={acc.id || idx} account={acc} />)}
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="container py-4"><p>Loading...</p></div>}>
      <Content />
    </Suspense>
  );
}
