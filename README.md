# ProjetoWeb
Catálogo de produtos e gestão de pedido de compra (tecnologias de Front End).

# Framework Javascript Utilizado
AngularJS.

# Princípios utilizados
Web semântica (section, aside, footer, figure, figcaption) e responsividade com CSS3/Bootstrap (navegadores: Google Chrome, Microsoft Edge, Mozilla Firefox e Opera).
A simulação do produto para dispositivos móveis foi feita considerando: Iphone 7, IPad PRO e Galaxy S5. Para todos estes, considerou-se analisar com e sem rotação de tela. O zoom utilizado, em console, foi de 100%.

# Layout e dados
- O projeto, para fins de manter o conceito de SPA (Single Page Application), utilizou o conceito de rotas do AngularJS;
- Foram definidos Controllers para: categoria, produtos e carrinho de compras (este consumindo funções de um serviço que foi criado caso outros Controllers precisassem usar os mesmos comportamentos);
- Views parciais foram registradas no diretório partials;
- Views carregadas em mais de uma página, sem alteração em layout, foram incluídas no diretório includes. Estas foram inseridas pela diretiva do angular: ng-include;
- As imagens estão contidas no diretório img. A exibição dos dados considerou o mock de dados (JSON) contido no Controller de produto. A exibição de categorias considerou o mock de dados (JSON) contido no Controller de categoria;

# Totalizador de compra
Como o bootstrap requer o uso da biblioteca jQuery, a mesma foi utilizada para gerenciar exibir/ocultar o totalizador.

# Diretório
Os diretórios do projeto estão na pasta raíz. A mesma tem também um diretório chamado Projeto: este contém todos os diretórios do projeto e foi extraído a partir do local onde desenvolvi (C:\xampp\htdocs).
