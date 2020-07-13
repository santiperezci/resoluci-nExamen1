import React,{useState} from "react";

function Character(props) {
    const{image, name, status, species, type, gender, location} = props.info;
    const [planet, setPlanet] = useState(false);
    return (
      <div className="Character">
          <img className="image" src={image} alt="Error"></img>
          <div className="Info">
              <h3>{name}</h3>
              <p>{status}</p>
              <p>{species}</p>
              <p>{type}</p>
              <p>{gender}</p>
              <p onClick={()=>setPlanet(!planet)}>{location.name}</p>
          </div>
          {planet?
          <div className="Planet_Info">
              <p>{location.name}</p>
              <p>{location.dimension}</p>
          </div>
          :null}
      </div>
    );
}
  
  export default Character;