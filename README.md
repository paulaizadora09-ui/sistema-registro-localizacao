# Sistema de Registro de Localização Contratual

Aplicação web (sem instalação) para criar links individuais e registrar a localização de um cliente **somente após autorização explícita do navegador**.

## Stack
- Next.js 14 (App Router) + TypeScript
- Supabase (PostgreSQL + autenticação)
- Geolocation API do navegador
- Tailwind CSS

## O que esta versão entrega
- Login administrativo via Supabase Auth.
- Cadastro básico de clientes/contratos e criação de links individuais.
- Página pública por token.
- Solicitação transparente de permissão de localização.
- Registro de latitude, longitude, precisão, horário e user-agent.
- Histórico administrativo e visualização de coordenadas.
- Tokens aleatórios e expirados/consumidos conforme configuração.

## O que NÃO faz
- Não captura localização silenciosamente.
- Não comprova, por si só, identidade, presença física incontestável ou assinatura de contrato.
- Não envia WhatsApp automaticamente; o painel permite copiar o link para envio manual.
- Não está publicado na internet. É necessário configurar Supabase e hospedagem.

## 1. Pré-requisitos
- Node.js 20+
- Projeto Supabase
- Conta de hospedagem compatível com Next.js (ex.: Vercel)

## 2. Banco de dados
No SQL Editor do Supabase, execute `supabase/schema.sql`.

No Supabase:
1. Ative Email/Password em Authentication.
2. Crie o usuário administrador em Authentication > Users.
3. Copie Project URL e anon/public key.

## 3. Configuração
Copie `.env.example` para `.env.local` e preencha:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (somente servidor; nunca exponha no navegador)
- `NEXT_PUBLIC_APP_URL` (URL local ou domínio final)

## 4. Executar localmente
```bash
npm install
npm run dev
```
Abra http://localhost:3000 e entre com o usuário criado no Supabase.

## 5. Publicar
1. Envie o projeto para um repositório Git privado.
2. Importe o repositório na Vercel.
3. Configure as três variáveis de ambiente.
4. Publique e configure domínio/HTTPS.
5. Teste em celular real. Geolocalização exige contexto seguro (HTTPS; localhost é exceção).

## 6. Segurança antes de produção
- Configure política de privacidade e base legal com orientação jurídica.
- Defina prazo de retenção e processo de atendimento aos titulares.
- Restrinja criação de usuários administrativos.
- Configure MFA para administradores, se disponível.
- Faça revisão independente das políticas RLS e teste de segurança.
- Considere registrar eventos em serviço de log imutável e backups.
- Não inclua dados pessoais desnecessários no link.
- A página pública não exibe os dados do contrato; só identifica o registro por nome/descrição mínima.

## Observação importante
A precisão depende do dispositivo, navegador, permissões e condições ambientais. A localização é uma evidência técnica complementar, não uma assinatura eletrônica nem prova isolada de identidade.
