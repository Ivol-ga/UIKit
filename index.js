document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
  
    
    console.log("Имя:", name);
    console.log("Email:", email);
  
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
  });
  
