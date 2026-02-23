# 💰 Finwise - Gestão Financeira Pessoal

Finwise é uma aplicação web moderna para **controle de finanças pessoais**, criada com Next.js.  
Ajude-se a organizar **receitas**, **despesas**, categorias e relatórios de forma simples, bonita e eficiente.

<p align="center">
  <a href="https://finwise.vercel.app" target="_blank">
    <img src="https://img.shields.io/badge/Abrir%20o%20site%20demo-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Abrir demo">
  </a>
  &nbsp;&nbsp;
  <a href="https://vercel.com/new/clone?repository-url=https://github.com/SEU_USUARIO/finwise">
    <img src="https://vercel.com/button" alt="Deploy com Vercel">
  </a>
</p>

## ✨ Principais funcionalidades

- Registro de transações (entradas e saídas)
- Categorização inteligente de gastos
- Visão geral com resumo mensal e gráfico simples
- Interface limpa, moderna e 100% responsiva
- Suporte completo a TypeScript
- Arquitetura escalável e organizada

## 🛠️ Tecnologias utilizadas

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

(Outras: zod, date-fns, react-hook-form, lucide-react, etc — veja o `package.json`)

## 🚀 Como rodar o projeto localmente

### Pré-requisitos

- Node.js 18 ou superior

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/SEU_USUARIO/finwise.git
cd finwise

# 2. Instale as dependências
npm install
# ou yarn install
# ou pnpm install
# ou bun install

# 3. Inicie o servidor de desenvolvimento
npm run dev
# ou yarn dev
# ou pnpm dev
# ou bun dev
Abra http://localhost:3000 no navegador.
Dica: edite app/page.tsx (ou a página principal do dashboard) e veja a atualização automática.
🌐 Abrir o site / Demo

Versão online (demo):https://finwise.vercel.app
(substitua pelo link real do seu deploy quando subir para Vercel, Netlify, etc.)
Quer testar rápido? Clique no botão abaixo para fazer deploy automático na Vercel:

<img src="https://vercel.com/button" alt="Deploy with Vercel">
📂 Estrutura principal do projeto
textapp/
├── (auth)/             # login, registro, recuperação de senha
├── (dashboard)/        # páginas protegidas
├── api/                # rotas de API
components/
├── ui/                 # componentes shadcn/ui ou custom
├── layout/             # Header, Sidebar, etc.
lib/                    # utils, db config, schemas
public/
📄 Licença
MIT © Luiz
Feito com ❤️ para ajudar na organização financeira pessoal
Dúvidas, sugestões ou bugs? Abra uma issue!
textÉ só substituir `SEU_USUARIO` pelo seu nome de usuário do GitHub e, quando tiver o deploy pronto, trocar o link da demo.

Se quiser salvar isso em um arquivo .txt para referência, é só copiar tudo acima (incluindo as linhas de código) e colar em um arquivo chamado, por exemplo, `finwise-readme-final.txt`.

Boa sorte com o Finwise! 🚀
