angular.module("appAngular").controller("CarrinhoController", function($scope, carrinhoCompra) {
	// Estruturas do carrinho
	$scope.carrinho = [];
	$scope.total = $scope.qtd = $scope.ship = 0;

	// Operações com o serviço de carrinho de compras
	$scope.adicionarAoCarrinho = function(item, qtd) {
		var adiciona = true; // controla se produto será incrementado ou adicionado no carrinho
		$scope.carrinho = carrinhoCompra.lista();
		item.exibir = true;

		// Verifica se o produto já não está no carrinho de compras (se estiver, apenas incrementa quantidade do mesmo)
		for (i = 0; i < $scope.carrinho.length; i++) {
			if ($scope.carrinho[i].id == item.id) {
				$scope.carrinho[i].qtd += qtd;

				if ($scope.carrinho[i].qtd > 0)
					$scope.carrinho[i].exibir = true;

				adiciona = false;
				break;
			}
		}

		// Caso o produto não esteja no carrinho: adiciona
		if (adiciona)
		{			
			item.qtd = qtd;
			carrinhoCompra.adicionaItem(item);
		}

		// Incrementa a quantidade de itens
		$scope.incrementaQtd(qtd);

		// Totaliza a compra
		carrinhoCompra.totalizaPedido(item.preco, qtd);
		$scope.total = carrinhoCompra.retornaTotal($scope.carrinho);

		exibeOcultaTotalCompra(true);
	}

	// Retorna a relação de itens contidos no carrinho de compra
	$scope.lista = function() {
		return $scope.carrinho;
	}

	// Retorna a quantidade de itens no carrinho (como um todo)
	$scope.itensCarrinho = function() {
		return $scope.lista().length;
		//return carrinhoCompra.itensCarrinho();
	}

	// Oculta a impressão do totalizador (ajustando larguras da tela)
	$scope.fechaTotalizador = function() {
		exibeOcultaTotalCompra(false);
	}

	// Rotina para totalizar pedido de compra
	$scope.totalizaPedido = function(preco, qtd) {
		$scope.total += (preco * qtd);
	}

	// Rotina para retornar total da compra
	$scope.retornaTotal = function() {
		$scope.total = 0;
		$scope.qtd = 0;

		for (i = 0; i < $scope.carrinho.length; i++) {
			$scope.total += parseFloat($scope.carrinho[i].preco) * $scope.carrinho[i].qtd;
			$scope.qtd += $scope.carrinho[i].qtd;
		}

		return $scope.total;
	}

	// Rotina para incrementar quantidade de compra
	$scope.incrementaQtd = function(qtd) {
		$scope.qtd += qtd;
	}

	// Retorna quantidade de itens
	$scope.retQtd = function() {
		return $scope.qtd;
	}

	// Rotina para retornar valor de Shipping (este recurso não é usado na aplicação)
	$scope.retShip = function() {
		return $scope.ship;
	}

	// Rotina para retornar valor final do pedido: Shipping (por hora não tratado pela aplicação) + valor da compra
	$scope.retValorFinalPedido = function() {
		return ($scope.ship + $scope.total);
	}

	// Rotina para remover um item do carrinho de compras
	$scope.removerItemCarrinho = function(item) {
		$scope.qtd -= item.qtd;
		$scope.carrinho = carrinhoCompra.removerItemCarrinho($scope.carrinho, item);
		$scope.total = carrinhoCompra.retornaTotal($scope.carrinho);
	}

	// Rotina disparada ao alterar quantidade do item na totalização/sumarização
	$scope.atualizaItemCarrinho = function(item, qtd) {
		// Se nova quantidade for menor ou igual a zero: remove o item do carrinho e deixa de exibí-lo
		if (qtd <= 0) {
			$scope.carrinho = carrinhoCompra.removerItemCarrinho($scope.carrinho, item);

			for (i = 0; i < $scope.carrinho.length; i++) {
				if ($scope.carrinho[i].id == item.id) {
					$scope.carrinho[i].qtd = 0;
					$scope.carrinho[i].exibir = false;
					break;
				}
			}
		} else if (qtd > 0) {
			carrinhoCompra.totalizaPedido($scope.carrinho, item.preco, qtd);
			$scope.total = carrinhoCompra.retornaTotal();
		}
	}
});