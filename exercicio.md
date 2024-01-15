# Exercício de aula 04 de React
## Questão 01 
### Objetivo:

#### Criar um formulário com os campos nome, email, telefone, cep e emprego utilizando o prevent default e useState com objeto tendo esses campos.

### Instruções:

### 1 - Crie um componente React chamado Formulário.
### 2 - Crie um estado inicial para o formulário com um objeto contendo os campos nome, email, telefone, cep e emprego.
### 3 - Crie um manipulador de eventos para o evento onSubmit do formulário.
### No manipulador de eventos onSubmit, chame o método preventDefault() para impedir o comportamento padrão de envio do formulário.
### 4 - Dentro do manipulador de eventos onSubmit, imprima os dados do formulário no console.
### 5 - Adicione os campos nome, email, telefone, cep e emprego ao formulário.
### 6 - Associe os campos do formulário aos respectivos estados do componente.
### 7 - Ao acionar o evento onSubmit um alert deve exibir o objeto com as chaves preenchidas com o valor dos campos.
#### *** PS - Não esqueça de fazer as validações dos campos. Ex: email deve conter @.

## Questão 02 

### Objetivo:

#### Criar um componente React que permita ao usuário mudar de tema escuro para tema claro, salvando isso no Local Storage.

### Instruções:

### 1 - Crie um componente React chamado Tema.
### 2 - Crie um estado inicial para o tema com o valor "escuro".
### 3 - Use o useEffect() para carregar o valor do tema do Local Storage.
### 4 - No useEffect(), se o valor do tema estiver definido no Local Storage, atribua-o ao estado do componente.
### 5 - Altere o estado do tema para "claro" ou "escuro", dependendo do valor atual do estado.
### 6 - Salve o estado do tema no Local Storage.
### 7 - Adicione um botão ao componente com o texto "Mudar de tema".
### 8 - Associe o botão ao manipulador de eventos onClick.


## Questão 03 

## Objetivo:

### Criar um componente que verifique se o usuário está logado ou não e renderiza uma tela de login se não estiver logado e uma tela com suas informações se logado com um botão de logout 

O comportamento do app deve seguir o padrão 
link: https://exemplo-react-aula-04.vercel.app/

### 1 - Crie um componente FormLogin e insira dentro componente Public Content
### 2 - Passe como props o método setIsAuth no componente FormLogin
### 3 - Crie os campos de input email e password no formulário de login
### 4 - Crie um estado useLogin com objeto conforme imagem:
``` javascript 
 const [ userLogin, setUserLogin] = useState({email:"", password:""})
```
### 5 - Crie um método handleSubmit e trate o comportamento padrão do formulário de modo que o login só ocorra se o botão for clicado.

### 6 - Crie um método handleUserInfoChange para tratar as mudanças nos campos do input e atualizar os valores nas chaves do objeto do estado userLogin

### 7 - importe da pasta utils o método loginEmulate e passe como argumento o userLogin. Esse método emula o login do usuário e retorna um objeto com avatar e name do usuário logado. Guarde o usuário retornado pelo método loginEmulate num estado user que deve estar no App.jsx e mude o estado isAuth para verdadeiro.
### 7.1- O email e senha para o loginEmulate são respectivamente fulano@gmail.com e 123456. Trate essas infromações para caso o usuário erre algo, seja informado através de alert.

### 8-  No componente Header receba as informações do usuário logado e exiba o avatar e complete a frase olá, ...
### 9 - No Componente PrivateContent insira a lógica para logout do usuário 
### 10 - No App.jsx insira o useEffect para controlar os efeitos colaterais dos efeitos e garantir que a persistência seja feita no login do usuário 
