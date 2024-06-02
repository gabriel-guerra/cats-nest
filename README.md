# Configurar um módulo Nest

### Fazer 1 vez para todo o projeto
1. Na module do app principal, configurar a conexão com o banco de dados
2. Na função main, configurar o validation pipe

### Em um novo módulo do projeto
3. Criar o projeto utilizando o `nest new`
4. Criar uma pasta para o módulo, dentro da SRC
5. Criar uma pasta de schema ou entity
6. Dentro dessa pasta, mapear as entidades
   - Aqui já será usada a referência do banco, que precisa ser configurada na src do projeto
7. Criar a Controller
   - Try Catch nos métodos de acesso ao banco
8. Criar a Service
9. Criar as DTOs
   - Criar as anotações dos validations pipes nos DTOs
10. Criar a module
11. Criar os middlewares
12. Referenciar os middlewares na module
13. Importar a module do módulo na module do app principal
