function unique(arr) {
    return Array.from(new Set(arr))
  }
  
  let values_example = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];

  alert( unique(values_example) ); // Hare,Krishna,:-O