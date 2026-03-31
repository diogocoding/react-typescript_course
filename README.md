# 🚀 React Fundamentals: Projeto Calculadora

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
</div>

---

Este repositório contém uma série de exercícios práticos focados nos fundamentos do **React.js**, desenvolvidos durante minha jornada de especialização. O projeto central e mais robusto deste diretório é a **Calculadora Funcional**, que aplica conceitos avançados de estado, efeitos e contextos.

---

## 🧮 A Calculadora
Uma aplicação de calculadora moderna, construída de forma declarativa, com suporte a operações matemáticas básicas, tratamento de decimais e histórico persistente.

### 📸 Preview do Projeto
> ![Image](https://github.com/user-attachments/assets/b2244355-6519-4af2-9ac4-5fbfb7bf2fa5)
> ![Image](https://github.com/user-attachments/assets/89a86664-a799-43f4-a301-23aa71fa4c88)

---

### 🛠️ Tecnologias e Conceitos Aplicados

O projeto foi estruturado utilizando **React 18** via CDN (Babel) para focar na lógica de componentes:

* **Hooks Customizados (`useCalculator`)**: Isolamento da lógica de negócio (cálculos, entrada de dados e limpeza) da interface.
* **Context API (`CalculatorContext`)**: Gerenciamento global do histórico de operações, permitindo que diferentes componentes acessem os dados sem *prop drilling*.
* **Persistência (LocalStorage)**: Uso de `useEffect` para salvar e recuperar o histórico de cálculos mesmo após atualizar a página.
* **Componentes Polimórficos**: Criação de componentes flexíveis como `<Text />` e `<Button />` que aceitam diferentes tags HTML e variantes de estilo.
* **Tailwind CSS 4**: Estilização utilitária avançada com uso de variáveis de tema e gradientes lineares.

---

### 📂 Estrutura do Repositório

Embora o foco seja a calculadora, este repositório documenta a evolução do aprendizado:

1.  **`0-modelo.html`**: Estrutura base com React/Tailwind.
2.  **`1-helloworldreact.html`**: Primeiros passos com JSX.
3.  **`2-componentes.html`**: Criação de interfaces modulares.
4.  **`3-propriedades.html`**: Passagem de dados entre componentes.
5.  **`4-calculadora.html`**: **[PROJETO PRINCIPAL]** Implementação completa da calculadora.
6.  **`6-estados.html` / `9-filtros.html`**: Exercícios de reatividade e manipulação de listas.

---

## 🚀 Como Executar

Como o projeto utiliza carregamento via CDN, não é necessário instalar dependências:

1. Clone o repositório:
   ```bash
   git clone [https://github.com/diogocoding/react-typescript_course.git](https://github.com/diogocoding/react-typescript_course.git)
   ```
2. Acesse a pasta do projeto
3. Abra o arquivo no navegador


  ---
   <table align="center">
<tr>
<td align="center">
<a href="https://www.google.com/search?q=https://github.com/diogocoding">
<img src="https://i.postimg.cc/434ZmpVy/55_81_9203-7794_20250312_090548.jpg" width="120px;" alt="Diogo Nascimento da Silva"/>
<br />
<sub><b>Diogo Nascimento da Silva</b></sub>
</a>
</td>
<td>
<b>Full-Stack Developer</b><br />
🎓 Estudante de Análise e Desenvolvimento de Sistemas na Faculdade SENAC.<br />
📍 Recife, Pernambuco.<br /><br />
<a href="mailto:diogocoding@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" /></a>
<a href="https://www.google.com/search?q=https://www.linkedin.com/in/diogonascimento-valehir/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a>
</td>
</tr>
</table>
