# Be The Hero 🚀

A Semana OmniStack é um workshop online produzido pela Rocketseat. Nesta 11ª edição, Diego Fernandes nos guia no desenvolvimento de uma aplicação completa, do backend ao frontend, utilizando apenas JavaScript. O projeto criado é o Be The Hero, uma plataforma para cadastrar ONGs e seus casos, permitindo que outras pessoas ajudem a resolvê-los.

## Clonando o Repositório 💻

Para clonar o repositório, execute o seguinte comando no terminal:

```bash
git clone https://github.com/Ronedias/be-the-hero.git

# Instalação ⚙️
Pré-Requisitos
Certifique-se de ter instalados os seguintes componentes:

git
node
express
knex
sqlite
react
react-native
expo

## Configuração do Backend 🛠️
1 -Instalar Python

O sqlite3 requer o Python. Instale o Python com os seguintes comandos:
sudo apt-get install -y python3
sudo ln -s /usr/bin/python3 /usr/bin/python
python --version

Instalar Dependências e Iniciar o Backend

Acesse o diretório do backend do projeto:
cd backend
Instale as dependências e inicie o servidor:
yarn install
yarn start

Configuração do Frontend 🌐
Instalar Dependências e Iniciar o Frontend

Acesse o diretório do frontend do projeto:
cd backend
Instale as dependências e inicie o servidor:
yarn install
yarn start

Após o processo, a página será automaticamente aberta no seu navegador em localhost:3000

# Configuração do Mobile 📱
1.Configurar Endereço do Servidor

No arquivo src/services/api.js, ajuste o endereço do seu servidor (ou computador).

2.Instalar Expo CLI (se necessário)

Caso ainda não tenha o Expo CLI instalado, adicione-o globalmente:
yarn global add expo-cli

Instalar Dependências e Iniciar o Mobile

Acesse o diretório do mobile do projeto:
cd mobile
yarn install
expo start
Após o processo, a página será automaticamente aberta no seu navegador em localhost:19002. Conecte seu emulador ou teste o aplicativo por LAN: baixe o aplicativo Expo da Play Store ou App Store e escaneie o código QR. (Se não for por LAN, tente o tunnel. Espere aparecer a mensagem "Tunnel Ready" no Metro Bundler e clique em "Tunnel" para escanear o código QR).

Backend 🔧
API desenvolvida em NodeJS com acesso ao banco de dados relacional SQLite, utilizando Knex. As rotas para acessar a API estão no arquivo routes.js. Você pode testar as rotas antes de usar o frontend com o software Insomnia. Basta baixar e instalar o Insomnia e acessar as rotas da aplicação.

Frontend (Web e Mobile) 🌍📱
Web
Frontend web desenvolvido em ReactJS. Esta parte da aplicação oferece uma visão completa dos conceitos do React e do desenvolvimento web. A comunicação com a API é feita através de requisições HTTP, que retornam ao frontend como objetos JSON. Utilizamos a biblioteca axios para realizar essa comunicação.

Ao acessar a aplicação, uma ONG poderá se cadastrar e registrar seus incidentes, além de entrar em contato com outras ONGs para oferecer ajuda.

Mobile
Desenvolvido com React Native e Expo, o frontend mobile permite que você tenha uma experiência completa do aplicativo em dispositivos móveis.
