const clock=document.querySelector('#clock')


setInterval(function(){
  let date=new Date();
  clock.innerHTML=date.toTimeString();
},1000)
