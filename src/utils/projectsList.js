import Digital from "../img/digital.png";
import Admin from "../img/admin.png";
import magzyne from "../img/magzyne.png";
import hospital from "../img/medicare.png";
import Shops from "../img/Shops.png";
import Apple from "../img/Apple.png"

const projects = [
  {
    title: "Adminis",
    //subTitle: "Social Media",
   /* description:
      "ConnectME is a social media application that allows users to create an account, make posts, and interact with other users. It is built using the MERN stack (MongoDB, Express, React, Node.js) and is deployed on Heroku.",*/
    image: Admin,
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
    github: "https://github.com/calebski10/admindashboard",
    live: "https://admindashboard-seven-chi.vercel.app/",
    demoAccount: {
      username: "demo@example.com",
      password: "Demo1234$",
    },
  },
  {
    title: "Digital",
    /*subTitle: "Scheduling App",
   /* description:
      "BookMe is a web application that give Salon|Barbershop owner the platform they need to bring their business to the next level. The application is designed to give customers the ability to book appointments online and manage their appointments.",*/
    image: Digital,
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
    live: "https://digital-beryl.vercel.app/",
  },
  {
    title: "Magzyne",
    //subTitle: "E-Commerce",
    /*description:
      "ProPet is an online store that allows buyers to log in, browse through multiple categories of pets, pick out products, select favorite products, and them to cart and complete the purchase.",*/
    image: magzyne,
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
    live: "https://admin-dashboard-two-ruby.vercel.app/",
  },
  {
    title: "Hospital",
   // subTitle: "Inventory Management System",
   /* description:
      "This Inventory Management System application will allow a company with large amount of products to manage their inventory.",*/
    image: hospital,
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
     /* "HandlebarsJS",
      "NodeJS",
      "Express",
      "MySQL",
      "Sequelize",
      "Heroku",
      "Restful API",
      "MVC",
    */],
    github: "https://github.com/calebski10/hospital",
    live: "hospital-kappa-peach.vercel.app",
    demoAccount: {
      username: "demo@example.com",
      password: "demo1234",
    },
  },
  {
    title: "Shops",
   // subTitle: "Crypto Currency",
   /* description:
      "Coinhiz is a Crypto currency application the gives users information, current price, and a chart with historical price of the coin. Give you the ability to save your favorite coins and also get the locations of any Bitcoin atm around you or in any city."*/
    image: Shops,
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
    live: "https://admin-panel-eight-gilt.vercel.app/",
  },
  {
    title: "Apple",
   // subTitle: "Blog",
   /* description:
      "This is a tech blog created using MVC architecture. It is a simple blog that allows users to create, edit, and delete posts. It also allows users to comment on posts.",*/
    image: Apple,
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Tailwind",
      "GraphSQL",
      "Refine",
      "Typescript"
      
      
    ],
    github: "https://github.com/calebski10/Apple",
    live: "https://apple-six-gamma.vercel.app/",
  },];

export default projects;