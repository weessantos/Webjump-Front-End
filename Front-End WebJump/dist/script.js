function setupScroll(){new SmoothScroll('a[href*="#"]',{speed:200,speedAsDuration:!0,updateURL:!1})}function homePage(){$("<div class= product-main-title>").appendTo("div.product-header-title"),$(".product-main-title").append("PÁGINA INICIAL")}function abrirMenu(){document.getElementById("search-icon-mobile").style.display="none",document.getElementById("header-logo-mobile").style.display="none",document.getElementById("menu-mobile-ativo").style.display="block",document.getElementById("menu-mobile-fechar").style.display="block",document.getElementById("menu-mobile-abrir").style.position="absolute",document.getElementById("header-mobile").style.alignItems="normal"}function fecharMenu(){document.getElementById("menu-mobile-abrir").style.position="relative",document.getElementById("header-logo-mobile").style.display="block",document.getElementById("search-icon-mobile").style.display="block",document.getElementById("search-icon-mobile").style.position="relative",document.getElementById("menu-mobile-ativo").style.display="none",document.getElementById("menu-mobile-fechar").style.display="none",document.getElementById("header-mobile").style.alignItems="center"}document.addEventListener("scroll",function(){var a=document.documentElement,e=document.body,p="scrollTop",t="scrollHeight";parseInt((a[p]||e[p])/((a[t]||e[t])-a.clientHeight)*100)});var btnInicio=document.getElementById("header-link-inicio");btnInicio.addEventListener("click",function(){$(".product-commerce").remove(),$(".pagination").remove(),$(".product-header-title").empty(),$("#page-path").empty(),$(".product-filter").hide(),$("<div class= page-path-home>").appendTo("div#page-path"),$("<div class= page-path-current>").appendTo("div#page-path"),$(".page-path-home").append("Página Inicial"),$("<div class= page-path-title>").appendTo("div.product-header-title"),$(".page-path-title").append("PÁGINA INICIAL")});var btnCamisetas=document.getElementById("header-link-camisetas");btnCamisetas.addEventListener("click",function(){$.get("mock-api/V1/categories/1",function(a){var e=(e=JSON.parse(a)).items;$(".product-commerce").remove(),$(".pagination").remove(),$(".product-header-title").empty(),$("#page-path").empty(),$(".product-filter").show(),$("<div class= page-path-home>").appendTo("div#page-path"),$("<div class= page-path-current>").appendTo("div#page-path"),$(".page-path-home").append("Página Inicial"),$(".page-path-home").append("&nbsp;"),$(".page-path-home").append(">"),$(".page-path-home").append("&nbsp;"),$(".page-path-current").append("Camisetas"),$("<div class= product-main-title>").appendTo("div.product-header-title"),$(".product-main-title").append("CAMISETAS"),$("<div class= product-commerce >").appendTo("div.product-menu"),$("<div class= pagination >").appendTo("div.product-menu"),$(".pagination").append("<a><</a>"),$(".pagination").append("<a>1</a>"),$(".pagination").append("<a>2</a>"),$(".pagination").append("<a>3</a>"),$(".pagination").append("<a>4</a>"),$(".pagination").append("<a>></a>");for(var p=0;p<e.length;p++){$("<div id='"+("product-div-"+p)+"' >").appendTo("div.product-commerce"),$("#product-div-"+[p]).append("<img src='"+e[p].image+"'class='item' />"),$("#product-div-"+[p]).append("<a class=product-name>"+e[p].name+" </a>"),$("#product-div-"+[p]).append("<a class=product-price> R$ "+e[p].price.toFixed(2)+" </a>"),$("#product-div-"+[p]).append("<a class=product-buy-button>Comprar</a>")}})});var btnCalcas=document.getElementById("header-link-calcas");btnCalcas.addEventListener("click",function(){$.get("mock-api/V1/categories/2",function(a){var e=(e=JSON.parse(a)).items;$(".product-commerce").remove(),$(".pagination").remove(),$(".product-header-title").empty(),$("#page-path").empty(),$(".product-filter").show(),$("<div class= page-path-home>").appendTo("div#page-path"),$("<div class= page-path-current>").appendTo("div#page-path"),$(".page-path-home").append("Página Inicial"),$(".page-path-home").append("&nbsp;"),$(".page-path-home").append(">"),$(".page-path-home").append("&nbsp;"),$(".page-path-current").append("Calças"),$("<div class= product-main-title>").appendTo("div.product-header-title"),$(".product-main-title").append("CALÇAS"),$("<div class= product-commerce >").appendTo("div.product-menu"),$("<div class= pagination >").appendTo("div.product-menu"),$(".pagination").append("<a><</a>"),$(".pagination").append("<a>1</a>"),$(".pagination").append("<a>2</a>"),$(".pagination").append("<a>3</a>"),$(".pagination").append("<a>4</a>"),$(".pagination").append("<a>></a>");for(var p=0;p<e.length;p++){$("<div id='"+("product-div-"+p)+"' >").appendTo("div.product-commerce"),$("#product-div-"+[p]).append("<img src='"+e[p].image+"'class='item' />"),$("#product-div-"+[p]).append("<a class=product-name>"+e[p].name+" </a>"),$("#product-div-"+[p]).append("<a class=product-price> R$ "+e[p].price.toFixed(2)+" </a>"),$("#product-div-"+[p]).append("<a class=product-buy-button>Comprar</a>")}})});var btnSapatos=document.getElementById("header-link-sapatos");btnSapatos.addEventListener("click",function(){$.get("mock-api/V1/categories/3",function(a){var e=(e=JSON.parse(a)).items;$(".product-commerce").remove(),$(".pagination").remove(),$(".product-header-title").empty(),$("#page-path").empty(),$(".product-filter").show(),$("<div class= page-path-home>").appendTo("div#page-path"),$("<div class= page-path-current>").appendTo("div#page-path"),$(".page-path-home").append("Página Inicial"),$(".page-path-home").append("&nbsp;"),$(".page-path-home").append(">"),$(".page-path-home").append("&nbsp;"),$(".page-path-current").append("Sapatos"),$("<div class= product-main-title>").appendTo("div.product-header-title"),$(".product-main-title").append("SAPATOS"),$("<div class= product-commerce >").appendTo("div.product-menu"),$("<div class= pagination >").appendTo("div.product-menu"),$(".pagination").append("<a><</a>"),$(".pagination").append("<a>1</a>"),$(".pagination").append("<a>2</a>"),$(".pagination").append("<a>3</a>"),$(".pagination").append("<a>4</a>"),$(".pagination").append("<a>></a>");for(var p=0;p<e.length;p++){$("<div id='"+("product-div-"+p)+"' >").appendTo("div.product-commerce"),$("#product-div-"+[p]).append("<img src='"+e[p].image+"'class='item' />"),$("#product-div-"+[p]).append("<a class=product-name>"+e[p].name+" </a>"),$("#product-div-"+[p]).append("<a class=product-price> R$ "+e[p].price.toFixed(2)+" </a>"),$("#product-div-"+[p]).append("<a class=product-buy-button>Comprar</a>")}})});var btnContato=document.getElementById("header-link-contato");btnContato.addEventListener("click",function(){$(".product-commerce").remove(),$(".pagination").remove(),$(".product-header-title").empty(),$("#page-path").empty(),$(".product-filter").hide(),$("<div class= page-path-home>").appendTo("div#page-path"),$("<div class= page-path-current>").appendTo("div#page-path"),$(".page-path-home").append("Contato"),$("<div class= page-path-title>").appendTo("div.product-header-title"),$(".page-path-title").append("CONTATO")});var btnRoupas=document.getElementById("list-menu-roupas");btnRoupas.addEventListener("click",function(){$.get("mock-api/V1/categories/1",function(a){var e=(e=JSON.parse(a)).items;$(".product-commerce").remove(),$(".pagination").remove(),$(".product-header-title").empty(),$("#page-path").empty(),$(".product-filter").show(),$("<div class= page-path-home>").appendTo("div#page-path"),$("<div class= page-path-current>").appendTo("div#page-path"),$(".page-path-home").append("Página Inicial"),$(".page-path-home").append("&nbsp;"),$(".page-path-home").append(">"),$(".page-path-home").append("&nbsp;"),$(".page-path-current").append("Roupas"),$("<div class= product-main-title>").appendTo("div.product-header-title"),$(".product-main-title").append("ROUPAS"),$("<div class= product-commerce >").appendTo("div.product-menu"),$("<div class= pagination >").appendTo("div.product-menu"),$(".pagination").append("<a><</a>"),$(".pagination").append("<a>1</a>"),$(".pagination").append("<a>2</a>"),$(".pagination").append("<a>3</a>"),$(".pagination").append("<a>4</a>"),$(".pagination").append("<a>></a>");for(var p=0;p<e.length;p++){$("<div id='"+("product-div-"+p)+"' >").appendTo("div.product-commerce"),$("#product-div-"+[p]).append("<img src='"+e[p].image+"'class='item' />"),$("#product-div-"+[p]).append("<a class=product-name>"+e[p].name+" </a>"),$("#product-div-"+[p]).append("<a class=product-price> R$ "+e[p].price.toFixed(2)+" </a>"),$("#product-div-"+[p]).append("<a class=product-buy-button>Comprar</a>")}var d=p,n=e.length;$.get("mock-api/V1/categories/2",function(a){for(var e=(e=JSON.parse(a)).items,p=0,t=d;t<e.length+n;t++){$("<div id='"+("product-div-"+t)+"' >").appendTo("div.product-commerce"),$("#product-div-"+[t]).append("<img src='"+e[p].image+"'class='item' />"),$("#product-div-"+[t]).append("<a class=product-name>"+e[p].name+" </a>"),$("#product-div-"+[t]).append("<a class=product-price> R$ "+e[p].price+" </a>"),$("#product-div-"+[t]).append("<a class=product-buy-button>Comprar</a>"),p++}})})});var btnSapatosLeft=document.getElementById("list-menu-sapatos");btnSapatosLeft.addEventListener("click",function(){$.get("mock-api/V1/categories/3",function(a){var e=(e=JSON.parse(a)).items;$(".product-commerce").remove(),$(".pagination").remove(),$(".product-header-title").empty(),$("#page-path").empty(),$(".product-filter").show(),$("<div class= page-path-home>").appendTo("div#page-path"),$("<div class= page-path-current>").appendTo("div#page-path"),$(".page-path-home").append("Página Inicial"),$(".page-path-home").append("&nbsp;"),$(".page-path-home").append(">"),$(".page-path-home").append("&nbsp;"),$(".page-path-current").append("Sapatos"),$("<div class= product-main-title>").appendTo("div.product-header-title"),$(".product-main-title").append("SAPATOS"),$("<div class= product-commerce >").appendTo("div.product-menu"),$("<div class= pagination >").appendTo("div.product-menu"),$(".pagination").append("<a><</a>"),$(".pagination").append("<a>1</a>"),$(".pagination").append("<a>2</a>"),$(".pagination").append("<a>3</a>"),$(".pagination").append("<a>4</a>"),$(".pagination").append("<a>></a>");for(var p=0;p<e.length;p++){$("<div id='"+("product-div-"+p)+"' >").appendTo("div.product-commerce"),$("#product-div-"+[p]).append("<img src='"+e[p].image+"'class='item' />"),$("#product-div-"+[p]).append("<a class=product-name>"+e[p].name+" </a>"),$("#product-div-"+[p]).append("<a class=product-price> R$ "+e[p].price.toFixed(2)+" </a>"),$("#product-div-"+[p]).append("<a class=product-buy-button>Comprar</a>")}})});var btnAcessorios=document.getElementById("list-menu-acessorios");btnAcessorios.addEventListener("click",function(){$(".product-commerce").remove(),$(".pagination").remove(),$(".product-header-title").empty(),$("#page-path").empty(),$(".product-filter").show(),$("<div class= page-path-home>").appendTo("div#page-path"),$("<div class= page-path-current>").appendTo("div#page-path"),$(".page-path-home").append("Página Inicial"),$(".page-path-home").append("&nbsp;"),$(".page-path-home").append(">"),$(".page-path-home").append("&nbsp;"),$(".page-path-current").append("Acessórios"),$("<div class= product-main-title>").appendTo("div.product-header-title"),$(".product-main-title").append("ACESSÓRIOS")});var btnCorrida=document.getElementById("list-menu-corrida");btnCorrida.addEventListener("click",function(){$(".product-commerce").remove(),$(".pagination").remove(),$(".product-sub-title").remove();var a=$(".page-path-current").text();$("#page-path").empty(),$(".page-path-title").remove(),$(".product-filter").show(),$("<div class= page-path-home>").appendTo("div#page-path"),$("<div class= page-path-current>").appendTo("div#page-path"),$(".page-path-home").append("Página Inicial"),$(".page-path-home").append("&nbsp;"),$(".page-path-home").append(">"),$(".page-path-home").append("&nbsp;"),$(".page-path-home").append(a),$(".page-path-home").append("&nbsp;"),$(".page-path-home").append(">"),$(".page-path-home").append("&nbsp;"),$(".page-path-current").append("Corrida"),$("<div class= product-sub-title>").appendTo("div.product-header-title"),$(".product-sub-title").append("&nbsp;"),$(".product-sub-title").append("- CORRIDA")});var btnCaminhada=document.getElementById("list-menu-caminhada");btnCaminhada.addEventListener("click",function(){$(".product-commerce").remove(),$(".pagination").remove(),$(".product-sub-title").remove();var a=$(".page-path-current").text();$("#page-path").empty(),$(".page-path-title").remove(),$(".product-filter").show(),$("<div class= page-path-home>").appendTo("div#page-path"),$("<div class= page-path-current>").appendTo("div#page-path"),$(".page-path-home").append("Página Inicial"),$(".page-path-home").append("&nbsp;"),$(".page-path-home").append(">"),$(".page-path-home").append("&nbsp;"),$(".page-path-home").append(a),$(".page-path-home").append("&nbsp;"),$(".page-path-home").append(">"),$(".page-path-home").append("&nbsp;"),$(".page-path-current").append("Caminhada"),$("<div class= product-sub-title>").appendTo("div.product-header-title"),$(".product-sub-title").append("&nbsp;"),$(".product-sub-title").append("- CAMINHADA")});var btnCasual=document.getElementById("list-menu-casual");btnCasual.addEventListener("click",function(){$(".product-commerce").remove(),$(".pagination").remove(),$(".product-sub-title").remove();var a=$(".page-path-current").text();$("#page-path").empty(),$(".page-path-title").remove(),$(".product-filter").show(),$("<div class= page-path-home>").appendTo("div#page-path"),$("<div class= page-path-current>").appendTo("div#page-path"),$(".page-path-home").append("Página Inicial"),$(".page-path-home").append("&nbsp;"),$(".page-path-home").append(">"),$(".page-path-home").append("&nbsp;"),$(".page-path-home").append(a),$(".page-path-home").append("&nbsp;"),$(".page-path-home").append(">"),$(".page-path-home").append("&nbsp;"),$(".page-path-current").append("Casual"),$("<div class= product-sub-title>").appendTo("div.product-header-title"),$(".product-sub-title").append("&nbsp;"),$(".product-sub-title").append("- CASUAL")});var btnSocial=document.getElementById("list-menu-social");btnSocial.addEventListener("click",function(){$(".product-commerce").remove(),$(".pagination").remove(),$(".product-sub-title").remove();var a=$(".page-path-current").text();$("#page-path").empty(),$(".page-path-title").remove(),$(".product-filter").show(),$("<div class= page-path-home>").appendTo("div#page-path"),$("<div class= page-path-current>").appendTo("div#page-path"),$(".page-path-home").append("Página Inicial"),$(".page-path-home").append("&nbsp;"),$(".page-path-home").append(">"),$(".page-path-home").append("&nbsp;"),$(".page-path-home").append(a),$(".page-path-home").append("&nbsp;"),$(".page-path-home").append(">"),$(".page-path-home").append("&nbsp;"),$(".page-path-current").append("Social"),$("<div class= product-sub-title>").appendTo("div.product-header-title"),$(".product-sub-title").append("&nbsp;"),$(".product-sub-title").append("- SOCIAL")});var btnCamisetasMobile=document.getElementById("mobile-link-camisetas");btnCamisetasMobile.addEventListener("click",function(){$.get("mock-api/V1/categories/1",function(a){var e=(e=JSON.parse(a)).items;console.log(e),$(".product-commerce").remove(),$(".pagination").remove(),$(".product-header-title").empty(),$("<div class= product-main-title>").appendTo("div.product-header-title"),$(".product-main-title").append("CAMISETAS"),$("<div class= product-commerce >").appendTo("div.product-menu"),$("<div class= pagination >").appendTo("div.product-menu"),$(".pagination").append("<a><</a>"),$(".pagination").append("<a>1</a>"),$(".pagination").append("<a>2</a>"),$(".pagination").append("<a>3</a>"),$(".pagination").append("<a>4</a>"),$(".pagination").append("<a>></a>");for(var p=0;p<e.length;p++){$("<div id='"+("product-div-"+p)+"' >").appendTo("div.product-commerce"),$("#product-div-"+[p]).append("<img src='"+e[p].image+"'class='item' />"),$("#product-div-"+[p]).append("<a class=product-name>"+e[p].name+" </a>"),$("#product-div-"+[p]).append("<a class=product-price> R$ "+e[p].price.toFixed(2)+" </a>"),$("#product-div-"+[p]).append("<a class=product-buy-button>Comprar</a>")}})});var btnCalcasMobile=document.getElementById("mobile-link-calcas");btnCalcasMobile.addEventListener("click",function(){$.get("mock-api/V1/categories/2",function(a){var e=(e=JSON.parse(a)).items;console.log(e),$(".product-commerce").remove(),$(".pagination").remove(),$(".product-header-title").empty(),$("<div class= product-main-title>").appendTo("div.product-header-title"),$(".product-main-title").append("CALÇAS"),$("<div class= product-commerce >").appendTo("div.product-menu"),$("<div class= pagination >").appendTo("div.product-menu"),$(".pagination").append("<a><</a>"),$(".pagination").append("<a>1</a>"),$(".pagination").append("<a>2</a>"),$(".pagination").append("<a>3</a>"),$(".pagination").append("<a>4</a>"),$(".pagination").append("<a>></a>");for(var p=0;p<e.length;p++){$("<div id='"+("product-div-"+p)+"' >").appendTo("div.product-commerce"),$("#product-div-"+[p]).append("<img src='"+e[p].image+"'class='item' />"),$("#product-div-"+[p]).append("<a class=product-name>"+e[p].name+" </a>"),$("#product-div-"+[p]).append("<a class=product-price> R$ "+e[p].price.toFixed(2)+" </a>"),$("#product-div-"+[p]).append("<a class=product-buy-button>Comprar</a>")}})});var btnSapatosMobile=document.getElementById("mobile-link-sapatos");btnSapatosMobile.addEventListener("click",function(){$.get("mock-api/V1/categories/3",function(a){var e=(e=JSON.parse(a)).items;console.log(e),$(".product-commerce").remove(),$(".pagination").remove(),$(".product-header-title").empty(),$("<div class= product-main-title>").appendTo("div.product-header-title"),$(".product-main-title").append("SAPATOS"),$("<div class= product-commerce >").appendTo("div.product-menu"),$("<div class= pagination >").appendTo("div.product-menu"),$(".pagination").append("<a><</a>"),$(".pagination").append("<a>1</a>"),$(".pagination").append("<a>2</a>"),$(".pagination").append("<a>3</a>"),$(".pagination").append("<a>4</a>"),$(".pagination").append("<a>></a>");for(var p=0;p<e.length;p++){$("<div id='"+("product-div-"+p)+"' >").appendTo("div.product-commerce"),$("#product-div-"+[p]).append("<img src='"+e[p].image+"'class='item' />"),$("#product-div-"+[p]).append("<a class=product-name>"+e[p].name+" </a>"),$("#product-div-"+[p]).append("<a class=product-price> R$ "+e[p].price.toFixed(2)+" </a>"),$("#product-div-"+[p]).append("<a class=product-buy-button>Comprar</a>")}})});