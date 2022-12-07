function abrirMenu (){
   let menuAberto = document.getElementById('menu');

   if (menuAberto.style.width == "0px"){
    menuAberto.style.width = "180px";
   }else{
    menuAberto.style.width = "0px";
   }

}