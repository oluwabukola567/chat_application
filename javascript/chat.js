const form = document.querySelector(".typing-area"),
inputField = form.querySelector(".input-field"),
sendbtn = form.querySelector("button"),
chatBox = document.querySelector(".chat-box");

form.onsubmit = (e)=> {
   e.preventDefault(); //prevent form from submitting
}




sendbtn.onclick = ()=>{

    let xhr = new XMLHttpRequest();  //creating XML request
    xhr.open("POST","php/insert-chat.php", true);
    xhr.onload = ()=>{
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                inputField.value = "";
                scrollToBottom();


            }

        }

    }
    //sending the form data from Ajax to php
    let formData = new FormData(form); //creating new form data 
    xhr.send(formData); //sending the form data to php
   

}
chatBox.onmouseenter = ()=>{
    chatBox.classList.add("active");
}
chatBox.onmouseleave = ()=>{
    chatBox.classList.remove("active");
}

setInterval(() => {
    //Ajax Started
    let xhr = new XMLHttpRequest();  //creating XML request
    xhr.open("POST","php/get-chat.php", true);
    xhr.onload = ()=>{
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                let data = xhr.response;
                chatBox.innerHTML = data;
                   if(!chatBox.classList.contains("active")){
                        scrollToBottom();
                   }
                }   

                }
            }
    

    //sending the form data from Ajax to php
    let formData = new FormData(form); //creating new form data 
    xhr.send(formData); //sending the form data to php
    
}, 500);

function scrollToBottom(){
    chatBox.scrollTo = chatBox.scrollHeight;

}