import { GolfCourseSharp } from "@material-ui/icons";
import "./Testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Amit Chawla",
      title: "Founder of Ciao Holidays",
      img:
        "assets/ciao.png",
      icon: "assets/youtube.png",
      desc:
        "She has been able to effectively balance her work at TechCurators & studies and work efficiently without compromising quality or quantity. Her dedication, will to work, productibility and management made me reach the goal.",
    },
    {
      id: 2,
      name: "Kshitij Goel",
      title: "Co-Founder of TechCurators",
      img:
        "data:image/jpeg;base64,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",
      icon: "assets/LinkedIn.png",
      desc:
        "In her position as Project Manager, Rhea worked on several projects at TechCurators, managed Subject Matter Experts and tackled difficult situations very smoothly. Rhea takes each project to heart and never misses a deadline, meanwhile ensuring the quality of questions submitted. As a team leader she exhibited resilience and productivity.",
      featured: true,
    },
    {
      id: 3,
      name: "Shreya",
      title: "Student",
      img:
        "assets/edurific.png",
      icon: "assets/whatsapp.png",
      desc:
        "She just to not stick to the curriculum but also let me have an hands-on experience and also guide me for my future.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
