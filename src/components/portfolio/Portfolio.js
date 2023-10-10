import React from "react";
import "./Portfolio.css";

import { Player } from "@lottiefiles/react-lottie-player";
import Chatbot from "../../lotties/Chatbot.json";
import tournament from "../../lotties/Tournament.json";
import Amazonclone from "../../lotties/Amazoncloneapp.json";
import { BiLinkExternal } from "react-icons/bi";
import { GoAlertFill } from "react-icons/go";

const projects = [
  {
    id: 1,
    image: Chatbot,
    title: "chatbot Portal",

    description:
      "A chatbot is (AI) &(NLP) to understand customer questions and automate responses to them, simulating human conversation",
    site: "https://github.com/Gokudsp/ReactChatbot",
    source: "Frontend Code",
    live: "https://chatbot-app-govtweb.netlify.app/",
    livename: "Live",
  },
  {
    id: 2,
    image: tournament,
    title: "tournamentapp",

    description:"In this app, we need to implement authentication and perform CRUD operations",
    site: "https://github.com/Gokudsp/tournamentapp",
    source: "Frontend Code",
    live: "https://tournament-game-app.netlify.app/",
    livename: "Live",
  },
  {
    id: 3,
    image: Amazonclone,
    title: "Amazoncloneapp",

    description:"Our clone will allow users to register, add products to the shoppingcart,remove product  only an authenticated user to access the home page." ,
    site: "https://github.com/Gokudsp/Cloneprojects",
    source: "Frontend Code",
    live: "https://amazon-clone-app-567.netlify.app/",
    livename: "Live",
  },

  
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projects.map((project) => {
          return (
            <article key={project.id} className="portfolio__item">
              <div className="portfolio__item-image">
                <Player
                  className="name"
                  autoplay
                  loop
                  src={project.image}
                  alt={project.title}
                  style={{ height: "20rem" }}
                ></Player>
              </div>
              <h3>{project.title}</h3>

              <small className="portfolio__desc">{project.description}</small>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <a
                  href={project.site}
                  target="_blank"
                  style={{ marginTop: "1rem" }}
                >
                  <span style={{ marginTop: "2rem" }}>
                    <GoAlertFill />
                  </span>
                  &nbsp;{project.source}
                </a>
                <a
                  href={project.backsite}
                  target="_blank"
                  style={{ marginTop: "1rem" }}
                >
                  <span style={{ marginTop: "2rem" }}>
                    <GoAlertFill />
                  </span>
                  &nbsp;{project.backsource}
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  style={{ marginTop: "1rem", marginRight: "2rem" }}
                >
                  <span style={{ marginTop: "2rem" }}>
                    <BiLinkExternal />
                  </span>
                  {project.livename}
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
