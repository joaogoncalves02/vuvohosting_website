import Link from 'next/link'

interface Props {
  title: string
  description: string
  href: string
}

export function ServiceCard({ title, description, href }: Props) {
  return (
    <Link href={href} className="block rounded-2xl border p-6 shadow-sm hover:shadow-md transition">
      <h3 className="font-heading text-xl mb-2">{title}</h3>
      <p className="text-neutral-600 text-sm">{description}</p>
    </Link>
  )
}
