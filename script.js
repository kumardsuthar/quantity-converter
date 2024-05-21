let select = document.getElementById("list1");

let add = document.createElement("li");

  select.appendChild(add);
let text = document.createTextNode("sevices");

add.appendChild(text);   // add text in add veriable



// let rem = select.firstElementChild;
// select.removeChild(rem);

let rem = select.firstElementChild.nextElementSibling;

select.removeChild(rem);

let rp = select.firstElementChild;
console.log(select);


// insert adjacent HTML  :::: -----

// auto convert text in html tag

//  1. beforebrgin   2.afterbegin   3.beforeend    4.afterend

let el = document.getElementById("intro");
let html= " <h1>main heading </h1>";
   el.insertAdjacentHTML("beforebegin",html)

 
