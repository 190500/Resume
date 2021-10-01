import { useState } from "react";
import "./Works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/laptop.png",
      title: "ATP Management Tool",
      company: "Xebia",
      desc:
        "This tool helps the project manager to find the employees who are on-bench and are fit for the respective project. Worked in a team of 8 members. Applied Agile tools like Trello Boards and Planning Poker. ",
      img:
        "data:image/png;base64,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",
    },
    {
      id: "2",
      icon: "./assets/writing.png",
      title: "Portfolio",
      company:"Rhea Chawla",
      desc:
        "Made a portfolio for myself. Used web development technologies like ReactJs for development and GitHub for hosting it on web. ",
      img:
        "https://thumbs.dreamstime.com/b/portfolio-word-pencil-letter-i-art-design-gallery-concept-vector-conceptual-creative-logo-poster-made-174201897.jpg",
    },
    {
      id: "3",
      icon: "./assets/manage.png",
      title: "Project Manager",
      company:"TechCurators",
      desc:
        "Managed projects, Subject Matter Experts, newbie project managers. Hired Subject Matter Experts and used my LinkedIn network to reach out to people.",
      img:
        "https://kissflow.com/wp-content/uploads/2019/08/personnel-management-system.png",
    },
    {
      id: "4",
      icon: "./assets/globe.png",
      title: "Web Designer",
      company:"Ciao Holidays",
      desc:
        "Designed a website for the company which would help people to find free itineraries for any destination they want to travel.",
      img:
        "https://pic.pikbest.com/01/52/20/77spIkbEsTKAb.jpg-0.jpg!sw800",
    },
    {
      id: "5",
      icon: "./assets/teach.png",
      title: "Online Tutor",
      company:"Edurific",
      desc:
        "Taught web development to students of age 6-14 years around the world. In web development taught them logic-building, html,css and javascript. ",
      img:
        "https://vitutors.com/wp-content/uploads/2020/07/start-earning.svg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id = "works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h4>{d.company}</h4>
                  <h2>{d.title}</h2>
                  
                  <p>{d.desc}</p>
                  
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
