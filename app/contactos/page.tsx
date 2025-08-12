export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="font-heading text-3xl mb-6">Contactos</h1>
      <form className="space-y-4" method="post" action="/api/contact">
        <input name="name" type="text" placeholder="Nome" className="w-full rounded-2xl border p-3" required />
        <input name="email" type="email" placeholder="Email" className="w-full rounded-2xl border p-3" required />
        <textarea name="message" placeholder="Mensagem" className="w-full rounded-2xl border p-3 h-32" required />
        <button type="submit" className="px-6 py-3 rounded-2xl bg-primary text-white">Enviar</button>
      </form>
      <div className="mt-6 text-neutral-600">
        <p>Email: <a href="mailto:ola@vuvohosting.com" className="text-primary">ola@vuvohosting.com</a></p>
        <p>Telefone: <a href="tel:+351000000000" className="text-primary">+351 XXX XXX XXX</a></p>
      </div>
    </div>
  )
}
