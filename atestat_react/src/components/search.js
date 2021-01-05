import { Button, Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import firebaseDb from"../firebase.js";
import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Search() {
   
    return (
        <Form>
<Container>
       <div class="form-row">

             <div class="col">
                <input type="text" class="form-control" placeholder="Cauta aici obiectul preferat"  >
                </input>

            </div>

        <div class="col">

            <select type="text" class="form-control">
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
  <br>
  </br>
  </Container>
        
         <button type="button" class="btn btn-success" >Cauta acum!</button>
         </Form>
    );
}

export default Search;