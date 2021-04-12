import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import firebaseDb from "../firebase.js";
import "./search.css";
//import Loading from "./Loading/Loading.js";

function Search() {
  const [itemsObjects, setitemsObjects] = useState([]);
  const [input, setinput] = useState(" ");
  const [input2, setinput2] = useState("Bucuresti");

  useEffect(() => {
    setitemsObjects([]);
    firebaseDb.on("value", (snapshot) => {
      if (snapshot.val() != null) {
        const objects = Object.values(snapshot.val());
        objects.forEach((ob) => {
          if (ob.titlu===input && ob.oras === input2)
            setitemsObjects([...itemsObjects, ob]);
        });
        console.log(itemsObjects);
      }
    });
  }, [input,input2]);

  function Handleclick() {
      console.log(input2);
  }


  function Display(){
    return itemsObjects.map((el) => 
    <>
    <br></br>
    <div class="list-group">
    <button type="button" class="list-group-item list-group-item-action" className="titlubuton">
      Titlul anuntului: {el.titlu}
    </button>
    <button type="button" class="list-group-item list-group-item-action">Categoria anuntului: {el.categorie}</button>
    <button type="button" class="list-group-item list-group-item-action">Descrierea anuntului: {el.lungime}</button>
    <div>
      <img src={el.profileImg1} height="200" width="200"></img>
      <img src={el.profileImg2} height="200" width="200"></img>
      <img src={el.profileImg3} height="200" width="200"></img>
      <img src={el.profileImg4} height="200" width="200" ></img>
      <img src={el.profileImg5} height="200" width="200"></img>
      <img src={el.profileImg6} height="200" width="200"></img>
    </div>
    <button type="button" class="list-group-item list-group-item-action">Adresa anuntului: {el.adresa}</button>
    <button type="button" class="list-group-item list-group-item-action">Codul postal al anuntului: {el.cod}</button>
    <button type="button" class="list-group-item list-group-item-action">Numar de telefon: {el.nr}</button>
    <button type="button" class="list-group-item list-group-item-action">Email: {el.email}</button>
  </div>
  </>)
  }

  return (
    <>
      <Form>
        <Container>
          <div class="form-row">
            <div class="col">
              <input
                type="text"
                class="form-control"
                placeholder="Cauta aici obiectul preferat"
                onKeyUp={(e) => {
                  setinput(e.target.value);
                }}
              ></input>
            </div>

            <div class="col">
              <select
                type="text"
                class="form-control"
                onChange={(e) => {
                  setinput2(e.target.value);
                }}
              >
                <option>Bucuresti</option>
                <option>Ilfov</option>
                <option>Giurgiu</option>
                <option>Alba</option>
                <option>Arad</option>
                <option>Arges</option>
                <option>Bacau</option>
                <option>Brasov</option>
                <option>Bihor</option>
              </select>
            </div>
          </div>
          <br></br>
        </Container>

        <button type="button" class="btn btn-success" onClick={Handleclick}>
          Cauta acum!
        </button>
      </Form>
      <><Display/></>
    </>
  );
}

export default Search;

