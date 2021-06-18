function Vaiha(Kategoria)
{
   
    var options = [""];

    switch (Kategoria){
        case "Pesuaine":
            options = ["head and shoulders","Terva shampoo","Dove","Men 2-in-1"];
            break;
    }
    switch (Kategoria){
        case "Maito":
            options = ["Maito", "Piimä","Maustamaton jugurtti", "Kerma","Banaani jugurtti" ];
            break;
    }
    switch (Kategoria){
        case "Leipä":
            options = ["Ruisleipä", "Paahtoleipä","Sämpylä",];
            break;
    }
    switch (Kategoria){
        case "Kala":
            options = ["Lohi", "Silakka", "Ahven", "Kuha"];
            break;
    }
    switch (Kategoria){
        case "Liha":
            options = ["Jauheliha", "Naudan sisäfile" , "Porsaan kasslerleike", "Broileri", "Ribs", "Mestarin Wieninleike"];
            break;
    }
    switch (Kategoria){
        case "Elektoriikka":
            options = ["Samsung Galaxy s21" , "iPhone 12 pro max", "Microsoft toimisto hiiri", "Microsoft toimisto hiiri", "Dell tietokone", "Dell näyttö", "Acer näyttö",];
            break;
    }
    


    var select = document.getElementById("Lista2");
    var length = select.options.length;
    for (i = length-1; i >= 0; i--) Lista2.options[i] = null;

   
    for (var i = 0; i < options.length; i++) {
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        Lista2.appendChild(el);

       

    }
}

function Vaiha2(e)
{
    var toDoContainer = document.getElementById('Paikka');

    var paragraph = document.createElement('p');
    paragraph.innerText = e;
    toDoContainer.appendChild(paragraph);  
    e = "";

    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";

    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
}

