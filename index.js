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
                    "name":"Композиция \\"Ромашковое поле\\",
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


var payload = {
ecommerce: {
currencyCode: "RUB",
purchase: {
actionField: {
id: ORDER_ID,
revenue: 4505
},
products: [
{
id: "SU/MRV-SVX/20260531-20260601," + ORDER_ID,
name: "Минеральные Воды — Екатеринбург",
price: 4505,
brand: "SU-Aeroflot",
category: "Эконом",
quantity: 1,
variant: "Минеральные Воды — Екатеринбург/20260531-20260601/1-0-0," + ORDER_ID,
list: "PromoBlock"
}
]
}
}
};

 


(function () {
var COUNTER_ID = 17276998;
var ORDER_ID = "777777777777";

if (typeof ym !== "function") {
console.error("Метрика не найдена на странице");
return;
}

window.dataLayer = window.dataLayer || [];

var payload = {
ecommerce: {
currencyCode: "RUB",
purchase: {
actionField: {
id: ORDER_ID,
revenue: 4505
},
products: [
{
id: "SU/MRV-SVX/20260531-20260601," + ORDER_ID,
name: "Минеральные Воды — Екатеринбург",
price: 4505,
brand: "SU-Aeroflot",
category: "Эконом",
quantity: 1,
variant: "Минеральные Воды — Екатеринбург/20260531-20260601/1-0-0," + ORDER_ID,
list: "PromoBlock"
}
]
}
}
};

window.dataLayer.push(payload);

ym(COUNTER_ID, "getClientID", function (clientID) {
ym(COUNTER_ID, "params", {
order_id: ORDER_ID,
order_time: new Date().toISOString(),
client_id: clientID ||
});

console.log("purchase отправлен");
console.log("params отправлены");
console.log("client_id:", clientID || );
console.log("payload:", payload);
});
})()