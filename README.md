<div align="center">

# Personal Trainer Landing Page

### Rachel Stone — Personal Trainer

_Uma landing page moderna e responsável para personal trainer, construída com as melhores práticas de desenvolvimento front-end_

#### [Link da demo](https://rachelstone-landing-page.vercel.app/)

---

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

</div>

---

## 📐 Design

Este projeto foi desenvolvido a partir de um design profissional criado no Figma:

**[Dject Studio](https://djectstudio.com/)** — [Link do Design](https://www.figma.com/files/team/1532822844989911340/resources/community/file/1569006333493544411/personal-fitness-trainer-template-free?fuid=1532822842025095530)

## ✨ Sobre o Projeto

**Personal Trainer Landing Page** é uma landing page completa para personal trainer com foco em:

- **Performance**: Next.js 16 com App Router e React Server Components
- **Internacionalização**: `next-intl` com suporte a múltiplos idiomas
- **SEO**: Metadata e OpenGraph dinâmicos por locale
- **UI/UX**: Design system com Tailwind CSS 4, shadcn/ui e Radix UI
- **Tema**: Suporte a modo claro e escuro via `next-themes`

## 🛠️ Stack

Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · shadcn/ui · next-intl · General Sans

## 📄 Seções

- **Hero** — Apresentação principal com imagem de destaque
- **Stats** — Números e conquistas
- **About** — Quem é a personal trainer
- **Services** — Serviços oferecidos
- **How it Works** — Passo a passo do processo
- **Programs** — Planos e programas disponíveis
- **Results** — Resultados de clientes
- **FAQ** — Perguntas frequentes
- **Contact** — Formulário de contato

## 🏗️ Arquitetura

```
src/
├── app/[locale]/          # Rotas internacionalizadas
│   ├── layout.tsx         # Layout root + metadata
│   ├── globals.css        # Design tokens CSS
│   └── (home)/
│       ├── page.tsx       # Página principal
│       └── components/    # Seções da landing page
├── components/            # Componentes reutilizáveis globais
│   ├── layout/            # NavigationBar, Footer
│   ├── common/            # Componentes compartilhados
│   └── ui/                # shadcn/ui components
├── assets/                # Imagens e fontes locais
├── constants/             # Dados estáticos
├── i18n/                  # Configuração next-intl
├── lib/                   # Utilitários
└── types/                 # TypeScript definitions
```

## 🚀 Getting Started

### Pré-requisitos

- Node.js 20+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/gustavoppdev/personal-trainer-landing-page.git

# Entre no diretório
cd personal-trainer-landing-page

# Instale as dependências
npm install
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 📄 Licença

Este projeto é open source e está disponível sob a [MIT License](LICENSE).

---

## 👨‍💻 Autor

**Gustavo Henrique**

Desenvolvedor Front-end especializado em React, Next.js e arquiteturas modernas. Este projeto demonstra habilidades em:

- Arquitetura de aplicações escaláveis
- Performance e otimizações
- Design systems e componentização
- Type safety e qualidade de código
- SEO e acessibilidade
- Internacionalização

---

<div align="center">

**[⬆ Voltar ao topo](#personal-trainer-landing-page)**

Feito com ❤️ e TypeScript

</div>
