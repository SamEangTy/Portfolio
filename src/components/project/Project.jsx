import { useEffect, useState } from "react";
import ProjectList from "../projectlist/Projectlist";
import "./project.scss";
import {
  all,
  design,
  jquery,
  react,
  mern,
} from "../../data";

export default function Project() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "all",
      title: "All",
    },
    {
      id: "design",
      title: "Web Design",
    },
    {
      id: "jquery",
      title: "Jquery",
    },
    {
      id: "react",
      title: "React Js",
    },
    {
      id: "mern",
      title: "MERN",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "all":
        setData(all);
        break;
      case "design":
        setData(design);
        break;
      case "jquery":
        setData(jquery);
        break;
      case "react":
        setData(react);
        break;
      case "mern":
        setData(mern);
        break;
      default:
        setData(all);
    }
  }, [selected]);

  return (
    <div className="project" id="project">
      <h1>Project</h1>
      <ul>
        {list.map((item) => (
          <ProjectList
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
            <a href={d.link} target="_blank">
              <img
                src={d.img}
                alt=""
              />
            </a>
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
