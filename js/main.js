// Inicia o módulo de diretivas
angular.module("minhasDiretivas", []);

// Inicia o módulo para o serviço de carrinhos
angular.module('CarrinhoService', []);

// Inicia o módulo principal (foi aplicado o conceito de rótas do AngulasJS para prevalecer SPA - Single Page Application)
angular.module("appAngular", ["minhasDiretivas", "CarrinhoService", "ngRoute"]).config(function($routeProvider, $locationProvider) {
	// Página inicial
	$routeProvider.when('/', {
		templateUrl: 'partials/principal.html',
		controller: 'ProdutoController'
	});

	// Página inicial com clique de categoria
	$routeProvider.when('/:prodId', {
		templateUrl: 'partials/principal.html',
		controller: 'ProdutoController'
	});

	// Detalhes de produto
	$routeProvider.when('/produto-detalhes/:prodId', {
		templateUrl: 'partials/produto-detalhes.html',
		controller: 'ProdutoController'
	});

	// Exceções (se usuário entrasse com uma URL manual não existente, por exemplo)
	$routeProvider.otherwise({redirectTo: '/'});
});

// Função para gerenciar larguras na exibição da tela de totalização
function exibeOcultaTotalCompra(exibe) {
	if (exibe) {
		$("#conteudo")
			.removeClass("conteudo-oculta-tot")
			.addClass("conteudo-exibe-tot");

		$("#resumo")
			.removeClass("totalizador-oculta-tot")
			.addClass("totalizador-exibe-tot")
			.show();
	} else {
		$("#conteudo")
			.removeClass("conteudo-exibe-tot")
			.addClass("conteudo-oculta-tot");

		$("#resumo")
			.removeClass("totalizador-exibe-tot")
			.addClass("totalizador-oculta-tot")
			.hide();
	}
}