angular.module("appAngular").controller("ProdutoController", function($scope, $routeParams) {
	// JSON (mock) de produtos
	$scope.produto = [
		{
			"id": "PROD01",
			"nome": "Boné",
			"preco": "40",
			"url": "img/bone-branco.jpg",
			"categoria": "Apparel",
			"alt": "Boné Branco",
			"descricao": "Protege contra o sol e se adequa bem como acessório esportivo",
			"detalhe": "Não colocá-lo na máquina de lavar",
			"fotos": {
				"foto1": "img/bone-branco.jpg",
				"foto2": "img/bone-2.jpg",
			}
		},
		{
			"id": "PROD02",
		 	"nome": "Camisa",
		 	"preco": "80",
		 	"url": "img/camisa-lilas.jpg",
		 	"categoria": "Apparel",
		 	"alt": "Camisa Lilás",
		 	"descricao": "Camisa nos tamanhos P, M, G e GG",
			"detalhe": "Adequada para trabalho e passeios casuais",
			"fotos": {
				"foto1": "img/camisa-lilas.jpg",
				"foto2": "img/camisa-2.jpg",
			}
		},
		{
			"id": "PROD03",
			"nome": "Camiseta",
			"preco": "60",
			"url": "img/camiseta-preta.jpg",
			"categoria": "Apparel",
			"alt": "Camiseta Preta",
		 	"descricao": "Camiseta nos tamanhos P, M, G e GG",
			"detalhe": "Adequada para trabalho e passeios casuais",
			"fotos": {
				"foto1": "img/camiseta-preta.jpg",
				"foto2": "img/camiseta-2.jpg",
			}
		},
		{
			"id": "PROD04",
			"nome": "Bermuda",
			"preco": "40",
			"url": "img/bermuda-preta.jpg",
			"categoria": "Sports",
			"alt": "Bermuda",
		 	"descricao": "Todos os tamanhos",
			"detalhe": "Adequado para passeios casuais ou uso caseiro",
			"fotos": {
				"foto1": "img/bermuda-preta.jpg",
				"foto2": "img/bermuda-2.jpg",
			}
		},
		{
			"id": "PROD05",
			"nome": "Bola", 
			"preco": "230",
			"url": "img/bola-futebol.jpg",
			"categoria": "Sports",
			"alt": "Bola de Futebol",
		 	"descricao": "Objeto profissional",
			"detalhe": "Não fura",
			"fotos": {
				"foto1": "img/bola-futebol.jpg",
				"foto2": "img/bola-futebol-2.jpg",
			}
		},
		{ 
			"id": "PROD06",
			"nome": "Chuteira",
			"preco": "200",
			"url": "img/chuteira-preta.jpg",
			"categoria": "Sports",
			"alt": "Chuteira",
		 	"descricao": "Produto para jogadores iniciantes",
			"detalhe": "Não deixar em lugar muito quente",
			"fotos": {
				"foto1": "img/chuteira-preta.jpg",
				"foto2": "img/chuteira-verde.jpg",
			}
		},
		{ 
			"id": "PROD07",
			"nome": "Luvas",
			"preco": "25",
			"url": "img/luvas-academia.jpg",
			"categoria": "Sports",
			"alt": "Luvas para Treino",
		 	"descricao": "Para utilização em treinamentos diversos",
			"detalhe": "Deve-se manter assepsia constante",
			"fotos": {
				"foto1": "img/luvas-academia.jpg",
				"foto2": "img/luvas-2.jpg",
			}
		},
		{ 
			"id": "PROD08",
			"nome": "Computador",
			"preco": "1250",
			"url": "img/computador-preto.jpg",
			"categoria": "Office",
			"alt": "Computador",
		 	"descricao": "Computador 4GB RAM",
			"detalhe": "Direto do fabricante",
			"fotos": {
				"foto1": "img/computador-preto.jpg",
				"foto2": "img/computador-2.jpg",
			}
		},
		{ 
			"id": "PROD09",
			"nome": "Mesa",
			"preco": "400", 
			"url": "img/mesa-escritorio.jpg",
			"categoria": "Office",
			"alt": "Mesa para Escritório",
		 	"descricao": "Mesa nos tamanhos NxN",
			"detalhe": "Feita sob medida",
			"fotos": {
				"foto1": "img/mesa-escritorio.jpg",
				"foto2": "img/mesa-2.jpg",
			}
		},
		{ 
			"id": "PROD10", 
			"nome": "Fogão",
			"preco": "700", 
			"url": "img/fogao-branco.jpg",
			"categoria": "Kitchen",
			"alt": "Fogão",
		 	"descricao": "Funcionalidades mais práticas e ágeis",
			"detalhe": "Operável por comandos de voz",
			"fotos": {
				"foto1": "img/fogao-branco.jpg",
				"foto2": "img/fogao-2.jpg",
			}
		},
		{ 
			"id": "PROD11",
			"nome": "Geladeira",
			"preco": "900",
			"url": "img/geladeira-prata.jpg",
			"categoria": "Kitchen",
			"alt": "Geladeira",
		 	"descricao": "Geladeira Frost Free",
			"detalhe": "Garantia de 3 anos",
			"fotos": {
				"foto1": "img/geladeira-prata.jpg",
				"foto2": "img/geladeira-2.jpg",
			}
		},
		{
			"id": "PROD12",
			"nome": "Vestido",
			"preco": "200",
			"url": "img/vestido.jpg",
			"categoria": "Apparel",
			"alt": "Vestido",
		 	"descricao": "Vestido elegante",
			"detalhe": "Adequado para eventos diversos",
			"fotos": {
				"foto1": "img/vestido.jpg",
				"foto2": "img/vestido-2.jpg",
			}
		},
		{ 
			"id": "PROD13",
			"nome": "Armário",
			"preco": "500",
			"url": "img/armario-1.jpg",
			"categoria": "Kitchen",
			"alt": "Armário",
		 	"descricao": "Armário para Cozinha",
			"detalhe": "De última geração",
			"fotos": {
				"foto1": "img/armario-1.jpg",
				"foto2": "img/armario-2.jpg",
			}
		},
		{ 
			"id": "PROD14",
			"nome": "Pratos",
			"preco": "100",
			"url": "img/prato-1.jpg",
			"categoria": "Kitchen",
			"alt": "Prato",
		 	"descricao": "Prato elegante",
			"detalhe": "Não risca",
			"fotos": {
				"foto1": "img/prato-1.jpg",
				"foto2": "img/prato.jpg",
			}
		},
		{ 
			"id": "PROD15",
			"nome": "Talheres",
			"preco": "120",
			"url": "img/talheres-1.jpg",
			"categoria": "Kitchen",
			"alt": "Talheres",
		 	"descricao": "Talheres elegantes",
			"detalhe": "Não riscam a prataria",
			"fotos": {
				"foto1": "img/talheres-1.jpg",
				"foto2": "img/talheres-2.jpg",
			}
		},
		{ 
			"id": "PROD16",
			"nome": "Copos",
			"preco": "30",
			"url": "img/copos-1.jpg",
			"categoria": "Kitchen",
			"alt": "Copos",
		 	"descricao": "Copos elegantes",
			"detalhe": "Não quebram",
			"fotos": {
				"foto1": "img/copos-1.jpg",
				"foto2": "img/copos-2.jpg",
			}
		},
		{ 
			"id": "PROD17",
			"nome": "Halteres",
			"preco": "150",
			"url": "img/halteres-1.jpg",
			"categoria": "Sports",
			"alt": "Halteres",
		 	"descricao": "Halteres de última geração",
			"detalhe": "Ideais para evitar/recuperar lesões",
			"fotos": {
				"foto1": "img/halteres-1.jpg",
				"foto2": "img/halteres-2.jpg",
			}
		},
		{ 
			"id": "PROD18",
			"nome": "Calça",
			"preco": "300",
			"url": "img/jeans-1.jpg",
			"categoria": "Apparel",
			"alt": "Jeans",
		 	"descricao": "Calça da última geração da moda",
			"detalhe": "Não lavar com cloro",
			"fotos": {
				"foto1": "img/jeans-1.jpg",
				"foto2": "img/jeans-2.jpg",
			}
		},
		{ 
			"id": "PROD19",
			"nome": "Cadeira",
			"preco": "150",
			"url": "img/cadeira-1.jpg",
			"categoria": "Office",
			"alt": "Cadeira",
		 	"descricao": "Cadeira de última geração para escritórios",
			"detalhe": "Não deixar no sol",
			"fotos": {
				"foto1": "img/cadeira-1.jpg",
				"foto2": "img/cadeira-2.jpg",
			}
		},
		{ 
			"id": "PROD20",
			"nome": "Impressora",
			"preco": "400",
			"url": "img/impressora-1.jpg",
			"categoria": "Office",
			"alt": "Impressora",
		 	"descricao": "Impressora de última geração para escritórios",
			"detalhe": "Não deixar sem tinta por muito tempo",
			"fotos": {
				"foto1": "img/impressora-1.jpg",
				"foto2": "img/impressora-2.jpg",
			}
		},
		{ 
			"id": "PROD21",
			"nome": "Telefone",
			"preco": "90",
			"url": "img/telefone-1.jpg",
			"categoria": "Office",
			"alt": "Telefone",
		 	"descricao": "Telefone para escritórios",
			"detalhe": "Não deixar sem bateria",
			"fotos": {
				"foto1": "img/telefone-1.jpg",
				"foto2": "img/telefone-2.jpg",
			}
		}
	];

	// Estruturas do controller de produtos
	var categorias = ['Kitchen', 'Apparel', 'Office', 'Sports'];
	$scope.filtro = $scope.imagem = "";

	// Verifica se há parâmetros enviados na rota
	if ($routeParams.prodId) {
		// Gerencia filtro recebido pela rota
		$scope.filtro = (($routeParams.prodId) ? $routeParams.prodId : "");

		// Caso o filtro em questão seja uma categoria: inicia a tela com a imagem de identificação da mesma
		for (i = 0; i < categorias.length; i++) {
			if (categorias[i] == $scope.filtro) {
				switch (categorias[i]) {
					case "Kitchen":
						$scope.imagem = "img/categ-cozinha.jpg";
						break;
					case "Office":
						$scope.imagem = "img/categ-escritorio.jpg";
						break;
					case "Apparel":
						$scope.imagem = "img/categ-roupas.jpg";
						break;
					case "Sports":
						$scope.imagem = "img/categ-esportes.jpg";
						break;
					default:
						break;
				}

				break;
			}
		}
	}

	// Estruturas do controller
	$scope.tamanho = $scope.produto.length;
	$scope.sortOrder = "+nome";
	$scope.foto = $scope.prodinfo = "";
	$scope.qtd = 1;
	$scope.sortText = "A-Z";

	// Function para alterar ordenação de itens (alfabética crescente ou decrescente)
	$scope.altSortOrder = function() {
		$scope.sortOrder = (($scope.sortOrder == "+nome") ? "-nome" : "+nome");
		$scope.sortText = (($scope.sortText == "A-Z") ? "Z-A" : "A-Z");
	}

	// Função para manipular filtro de tela
	$scope.alteraFiltro = function(filtro, recarrega) {
		$scope.filtro = filtro;

		if (filtro == "") {
			$scope.imagem = "";
			window.location.href = "#/" + filtro;
		}

		var alteraImg = true;

		for (i = 0; i < categorias.length; i++) {
			if (categorias[i] == filtro) {
				alteraImg = false;
				break;
			}
		}

		if (alteraImg)
			$scope.imagem = "";

		if (recarrega)
			window.location.href = "#/" + filtro;
	}

	// Alterar imagem de categoria e filtro: redireciona com rota
	$scope.alteraImgFilt = function(categoria, recarrega) {
		$scope.imagem = categoria.img;
		$scope.filtro = categoria.nome;
		window.location.href = "#/" + $scope.filtro;
	}
});