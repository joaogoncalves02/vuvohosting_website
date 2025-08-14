# NABO: NOS Accounts Back Office

Aplicação Next.js com autenticação básica e proxy para contas.

## Como rodar

```bash
npm install
npm run dev
```

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e ajuste conforme necessário.

```env
BASIC_AUTH_USER=admin
BASIC_AUTH_PASS=admin
EXTERNAL_API_BASE_URL=https://api.exemplo.com
```

- `BASIC_AUTH_USER` / `BASIC_AUTH_PASS`: credenciais para Basic Auth.
- `EXTERNAL_API_BASE_URL`: endpoint da API externa utilizada no proxy.

## Credenciais e endpoint

Para alterar as credenciais ou o endpoint externo, edite o arquivo `.env.local` com os valores desejados.
