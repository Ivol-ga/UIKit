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
              'item': 'item_1',
              'item': 'item_3-test',
              'data': Object.fromEntries(new FormData(form))
          });
      });
  });

/*   window.ym(import.meta.env.VITE_APP_YM_BASE_ID, 'init', {
    clickmap:true,
    trackLinks:true,
    defer: true,
    accurateTrackBounce:true,
    ecommerce:'tg_shop_ecom',
    userParams: {
    botname: shopInfo?.botName || undefined,
    UserID: lp.initData?.user?.id,
    },
    }); */
  
/*   <script>

$(document).ready(function () {
    setTimeout(function() {
        ym(104802823,'reachGoal','time_site');
    }, 15000) // 15 секунд
});
</script>*/


