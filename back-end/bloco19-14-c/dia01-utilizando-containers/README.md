## Exercícios


Vamos juntar tudo o que aprendemos até aqui e exercitar mais ainda nosso aprendizado!

1.  No  [Docker Hub](https://hub.docker.com/search?q=&type=image) , utilizando a caixa de busca  _(  `"Search for great content"`  )_ ,  **busque pela imagem da Distribuição Linux  `Debian`** ;
2.  Uma vez que encontrar a  **imagem oficial** , acesse-a  _(clicando em seu card)_ e verifique na página de detalhes,  **se existe algum comando para baixarmos a imagem localmente sem ter que criar um  `container`  para isso** ;
3.  **Baixe a imagem utilizando a  `tag`  :  `stable-slim`** , que é uma versão reduzida da distribuição;
4.  Após baixar a imagem para seu computador local,  **crie e execute um  `container`  no modo interativo utilizando essa imagem como referência** _(não esqueça referenciar a  `tag`  )_ ;
5.  No terminal,  **você deve conseguir rodar o comando  `cat /etc/*-release`** , que vai retornar os dados da distribuição  `Debian`  que está sendo rodada dentro do  `container`  ;
6.  **Encerre o terminal** ;
7.  **Verifique na sua lista de containers** , qual o  `container`  é referente ao exercício que acabou de praticar;
8.  **Inicie o mesmo  `container`  novamente** , sem criar outro. Valide se ele está ativo na lista de containers;
9.  **Retome o  `container`  que foi criado anteriormente nesse exercício** ;
10.  **Rode o comando  `cat /etc/debian_version`** que deve retornar a versão atual do sistema do  `container`  ;
11.  **Encerre o terminal** ;
12.  **Remova somente o  `container`  criado para esse exercício** ;
13.  _(Bônus)_ **Crie e rode de modo interativo em modo 'Cleanup'** , a imagem  `andrius/ascii-patrol`  ;
14.  _(Bônus)_ **Encerre o  `container`  utilizando os botões [  `ctrl`  ] + [  `c`  ].**

----------


## Gabarito


### Sintaxe geral

Utilizando o que você já aprendeu até aqui, faça os seguintes exercícios:

### Ilustração dos itens 1, 2 e 3

![](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/docker/images/introduction/solutions/exercises-1-2-3-f1d903a1462579e3a895d7b9a2454906.gif)

Resolução dos itens 1,2 e 3

#### Exercício 1

No  [Docker Hub](https://hub.docker.com/search?q=&type=image) , utilizando a caixa de busca  _(  `"Search for great content"`  )_ ,  **busque pela imagem da Distribuição Linux  `Debian`** .

#### **Solução**

No campo de busca do  [Docker Hub](https://hub.docker.com/) , você pode procurar por diversas imagens  _(incluindo softwares populares como o  `mysql`  , ou servidores da web, como o  `nginx`  )_ , nesse caso, procuramos pela palavra chave  `debian`  .

#### Exercício 2

Uma vez que encontrar a  **imagem oficial** , acesse-a  _(clicando em seu card)_ e verifique na página de detalhes,  **se existe algum comando para baixarmos a imagem localmente sem ter que criar um  `container`  para isso** .

#### **Solução**

Ao acessar a página de detalhes, logo de cara, a página já indica o comando  `git pull <imagem>`  , esse comando faz apenas o download da imagem, sem o processo de criação e execução do  `container`  .

#### Exercício 3

**Baixe a imagem utilizando a  `tag`  :  `stable-slim`** , que é uma versão reduzida da distribuição.

#### **Solução**

As  `tags`  também podem ser acessadas pela página de detalhes da imagem  _(onde também é fornecido o comando para executar)_ , o comando foi o  `docker pull debian:stable-slim`  _(esse processo ocorre de forma automática, se utilizarmos  `docker run`  )_ .

### Ilustração dos itens 4 a 7

![](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/docker/images/introduction/solutions/exercises-4-5-6-7-012a5cad5b8ef5d651832d8dd5eb3998.gif)

Resolução dos itens 4 a 7

#### Exercício 4

Após baixar a imagem para seu computador local,  **crie e execute um  `container`  no modo interativo utilizando essa imagem como referência** _(não esqueça referenciar a  `tag`  )_ .

#### **Solução**

Para  **criar e executar** nosso  `container`  , usamos o comando  `docker container run -it debian:stable-slim`  , lembrando que a imagem pode ser chamada no formato  `<imagem>:<tag>`  .

> Outra solução também pode ser com o uso do comando  `create`  , que cria o contêiner mas não o inicia imediatamente.
> 
> Primeiro utilizamos o comando  `docker container create -it debian:stable-slim`  . Como esse comando gera um  `CONTAINER ID`  , podemos utiliza-lo como referência para o comando  `start`  , como em  `docker container start <CONTAINER ID>`  .

#### Exercício 5

No terminal,  **você deve conseguir rodar o comando  `cat /etc/*-release`** , que vai retornar os dados da distribuição  `Debian`  que está sendo rodada dentro do  `container`  .

#### **Solução**

Ao rodar o comando  `cat /etc/*-release`  foram retornados os dados corretos da distribuição estável do Debian  _(versão 11, codinome  `bullseye`  )_ .

#### Exercício 6

**Encerre o terminal** .

#### **Solução**

Para encerrar o terminal interno do  `container`  , o comando  `exit`  foi utilizado.

#### Exercício 7

**Verifique na sua lista de containers** , qual o  `container`  é referente ao exercício que acabou de praticar.

#### **Solução**

Para listar o  `container`  , podemos utilizar o comando abreviado  `docker ps -l`  (para mostrar qual foi o último  `container`  criado), assim como  `docker container ls -l`  ou ainda, passando o parâmetro  `-a`  para mostrar todos.

### Ilustração dos itens 8 a 12

![](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/docker/images/introduction/solutions/exercises-8-9-10-11-12-cf04c8b4ec44529fa001002831a2c5f6.gif)

Resolução dos itens 8 a 12

#### Exercício 8

**Inicie o mesmo  `container`  novamente** , sem criar outro. Valide se ele está ativo na lista de containers.

#### **Solução**

Foi utilizado o comando abreviado  `docker start <CONTAINER ID || NAMES>`  onde  `<CONTAINER ID || NAMES>`  foi o início do identificador único  `07c0a580d818`  _(mostrando que n é preciso passar o valor inteiro)_ , o  `container`  ficou ativo (campo  `STATUS`  ) após isso.

#### Exercício 9

**Retome o  `container`  que foi criado anteriormente nesse exercício** .

#### **Solução**

Foi utilizado o comando abreviado  `docker attach <CONTAINER ID || NAMES>`  . Já que o  `container`  foi inicializado anteriormente de modo interativo, pudemos retomar seu terminal.

#### Exercício 10

**Rode o comando  `cat /etc/debian_version`** que deve retornar a versão atual do sistema do  `container`  .

#### **Solução**

O comando deve retornar o número da atual versão estável do Debian  _(  `11`  )_ .

#### Exercício 11

**Encerre o terminal** .

#### **Solução**

Para encerrar o terminal interno do  `container`  , o comando  `exit`  foi utilizado.

#### Exercício 12

**Remova somente o  `container`  criado para esse exercício** .

#### **Solução**

Foi utilizado o comando  `docker container rm <CONTAINER ID || NAMES>`  , validado em seguida.

## Bônus

### Ilustração dos itens 13 e 14

![](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/docker/images/introduction/solutions/exercises-13-14-70b1ef36ca8307fbb023de78b715dbda.gif)

Surpresa nos itens 13 e 14

#### Exercício 13

**Crie e rode de modo interativo em modo 'Cleanup'** , a imagem  `andrius/ascii-patrol`  .

#### **Solução**

⚠️ Você descobriu o jogo  `ASCII-PATROL`  ! ⚠️ Para rodar o container e remove-lo logo em seguida, foi utilizado o comando  `docker run -it --rm andrius/ascii-patrol`  , onde o  `-it`  permite a interação com o jogo pelo terminal e o  `--rm`  garante que o container será removido ao terminar o jogo.

#### Exercício 14

**Encerre o  `container`  utilizando os botões [  `ctrl`  ] + [  `c`  ].**

#### **Solução**

Após fechar o jogo, utilize o comando  `clear`  para limpar a tela. Você pode constatar que, rodando um  `docker container ls -a`  , o  `container`  do jogo não estará presente.
