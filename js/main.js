const autput = document.querySelector('.autput')
const ok = document.querySelector('.ok')

function plusMasiv(...args){
   if(args.length === 0){
      return 0
   } else {
      return args[0] + plusMasiv(...args.slice(1))
   }
}

ok.addEventListener('click', function ok(){
   const inp = document.querySelector('.input').value
   console.log(inp);
   console.log(typeof inp);
   let arr = inp.split(',')
   arr = 
   arr.map(function(element){
      return parseInt(element, 10)
   })
   const aut = plusMasiv(...arr)
   console.log(arr);
   if(isNaN(aut) !== true){
      autput.textContent = aut
      console.log(aut);
   }else {
      alert('Введіть цифри через кому!!!')
   }
   
})
