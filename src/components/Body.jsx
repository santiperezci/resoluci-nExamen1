import React,{useContext} from "react";
import Character from '../components/Character'
import {gql, useQuery} from '@apollo/client';
import AppContext from "./AppContext";
import './Styles.css';

const GET_CHARACTERS = gql `
    query Characters($page: Int, $name: String, $status: String){
        characters(page: $page, filter:{name: $name, status: $status}){
            info{
                pages,
                prev,
                next
            },
            results{

                image,
                name,
                status,
                species,
                type,
                gender,
                location{
                    name,
                    dimension
                }
                
            }
        }
    }
`

function Body() {
    const context = useContext(AppContext);

    const {loading, error, data} = useQuery(GET_CHARACTERS,{
        variables:{
            page:context.page.get,
            name:context.name.get,
            status: context.status.get==='All'?'':context.status.get
        }
    })
    if(loading) return(<h1>Loading...</h1>);
    if(error) return(<h2>{`${error}`}</h2>);
    return (
    data?
      <div className="Body">
          
          <div className = "Characters">
              {data.characters.results.map((elem)=>{return <Character key={elem.id} info={elem}/>})}            
          </div>
          <div className = "Pages" >
              {data.characters.info.prev?<h1 onClick ={()=> context.page.set(context.page.get-1)}>Prev</h1>:null}
              <h1>{`${context.page.get}/${data.characters.info.pages}`}</h1>
              {data.characters.info.next?<h1 onClick ={()=> context.page.set(context.page.get+1)}>Next</h1>:null}


              
          </div>
          
      </div>
      :null
    );
}
  
  export default Body;
