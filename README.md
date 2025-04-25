
# GitHub Profile Cards

Este projeto permite que o usuário visualize o perfil de um usuário do GitHub de duas formas diferentes: uma utilizando **Styled-Components** e outra utilizando **Tailwind CSS**. O usuário pode escolher qual estilo prefere visualizar.

## Requisitos

Antes de rodar a aplicação, é necessário ter o seguinte instalado na sua máquina:

- **Node.js** (versão 14 ou superior)
- **npm** (gerenciador de pacotes do Node)

Se ainda não tiver o **Node.js** instalado, você pode baixar [aqui](https://nodejs.org/).

## Passos para Execução

### 1. Clonando o Repositório

Primeiro, clone o repositório para o seu computador:

```bash
git clone https://github.com/seu-usuario/github-profile-cards.git
```

### 2. Instalando Dependências

Navegue até a pasta do projeto e instale as dependências:

```bash
cd github-profile-cards
npm install
```

Isso irá instalar todas as bibliotecas necessárias para o projeto, incluindo `react`, `react-router-dom`, `styled-components`, `tailwindcss`, e outras dependências.

### 3. Configurando o Tailwind CSS

O projeto já possui a configuração básica do Tailwind CSS. Caso precise reconfigurar ou garantir que o Tailwind está funcionando corretamente, siga os passos abaixo:

#### 3.1. Criação do arquivo `tailwind.config.js`:

Execute o seguinte comando para criar o arquivo de configuração do Tailwind CSS:

```bash
npx tailwindcss init
```

#### 3.2. Verificando a configuração do `postcss.config.js`:

O arquivo `postcss.config.js` deve estar configurado da seguinte maneira:

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### 4. Rodando a Aplicação

Com as dependências instaladas e o Tailwind configurado, agora você pode rodar a aplicação localmente. Execute o seguinte comando:

```bash
npm start
```

Isso iniciará o servidor de desenvolvimento e abrirá a aplicação no seu navegador padrão. A URL será algo como `http://localhost:3000/`.

### 5. Acessando a Aplicação

Quando você acessar a aplicação, você verá dois links para escolher entre os estilos:

- **Estilo Styled**: Apresenta a interface utilizando Styled-Components.
- **Estilo Tailwind**: Apresenta a interface utilizando Tailwind CSS.

Você pode alternar entre essas duas opções clicando nos links.

### 6. Modificando o Código

Para alterar o comportamento ou a aparência da aplicação, edite os seguintes arquivos:

- `App.js`: Onde a navegação entre as rotas (`/styled` e `/tailwind`) é gerenciada.
- `ProfileStyled.js`: Componente que usa **Styled-Components** para exibir o perfil do GitHub.
- `ProfileTailwind.js`: Componente que usa **Tailwind CSS** para exibir o perfil do GitHub.
- `index.css`: Arquivo global do Tailwind CSS.

### 7. Desinstalando Dependências

Se você não precisar mais do projeto, pode deletar a pasta do repositório, mas antes, pode desinstalar as dependências com o comando:

```bash
npm uninstall
```

### 8. Problemas Comuns

- Se ao rodar o `npm start` ocorrer um erro dizendo que algum pacote está faltando, execute:

```bash
npm install
```

- Se o Tailwind não estiver funcionando corretamente, verifique se o arquivo `tailwind.config.js` foi gerado corretamente e se a configuração do `postcss.config.js` está conforme o esperado.


## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
