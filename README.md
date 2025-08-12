# Vuvo Hosting Website

Website corporativo em Next.js 14, TypeScript e Tailwind CSS.

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

## Build de produção

```bash
npm run build
```

## Variáveis de ambiente

Copiar `.env.example` para `.env.local` e preencher:

- `RESEND_API_KEY` – chave para envio de email
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` – domínio para Plausible
- `NEXT_PUBLIC_GA_ID` – ID do GA4 (opcional)
- `WHATSAPP_NUMBER` – número usado nos links de WhatsApp

## Deploy

Optimizado para Vercel (`npm run build` + `npm start`).

## Próximos passos

- Adicionar conteúdo real (casos, blog, FAQs)
- Integrar envio de email com Resend/Nodemailer
- Ajustar cores conforme identidade final
- Rever contactos e textos
