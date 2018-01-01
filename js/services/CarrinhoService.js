angular.module('CarrinhoService').factory('carrinhoCompra', function() {
	var itensCarrinho = [];
	var total = 0;

	return {
		// Rotina para adicionar item ao carrinho
		adicionaItem: function(item) {
			itensCarrinho.push(item);
		},

		// Rotina para totalizar pedido
		totalizaPedido: function(carrinho, preco, quantidade) {
			carrinho.total += (preco * quantidade);
			return carrinho;
		},

		// Rotina para listar itens do carrinho
		lista: function() {
			return itensCarrinho;
		},

		// Rotina para retornar total da compra
		retornaTotal: function(carrinho) {
			carrinho.total = 0;
			carrinho.qtd = 0;

			for (i = 0; i < carrinho.length; i++) {
				carrinho.total += parseFloat(carrinho[i].preco) * carrinho[i].qtd;
				carrinho.qtd += carrinho[i].qtd;
			}

			return carrinho.total;
		},

		// Rotina para remover item do carrinho
		removerItemCarrinho: function(carrinho, item) {
			console.log(item.qtd);
			for (i = 0; i < carrinho.length; i++) {
				if (carrinho[i].id == item.id) {
					carrinho[i].qtd = 0;
					carrinho[i].exibir = false;
					carrinho.qtd -= item.qtd;
					break;
				}
			}

			return carrinho;
		},

		// Rotina para listar itens do carrinho
		itensCarrinho: function() {
			return lista().length;
		}
	}
});