
# 💰 Finwise - Gestão Financeira Pessoal

Finwise é uma aplicação web moderna para **controle de finanças pessoais**, criada com Next.js. Ajude-se a organizar **receitas**, **despesas**, categorias e relatórios de forma simples, bonita e eficiente.

## ✨ Principais funcionalidades
- Registro de transações (entradas e saídas)
- Categorização inteligente de gastos
- Visão geral com resumo mensal e gráfico simples
- Interface limpa, moderna e 100% responsiva
- Suporte completo a TypeScript
- Arquitetura escalável e organizada

## 🛠️ Tecnologias utilizadas
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white) ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

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
```

Abra http://localhost:3000 no navegador.

**Dica:** edite `app/page.tsx` (ou a página principal do dashboard) e veja a atualização automática.

## 🌐 Deploy

https://finwise-site-remake.vercel.app/


## 📂 Estrutura principal do projeto

```
app/
├── (auth)/             # login, registro, recuperação de senha
├── (dashboard)/        # páginas protegidas
├── api/                # rotas de API
components/
├── ui/                 # componentes shadcn/ui ou custom
├── layout/             # Header, Sidebar, etc.
lib/                    # utils, db config, schemas
public/
```

## 📄 Licença

MIT © Luiz

Feito com ❤️ para ajudar na organização financeira pessoal

Dúvidas, sugestões ou bugs? Abra uma **issue**!


