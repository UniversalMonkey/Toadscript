async function loadJson(url) {
    const response = await fetch(url)
    
    if(response.status === 200){
        return await response.json()
    }
    throw new Error(response.status)
  }
  
  loadJson('no-such-user.json')
  .then(result => console.log(result)) // (3)
    .catch(alert); // Error: 404