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
              'item': 'item_3',
              'data': Object.fromEntries(new FormData(form))
          });
      });
  });

  let buttonTest = document.querySelectorAll('btn__test-new');
  window.dataLayer = window.dataLayer || [];
  buttonTest.forEach(button => {
      button.addEventListener('click', event => {
          event.preventDefault();
          dataLayer.push({
              'number':'next',
              'item': 'item_1',
              
          });
          dataLayer.push({
            "ecommerce":[{
                "currencyCode":"RUB",
                "purchase":{
                    "id":"233529",
                    "products":
                    {"id":2,
                    "name":"МАГНИЙ ХЕЛАТ НЕЙРО 60",
                    "quantity":1,
                    "price":1150,
                    "brand":"Оптисалт",
                    "category":"Лекарственные препараты и БАД","list":"Оформление заказа",
                    "position":0
                }
            }}
        ]
            
        });
      });
  });


  