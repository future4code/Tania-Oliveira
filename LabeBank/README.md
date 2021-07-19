SISTEMA BANCÁRIO

estrutura de  dados
contas:
-nome
-CPF(unico)
-data de nascimento(idade>18)
-saldo(começa zerado)
-extrato(array de transações)
     -valor
     -data
     -descrição

funcinalidades
criar conta
-informar cpf

pegar saldo
-passando nome e cpf

pagar conta
-passando valor, descrição e data depagamento
-caso não informar a data, considerar pagamento no mesmo dia
-não pode haver agendamentos para data passada
-não poderá haver pagamentos se não houver saldo em conta

trasnferências internas
-informar nome, cpf do destinatarioe valor
-não podem ser agendadas
-respeitar saldo do usuario

requesitos mínimos
-criar conta
-pagar contas
-adicionar validação de idade


Etapas de desenvolvimento.

1. Crie um **tipo** para representar uma conta para o usuário
2. Crie um array global que armazene usuários na aplicação. Caso queira, pode iniciar este array com valores pré-definidos.
3. Crie mais um **tipo**: para representar as **transações** que serão salvas no extrato
4. Dentro da definição do usuário, crie um array que armazene as transações de um cliente.
5. Crie um endpoint  que utilize o método `POST` da entidade `users` que será responsável por cadastrar um usuário em um array de usuários. Neste momento, não se preocupe, com as validações descritas nas funcionalidades.
6. Crie um método `GET` na entidade `users` função que será responsável por pegar todos os usuários existentes no array de usuários.
7. Adicione, uma validação no item 1 (Criar conta): o usuário deve possuir mais do que 18 anos para conseguir se cadastrar. Caso não possua, exiba uma mensagem de erro.