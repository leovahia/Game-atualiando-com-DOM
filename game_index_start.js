function star(){
    
    let btn = document.createElement("input");
    btn.type = 'button';
    btn.value = 'começar';
    btn.onclick = function(){open("game_pag_01.html")};    
    document.querySelector(".btnDinamic").appendChild(btn);
  

}


function mudaTema(){

    if (optionDark.checked){
        document.body.classList.add("dark-mode");
    }else if (optionLight.checked){
        document.body.classList.remove("dark-mode");
    }
}

let optionDark = document.getElementById("dark");
let optionLight = document.getElementById("light");

optionDark.addEventListener("change", mudaTema);
optionLight.addEventListener("change", mudaTema);

star();


