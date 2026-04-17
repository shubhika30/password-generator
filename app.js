function generate(){
    let dictionary = "";
    if(document.getElementById("id1").checked){
        dictionary += "qwertyuiopasdfghjklzxcvbnm";
    }

    if(document.getElementById("id2").checked){
        dictionary += "QWERTYUIOPASDFGHJKLZXCVBNM";
    }

    if(document.getElementById("id3").checked){
        dictionary += "1234567890";
    }

    if(document.getElementById("id4").checked){
        dictionary += "!@#$%^&*()";
    }
    // console.log(dictionary);

    //now we will decide the length of the password

    let passLength = document.querySelector('input[type = "range"]').value;

    if (passLength <1, dictionary.length ===0){
        return;
    }

    let password = "";
    for(i = 0; i <passLength;i++){
        const pos = Math.floor(Math.random()    *dictionary.length);
        password += dictionary[pos];
    }

    document.querySelector('input[type = "text"]').value = password;

    console.log(password);
}

const rangeInput = document.querySelector(".input-len");
const span = document.querySelector(".inp span");

rangeInput.addEventListener("input", ()=>{
    span.textContent = rangeInput.value; 
})

// console.log(span);

let genPass = document.querySelector(".gen-but");
genPass.addEventListener("click" , function (){
    generate(span.innerText);
})    