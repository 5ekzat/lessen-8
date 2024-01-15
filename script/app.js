const btnWatchMenu=document.getElementById('watchMenu')
const currencyBtn=document.querySelector('.currency')
const prices=document.querySelectorAll('.products-item-price')
const productsBtn=document.querySelectorAll('.product-btn')
const inpBurger=document.getElementById('burger')
const inpName=document.getElementById('name')
const inpPhone=document.getElementById('phone')
const btnOrder=document.getElementById('order-btn')
const titles=document.querySelectorAll('.products-item-title')

btnWatchMenu.onclick=()=>{
    document.getElementById('products').scrollIntoView({
        behavior:'smooth'
    })
}

currencyBtn.onclick=()=>{
   let currentCurrent=currencyBtn.innerText //$

   let newCurrency='$'
   let kurs=0

   if(currentCurrent==='$'){
    newCurrency='€'
    kurs=0.91
    for(i=0; i<prices.length; i++){
        let basePrise=prices[i].getAttribute('data-base-price')
        prices[i].innerText=basePrise*kurs+' '+ newCurrency
    }
   } else {
    newCurrency='som'
    kurs=89
    for(i=0; i<prices.length; i++){
        let basePrise=prices[i].getAttribute('data-base-price')
        prices[i].innerText=basePrise*kurs+' '+ newCurrency
    }
   }
   currencyBtn.innerText=newCurrency
   document.getElementById('products').scrollIntoView({
    behavior:'smooth'
})
}
productsBtn.forEach((btn, i)=>{
    btn.onclick=()=>{
        document.getElementById('order').scrollIntoView({
            behavior:'smooth'
        })
        inpBurger.value=`${titles[i].innerText}-${prices[i].innerText}`
    }   
})

btnOrder.onclick=()=>{
    let burgerInput = inpBurger;
    let nameInput = inpName;
    let phoneInput = inpPhone;

        if (!burgerInput.value || !nameInput.value || !phoneInput.value) {
            alert('Пожалуйста, заполните все поля.');
            return;
        }

        alert('Заказ принят!');
}