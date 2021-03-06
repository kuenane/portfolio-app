import Vue from "vue";
import Vuex from "vuex";
/*import { stat } from "fs";*/
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {
        name: "Lebohang",
        surname: "Kuenane",
        startDescription: "Hey, I'm Lebo",
        description:
            ", a software engineer based in Johannesburg, South-Africa. Full-stack developer with industry experience building websites and web applications. I work with NodeJs and Django on the backend, React and Vue on the frontend. ",
    },
    technologies: {
        programming:  [
            { name: "Python & Django", level: 90 , },
            { name: "HTML & (S)CSS", level: 92 },
            { name: "Javascript (ES6)", level: 80 },
            { name: "Typescript", level: 60 }
        ],
        frameworks: [
            { name: "Vue.js & Nuxt.js", level: 65 },
            { name: "React.js, Gatsby & Next", level: 85 },
            { name: "Tailwind.css", level: 80 },
            { name: "Python & Django", level: 80 },
            { name: "Node.js & Express.js", level: 68 },
        ],
        tools:[
            { name: "Digital Ocean" },
            { name: "Amazon AWS" },
            { name: "Docker" },
            { name: "Webpack" },
            { name: "Netlify" },
            { name: "Wordpress" }
        ]
    },
    projects: [{
        name: "My portfolio template",
        description: "A minimal porfolio website created with HTML, CSS and Javascript.",
        link: "https://github.com/kuenane/Portfolio-WebApp",
        icon: "leaf",
        startDate: "April, 2021",
        endDate: "Present",
        developer: "Lebohang Kuenane",
        tags: [
            { name: "#HTML" },
            { name: "#CSS" },
            { name: "#Javascript" }
        ]
    }, {
        name: "portfolio",
        description: "Portfolio made with Vue.js and Tailwind css",
        link: "https://github.com/kuenane/portfolio-app",
        icon: "address-card",
        startDate: "April 2, 2021",
        endDate: "Present",
        developer: "Lebohang Kuenane",
        tags: [
            { name: "#opensource" },
            { name: "#vue" },
            { name: "#tailwindcss" },
            { name: "#portfolio" }
        ]
    },{
        name: "Nodejs JWT RestAPIs",
        description: "Nodejs JWT RestAPIs",
        link: "Nodejs JWT RestAPIs",
        icon: "wifi",
        startDate: "Sep 20, 2019",
        endDate: "Present",
        developer: "Lebohang Kuenane",
        tags: [
            { name: "#opensource" },
            { name: "#android" },
            { name: "#adb" }
        ]
    }
    ], events: [
        { 
            name: "Vyudu Inc",
            description: "I work in this company as a Full-stack developer",
            role: "Full Stack Developer ",
            type: "Work",
            startDate: "September 2020",
            endDate: "Present",
            roles:[
                {description:"Created an maintained wordpress websites from client specification" },
                {description:"Shopify theme development with Liquid from client specification" },
                {description:"Linux server set up and administration" },
                {description:"Worked at a fast paced environment which was all remote" }
            ]
        },
        { 
            name: "Code For Fun",
            description: "Code for fun is a non-profit organisation that aims to teach youngsters code",
            role: "Python and Scratch tutor",
            type: "Work",
            startDate: "November 2019",
            endDate: "March 2020",
            roles:[
                {description:"Used Code For Fun to teach scratch and Python to a group of youngsters."}
            ]
        }, { 
            name: "Finchatbot",
            description: "Worked as an intern for a  AI powered solution for Financial institutions",
            role: "Front End Developer ",
            type: "Work",
            startDate: "April 2019",
            endDate: "November 2019",
            roles:[
                {description:" Designed, created and maintained sales acquisition, client retention and lead generation chatbots" },
                {description:" Developed and maintained the full-stack application build with Node.js, Postgresql and Knockout.js and Jquery" },
                {description:"Server maintenance and Devops for continous intergration and deployment using Docker containers"}
            ]
        }, { 
            name: "Technify Africa",
            description: " ",
            role: "Web Developer and Sales Agent",
            type: "work",
            startDate: "Feb 2019",
            endDate: "April 2019",
            roles:[
                { description:" Created e-commerce websites with Shopify and Wordpress. " },
                { description:" Implementation of marketing and client acquisition strategy. " }
            ]
        }
    ], socials: [
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/lebohangkuenane/",
            icon: "linkedin" 
        }, {
            name: "Github",
            link: "https://github.com/kuenane",
            icon: "github" 
        }, {
            name: "Twitter",
            link: "https://twitter.com/Geek_lebo",
            icon: "twitter" 
        },   
    ]
},

    getters: { age: state => {
            let ageDiff = Date.now() - state.profile.birthDay;
            let ageDate = new Date(ageDiff);
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        },
        profile: state => state.profile,
        projects: state => state.projects,
        technologies: state => state.technologies,
        events: state => state.events,
        socials: state => state.socials
    },
    mutations: {},
    actions: {}
});
