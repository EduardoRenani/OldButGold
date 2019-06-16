# OldButGold
Trabalho Final de Engenharia de Software

 Universidade Federal do Rio Grande do Sul
Instituto de Informática Departamento de Informática Aplicada INF01127 – Engenharia de Software N
Trabalho Prático - Entrega II Documentação Complementar
Mateus Davi Simon Ricardo de Araujo Coelho
Porto Alegre, 13 de Maio de 2019.

 VISÃO
Descrição do Problema
A Old But Gold possui uma vasta coleção de filmes com diversas informações que devem ser armazenadas, tanto em relação aos filmes quanto ao registro de trocas e doações. Até o momento as informações de seus produtos e transações eram realizados manualmente com caneta e papel e consultas ao catálogo pelos clientes eram feitas em revistas. Para agilizar as transações como também facilitar o acesso às informações (tanto por clientes quanto funcionários) os proprietários desejam criar um sistema digital para gerenciar estes processos.
Visão Geral do Sistema
O sistema a ser desenvolvido deve possibilitar a administração dos itens da coleção, guardando qualquer informação relevante para sua descrição, como também registrar qualquer operação feita sobre eles, como trocas e doações. Como estas informações serão manipuladas por funcionários da empresa, informação acerca destes também devem fazer parte do sistema, para fins de permissão de acesso ao sistema. Os clientes também devem ter acesso ao sistema, porém restrito apenas a consulta do catálogo.
Envolvidos
Usuários: utilizam o sistema para o acesso ao catálogo de filmes. Também dependem indiretamente para registro de trocas, doações e cadastro.
Funcionários: serão os principais utilizadores diretos do sistema, registrando operações no catálogo como também cadastro de usuários.
Gerentes: interagirão com o sistema administrando os funcionários. Proprietários: dependem do sistema para o sucesso da empresa.
Ambiente
Os usuários utilizarão o sistema através do tótem localizado no ambiente físico da loja, ou a partir de casa através do seu computador pessoal. Já funcionários e gerentes utilizarão em terminais no guichê de atendimento.

 Casos de Uso
DEFINIÇÕES
Gerente: ​Administra os funcionários, principal casos de uso é o cadastro de funcionários Funcionário: ​Executa as tarefas centrais do negócio, tem acesso a maioria dos casos de uso.
Usuário: ​É o cliente do negócio. Seu único caso de uso é a pesquisa no catálogo de filmes Produto: ​É um filme com todas as informações relacionadas a ele.
Item: ​É um exemplar do produto, com informações extras, como localização e tipo. CASOS DE USO - FORMATO PRELIMINAR
 Ator(es)
    Caso de uso
     Objetivo
     Prioridade
    Cenário de sucesso principal
     Gerente
 Cadastro de Funcionário
 Cadastrar funcionários para poderem ter acesso as funcionalidades do sistema.
 Essencial
 O gerente faz login no sistema com o objetivo de cadastrar um novo funcionário. O sistema solicita identificador, nome, senha, data de nascimento, endereço, sexo, função. O sistema cria um registro para o funcionário.
 Funcionário
    Login de Funcionário/Ger ente
     Autenticação para utilizar algumas funcionalidades do sistema.
     Essencial
    Um funcionário ou gerente acessa o sistema para utilizar alguma funcionalidade. O sistema exige o login, pedindo identificador e senha. As informações
 
                    são validadas pelo sistema. O sistema libera o acesso às funcionalidades para o gerente/funcio- nário.
     Funcionário
    Cadastro de Usuário
    Cadastrar usuários para que possam realizar trocas e doações.
    Essencial
   O funcionário faz login no sistema com o objetivo de cadastrar um novo usuário. O sistema solicita nome, identificador, data de nascimento, endereço, número da identidade. O sistema cria um registro para o usuário.
    Funcionário
 Cadastro de Produto
 Cadastrar produtos para que seus dados possam ser utilizados nas funcionalidades do sistema.
 Essencial
 O funcionário faz login no sistema com o objetivo de cadastrar um novo produto. O sistema solicita nome, ano de lançamento, diretor, gênero, duração, atores, sinopse e classificação etária do produto. O sistema cria um registro para o produto.
 Funcionário
    Cadastro de Item
     Cadastrar itens referentes a um produto para que essa informação
     Essencial
    O funcionário faz login no sistema com o objetivo de cadastrar um
 
           possa ser utilizada pelas funcionalidades do sistema.
         novo item referente a um produto. O sistema solicita nome do produto, o tipo de mídia e a localização do item. O sistema adiciona um novo item ao inventário.
     Funcionário
    Registro de Doação
    Registrar doações de item pelo usuário.
    Essencial
   O funcionário faz login no sistema com o objetivo de registrar uma doação. O sistema pede o usuário, produto e tipo de mídia. O sistema adiciona um novo item ao inventário. O sistema registra a doação no histórico do usuário.
    Funcionário
   Registro de Troca
   Registrar as operações de troca feitas pelo usuário.
   Essencial
  O funcionário faz login no sistema com o objetivo de registrar uma doação. O sistema pede o usuário, ítem entregue, produto recebido, tipo de mídia do produto recebido. O sistema adiciona um novo item ao inventário. O sistema remove
 
                    o item entregue do inventário. A troca é registrada no histórico do usuário.
     Usuário/Funcio nário
 Consulta a Catálogo
 Consultar o acervo dos itens do estabeleciment o.
 Essencial
 O usuário/fun- cionário informa os critérios de busca. O sistema exibe os itens que se enquadram nos critérios informados. O usuário/funcio- nário seleciona um item. O sistema exibe informações do item selecionado.
     Gerente
    Alterar dados de Funcionário
    Alterar dados de um funcionário pelo gerente.
    Importante
   O gerente faz login no sistema com o objetivo de alterar os dados do cadastro de um funcionário. O sistema pede o nome/identifica- dor do funcionário. O sistema exibe os campos editáveis do funcionário. O sistema salva as alterações.
 Funcionário
    Alterar dados do usuário
     Alterar os dados contidos no cadastro de um usuário.
     Importante
    O funcionário faz login no sistema com o objetivo de alterar os dados do cadastro de um usuário. O
 
                    sistema pede o nome/identifica- dor do usuário. O sistema exibe os campos editáveis do usuário. O sistema salva as alterações.
     Funcionário
 Alterar dados do produto
 Alterar dados de um produto cadastrado.
 Importante
 O funcionário faz login no sistema com o objetivo de alterar os dados de um produto. O sistema pede o nome do produto. O sistema exibe os campos editáveis do produto. O sistema salva as alterações.
     Funcionário
     Alterar dados do item
     Alterar dados de um item cadastrado.
     Importante
    O funcionário faz login no sistema com o objetivo de alterar os dados de um item. O sistema pede o item a ser alterado. O sistema exibe os campos editáveis do item. O sistema salva as alterações.
 CASOS DE USO - DESCRIÇÃO EXPANDIDA
