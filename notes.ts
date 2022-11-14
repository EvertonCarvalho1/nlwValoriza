// Entity (User) <-> Repositórios <-> ORM <-> Banco de dados
// Repositórios -< vai conter os metodos para manipulação do banco de dados

// Services é onde fica as validações e regras de negócio

//fluxo de trabalho
//-> server recebe a requisição que repassa pro controller, daí o controler chama o service
// -> server -> controller -> service -> ...