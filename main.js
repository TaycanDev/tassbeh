// let = d ;
// d = 7;
// let = c ;

// console.log(c + d);

// let name = "Abdurahmon";

// function openConsole()
//      {
//         let num = "Mening ismim " + " " + name;
//         console.log(num)
//      }

//      openConsole()

// let yosh = 13;
// const ageFunc = () => {
//     let name = "abdurahmon"
//     if (yosh >= 18) {
//         alert("Zo'r Taycan" + name)
//     } else if (yosh <= 18) {
//         alert(name + "Uyga bor Taycan!!!")
//     }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function openConsole() {

//   for (let i = 0; i < arr.length; i++) {
//     if ( arr[i] % 2 == 0 ) {
//       console.log(arr[i]);
//     }
//   }

// }

//openConsole();




// let num = 0;

// const myApp = (el) => {
//   el.innerHTML = "Click me " + " " + num++;
// };
// const myCod = (el) => { 
//   el.innerHTML = "Click me " + " " + num--;
// };
// const myyCod = (el) => {
//   el.innerHTML = myApp = myApp;
// };


;


document.querySelector('.button').addEventListener('click', function(){
    a = document.querySelector('.ekran')
    a.value = parseInt(a.value) +1
    console.log(a.value);

    if (a.value == "1") {
        alert("Subhanolloh");
        // a.value = 0;
       }else if (a.value == "33"){
        alert("Alhamdulilah")
       }else if (a.value == "66"){
        alert("Allohuakbar")
       }else if (a.value == "99"){
        alert("The end")
         a.value = 0;
       }
})







//  document.querySelector('h').addEventListener ('click', function(){
//     a = document.querySelector('.ekran')
//      a.value = parseInt(a.value) +1
//     console.log(a.value);


// function fi() {
//   this.style.backgraund = "red";

// }
// let p = document.querySelectorAll

// function f1() {
//      this.style.background = "red";
//    }
  
//   let p = document.querySelectorAll(".p");
//    for (let index = 0; index < p.length; index++) {
//      p[index].onclick = f1;
//    }