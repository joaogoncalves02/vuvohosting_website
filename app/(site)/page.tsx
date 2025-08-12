import Hero from '@/components/Hero'
import CTASection from '@/components/CTA'
import { ServiceCard } from '@/components/ServiceCard'

const services = [
  {
    title: 'Criação de Websites',
    description: 'Sites modernos, rápidos e otimizados para SEO, prontos a vender.',
    href: '/servicos/criacao-de-websites',
  },
  {
    title: 'Gestão & Alojamento',
    description: 'Manutenção, backups diários, segurança e uptime para não falhar.',
    href: '/servicos/gestao-alojamento',
  },
  {
    title: 'Tráfego Pago',
    description: 'Campanhas em Google & Meta orientadas a leads, com testes e otimização contínua.',
    href: '/servicos/trafego-pago',
  },
  {
    title: 'Sistemas & Soluções',
    description: 'Redes, cloud, M365/Workspace, segurança e suporte on-site/remoto.',
    href: '/servicos/sistemas-solucoes',
  },
  {
    title: 'Automação & Integrações',
    description: 'Ligamos ferramentas, eliminamos tarefas repetitivas e criamos dashboards.',
    href: '/servicos/automacao-integracoes',
  },
]

export default function HomePage() {
  return (
    <main>
      <Hero />
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="font-heading text-2xl mb-8 text-center">Serviços</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </section>
      <CTASection />
    </main>
  )
}
