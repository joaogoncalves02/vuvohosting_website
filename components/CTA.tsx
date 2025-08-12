import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-20 text-center bg-secondary/10">
      <h2 className="text-3xl font-heading mb-4">Vamos acelerar o teu negócio?</h2>
      <p className="text-neutral-700 mb-8">Diz-nos o que queres atingir e nós tratamos do caminho.</p>
      <div className="flex justify-center gap-4">
        <Link href="/contactos" className="px-6 py-3 rounded-2xl bg-primary text-white">Pedir proposta</Link>
        <Link href="https://wa.me/351000000000?text=Quero%20saber%20mais" className="px-6 py-3 rounded-2xl border border-primary text-primary">Agendar chamada</Link>
      </div>
    </section>
  )
}
