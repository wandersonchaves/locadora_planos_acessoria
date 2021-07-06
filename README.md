# Locadora

Modelo de web service para locadora desenvolvido em NodeJs e PostgreSQL usando Sequelize.

#Instalando o sistema
1) Faça o clone do projeto com git e instale as dependencias.
   ```
   git clone git@github.com:wandersonchaves/locadora_planos_acessoria.git locadora
   cd locadora
   npm install
   ```

1) Crie um banco de dados no Postgres.
   ```
   yarn sequelize db:create
   ```

2) Faça a geração das Migrations.
   ```
   yarn sequelize db:migrate
   ```

3) Atualize arquivo [database](./src/config/database.js) com usuário, senha, database da sua configuração do banco de dados.

# Inicie o Webservice

```
yarn dev
```

# Documentação da API locadora

## http://localhost:3333/users/1/movies
Método: GET. Listar filmes disponíveis.

#### RETORNO: Listagem de filmes disponíveis ou mensagem de alerta. json/objeto.

## http://localhost:3333/report
Método: GET. Pesquisar filmes.

__title:__ Pesquisa string no título do filme. String.

## http://localhost:3333/users/1/movies
Método: POST. Atualiza o estado do Filme para Alugado.

#### RETORNO: Mensagem de sucesso ou alerta. json/objeto.

## http://localhost:3333/auth
Método: POST. Faz o login de usuário no sistema.

__email:__ E-mail do usuário. Obrigatório.
__password:__ Palavra-chave do usuário.  Obrigatório.

#### RETORNO: Informações do Usuário ou mensagem de alerta. json/objeto.

## http://localhost:3333/users
Método: GET. Retorna as informações dos usuários cadastrados.

Não há termos para essa requisição.

#### RETORNO: Informações do Usuário ou mensagem de alerta. json/objeto.

## http://localhost:3333/users
Método: POST. Adiciona um novo usuário.

__name:__ Nome de exibição do usuário. Obrigatório.
__email:__ E-mail do novo usuário. Obrigatório.
__password:__ Palavra-chave do novo usuário. Obrigatório.

#### RETORNO: Messagem de sucesso ou alerta. json/objeto.


Desenvolvido por Wanderson Chaves. &copy; 2021