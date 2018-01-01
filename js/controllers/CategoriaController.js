/* Controller para gerenciar dados de categorias
 * No mock de dados:
 * Nome é exibido nos links de categorias
 * Img é a imagem que representa a categoria (ao clicar no link da mesma)
 */
angular.module('appAngular').controller('CategoriaController', function($scope) {
	$scope.categoria = [
		{
			"nome": "Kitchen",
			"img": "img/categ-cozinha.jpg"
		},
		{
			"nome": "Sports",
			"img": "img/categ-esportes.jpg"
		},
		{
			"nome": "Office",
			"img": "img/categ-escritorio.jpg"
		},
		{
			"nome": "Apparel",
			"img": "img/categ-roupas.jpg"
		}
	];

	$scope.teste = function() {
		alert('Teste');
	}
});