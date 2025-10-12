document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
  
    
    console.log("Имя:", name);
    console.log("Email:", email);
  
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
  });
  

  let forms = document.querySelectorAll('form');
  window.dataLayer = window.dataLayer || [];
  forms.forEach(form => {
      form.addEventListener('submit', event => {
          event.preventDefault();
          dataLayer.push({
              'event': 'form_submit',
              'formId': form.id,
              'data': Object.fromEntries(new FormData(form))
          });
      });
  });
