import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-white shadow">
      <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="font-heading text-xl text-primary">Vuvo Hosting</Link>
        <div className="space-x-4 text-sm">
          <Link href="/servicos">Serviços</Link>
          <Link href="/casos">Casos</Link>
          <Link href="/sobre">Sobre</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contactos" className="text-primary">Contactos</Link>
        </div>
      </nav>
    </header>
  )
}
