import './styles.css'
import { useState } from 'react';
import defaultImg from '../../assets/defaultImg.png'

const ItemList = ({data}) => {

  const [isHovered, setIsHovered] = useState(false);

  if(!data.img){
    data.img = defaultImg
    }

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className='item-list'>
       <div
        className="image-container"
        onMouseEnter={ handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >

        <img 
    src={isHovered && data.gif ? data.gif : data.img} 
    alt="Background" 
    style={{ display: 'none' }}
    onLoad={(e) => e.target.parentElement.style.backgroundImage = `url(${e.target.src})`}
  />
  
      </div>
      <div>
        <a className="title-container" href={data.project} target="_blank" rel="noopener noreferrer"><strong>{data.title}</strong></a>
        <p className="skills-container">
          {data.skills.map((skill, index) => 
          <span className="skill" key={`${data.id}-${index}`}>{skill + " "}  
          </span>)} 
        </p>
        <p>{data.description} </p>
        </div>

        <div className='buttons-container'>
          {data.repo && <a className='card-button' href={data.repo} target="_blank" rel="noopener noreferrer">Repository</a>}
          {data.project && <a className='card-button' href={data.project} target="_blank" rel="noopener noreferrer">Online Project</a>}
          {data.reference && <a className='card-button' href={data.reference} target="_blank" rel="noopener noreferrer">Reference</a>}
        </div>
        
    
    </div>
  )
}

export default ItemList