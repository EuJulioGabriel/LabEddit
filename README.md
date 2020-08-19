# LabEddit
 
## Aplicação com funcionalidades semelhantes ao Reddit

## Stack
Esse é um projeto de Frontend Web feito utilizando ReactJS, HTML e CSS; 
e o npm como gerenciador de pacotes do NodeJS .
Sobre a divisão dos arquivos, há quatros setores. Os `components` são 
os componentes em si do meu projeto (Header, Router, PageLogin, PageSignup, PageFeed, PagePost, Footer). 
Já o segundo setor são os `contexts` que por sua vez são os contextos que são utilizados por diversos componentes sendo eles: CommentsContext,
PostDetailContext, RequestDetailPostContext, RequestVoteCommentContext. O terceiro setor é o `hooks` que possue apenas um Custom Hook para contro
lar os inputs do projeto. E o último setor mas não menos importante é o de `reducers` que é utilizado para guardar o valor da requisição que pega todos os 
comentários de um post em específico sendo representado pelo PostReducers.

## Sobre
Esse foi um dos primeiros projetos que fiz em React.
O projeto consiste em quatro páginas (PageLogin, PageSignup, PageFeed, Footer), sendo suas rotas sendo administradas, com o auxílio da biblioteca React Router,
através do componente chamado Router.
A primeira página do projeto consiste na página de Login que é o componente PageLogin que por sua vez possue um input para inserir o e-mail, um input para inse
rir a senha e um botão para fazer a autenticação, caso os dados sejam confirmados pela API o usuário é redirecionado para a página de Feed, e há um outro botão que direciona
para a página de cadastro.
A segunda página do projeto é a página de Cadastro que possui três inputs, sendo eles respectivamente, para inserir o nome do usuário, o email do usuário, e a senha
do usuário, possui também um botão para voltar para á página de login e um botão para cadastrar, caso o cadastro seja aprovado pela API o usuário é redirecionado au
tomaticamente para a pagina de Feed.
A terceira página do projeto é a página de Feed que mostra todos os posts feitos pelos usuário da rede e cada um dos post possue um sistema de votos, indicação 
se você já votou naquele post em específico, o número de votos, e são positivos ou negativos. Possue também um input para você criar uma publicação e um botão para
enviar a publicação que você pensou para o servidor. Caso clique em um dos posts você é redirecionado para á página daquele post em que clicou.
A quarta página é página de um post em específico que você vê o post e os seus comentários, pode também votar nos comentários, ver como votou nos comentários, possue
um input para você escrever um comentário e um botão para enviar o comentário para o servidor.
Há integrações com uma API externas nesse caso.

## Deploy com Surge

<a href="http://capable-talk.surge.sh/">LabEddit</a>

## Informações para login
Email: visitante@visitante.com.br <br>
Senha: 123456

## Instruções para rodar
Por ser um projeto com ReactJS, há a necessidade do NodeJS. Com ele em 
sua máquina, basta abrir o terminal e navegar até o repositório clonado e 
rodar:

1. `git clone https://github.com/EuJulioGabriel/LabEddit.git`
2. `npm install` para instalar todas as dependências;
3. `npm run start` para rodar localmente o projeto
4. `npm run build` para gerar uma versão estática do projeto 
(que ficará na pasta `build`)

## Contato
Julio Gabriel<br>
juliogabriel@outlook.com<br>
<a href="https://www.linkedin.com/in/eujuliogabriel/">Linkedin</a>
