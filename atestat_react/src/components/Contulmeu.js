import { Container } from "react-bootstrap";
import firebaseDb from"../firebase.js";
import  React,{useState,useEffect} from "react";
import './Contulmeu.css'
import 'bootstrap/dist/css/bootstrap.min.css';
/*
    {items.titlu}
            {items.categorie}
            {items.descriere}
            {items.email}
            {items.nr}
            {items.adresa}
            {items.oras}
            {items.cod}

            trebuie puse in divul din functia render
            */
function Contulmeu() {
  useEffect(()=>
  {
    firebaseDb.on('value',snapshot=>{
      if(snapshot.val()!=null)
      {
        setitemsObjects({...snapshot.val()})
      }
    })
  },[])

  const[itemsObjects,setitemsObjects]=useState({})


    function render_items() {
     return( Object.keys(itemsObjects).map(id=>{
        console.log(id);
        console.log(itemsObjects[id].titlu);
     

        return (
          /* aici design */
          <div>


          <div class="card">
              <div class="card-body">
                <span class="nume_colorat">{itemsObjects[id].titlu}</span>
                <span> in categoria /</span>
                <span class="nume_colorat"> {itemsObjects[id].categorie}</span>
               </div>
          </div>
         
             <br></br>

         
            <Container>
              <img src={itemsObjects[id].profileImg1} alt="n am" width="200" height="200"></img>
              <img src={itemsObjects[id].profileImg2} alt="n am" width="200" height="200"></img>
              <img src={itemsObjects[id].profileImg3} alt="n am" width="200" height="200"></img>
              <img src={itemsObjects[id].profileImg4} alt="n am" width="200" height="200"></img>
              <img src={itemsObjects[id].profileImg5} alt="n am" width="200" height="200"></img>
              <img src={itemsObjects[id].profileImg6} alt="n am" width="200" height="200"></img>
            </Container>

            <p style={{color: "rgba(22, 80, 206, 0.514)"}}> Descriere</p>
            <div class="card">
                <div class="card-body">
                    <p>{itemsObjects[id].lungime}</p>
                </div>
            </div>

            <br></br>

            <p style={{color: "rgba(22, 80, 206, 0.514)"}}> Email</p>
            <div class="card">
                <div class="card-body">
                    <p>{itemsObjects[id].email}</p>
                </div>
            </div>

            <br></br>

            <p style={{color: "rgba(22, 80, 206, 0.514)"}}> Adresa</p>
            <div class="card">
                <div class="card-body">
                    <p>{itemsObjects[id].adresa}</p>
                </div>
            </div>

            <br></br>

            <p style={{color: "rgba(22, 80, 206, 0.514)"}}> Oras</p>
            <div class="card">
                <div class="card-body">
                    <p>{itemsObjects[id].oras}</p>
                </div>
            </div>

            <br></br>

            <p style={{color: "rgba(22, 80, 206, 0.514)"}}> Cod</p>
            <div class="card">
                <div class="card-body">
                    <p>{itemsObjects[id].cod}</p>
                </div>
            </div>

            <br></br>

            <p style={{color: "rgba(22, 80, 206, 0.514)"}}> Nr</p>
            <div class="card">
                <div class="card-body">
                    <p>{itemsObjects[id].nr}</p>
                </div>
            </div>



            <br></br>
          </div>
        )
      })
      )
       
      }



    return (
    <Container>
        <div style={{ background: "#9dc9c4", color: "black", padding: "30px" }} className="text-size">
        { Object.keys(itemsObjects).titlu ===undefined  ?  <p>Deocamdata nu ai anunturi </p> : ''}
            {render_items()}
        </div>
    </Container>
    
    );
  }
  
  export default Contulmeu;