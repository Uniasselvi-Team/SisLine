# 🩺 SisLine

> **Sistema de Gestão para Consultórios Médicos**  
Desenvolvido por **Gabriel Gonçalves** e **Antonio Neto** para a disciplina **Experiência Profissional: Análise e Projeto de Desenvolvimento de Sistemas** do curso de **Sistemas de Informação** (4º período, Uniasselvi).

🚧 **Status:** Em desenvolvimento  
📅 **Planejamento:** Expansão contínua até alcançar a versão final.  

---

## ✨ Sobre o Projeto

O **SisLine** é um sistema web projetado para consultórios médicos, oferecendo ferramentas para médicos gerenciarem suas atividades de forma eficiente. O objetivo do projeto é aplicar as habilidades aprendidas em sala de aula de uma forma ativa e prática.

---

## 🛠️ Funcionalidades Atuais

✅ **Login e Registro de Usuários:**  
- Permite criar contas e fazer login no sistema.  
- Apenas usuários aprovados pela administração têm acesso completo.  

✅ **Páginas de Status Pós-Login:**  
- Usuários recebem feedback caso estejam aprovados ou não.

✅ **Página 404:**  
- Exibe uma mensagem personalizada para URLs inexistentes.  

---

## 📌 Funcionalidades Futuras

🔄 Estamos planejando incluir:  
- 📅 **Agendamento e Cancelamento de Consultas.**  
- 🩻 **Gerenciamento de Prontuários e Exames.**  
- 🔐 **Controle de Acessos e Permissões Administrativas.**  
- 🏥 **Painel para Visualização de Atividades do Consultório.**  

---

## 🧰 Tecnologias Utilizadas

| Tecnologia               | Descrição                                      |
|--------------------------|----------------------------------------------|
| **Node.js**              | Plataforma para execução do backend.         |
| **Express.js**           | Framework para rotas e middlewares.          |
| **Sequelize**            | ORM para manipulação do banco de dados.      |
| **bcryptjs**             | Hashing de senhas para segurança.            |
| **express-handlebars**   | Template engine para geração de views.       |
| **connect-flash**        | Exibição de mensagens temporárias.           |
| **SQL Server**           | Banco de dados para persistência de dados.   |

---

## 📂 Estrutura do Projeto
📦 SisLine e projetado com arquitetura MVC
├── 📁 controller       # Lógica das rotas principais
├── 📁 db               # Conexão com banco de dados
├── 📁 models           # Estrutura das tabelas do banco de dados
├── 📁 public           # Arquivos estáticos (CSS, imagens, JS)
├── 📁 routes           # Definição de link e ligação com controllers
├── 📁 views            # Templates Handlebars
├── 📄 index.js         # Arquivo principal
└── 📄 README.md        # Documentação do projeto