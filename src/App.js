import './App.css';
import Testimonio from "./components/Testimonio.js";
import { users } from "./users/users.js";

function App() {
  return (
    <div className="App">

      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos acerca de freeCodeCamp</h1>
        <Testimonio 
          imagen= {users[0].imagen}
          nombre= {users[0].nombre}
          pais= {users[0].pais}
          cargo= {users[0].cargo}
          empresa= {users[0].empresa}
          testimonio= { <>"It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. <strong>freeCodeCamp changed my life.</strong>" </> } />

        <Testimonio 
          imagen= {users[1].imagen}
          nombre= {users[1].nombre}
          pais= {users[1].pais}
          cargo= {users[1].cargo}
          empresa= {users[1].empresa}
          testimonio= { <>"<strong>freeCodeCamp was the gateway to my career</strong> as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."</> } />

        <Testimonio 
          imagen= {users[2].imagen}
          nombre= {users[2].nombre}
          pais= {users[2].pais}
          cargo= {users[2].cargo}
          empresa= {users[2].empresa}
          testimonio= { <>"I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on <strong>freeCodeCamp gave me the skills</strong> and confidence I needed to land my dream job as a software engineer at Spotify."</> } />  
      </div>
      
    </div>
  );
}

export default App;
