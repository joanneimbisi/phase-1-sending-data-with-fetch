
 function submitData (name, email){
     console.log(name,email)
    const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email
        }
        )}
    
     return fetch('http://localhost:3000/users',configurationObject)
      .then(response => response.json())
      .then(object => document.body.innerHTML = object.id)  

.catch(function (error) { 
    let message = 'Unauthorized Access'
    document.body.innerHTML = error.message
}
)}