Identificador: UC01
Caso de Uso: ​Cadastro de Funcionário Ator: ​Gerente
Prioridade: ​Essencial

 Pré-Requisitos: ​O gerente deve estar cadastrado no sistema e estar logado. Pós-Condição: ​Um novo funcionário foi cadastrado no sistema.
Sequência típica de eventos:
1 - O caso de uso inicia quando o gerente informa os dados do funcionário (identificador, nome, senha, data de nascimento, endereço, sexo, função)
2 - O sistema armazena as informações.
Fluxo alternativo:
2a - Funcionário já registrado
2a.1 - O sistema cancela a operação e informa o erro.
Requisitos não funcionais:
Identificador: UC02
Caso de Uso: ​Login de Funcionário/Gerente
Ator: ​Funcionário, Gerente
Prioridade: ​Essencial
Pré-Requisitos: ​O ator deve estar cadastrado no sistema. Pós-Condição: ​O ator está logado no sistema. Sequência típica de eventos:
1 - O ator informa seu identificador e senha.
2 - O sistema valida as informações e efetua o login. Fluxo alternativo:
2a - Identificador e senha não conferem
2a.1 - O sistema cancela a operação e informa o erro.
Requisitos não funcionais:
Identificador: UC03
Caso de Uso: ​Cadastro de Usuário
Ator: ​Funcionário
Prioridade: ​Essencial
Pré-Requisitos: ​O funcionário deve estar cadastrado no sistema e estar logado. Pós-Condição: ​Um novo usuário está registrado no sistema.
Sequência típica de eventos:
1 - O funcionário informa os dados do novo cliente (nome, identificador, data de nascimento, endereço, número da identidade)
2 - O sistema armazena as informações.
Fluxo alternativo:
2a - Usuário já registrado
2a.1 - O sistema cancela a operação e informa o erro.
Requisitos não funcionais:
Identificador: UC04
Caso de Uso: ​Cadastro de Produto
Ator: ​Funcionário
Prioridade: ​Essencial
Pré-Requisitos: ​O funcionário deve estar cadastrado no sistema e estar logado.

 Pós-Condição: ​Um novo produto está registrado no sistema.
Sequência típica de eventos:
1 - O funcionário informa dados do novo produto (Nome, ano de lançamento, diretor, gênero, duração, atores, sinopse, classificação etária)
2 - O sistema armazena as informações.
Fluxo alternativo:
2a - Produto já registrado
2a.1 - O sistema cancela a operação e informa o erro.
Requisitos não funcionais:
Identificador: UC05
Caso de Uso: ​Cadastro de Item
Ator: ​Funcionário
Prioridade: ​Essencial
Pré-Requisitos: ​O funcionário deve estar cadastrado no sistema e estar logado. Pós-Condição: ​Um novo exemplar de um produto está registrado no sistema. Sequência típica de eventos:
1 - O funcionário informa dados do novo item (produto, tipo de mídia e localização) 2 - O sistema armazena as informações.
Fluxo alternativo:
1a - O produto recebido não é cadastrado
1b.1 O funcionário cadastra o produto
Requisitos não funcionais:
Identificador: UC06
Caso de Uso: ​Registro de Doação
Ator: ​Funcionário
Prioridade: ​Essencial
Pré-Requisitos: ​O funcionário deve estar cadastrado no sistema e estar logado. Pós-Condição: ​O usuário entrega a doação e o sistema registra um novo item no inventário Sequência típica de eventos:
1 - O funcionário informa os dados da doação (usuário, produto, tipo de mídia)
2 - O sistema adiciona um novo item ao inventário
3 - A doação é registrado no histórico do usuário
Fluxo alternativo:
1a - O usuário não é cadastrado
1a.1 O funcionário cadastra o usuário 1b - O produto não é cadastrado
1b.1 O funcionário cadastra o produto
Requisitos não funcionais:
Identificador: UC07
Caso de Uso: ​Registro de Troca Ator: ​Funcionário
Prioridade: ​Essencial

 Pré-Requisitos: ​O funcionário deve estar cadastrado no sistema e estar logado. Pós-Condição: ​Os produtos são trocados e a troca é registrada no sistema.
