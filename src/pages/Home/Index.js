import { Header } from "../../components/Header";
import ItemList from "../../components/ItemList";
import "./styles.css";
//import avatar from "../../assets/avatar.jpg"
import { projectsData } from "../../data";
//import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {

  projectsData.sort((a, b) => b.id - a.id);

  console.log(projectsData);

  return (

    <div className="App">

      <Header/>
      <div className="conteudo">
        <div className="info">
          </div>
          <div>
            
            <div className="perfil">
            <img src="https://avatars.githubusercontent.com/u/28720780?s=400&u=1bc38d7fbe1486b943782b4be6cbc3f7a1f9226a&v=4" className="profile" alt="profile img"/>
              <div>
                <h3>Alejandro Amoroso</h3>
                <p>Fullstack Developer | React | Java | JPA | Springboot | Kubernetes | Docker | Node.js | JavaScript | SQL | MongoDB |Test Automation (Selenium, Rest Assured, Cypress) | Git and GitHub</p>
                <br/>
                <div className="social-container">
                <a href="https://www.linkedin.com/in/alejandro-amoroso/details/certifications/" target="_blank" rel="noopener noreferrer"><span><strong>Certifications</strong></span></a>
                  <div className="socials-and-languages">
                <a href="https://github.com/LdeAlejandro" target="_blank" rel="noopener noreferrer"> <span><strong>Github: @LdeAlejandro</strong></span></a> 
                <a href="https://www.linkedin.com/in/alejandro-amoroso/" target="_blank" rel="noopener noreferrer"><span><strong>Linkedin: alejandro-amoroso</strong></span></a>
              
                <ul className="language-list">
                <p className="languages">Languages</p>
                  <li>Spanish: Native</li>
                  <li>English: Fluent</li>
                  <li>Portuguese: Fluent</li>
                </ul>
                </div>
                <br/><span className="studies"><strong>Currently Studying:</strong>AWS</span>
                <span><strong>Next Focus:</strong>TypeScript</span>

                
                </div>
                <p>{}</p>
              </div>
            </div> 
          
            <hr/>
           

            {projectsData?.length ? (
            <div className="projects-container">
              <h4 className="repositorio">Projects</h4>
              <div className="repos-container">
                 {projectsData.map((project) => (
                <ItemList key={project.id} data={project}/>
                
                ))} 
              </div>
            </div>
            ):null}
          
        </div>
      </div>
    </div>
  );
}

export default App;
