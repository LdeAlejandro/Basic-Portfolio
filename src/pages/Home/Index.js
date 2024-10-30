import { Header } from "../../components/Header";
import ItemList from "../../components/ItemList";
import "./styles.css";
import avatar from "../../assets/avatar.jpg"
import { projectsData } from "../../data";

function App() {

  return (
    <div className="App">
      <Header/>
      <div className="conteudo">
        <div className="info">
          </div>
          <div>
            
            <div className="perfil">
            <img src={avatar} className="profile" alt="profile img"/>
              <div>
                <h3>Alejandro Amoroso</h3>
                <div className="social-container">
                <a href="https://github.com/LdeAlejandro" target="_blank" rel="noopener noreferrer"> <span>Github: @LdeAlejandro</span></a>
                <a href="https://www.linkedin.com/in/alejandro-amoroso/" target="_blank" rel="noopener noreferrer"><span> Linkedin</span></a>
                <p>Fullstack Developer | React | Node.js | JavaScript | C#, SQL, MongoDB, and Test Automation (Selenium, Rest Assured, Cypress) | Git and GitHub</p>
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
