const form = document.querySelector(".login form"),
continueBtn = form.querySelector(".button input"),
 errorText= form.querySelector(".error-txt");



form.onsubmit = (e)=> {
    e.preventDefault(); //prevent form from submitting
}

continueBtn.onclick = ()=>{
    //Ajax Started
    let xhr = new XMLHttpRequest();  //creating XML request
    xhr.open("POST","php/logging.php", true);
    xhr.onload = ()=>{
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                let data = xhr.response;
                console.log(data)
               if(data == "success"){
                    location.href= "users.php"
                    
                }else{
                    errorText.textContent = data;
                    errorText.style.display = "block";
                   

                }
            }
        }

    }
    //sending the form data from Ajax to php
    let formData = new FormData(form); //creating new form data 
    xhr.send(formData); //sending the form data to php
   
}