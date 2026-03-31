# 🚀 React Fundamentals: Projeto Calculadora

Este repositório contém uma série de exercícios práticos focados nos fundamentos do **React.js**, desenvolvidos durante minha jornada de especialização. O projeto central e mais robusto deste diretório é a **Calculadora Funcional**, que aplica conceitos avançados de estado, efeitos e contextos.

---

## 🧮 A Calculadora
Uma aplicação de calculadora moderna, construída de forma declarativa, com suporte a operações matemáticas básicas, tratamento de decimais e histórico persistente.

### 📸 Preview do Projeto
> [!IMPORTANT]
> Insira aqui o print principal da calculadora aberta no navegador.
> 
> ![Screenshot da Calculadora](CAMINHO_DA_SUA_IMAGEM_AQUI)

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

### 💻 Detalhes do Código (VS Code)
> [!TIP]
> Espaço para colocar o print do seu ambiente de desenvolvimento ou do terminal realizando o push.
> 
> ![Estrutura de Código no VS Code](CAMINHO_DA_SUA_IMAGEM_AQUI)

---

## 🚀 Como Executar

Como o projeto utiliza carregamento via CDN, não é necessário instalar dependências:

1. Clone o repositório:
   ```bash
   git clone [https://github.com/diogocoding/react-typescript_course.git](https://github.com/diogocoding/react-typescript_course.git)