import { format } from 'path';
import { title } from 'process';
import { useState } from 'react';
import { Container, Form, Input, Alert } from 'react-bootstrap';
import render from 'react-dom'
import './anunturi.css'
import firebaseDb from"../firebase.js"
import 'bootstrap/dist/css/bootstrap.min.css';


function Anunturi() {

  const [lungime, setlungime] = useState('');
  const [titlu,settitlu]=useState('');
  const [categorie,setcategorie]=useState('');
/* descrierea e inlocuita cu lungime de la alerta bootrstrap */
  const [email,setemail]=useState('');
  const [nr,setnr]=useState('');
  const [adresa,setadresa]=useState('');
  const [oras,setoras]=useState('');
  const [cod,setcod]=useState('');


  const [profileImg1,setprofileImg1]=useState('https://i.ibb.co/85XkD8m/poza-anunt.png')
  const [profileImg2,setprofileImg2]=useState('https://i.ibb.co/85XkD8m/poza-anunt.png')
  const [profileImg3,setprofileImg3]=useState('https://i.ibb.co/85XkD8m/poza-anunt.png')
  const [profileImg4,setprofileImg4]=useState('https://i.ibb.co/85XkD8m/poza-anunt.png')
  const [profileImg5,setprofileImg5]=useState('https://i.ibb.co/85XkD8m/poza-anunt.png')
  const [profileImg6,setprofileImg6]=useState('https://i.ibb.co/85XkD8m/poza-anunt.png')


  let showed = 0;
/*
  let total_items_array=[];

  function append_array()
  {
    total_items_array.push(items_array);

    firebaseDb.push(items_array);

    console.log("pushed"+items_array.email+items_array.nr+"...");

    
  }

  class item {
    constructor(email, nr,adresa,oras,cod) {
      this.email = email;
      this.nr = nr;
      this.adresa=adresa;
      this.oras=oras;
      this.cod=cod;
    }
  }


  const[items_array=new item,setitems_array]=useState();
*/

function append_array()
{
  let total_items_array={
    titlu: titlu,
    categorie: categorie,
    lungime: lungime,
    email: email,
    nr: nr,
    adresa: adresa,
    oras: oras,
    cod: cod,
    profileImg1: profileImg1,
    profileImg2: profileImg2,
    profileImg3: profileImg3,
    profileImg4: profileImg4,
    profileImg5: profileImg5,
    profileImg6: profileImg6
  };

  firebaseDb.push(total_items_array);


}

  const submitHandler=(e)=>{
    e.preventDefault();
  }

 var imageHandler1=(e)=>
  {
    const reader=new FileReader();
    reader.onload=()=>{
      if(reader.readyState===2)
      {
        setprofileImg1(reader.result)
         
      }
    }

    reader.readAsDataURL(e.target.files[0])
    console.log(reader.result);
  }
  var imageHandler2=(e)=>
  {
    const reader=new FileReader();
    reader.onload=()=>{
      if(reader.readyState===2)
      {
        setprofileImg2(reader.result)
      }
    }

    reader.readAsDataURL(e.target.files[0])
    console.log(reader.result);
  }
  var imageHandler3=(e)=>
  {
    const reader=new FileReader();
    reader.onload=()=>{
      if(reader.readyState===2)
      {
        setprofileImg3(reader.result)
      }
    }

    reader.readAsDataURL(e.target.files[0])
    console.log(reader.result);
  }
  var imageHandler4=(e)=>
  {
    const reader=new FileReader();
    reader.onload=()=>{
      if(reader.readyState===2)
      {
        setprofileImg4(reader.result)
      }
    }

    reader.readAsDataURL(e.target.files[0])
    console.log(reader.result);
  }
  var imageHandler5=(e)=>
  {
    const reader=new FileReader();
    reader.onload=()=>{
      if(reader.readyState===2)
      {
        setprofileImg5(reader.result)
      }
    }

    reader.readAsDataURL(e.target.files[0])
    console.log(reader.result);
  }
  var imageHandler6=(e)=>
  {
    const reader=new FileReader();
    reader.onload=()=>{
      if(reader.readyState===2)
      {
        setprofileImg6(reader.result)
      }
    }

    reader.readAsDataURL(e.target.files[0])
    console.log(reader.result);
  }

  return (
    <div className="App">
     
      <Container>
        <div style={{ background: "#9dc9c4", color: "black", padding: "22px" }} class="text-size">
          <div class="form-group">
            <label for="exampleFormControlInput1">Titlul anuntului</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=""  value={titlu} onChange={e => settitlu(e.target.value)}/>
          </div>

          <p>Categorie</p>

          <select class="form-control" value={categorie} onChange={e => setcategorie(e.target.value)}>
            <option>Toate</option>
            <option>Animale</option>
            <option>Laptopuri</option>
            <option>Carti</option>
            <option>Alimente</option>
          </select>
        </div>
      </Container>

      <br></br>

      <Container>
        <div style={{ background: "#9dc9c4", color: "black", padding: "22px" }} class="text-size">
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Descrierea produsului</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="7" value={lungime} onChange={e => setlungime(e.target.value)}></textarea>
          </div>
        </div>

        <p style={{color:"grey"}}>Caractere ramase:{200-lungime.length}</p>
      </Container>

      <Container>
      {lungime.length > 200 && showed == 0 ? <span class="alert alert-danger">
        <strong>Textul</strong> <a >nu poate depasi 200 caractere ({lungime.length}/200)</a>.
      </span> : ''}
      </Container>

<br></br>
      <Container>
    
          <div style={{ background: "#9dc9c4", color: "black",display:"inline-block"}} class="text-size">
              
              <div>
                <img src={profileImg1} className="img" alt="n am imagine"width="200" height="200"></img>
              </div>
              <input type="file" name="image-upload" accept="image/*" onChange={imageHandler1}/>
            </div>

            <div style={{ background: "#9dc9c4", color: "black",display:"inline-block" }} class="text-size">
           
              <div>
                <img src={profileImg2} className="img" alt="n am imagine" width="200" height="200"></img>
              </div>
              <input type="file" name="image-upload" accept="image/*" onChange={imageHandler2}/>
            </div>

            <div style={{ background: "#9dc9c4", color: "black",display:"inline-block" }} class="text-size">
           
           <div>
             <img src={profileImg3} className="img" alt="n am imagine" width="200" height="200"></img>
           </div>
           <input type="file" name="image-upload" accept="image/*" onChange={imageHandler3}/>
         </div>

         <div style={{ background: "#9dc9c4", color: "black",display:"inline-block" }} class="text-size">
           
           <div>
             <img src={profileImg4} className="img" alt="n am imagine" width="200" height="200"></img>
           </div>
           <input type="file" name="image-upload" accept="image/*" onChange={imageHandler4}/>
         </div>

         <div style={{ background: "#9dc9c4", color: "black",display:"inline-block" }} class="text-size">
           
           <div>
             <img src={profileImg5} className="img" alt="n am imagine" width="200" height="200"></img>
           </div>
           <input type="file" name="image-upload" accept="image/*" onChange={imageHandler5}/>
         </div>

         <div style={{ background: "#9dc9c4", color: "black",display:"inline-block" }} class="text-size">
           
           <div>
             <img src={profileImg6} className="img" alt="n am imagine" width="200" height="200"></img>
           </div>
           <input type="file" name="image-upload" accept="image/*" onChange={imageHandler6}/>
         </div>
  
      </Container>

      <br></br>
      <br></br>

      <Container>
     
      <Form style={{ background: "#9dc9c4", color: "black"}} onSubmit={submitHandler}>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="alexandruonel79@gmail.com" value={email} onChange={e => setemail(e.target.value)}/>
    </div>

    <div class="form-group col-md-6">
      <label for="inputEmail4">Numar de telefon</label>
      <input  class="form-control" id="inputEmail4" placeholder="0722946855" value={nr} onChange={e => setnr(e.target.value)}/>
    </div>

  </div>

  <div class="form-group">
    <label for="inputAddress">Adresa</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Strada,numar,bloc,scara,apartament"value={adresa} onChange={e => setadresa(e.target.value)}/>
  </div>
 
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">Oras</label>
      <input type="text" class="form-control" id="inputCity" value={oras} onChange={e => setoras(e.target.value)}/>
    </div>


    <div class="form-group col-md-2">
      <label for="inputZip">Cod Postal</label>
      <input type="text" class="form-control" id="inputZip" value={cod} onChange={e => setcod(e.target.value)}/>
    </div>
  </div>
  <div class="form-group">
  
  </div>
  <button type="submit" class="btn btn-primary" onChange={submitHandler} onClick={append_array}>Posteaza anunt</button>
  <br></br>
  <br></br>
</Form>

      </Container>
  
    </div>
  

    
    
  );
}

export default Anunturi;
