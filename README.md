Be The Hero
A Semana OmniStack é um workshop online produzido pela Rocketseat. Esta é a versão 11, onde Diego Fernandes nos ensina a desenvolver uma aplicação desde o backend até o frontend web e mobile com uma única linguagem, o Javascript. O nome da aplicação desenvolvida é Be The Hero, uma aplicação para cadastro de ONGs e casos cadastrados por elas para que outras pessoas possam ajudar a resolvê-los.

Clonando o Repositório
Para clonar o repositório, execute o seguinte comando no terminal:

bash
Copy code
git clone https://github.com/Ronedias/be-the-hero.git
Instalação
Pré-Requisitos
git
node
express
knex
sqlite
react
react-native
expo
Clone o repositório utilizando git clone ou faça o download do repositório.

Configuração do Backend
Instalar Python

O sqlite3 depende do Python. Instale o Python seguindo os comandos abaixo:

bash
Copy code
sudo apt-get install -y python3
sudo ln -s /usr/bin/python3 /usr/bin/python
python --version
Instalar Dependências e Iniciar o Backend

Acesse o diretório do backend do projeto:

bash
Copy code
cd backend
Instale as dependências e inicie o servidor:

bash
Copy code
yarn install
yarn start
Configuração do Frontend
Instalar Dependências e Iniciar o Frontend

Acesse o diretório do frontend do projeto:

bash
Copy code
cd frontend
Instale as dependências e inicie o servidor:

bash
Copy code
yarn install
yarn start
Assim que o processo terminar, automaticamente será aberta no seu navegador a página localhost:3000 contendo o projeto.

Configuração do Mobile
Configurar Endereço do Servidor

No arquivo src/services/api.js, coloque o endereço do seu servidor (ou computador).

Instalar Expo CLI (se necessário)

Se você ainda não tiver o Expo CLI instalado, instale-o globalmente:

bash
Copy code
yarn global add install expo-cli
Instalar Dependências e Iniciar o Mobile

Acesse o diretório do mobile do projeto:

bash
Copy code
cd mobile
Instale as dependências e inicie o Expo:

bash
Copy code
yarn install
expo start
Assim que o processo terminar, automaticamente será aberta no seu navegador a página localhost:19002. Conecte seu emulador ou teste o aplicativo por LAN: baixe o aplicativo Expo da Play Store ou App Store e escaneie o código QR. (Se não for por LAN, tente por tunnel. Espere aparecer no Metro Bundler (informações do Expo sobre o app) a mensagem "Tunnel Ready", clique em tunnel e escaneie o código QR).

Backend
API desenvolvida em NodeJS com acesso a banco de dados relacional SQLite, utilizando Knex. As rotas para acessar a API estão no arquivo routes.js. Você pode testar as rotas antes de usar o frontend com o software Insomnia. Baixe e instale o Insomnia na sua máquina e acesse as rotas da aplicação.

Frontend (Web e Mobile)
Web
Frontend web desenvolvido em ReactJS. Esta parte da aplicação permite entender diversos conceitos do React e do desenvolvimento web em geral. A comunicação com a API é feita através de requisições HTTP, que retornam ao frontend como um objeto JSON. Foi utilizada a biblioteca axios para realizar a comunicação com a API.

A página da aplicação Be The Hero será aberta. Nela, uma ONG poderá se cadastrar e cadastrar seus incidentes. A ONG também poderá entrar em contato com outras ONGs para ajudar nos incidentes delas.

Mobile
Desenvolvido com o framework React Native e com o Expo.