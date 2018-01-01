// Diretiva para impressão dos itens de compra na tela inicial (Thumbnail do Bootstrap)
// Retorna um Directive Definition Object (DDO)
angular.module("minhasDiretivas").directive("painelProduto", function(){
   var ddo = {};

   ddo.restrict = "AE";

   ddo.scope = {
   	id: "@",
      url: "@",
      nome: "@",
      preco: "@",
      descr: "@"
   }

   ddo.templateUrl = "./js/directives/painelProduto.html";

   return ddo;
});