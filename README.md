# 🎵 **LunarTunes – Plataforma de Streaming Musical**

O **LunarTunes** é uma plataforma dedicada ao streaming musical, oferecendo aos usuários uma experiência única para descobrir, ouvir e compartilhar suas músicas favoritas. Com uma interface intuitiva e recursos avançados, o LunarTunes proporciona entretenimento de alta qualidade para amantes da música.

## 🚀 **Funcionalidades**

- **Biblioteca Musical:** Acesso a um vasto catálogo de músicas, álbuns e playlists organizados por gênero, artista ou data de lançamento.
- **Streaming de Alta Qualidade:** Reprodução de áudio com diferentes opções de qualidade (alta definição, padrão, econômica).
- **Playlists Personalizadas:** Criação e compartilhamento de playlists personalizadas, permitindo que os usuários agrupem suas músicas favoritas.
- **Recomendações Inteligentes:** Sugestões de músicas e artistas com base no histórico de audição e preferências do usuário.
- **Modo Offline:** Download de músicas para ouvir sem conexão com a internet.
- **Rádios e Podcasts:** Seção dedicada a estações de rádio e podcasts, oferecendo conteúdos variados além da música.
- **Interação Social:** Opção para curtir, comentar e compartilhar músicas, além de seguir artistas e outros usuários.
- **Integração com Redes Sociais:** Compartilhamento fácil de músicas e playlists nas principais redes sociais.
- **Personalização da Experiência:** Temas customizáveis e opções de equalização para ajustar a qualidade do som.

## 📁 **Estrutura do Projeto**

```
/LunarTunes
├── /frontend      # React (Interface de Usuário)
├── /backend       # Spring Boot (API de Streaming e Gestão de Músicas)
└── /docs          # Documentação e Requisitos
```

## 🔧 **Tecnologias Utilizadas**

- **Frontend:** React.js, TypeScript, Redux, TailwindCSS
- **Backend:** Node.js com Express ou Java com Spring Boot, dependendo das preferências de escalabilidade e segurança.
- **Banco de Dados:** MongoDB ou PostgreSQL para armazenar informações sobre músicas, usuários e playlists.
- **Serviços de Streaming:** Integração com serviços de CDN e servidores de mídia para garantir alta performance na entrega de conteúdo.
- **Autenticação e Segurança:** JWT para autenticação de usuários e OAuth para integração com redes sociais.
- **Infraestrutura:** Docker, além de serviços de cloud Azure.

## ⚙️ **Instalação e Configuração**

### 🖥️ **Backend**

Se optar pelo Spring Boot:

```bash
cd backend
./mvnw spring-boot:run
```

### 🌐 **Frontend**

```bash
cd frontend
npm install
npm start
```

## 📊 **Requisitos**

### 🔹 **Requisitos Funcionais (RF)**

| ID   | Descrição                                                    | Prioridade |
|------|--------------------------------------------------------------|------------|
| RF01 | Cadastro e autenticação de usuários                          | 🔴 Alta    |
| RF02 | Acesso à biblioteca musical com busca avançada               | 🔴 Alta    |
| RF03 | Criação e gerenciamento de playlists                         | 🔴 Alta    |
| RF04 | Reprodução contínua de músicas e controle de streaming       | 🔴 Alta    |
| RF05 | Sistema de recomendações baseado no perfil do usuário          | 🟡 Média   |
| RF06 | Download de músicas para reprodução offline                  | 🟡 Média   |
| RF07 | Integração com rádios e podcasts                               | 🟡 Média   |

### 🔹 **Requisitos Não Funcionais (RNF)**

| ID    | Descrição                                                          | Prioridade |
|-------|--------------------------------------------------------------------|------------|
| RNF01 | Plataforma responsiva e compatível com diversos dispositivos        | 🔴 Alta    |
| RNF02 | Sistema escalável para suportar um grande número de usuários         | 🔴 Alta    |
| RNF03 | Segurança robusta para proteção de dados dos usuários                | 🔴 Alta    |
| RNF04 | Alta disponibilidade e baixa latência no streaming                   | 🔴 Alta    |


