let input = document.querySelector(".input");
let test = document.querySelector(".para");
let newpara = document.querySelector(".new");

input.addEventListener("blur",()=>{
    newpara.innerHTML= "";
    let str = test.innerHTML.split(" ");
    console.log(str);
    test.style.display = "none";
    str.forEach(element => {
        if(element.toLocaleLowerCase() === input.value.toLocaleLowerCase())
        {
            let span = document.createElement("span");
            span.textContent = `${element} `;
            span.className = "found";
            newpara.appendChild(span);
        }
        else
        {
            let newspan = document.createElement("span");
            newspan.textContent = `${element} `;
            newpara.appendChild(newspan);
        }
        
    });
})