## Case processo seletivo para dev frontend no Promobit.


## O desafio

Usando a API de filmes gratuita [themoviedb](https://developers.themoviedb.org/3/getting-started/introduction) em sua versão 3, você será responsável por criar uma listagem dos filmes mais populares do dia, consultando o endpoint  [`GET /movie/popular`](https://developers.themoviedb.org/3/movies/get-popular-movies) para realizar a listagem. Ao clicar em item dessa listagem, outra página com os detalhes do filme escolhido deve ser exibida. Para acessar mais detalhes sobre o filme e criar está página, você deve consultar o endpoint [`GET /movie/{movie_id}`](https://developers.themoviedb.org/3/movies/get-movie-details)
Usando a API de filmes gratuita [themoviedb](https://developers.themoviedb.org/3/getting-started/introduction) em sua versão 3, você será responsável por criar uma listagem dos filmes mais populares do dia, consultando o endpoint  [`GET /movie/popular`](https://developers.themoviedb.org/3/movies/get-popular-movies) para realizar a listagem. Ao clicar em um item dessa listagem, outra página com os detalhes do filme escolhido deve ser exibida. Para acessar mais detalhes sobre o filme, você pode consultar o endpoint [`GET /movie/{movie_id}`](https://developers.themoviedb.org/3/movies/get-movie-details).

Temos insights que nos levam a acreditar que os usuários dessa lista costumam ter uma experiência melhor se conseguirem criar um filtro usando seus genêros favoritos. Portanto, você também será responsável por criar filtros de filmes por gênero nessa listagem. Note que um novo endpoint deverá ser consultado para obter uma lista dos possíveis gêneros a serem filtrados, [`GET /genre/movie/list`](https://developers.themoviedb.org/3/genres/get-movie-list).

Para garantir que o usuário encontre o filme que está procurando, essa lista deverá ser paginada sempre que não existir nenhum filtro de gênero ativo.
## Requisitos funcionais
* [ ] O usuário deve ter acesso a uma listagem dos filmes mais populares do dia
* [ ] O usuário deve conseguir paginar a lista para encontrar novos filmes
* [ ] O usuário deve conseguir filtrar os filmes listados por gênero, com a possibilidade de usar mais de um gênero
* [ ] Ao realizar filtros, o mesmo deve ser persistido pela paginação
* [ ] O usuário deve conseguir remover filtros e a listagem deve ser atualizada de acordo com o filtro removido
* [ ] O usário deve ter acesso a uma outra página com detalhes sobre o filme, ao clicar em um item na listagem
* [ ] O usuário deve conseguir voltar para a página de listagem de filmes com os filtros ainda ativos
Qualquer tipo de paginação é aceita, mas tenha em mente considerações ao optar por qualquer forma de paginar.
## Requisitos não funcionais
* [ ] O app deverá ser hospedado em um serviço de cloud, como, por exemplo: [Surge](https://surge.sh/), [Netlify](https://www.netlify.com/), [ZEIT](https://zeit.co/home). Outras plataformas mais robustas como [AWS](https://aws.amazon.com/) também serão aceitas
* [ ] O app deverá ser criado usando [React](https://reactjs.org/)
* [ ] O app deverá se comportar da mesma forma na última versão estável dos seguintes browsers: Chrome, Firefox, Edge
* [ ] A página com detalhes de um filme deve possuir uma rota própria e estar preparada para ser indexada em mecanismos de pesquisa
* [ ] O app deverá ser responsivo
