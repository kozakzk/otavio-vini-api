# 🛒 Loja Virtual FullStack

Projeto Web FullStack de uma loja virtual no estilo Pichau, permitindo que usuários se cadastrem, façam login e naveguem pelos produtos disponíveis na plataforma.

O projeto é dividido em Front-end e Back-end, seguindo boas práticas de arquitetura, organização e documentação.

---

## 🚀 Tecnologias Utilizadas

### 🔹 Front-end

- React
- JavaScript / TypeScript
- Consumo de API REST

### 🔹 Back-end

- NestJS
- Node.js v24.13.0 (LTS)
- Prisma ORM
- OpenAPI / Swagger para documentação automática
- Arquitetura modular baseada em resources

---

## 🏗️ Arquitetura do Back-end

O Back-end segue a arquitetura padrão do NestJS, organizada por recursos (resources):

src/
├── auth/
├── users/
├── products/
├── prisma/
└── main.ts

### 📦 Resources disponíveis

- Auth → Autenticação e autorização de usuários
- Users → Gerenciamento de usuários
- Products → Cadastro e listagem de produtos

---

## 📚 Documentação da API

A API é documentada automaticamente utilizando Swagger (OpenAPI).

Após iniciar o servidor, a documentação estará disponível em:

<http://localhost:3000/reference>

---

## 🧩 ORM e Banco de Dados

- Prisma é utilizado como ORM padrão
- Facilita a modelagem do banco, migrações e queries tipadas
- Integração direta com o NestJS

---

## ⚙️ Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- Node.js v24.13.0 (LTS)
- npm ou yarn
- Banco de dados compatível com Prisma (ex: PostgreSQL, MySQL ou SQLite)

---

## ▶️ Como rodar o projeto

### 🔹 Back-end

Instalar dependências:
npm install

Rodar as migrations:
npx prisma migrate dev

Iniciar o servidor:
npm run start:dev

---

### 🔹 Front-end

Instalar dependências:
npm install

Iniciar aplicação:
npm start

---

## 🔐 Funcionalidades

- Cadastro de usuários
- Autenticação (login)
- Listagem de produtos
- Navegação pela loja
- API documentada via Swagger

---

## 📌 Observações

- O projeto utiliza a versão LTS mais recente do Node.js
- Estrutura pensada para fácil escalabilidade
- Ideal para estudos de FullStack, NestJS, React e Prisma

---

## 📄 Licença

Este projeto é apenas para fins educacionais.

