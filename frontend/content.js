module.exports = {
    app: {
        name: "Fantasypedia",
        title: "Fantasypedia",
        header: "Fantasypedia",
        footer: "O melhor gerenciador de assets para RPGistas",
        defaultPage: "page.mustache"
    },
    home: {
        url: "/",
        page: "home.mustache",
        link: "Home",
        title: "Projeto Web2",
        subtitle: "Gerenciador de Assets para RPG",
        description: `Desbrave um universo de possibilidades com o nosso gerenciador de assets de RPG!<br/>
        Cadastre seus personagens, itens e criaturas e leve suas campanhas a um novo patamar.<br/>
        Explore conteúdos incríveis criados por outros jogadores e contribua para a comunidade, mergulhando em aventuras épicas como nunca antes.`
    },
    details: {
        url: "/details",
        page: "details.mustache",
        link: "Detalhes",
        title: "Detalhes",
        subtitle: "Olá, aventureiros virtuais! Se você é um fã de RPG e está em busca de uma maneira eficiente e divertida de gerenciar seus itens, personagens e criaturas, o Fantasypedia é a solução perfeita para você! Desenvolvido com paixão por um estudante de engenharia de software, como parte de um projeto para a disciplina de Web 2, este site revolucionário oferece uma experiência completa e intuitiva para organizar e explorar seu universo de RPG.",
        features: [
            "<b>Gerenciamento de Itens:</b> Catalogue e pesquise seus itens de forma ágil, atribuindo detalhes como descrição, raridade e poderes especiais.",
            "<b>Gerenciamento de Criaturas:</b> Explore um vasto compêndio de criaturas do universo do RPG, com informações abrangentes sobre estatísticas, habilidades e comportamentos."
        ],
        description: "O Fastasypedia é a ferramenta ideal para RPGistas que buscam praticidade e agilidade na gestão de seus universos de jogo. Explore, organize e desenvolva seu RPG de forma rápida e fácil, graças à nossa interface intuitiva e recursos completos. Seja você um novato ou um veterano, o Fastasypedia está aqui para ajudá-lo a dar vida às suas aventuras e criar memórias inesquecíveis. Junte-se a nós nessa jornada emocionante e descubra o poder da enciclopédia ágil para RPGistas. Seja bem-vindo ao Fastasypedia!"
    },
    tools: {
        url: "/tools",
        page: "tools.mustache",
        link: "Ferramentas",
        title: "Ferramentas",
        subtitle: "As bibliotecas utilizadas no projeto foram as seguintes:",
        features: [
            {
                name: "bootstrap",
                url: "https://www.npmjs.com/package/bootstrap"
            },
            {
                name: "dotenv",
                url: "https://www.npmjs.com/package/dotenv"
            },
            {
                name: "express",
                url: "https://www.npmjs.com/package/express"
            },
            {
                name: "mustache-express",
                url: "https://www.npmjs.com/package/mustache-express"
            },
            {
                name: "nodemon",
                url: "https://www.npmjs.com/package/nodemon"
            },
            {
                name: "nodemailer",
                url: "https://www.npmjs.com/package/nodemailer"
            }
        ],
        description: "Mesagem Ferramentas"
    },
    developer: {
        url: "/developer",
        page: "developer.mustache",
        link: "Desenvolvedor",
        title: "Desenvolvedor",
        subtitle: "",
        description: `No RG meu nome é Rogério Pelizzon, mas ta errado, na verdade é <b>burca</b> :) <br/>
        Estou cursando engenharia de software e trabalhando a alguns anos ja com desenvolvimento mobile.<br/>
        Atualmente trabalho como Analista de Produtos Digitais/Desenvolvedor Android no <a href="https://www.bancointer.com.br/">Banco Inter</a>`
    },
    contact: {
        url: "/contact",
        page: "contact.mustache",
        link: "Contato",
        title: "Contato",
        subtitle: "Subtitulo Contato",
        description: "Mesagem Contato"
    },
    items: {
        url: "/items",
        page: "items.mustache",
        link: "Itens",
        title: "Itens",
        subtitle: "Deposite um item",
        description: "Baú",
        buttonAdd: "Depositar"
    },
    creatures: {
        url: "/creatures",
        page: "creatures.mustache",
        link: "Criaturas",
        title: "Criaturas",
        subtitle: "Invoque uma criatura",
        description: "Bestiário",
        buttonAdd: "Invocar"
    }
}