const baseEndpoint = 'https://api.github.com'; 
const usersEndpoint = `${baseEndpoint}/users`; 
const $n = document.querySelector('.name'); // agregamos el punto para referenciar la clase
const $b = document.querySelector('.blog'); // quitamos el # y agregamos también punto para referenciar una clase
const $l = document.querySelector('.location'); // Agregamos location en el documento HTML

async function displayUser(username) { //Hacemos la función asyncrona, agregando "async"
 try{ //agregamos try
  $n.textContent = 'cargando...'; 
  const response = await fetch(`${usersEndpoint}/${username}`);  
  const data = await response.json(); //damos valor a data y agregamos JSON para guardarlo en data. 
  console.log(data); 
  $n.textContent = data.name; //quitamos las template literals de las tres variables
  $b.textContent = data.blog;
  $l.textContent = data.location;
  } catch (err){ // agregamos cath
    handleError(err);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.error(err); //Cambiamos "log" por "error"
  $n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError); 