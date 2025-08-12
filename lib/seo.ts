import { DefaultSeoProps } from 'next-seo'

export const defaultSeo: DefaultSeoProps = {
  titleTemplate: '%s | Vuvo Hosting',
  defaultTitle: 'Vuvo Hosting',
  description:
    'Websites rápidos, alojamento fiável, tráfego pago que converte e automação que poupa horas — tudo num só parceiro.',
  openGraph: {
    type: 'website',
    locale: 'pt_PT',
    url: 'https://www.vuvohosting.com',
    siteName: 'Vuvo Hosting',
  },
  twitter: {
    cardType: 'summary_large_image',
  },
}
