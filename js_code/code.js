// Quando o formulário for submetido, mostrar o pop-up
document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault(); // Evita que o formulário seja enviado normalmente
    document.getElementById("myModal").style.display = "block";
  });
  
  // Quando o usuário clicar no botão "x", fechar o pop-up
  document.getElementsByClassName("close")[0].addEventListener("click", function(){
    document.getElementById("myModal").style.display = "none";
  });
  