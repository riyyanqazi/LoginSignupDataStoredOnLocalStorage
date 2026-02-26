let btn = document.querySelector("button");
let inputs = document.querySelectorAll("input");


let email = localStorage.getItem("email");
let password = localStorage.getItem("password");


btn.addEventListener('click',()=>{

    if(email===inputs[0].value && password==inputs[1].value) {
        alert(`finally Login `)
        window.location.href='dashboard.html'
    }
    else{
        alert(`Check Email or password`)    
    }
})
// console.log(a[4].email);




// btn.addEventListener("click", () => {
//   let email = inputs[0].value;
//   let password = inputs[1].value;
//   if (  === getemail && password === getpassword) {
//     alert("Login Successfully");
//   } else {
//     alert(`enter the correct email or password`);
//   }
// });
