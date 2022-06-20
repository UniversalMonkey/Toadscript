class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }
  
  async function loadJson(url) {
    const response = await fetch (url)
    if (response.status === 200 ){
        return await response.json()
    }
    throw new HttpError(response)
  }
  
  // Запрашивать логин, пока github не вернёт существующего пользователя.
 async function demoGithubUser() {
    const name = prompt("Введите логин?", "iliakan");

    try {
        const userResponse =  await loadJson(`https://api.github.com/users/${name}`)
        alert(userResponse.name)
        return userResponse
    }
    catch (error) {
        if(error instanceof HttpError && error.response.status === 404){
            alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
            return demoGithubUser()
        }
        else{
            throw error
        }
    }
}
  
  demoGithubUser();