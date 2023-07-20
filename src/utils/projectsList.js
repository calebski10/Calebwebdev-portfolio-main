import Blog from "../img/blog.png";
import BookMe from "../img/bookme.png";
import ConnectMe from "../img/connectme.png";
import ProPet from "../img/petstore.png";
import IMS from "../img/IMS.png";
import CoinHiz from "../img/coinhiz.png";

const projects = [
  {
    title: "ConnectME",
    subTitle: "Social Media",
    description:
      "ConnectME is a social media application that allows users to create an account, make posts, and interact with other users. It is built using the MERN stack (MongoDB, Express, React, Node.js) and is deployed on Heroku.",
    image: ConnectMe,
    technologies: [
      "ReactJS",
      "Redux",
      "TailwindCSS",
      "JavaScript",
      "TypeScript",
      "NodeJS",
      "Express",
      "MongoDB",
      "GraphQL",
      "Webpack",
      "OAuth2",
      "FontAwesome",
      "Heroku",
    ],
    github: "https://github.com/calebski10/Car-rental",
    live: "https://gleaming-zabaione-7d6437.netlify.app",
    demoAccount: {
      username: "demo@example.com",
      password: "Demo1234$",
    },
  },
  {
    title: "BookMe",
    subTitle: "Scheduling App",
    description:
      "BookMe is a web application that give Salon|Barbershop owner the platform they need to bring their business to the next level. The application is designed to give customers the ability to book appointments online and manage their appointments.",
    image: BookMe,
    technologies: [
      "ReactJS",
      "Redux",
      "TailwindCSS",
      "JavaScript",
      "DaisyUI",
      "NodeJS",
      "Express",
      "MongoDB",
      "Squareup API",
      "Auth0",
      "Heroku",
    ],
    github: "https://github.com/calebski10/Digital",
    live: "https://zenithhubdigital.netlify.app",
  },
  {
    title: "ProPet",
    subTitle: "E-Commerce",
    description:
      "ProPet is an online store that allows buyers to log in, browse through multiple categories of pets, pick out products, select favorite products, and them to cart and complete the purchase.",
    image: ProPet,
    technologies: [
      "MERN Stack",
      "Redux",
      "TailwindCSS",
      "JavaScript",
      "NodeJS",
      "Express",
      "MongoDB",
      "GraphQL",
      "Stripe API",
      "Heroku",
    ],
    github: "https://github.com/calebski10/admin-dashboard",
    live: "https://voluble-tartufo-74ebce.netlify.app",
  },
  {
    title: "IMS",
    subTitle: "Inventory Management System",
    description:
      "This Inventory Management System application will allow a company with large amount of products to manage their inventory.",
    image: IMS,
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "HandlebarsJS",
      "NodeJS",
      "Express",
      "MySQL",
      "Sequelize",
      "Heroku",
      "Bootstrap",
      "Restful API",
      "MVC",
    ],
    github: "https://github.com/calebski10/hospital",
    live: "https://superlative-dodol-a0198d.netlify.app",
    demoAccount: {
      username: "demo@example.com",
      password: "demo1234",
    },
  },
  {
    title: "CoinHiz",
    subTitle: "Crypto Currency",
    description:
      "Coinhiz is a Crypto currency application the gives users information, current price, and a chart with historical price of the coin. Give you the ability to save your favorite coins and also get the locations of any Bitcoin atm around you or in any city.",
    image: CoinHiz,
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TailwindCSS",
      "Web API",
      "Mapbox API",
      "jQuery",
    ],
    github: "https://github.com/calebski10/admin-panel",
    live: "https://zenithhubadmin.netlify.app",
  },
  {
    title: "Tech Blog",
    subTitle: "Blog",
    description:
      "This is a tech blog created using MVC architecture. It is a simple blog that allows users to create, edit, and delete posts. It also allows users to comment on posts.",
    image: Blog,
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "MVC",
      "NodeJS",
      "Express",
      "MySQL",
      "Handlebars",
    ],
    github: "https://github.com/jimenezCaleb/mvc-tech-blog",
    live: "https://spiffy-sprinkles-9815d5.netlify.app",
  },
];

export default projects;