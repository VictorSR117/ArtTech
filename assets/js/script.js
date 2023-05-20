let name = document.querySelector("#name");
let job = document.querySelector("#job");
let msg = document.querySelector("#message");
let form = document.querySelector("#form").addEventListener("submit",event=>{
    event.preventDefault();
    let data = {name: name.value, email: email.value, msg: msg.value}
    fetch("https://reqres.in/api/users", { method: "POST", body: JSON.stringify(data)}).then(response => response.json()).then(response => alert("Cadastro Realizado com Sucesso!"))
});