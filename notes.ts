// Entity (User) <-> Repositórios <-> ORM <-> Banco de dados


// entities -> repositoriess -> services -> controllers
 

// entities -> vai referenciar as tabelas e colunas do banco de dados

// repositories -> vai conter os metodos para manipulação do banco de dados-> pega a nossa entidade e de fato se comunica com o banco de dados


// services ->  é onde fica as validações e regras de negócio e também chamam as funções de manipulação do banco.


//fluxo de trabalho
//-> server recebe a requisição que repassa pro controller, daí o controler chama o service
// -> server -> controller -> service -> ...