Sequência típica de eventos:
1 - O funcionário informa os dados da troca (usuário, ítem entregue, produto recebido, tipo de mídia do produto recebido)
2 - O sistema adiciona um novo item ao inventário 3 - O sistema remove o item entregue do inventário 4 - A troca é registrada no histórico do usuário Fluxo alternativo:
1a - O usuário não é cadastrado
1a.1 O funcionário cadastra o usuário 1b - O produto recebido não é cadastrado
1b.1 O funcionário cadastra o produto
Requisitos não funcionais:
Identificador: UC08
Caso de Uso: ​Consulta a Catálogo
Ator: ​Usuário/Funcionário
Prioridade: ​Essencial
Pré-Requisitos:
Pós-Condição:
Sequência típica de eventos:
1 - O ator informa os critérios de busca
2 - O sistema exibe os itens que se enquadram nos critérios informados
3 - O ator seleciona um item
4 - O sistema exibe informações do item selecionado (itens disponíveis (com seu tipo e localização), sinopse, a classificação etária, etc)
Fluxo alternativo:
Requisitos não funcionais:
Identificador: UC09
Caso de Uso: ​Alterar dados de Funcionário
Ator: ​Gerente
Prioridade: ​Importante
Pré-Requisitos: ​O gerente deve estar cadastrado no sistema e estar logado. Pós-Condição: ​Os dados do funcionário são alterados no sistema. Sequência típica de eventos:
1 - O gerente informa o funcionário a ser alterado.
2 - O sistema exibe os campos editáveis do funcionário.
3 - O gerente altera os campos desejados.
4 - O sistema salva as alterações.
Fluxo alternativo:
2a - O funcionário não existe
2a.1 - O sistema cancela a operação e informa o erro. 3a - O gerente deleta o funcionário
3a.1 - O funcionário é deletado do sistema.

 Requisitos não funcionais:
Identificador: UC10
Caso de Uso: ​Alterar dados do usuário.
Ator: ​Funcionário
Prioridade: ​Importante
Pré-Requisitos: ​O funcionário deve estar cadastrado no sistema e estar logado. Pós-Condição: ​Os dados do usuário são alterados no sistema.
Sequência típica de eventos:
1 - O funcionário informa o usuário a ser alterado.
2 - O sistema exibe os campos editáveis do usuário.
3 - O funcionário altera os campos desejados.
4 - O sistema salva as alterações.
Fluxo alternativo:
2a - O usuário não existe
2a.1 - O sistema cancela a operação e informa o erro. 3a - O funcionário deleta o usuário
3a.1 - O usuário é deletado do sistema.
Requisitos não funcionais:
Identificador: UC11
Caso de Uso: ​Alterar dados do produto.
Ator: ​Funcionário
Prioridade: ​Importante
Pré-Requisitos: ​O funcionário deve estar cadastrado no sistema e estar logado. Pós-Condição: ​Os dados do produto são alterados no sistema.
Sequência típica de eventos:
1 - O funcionário informa o produto a ser alterado.
2 - O sistema exibe os campos editáveis do produto.
3 - O funcionário altera os campos desejados.
4 - O sistema salva as alterações.
Fluxo alternativo:
2a - O produto não existe
2a.1 - O sistema cancela a operação e informa o erro. 3a - O funcionário deleta o produto
3a.1 - O produto é deletado do sistema.
Requisitos não funcionais:
Identificador: UC12
Caso de Uso: ​Alterar dados do item.
Ator: ​Funcionário
Prioridade: ​Importante
Pré-Requisitos: ​O funcionário deve estar cadastrado no sistema e estar logado. Pós-Condição:
Sequência típica de eventos:
1 - O funcionário informa o item a ser alterado.

 2 - O sistema exibe os campos editáveis do item. 3 - O funcionário altera os campos desejados.
4 - O sistema salva as alterações.
Fluxo alternativo:
2a - O item não existe
2a.1 - O sistema cancela a operação e informa o erro.
3a - O funcionário deleta o item
3a.1 - O item é deletado do sistema.
Requisitos não funcionais:

 Diagrama de Casos de Uso
 
