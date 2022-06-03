function unique(arr) {
    return (
        arr.filter( (element,index,array) =>{

        return array.indexOf(element) == index
    }))
  }
  

  let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];
  
  alert( unique(strings) ); // кришна, харе, :-O