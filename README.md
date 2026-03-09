# QA Automation  – Rubeus

## 📌 Sobre o projeto

Este repositório contém a automação de testes desenvolvida como parte do teste prático para a vaga de QA.

O objetivo foi avaliar a qualidade funcional da página disponibilizada, identificar possíveis problemas e automatizar cenários críticos de uso utilizando testes end-to-end.

Página avaliada:
https://qualidade.apprbs.com.br/site

---

# 🎯 Estratégia de testes

A estratégia de testes foi definida com foco nas principais interações do usuário com a página, priorizando:

- funcionamento correto de links externos
- exibição de conteúdo relevante
- comportamento do formulário de cadastro
- regras de habilitação de ações do usuário

Os testes automatizados simulam o comportamento real de navegação do usuário.

---

# 🧰 Tecnologias utilizadas

- JavaScript
- Cypress
- Node.js
- Git
- GitHub

---

# 📂 Estrutura do projeto

QA-RUBEUS-TEST
 ├─ cypress
 │   ├─ e2e
 │   │   └─ rubeu.cy.js
 │   ├─ fixtures
 │   │   └─ example.json
 │   └─ support
 │       ├─ commands.js
 │       └─ e2e.js
 ├─ cypress.config.js
 └─ README.md

---

# ✅ Cenários automatizados

## 1. Validação de links externos

Verifica se os principais links da página direcionam corretamente para seus destinos e se são abertos em nova aba.

Links validados:

- Atendimento → WhatsApp Web  
- Eventos → página de cursos

Validações realizadas:

- presença do link
- URL correta
- abertura em nova aba (target="_blank")

---

## 2. Exibição da seção de eventos

Validação da exibição da seção **PRÓXIMOS EVENTOS**, garantindo que o conteúdo esteja visível para o usuário.

Também é validado se o evento listado possui link funcional para mais informações.

---

## 3. Estado inicial do formulário

Validação de que o botão **Concluir** inicia **desabilitado**, impedindo o envio de formulário incompleto.

---

## 4. Habilitação do botão após preenchimento

Após o preenchimento dos campos obrigatórios:

- Nome
- Email
- Telefone

O botão **Concluir** deve ser habilitado permitindo a continuidade do fluxo.

---

# 🐞 Bugs e melhorias identificadas

## 1. Validação limitada do formulário

O formulário habilita o botão **Concluir** apenas com preenchimento básico dos campos.

Sugestão:

- validar formato de email
- validar telefone
- mensagens claras de erro

---

## 2. Ausência de identificadores para automação

Alguns elementos não possuem identificadores específicos para testes.

Sugestão:

data-testid="form-submit"  
data-testid="proximos-eventos"

---

## 3. Consistência na navegação de links externos

Alguns links redirecionam diretamente para páginas externas sem indicação clara ao usuário.

Sugestão:

Padronizar comportamento de links externos para melhorar a experiência do usuário.

---

# ▶️ Como executar os testes

## Clonar o repositório

git clone https://github.com/anairenyb-rgb/qa-rubeus-test

---

## Instalar dependências

npm install

---

## Executar os testes

Modo interativo:

npx cypress open

Modo headless:

npx cypress run

---

# 📊 Cobertura atual dos testes

| Funcionalidade | Cobertura |
|---|---|
| Links externos | ✅ |
| Exibição de eventos | ✅ |
| Estado inicial do formulário | ✅ |
| Habilitação do botão | ✅ |

---

# 📌 Possíveis evoluções

- testes de regressão automatizados
- testes de responsividade
- testes de acessibilidade
- integração com CI/CD
- geração automática de relatórios

