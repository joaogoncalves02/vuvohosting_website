import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-neutral-50 mt-16">
      <div className="max-w-6xl mx-auto p-8 text-sm text-neutral-500">
        <p>© {new Date().getFullYear()} Vuvo Hosting</p>
        <p className="mt-2">
          <Link href="/privacidade">Privacidade & Cookies</Link>
        </p>
      </div>
    </footer>
  )
}
