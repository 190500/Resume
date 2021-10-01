import { useEffect, useState } from "react";
import PortfolioList from "../PortfolioList/PortfolioList";
import "./Portfolio.scss";
import {
  mern,
  devops,
  agile,
  java,
  tools,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("mern");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "mern",
      title: "MERN STACK DEVELOPMENT",
    },
    {
      id: "devops",
      title: "DevOps",
    },
    {
      id: "agile",
      title: "Agile",
    },
    {
      id: "java",
      title: "Java",
    },
    {
      id:"tools",
      title:"Tools",
    },
    
  ];

  useEffect(() => {
    switch (selected) {
      case "mern":
        setData(mern);
        break;
      case "devops":
        setData(devops);
        break;
      case "agile":
        setData(agile);
        break;
      case "java":
        setData(java);
        break;
      case "tools":
        setData(tools);
        break;
      default:
        setData(mern);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            
          </div>
        ))}
      </div>
    </div>
  );
}
