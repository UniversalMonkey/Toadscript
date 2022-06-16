function f() {
    alert( this ); // ? null || Window
  }
  
  let user = {
    g: f.bind(null)
  };
  
  user.g();