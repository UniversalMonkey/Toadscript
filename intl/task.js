let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

const collactor = new Intl.Collator("ru",{
    sensitivity: "accent",
});

animals.sort( (a,b) => collactor.compare(a,b))

alert( animals ); // АИСТ,ёж,енот,ехидна,тигр,ЯК