import { notFound } from 'next/navigation'

const services: Record<string, { title: string; description: string }> = {
  'criacao-de-websites': {
    title: 'Criação de Websites',
    description:
      'Sites modernos, rápidos e otimizados para SEO, prontos a vender.',
  },
  'gestao-alojamento': {
    title: 'Gestão & Alojamento',
    description:
      'Manutenção, backups diários, segurança e uptime para não falhar.',
  },
  'trafego-pago': {
    title: 'Tráfego Pago',
    description:
      'Campanhas em Google & Meta orientadas a leads, com testes e otimização contínua.',
  },
  'sistemas-solucoes': {
    title: 'Sistemas & Soluções',
    description:
      'Redes, cloud, M365/Workspace, segurança e suporte on-site/remoto.',
  },
  'automacao-integracoes': {
    title: 'Automação & Integrações',
    description:
      'Ligamos ferramentas, eliminamos tarefas repetitivas e criamos dashboards.',
  },
}

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }))
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services[params.slug]
  if (!service) return notFound()
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="font-heading text-3xl mb-4">{service.title}</h1>
      <p className="text-neutral-700 mb-8">{service.description}</p>
      <p className="text-neutral-500 text-sm">Conteúdo detalhado por adicionar.</p>
    </div>
  )
}
