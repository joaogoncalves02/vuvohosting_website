import Link from 'next/link'

export default function Hero() {
  return (
    <section className="py-20 text-center">
      <h1 className="text-4xl font-heading font-bold mb-4">Tecnologia que faz o teu negócio andar para a frente.</h1>
      <p className="text-lg text-neutral-600 mb-8">Websites rápidos, alojamento fiável, tráfego pago que converte e automação que poupa horas — tudo num só parceiro.</p>
      <div className="flex justify-center gap-4">
        <Link href="/contactos" className="px-6 py-3 rounded-2xl bg-primary text-white">Pedir proposta</Link>
        <Link href="https://wa.me/351000000000?text=Quero%20saber%20mais" className="px-6 py-3 rounded-2xl border border-primary text-primary">Falar no WhatsApp</Link>
      </div>
    </section>
  )
}
