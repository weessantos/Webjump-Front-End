//------------------------------------ FUNÇÃO PARA UM SCROLL MAIS FLUÍDO ------------------------------------ 
function setupScroll(){
	var scroll = new SmoothScroll('a[href*="#"]', 
	{
		speed: 200, 
		speedAsDuration: true,
    updateURL: false
	});
}

//------------------------------------ PRIMEIRO CARREGAMENTO DA PÁGINA ------------------------------------ 
function homePage(){
	$("<div class= product-main-title>").appendTo('div.product-header-title') + "</div>" 
	$('.product-main-title').append("PÁGINA INICIAL");
}

//------------------------------------ ABRIR E FECHAR O MENU MOBILE ------------------------------------ 
function abrirMenu() {
	document.getElementById("search-icon-mobile").style.display= "none";
	document.getElementById("header-logo-mobile").style.display= "none";
	document.getElementById("menu-mobile-ativo").style.display= "block";
	document.getElementById("menu-mobile-fechar").style.display= "block";
	document.getElementById("menu-mobile-abrir").style.position= "absolute";
	document.getElementById("header-mobile").style.alignItems = "normal";
}
  
function fecharMenu() {
	document.getElementById("menu-mobile-abrir").style.position= "relative";
	document.getElementById("header-logo-mobile").style.display= "block";
	document.getElementById("search-icon-mobile").style.display= "block";
	document.getElementById("search-icon-mobile").style.position= "relative";
	document.getElementById("menu-mobile-ativo").style.display= "none";
	document.getElementById("menu-mobile-fechar").style.display= "none";
	document.getElementById("header-mobile").style.alignItems = "center";
}
  
document.addEventListener('scroll', function(){
   
	var h =  document.documentElement,
		b =  document.body,
		st = 'scrollTop',
		sh = 'scrollHeight';
  
	var percent = parseInt ( (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100);
});

//------------------------------------ BOTÃO INICIO ------------------------------------

var btnInicio = document.getElementById("header-link-inicio");

btnInicio.addEventListener("click", function () {

	$(".product-commerce").remove();
	$(".pagination").remove();
	$(".product-header-title").empty();
	$("#page-path").empty();
	$(".product-filter").hide();

	$("<div class= page-path-home>").appendTo('div#page-path') + "</div>"
	$("<div class= page-path-current>").appendTo('div#page-path') + "</div>"
	$('.page-path-home').append("Página Inicial"); 

	$("<div class= page-path-title>").appendTo('div.product-header-title') + "</div>" 
	$('.page-path-title').append("PÁGINA INICIAL");
});

//------------------------------------ BOTÃO CAMISETAS ------------------------------------ 

var btnCamisetas = document.getElementById("header-link-camisetas");

btnCamisetas.addEventListener("click", function () {

	$.get("mock-api/V1/categories/1", function (data) {

		var resultado = JSON.parse(data);
		resultado = resultado.items;

		$(".product-commerce").remove();
		$(".pagination").remove();
		$(".product-header-title").empty();
		$("#page-path").empty();
		$(".product-filter").show();

		$("<div class= page-path-home>").appendTo('div#page-path') + "</div>"
		$("<div class= page-path-current>").appendTo('div#page-path') + "</div>"
		$('.page-path-home').append("Página Inicial"); 
		$('.page-path-home').append("&nbsp;");
		$('.page-path-home').append(">");
		$('.page-path-home').append("&nbsp;");
		$('.page-path-current').append("Camisetas");

		$("<div class= product-main-title>").appendTo('div.product-header-title') + "</div>" 
		$('.product-main-title').append("CAMISETAS");

		$("<div class= product-commerce >").appendTo('div.product-menu') + "</div>" 
		$("<div class= pagination >").appendTo('div.product-menu') + "</div>" 

		$('.pagination').append("<a>" + '<' + "</a>")
		$('.pagination').append("<a>" + 1 + "</a>")
		$('.pagination').append("<a>" + 2 + "</a>")
		$('.pagination').append("<a>" + 3 + "</a>")
		$('.pagination').append("<a>" + 4 + "</a>")
		$('.pagination').append("<a>" + '>' + "</a>")
	
    for (var i = 0; i < resultado.length; i++) {
			
		var divName = "product-div-" + i;
			
		$("<div id='"+ divName +"' >").appendTo('div.product-commerce') + "</div>" 
			
		$('#product-div-' + [i]).append("<img src='" + resultado[i].image  + "'class='item' />")
		$('#product-div-' + [i]).append("<a class=product-name>" + resultado[i].name + " " + "</a>")
		$('#product-div-' + [i]).append("<a class=product-price>" +" R$ " + (resultado[i].price).toFixed(2) + " " + "</a>")
		$('#product-div-' + [i]).append("<a class=product-buy-button>" + "Comprar" + "</a>")
	}

	});	

});

//------------------------------------ BOTÃO CALÇA ------------------------------------ 

var btnCalcas = document.getElementById("header-link-calcas");

btnCalcas.addEventListener("click", function () {

	$.get("mock-api/V1/categories/2", function (data) {

		var resultado = JSON.parse(data);
		resultado = resultado.items;

		$(".product-commerce").remove();
		$(".pagination").remove();
		$(".product-header-title").empty();
		$("#page-path").empty();
		$(".product-filter").show();

		$("<div class= page-path-home>").appendTo('div#page-path') + "</div>"
		$("<div class= page-path-current>").appendTo('div#page-path') + "</div>"
		$('.page-path-home').append("Página Inicial"); 
		$('.page-path-home').append("&nbsp;");
		$('.page-path-home').append(">");
		$('.page-path-home').append("&nbsp;");
		$('.page-path-current').append("Calças");

		$("<div class= product-main-title>").appendTo('div.product-header-title') + "</div>" 
		$('.product-main-title').append("CALÇAS");

		$("<div class= product-commerce >").appendTo('div.product-menu') + "</div>"
		$("<div class= pagination >").appendTo('div.product-menu') + "</div>"  

		$('.pagination').append("<a>" + '<' + "</a>")
		$('.pagination').append("<a>" + 1 + "</a>")
		$('.pagination').append("<a>" + 2 + "</a>")
		$('.pagination').append("<a>" + 3 + "</a>")
		$('.pagination').append("<a>" + 4 + "</a>")
		$('.pagination').append("<a>" + '>' + "</a>")
	
    for (var i = 0; i < resultado.length; i++) {
			
		var divName = "product-div-" + i;
	
		$("<div id='"+ divName +"' >").appendTo('div.product-commerce') + "</div>" 
			
		$('#product-div-' + [i]).append("<img src='" + resultado[i].image  + "'class='item' />")
		$('#product-div-' + [i]).append("<a class=product-name>" + resultado[i].name + " " + "</a>")
		$('#product-div-' + [i]).append("<a class=product-price>" +" R$ " + (resultado[i].price).toFixed(2) + " " + "</a>")
		$('#product-div-' + [i]).append("<a class=product-buy-button>" + "Comprar" + "</a>")
	}

	});	

});

//------------------------------------ BOTÃO SAPATO ------------------------------------ 

var btnSapatos = document.getElementById("header-link-sapatos");

btnSapatos.addEventListener("click", function () {

	$.get("mock-api/V1/categories/3", function (data) {

		var resultado = JSON.parse(data);
		resultado = resultado.items;

		$(".product-commerce").remove();
		$(".pagination").remove();
		$(".product-header-title").empty();
		$("#page-path").empty();
		$(".product-filter").show();

		$("<div class= page-path-home>").appendTo('div#page-path') + "</div>"
		$("<div class= page-path-current>").appendTo('div#page-path') + "</div>"
		$('.page-path-home').append("Página Inicial"); 
		$('.page-path-home').append("&nbsp;");
		$('.page-path-home').append(">");
		$('.page-path-home').append("&nbsp;");
		$('.page-path-current').append("Sapatos");

		$("<div class= product-main-title>").appendTo('div.product-header-title') + "</div>" 
		$('.product-main-title').append("SAPATOS");

		$("<div class= product-commerce >").appendTo('div.product-menu') + "</div>"
		$("<div class= pagination >").appendTo('div.product-menu') + "</div>"  

		$('.pagination').append("<a>" + '<' + "</a>")
		$('.pagination').append("<a>" + 1 + "</a>")
		$('.pagination').append("<a>" + 2 + "</a>")
		$('.pagination').append("<a>" + 3 + "</a>")
		$('.pagination').append("<a>" + 4 + "</a>")
		$('.pagination').append("<a>" + '>' + "</a>")
	
    for (var i = 0; i < resultado.length; i++) {
			
		var divName = "product-div-" + i;
	
		$("<div id='"+ divName +"' >").appendTo('div.product-commerce') + "</div>" 
			
		$('#product-div-' + [i]).append("<img src='" + resultado[i].image  + "'class='item' />")
		$('#product-div-' + [i]).append("<a class=product-name>" + resultado[i].name + " " + "</a>")
		$('#product-div-' + [i]).append("<a class=product-price>" +" R$ " + (resultado[i].price).toFixed(2) + " " + "</a>")
		$('#product-div-' + [i]).append("<a class=product-buy-button>" + "Comprar" + "</a>")
	}

	});	

});

//------------------------------------ BOTÃO CONTATO  ------------------------------------

var btnContato = document.getElementById("header-link-contato");

btnContato.addEventListener("click", function () {

	$(".product-commerce").remove();
	$(".pagination").remove();
	$(".product-header-title").empty();
	$("#page-path").empty();
	$(".product-filter").hide();


	$("<div class= page-path-home>").appendTo('div#page-path') + "</div>"
	$("<div class= page-path-current>").appendTo('div#page-path') + "</div>"
	$('.page-path-home').append("Contato"); 

	$("<div class= page-path-title>").appendTo('div.product-header-title') + "</div>" 
	$('.page-path-title').append("CONTATO");
});

//------------------------------------ BOTÃO ROUPAS NO MENU LATERAL ------------------------------------ 

var btnRoupas = document.getElementById("list-menu-roupas");

btnRoupas.addEventListener("click", function () {

	$.get("mock-api/V1/categories/1", function (data) {

		var resultado = JSON.parse(data);
		resultado = resultado.items;

		$(".product-commerce").remove();
		$(".pagination").remove();
		$(".product-header-title").empty();
		$("#page-path").empty();
		$(".product-filter").show();

		$("<div class= page-path-home>").appendTo('div#page-path') + "</div>"
		$("<div class= page-path-current>").appendTo('div#page-path') + "</div>"
		$('.page-path-home').append("Página Inicial"); 
		$('.page-path-home').append("&nbsp;");
		$('.page-path-home').append(">");
		$('.page-path-home').append("&nbsp;");
		$('.page-path-current').append("Roupas");

		$("<div class= product-main-title>").appendTo('div.product-header-title') + "</div>" 
		$('.product-main-title').append("ROUPAS");

		$("<div class= product-commerce >").appendTo('div.product-menu') + "</div>"
		$("<div class= pagination >").appendTo('div.product-menu') + "</div>"  

		$('.pagination').append("<a>" + '<' + "</a>")
		$('.pagination').append("<a>" + 1 + "</a>")
		$('.pagination').append("<a>" + 2 + "</a>")
		$('.pagination').append("<a>" + 3 + "</a>")
		$('.pagination').append("<a>" + 4 + "</a>")
		$('.pagination').append("<a>" + '>' + "</a>")
	
    for (var i = 0; i < resultado.length; i++) {
			
		var divName = "product-div-" + i;
	
		$("<div id='"+ divName +"' >").appendTo('div.product-commerce') + "</div>" 
			
		$('#product-div-' + [i]).append("<img src='" + resultado[i].image  + "'class='item' />")
		$('#product-div-' + [i]).append("<a class=product-name>" + resultado[i].name + " " + "</a>")
		$('#product-div-' + [i]).append("<a class=product-price>" +" R$ " + (resultado[i].price).toFixed(2) + " " + "</a>")
		$('#product-div-' + [i]).append("<a class=product-buy-button>" + "Comprar" + "</a>")

	}
		var continuousIndex = i;
		var continuousSize = resultado.length;
	
		$.get("mock-api/V1/categories/2", function (data) {

			var resultado = JSON.parse(data);
			resultado = resultado.items;
			var indexAux = 0;
		
		for (var i = continuousIndex; i < (resultado.length + continuousSize); i++) {
				
			var divName = "product-div-" + i;
		
			$("<div id='"+ divName +"' >").appendTo('div.product-commerce') + "</div>" 
				
			$('#product-div-' + [i]).append("<img src='" + resultado[indexAux].image  + "'class='item' />")
			$('#product-div-' + [i]).append("<a class=product-name>" + resultado[indexAux].name + " " + "</a>")
			$('#product-div-' + [i]).append("<a class=product-price>" +" R$ " + resultado[indexAux].price + " " + "</a>")
			$('#product-div-' + [i]).append("<a class=product-buy-button>" + "Comprar" + "</a>")

			indexAux++;
		}

		});	
	});

});

//------------------------------------ BOTÃO SAPATO NO MENU LATERAL ------------------------------------ 

var btnSapatosLeft = document.getElementById("list-menu-sapatos");

btnSapatosLeft.addEventListener("click", function () {

	$.get("mock-api/V1/categories/3", function (data) {

		var resultado = JSON.parse(data);
		resultado = resultado.items;

		$(".product-commerce").remove();
		$(".pagination").remove();
		$(".product-header-title").empty();
		$("#page-path").empty();
		$(".product-filter").show();


		$("<div class= page-path-home>").appendTo('div#page-path') + "</div>"
		$("<div class= page-path-current>").appendTo('div#page-path') + "</div>"
		$('.page-path-home').append("Página Inicial"); 
		$('.page-path-home').append("&nbsp;");
		$('.page-path-home').append(">");
		$('.page-path-home').append("&nbsp;");
		$('.page-path-current').append("Sapatos");

		$("<div class= product-main-title>").appendTo('div.product-header-title') + "</div>" 
		$('.product-main-title').append("SAPATOS");

		$("<div class= product-commerce >").appendTo('div.product-menu') + "</div>"
		$("<div class= pagination >").appendTo('div.product-menu') + "</div>"  

		$('.pagination').append("<a>" + '<' + "</a>")
		$('.pagination').append("<a>" + 1 + "</a>")
		$('.pagination').append("<a>" + 2 + "</a>")
		$('.pagination').append("<a>" + 3 + "</a>")
		$('.pagination').append("<a>" + 4 + "</a>")
		$('.pagination').append("<a>" + '>' + "</a>")
	
    for (var i = 0; i < resultado.length; i++) {
			
		var divName = "product-div-" + i;
			
		$("<div id='"+ divName +"' >").appendTo('div.product-commerce') + "</div>" 
			
		$('#product-div-' + [i]).append("<img src='" + resultado[i].image  + "'class='item' />")
		$('#product-div-' + [i]).append("<a class=product-name>" + resultado[i].name + " " + "</a>")
		$('#product-div-' + [i]).append("<a class=product-price>" +" R$ " + (resultado[i].price).toFixed(2) + " " + "</a>")
		$('#product-div-' + [i]).append("<a class=product-buy-button>" + "Comprar" + "</a>")
	}

	});	

});

//------------------------------------ BOTÃO ACESSÓRIOS NO MENU LATERAL ------------------------------------ 

var btnAcessorios = document.getElementById("list-menu-acessorios");

btnAcessorios.addEventListener("click", function () {


		$(".product-commerce").remove();
		$(".pagination").remove();
		$(".product-header-title").empty();
		$("#page-path").empty();
		$(".product-filter").show();	


		$("<div class= page-path-home>").appendTo('div#page-path') + "</div>"
		$("<div class= page-path-current>").appendTo('div#page-path') + "</div>"
		$('.page-path-home').append("Página Inicial"); 
		$('.page-path-home').append("&nbsp;");
		$('.page-path-home').append(">");
		$('.page-path-home').append("&nbsp;");
		$('.page-path-current').append("Acessórios");

		$("<div class= product-main-title>").appendTo('div.product-header-title') + "</div>" 
		$('.product-main-title').append("ACESSÓRIOS");

});

//------------------------------------ BOTÃO CORRIDA NO MENU LATERAL ------------------------------------

var btnCorrida = document.getElementById("list-menu-corrida");


btnCorrida.addEventListener("click", function () {

		$(".product-commerce").remove();
		$(".pagination").remove();
		$(".product-sub-title").remove();
		var aux = $('.page-path-current').text()
		$("#page-path").empty();
		$(".page-path-title").remove();
		$(".product-filter").show();		


		$("<div class= page-path-home>").appendTo('div#page-path') + "</div>"
		$("<div class= page-path-current>").appendTo('div#page-path') + "</div>"
		$('.page-path-home').append("Página Inicial"); 
		$('.page-path-home').append("&nbsp;");
		$('.page-path-home').append(">");
		$('.page-path-home').append("&nbsp;");
		$('.page-path-home').append(aux); 
		$('.page-path-home').append("&nbsp;");
		$('.page-path-home').append(">");
		$('.page-path-home').append("&nbsp;");
		$('.page-path-current').append("Corrida");
		
		$("<div class= product-sub-title>").appendTo('div.product-header-title') + "</div>" 
		$('.product-sub-title').append("&nbsp;");
		$('.product-sub-title').append("- CORRIDA");

});

//------------------------------------ BOTÃO CAMINHADA NO MENU LATERAL ------------------------------------

var btnCaminhada = document.getElementById("list-menu-caminhada");


btnCaminhada.addEventListener("click", function () {

		$(".product-commerce").remove();
		$(".pagination").remove();
		$(".product-sub-title").remove();
		var aux = $('.page-path-current').text()
		$("#page-path").empty();
		$(".page-path-title").remove();
		$(".product-filter").show();		


		$("<div class= page-path-home>").appendTo('div#page-path') + "</div>"
		$("<div class= page-path-current>").appendTo('div#page-path') + "</div>"
		$('.page-path-home').append("Página Inicial"); 
		$('.page-path-home').append("&nbsp;");
		$('.page-path-home').append(">");
		$('.page-path-home').append("&nbsp;");
		$('.page-path-home').append(aux); 
		$('.page-path-home').append("&nbsp;");
		$('.page-path-home').append(">");
		$('.page-path-home').append("&nbsp;");
		$('.page-path-current').append("Caminhada");
		
		$("<div class= product-sub-title>").appendTo('div.product-header-title') + "</div>" 
		$('.product-sub-title').append("&nbsp;");
		$('.product-sub-title').append("- CAMINHADA");

});

//------------------------------------ BOTÃO CASUAL NO MENU LATERAL ------------------------------------

var btnCasual = document.getElementById("list-menu-casual");


btnCasual.addEventListener("click", function () {

		$(".product-commerce").remove();
		$(".pagination").remove();
		$(".product-sub-title").remove();
		var aux = $('.page-path-current').text()
		$("#page-path").empty();
		$(".page-path-title").remove();
		$(".product-filter").show();		


		$("<div class= page-path-home>").appendTo('div#page-path') + "</div>"
		$("<div class= page-path-current>").appendTo('div#page-path') + "</div>"
		$('.page-path-home').append("Página Inicial"); 
		$('.page-path-home').append("&nbsp;");
		$('.page-path-home').append(">");
		$('.page-path-home').append("&nbsp;");
		$('.page-path-home').append(aux); 
		$('.page-path-home').append("&nbsp;");
		$('.page-path-home').append(">");
		$('.page-path-home').append("&nbsp;");
		$('.page-path-current').append("Casual");
		
		$("<div class= product-sub-title>").appendTo('div.product-header-title') + "</div>" 
		$('.product-sub-title').append("&nbsp;");
		$('.product-sub-title').append("- CASUAL");

});

//------------------------------------ BOTÃO SOCIAL NO MENU LATERAL ------------------------------------

var btnSocial = document.getElementById("list-menu-social");


btnSocial.addEventListener("click", function () {
	
		$(".product-commerce").remove();
		$(".pagination").remove();
		$(".product-sub-title").remove();
		var aux = $('.page-path-current').text()
		$("#page-path").empty();
		$(".page-path-title").remove();
		$(".product-filter").show();	

		$("<div class= page-path-home>").appendTo('div#page-path') + "</div>"
		$("<div class= page-path-current>").appendTo('div#page-path') + "</div>"
		$('.page-path-home').append("Página Inicial"); 
		$('.page-path-home').append("&nbsp;");
		$('.page-path-home').append(">");
		$('.page-path-home').append("&nbsp;");
		$('.page-path-home').append(aux); 
		$('.page-path-home').append("&nbsp;");
		$('.page-path-home').append(">");
		$('.page-path-home').append("&nbsp;");
		$('.page-path-current').append("Social");
		
		$("<div class= product-sub-title>").appendTo('div.product-header-title') + "</div>" 
		$('.product-sub-title').append("&nbsp;");
		$('.product-sub-title').append("- SOCIAL");

});

//------------------------------------ BOTÃO CAMISETAS MOBILE ------------------------------------

var btnCamisetasMobile = document.getElementById("mobile-link-camisetas");

btnCamisetasMobile.addEventListener("click", function () {

	$.get("mock-api/V1/categories/1", function (data) {

		var resultado = JSON.parse(data);
		resultado = resultado.items;

		console.log(resultado);
		$(".product-commerce").remove();
		$(".pagination").remove();
		$(".product-header-title").empty();

		$("<div class= product-main-title>").appendTo('div.product-header-title') + "</div>" 
		$('.product-main-title').append("CAMISETAS");

		$("<div class= product-commerce >").appendTo('div.product-menu') + "</div>" 
		$("<div class= pagination >").appendTo('div.product-menu') + "</div>" 

		$('.pagination').append("<a>" + '<' + "</a>")
		$('.pagination').append("<a>" + 1 + "</a>")
		$('.pagination').append("<a>" + 2 + "</a>")
		$('.pagination').append("<a>" + 3 + "</a>")
		$('.pagination').append("<a>" + 4 + "</a>")
		$('.pagination').append("<a>" + '>' + "</a>")
	
    for (var i = 0; i < resultado.length; i++) {
			
		var divName = "product-div-" + i;
			
		$("<div id='"+ divName +"' >").appendTo('div.product-commerce') + "</div>" 
			
		$('#product-div-' + [i]).append("<img src='" + resultado[i].image  + "'class='item' />")
		$('#product-div-' + [i]).append("<a class=product-name>" + resultado[i].name + " " + "</a>")
		$('#product-div-' + [i]).append("<a class=product-price>" +" R$ " + (resultado[i].price).toFixed(2) + " " + "</a>")
		$('#product-div-' + [i]).append("<a class=product-buy-button>" + "Comprar" + "</a>")
	}

	});	

});

//------------------------------------ BOTÃO CALÇAS MOBILE ------------------------------------

var btnCalcasMobile = document.getElementById("mobile-link-calcas");

btnCalcasMobile.addEventListener("click", function () {

	$.get("mock-api/V1/categories/2", function (data) {

		var resultado = JSON.parse(data);
		resultado = resultado.items;

		console.log(resultado);
		$(".product-commerce").remove();
		$(".pagination").remove();
		$(".product-header-title").empty();

		$("<div class= product-main-title>").appendTo('div.product-header-title') + "</div>" 
		$('.product-main-title').append("CALÇAS");

		$("<div class= product-commerce >").appendTo('div.product-menu') + "</div>" 
		$("<div class= pagination >").appendTo('div.product-menu') + "</div>" 

		$('.pagination').append("<a>" + '<' + "</a>")
		$('.pagination').append("<a>" + 1 + "</a>")
		$('.pagination').append("<a>" + 2 + "</a>")
		$('.pagination').append("<a>" + 3 + "</a>")
		$('.pagination').append("<a>" + 4 + "</a>")
		$('.pagination').append("<a>" + '>' + "</a>")
	
    for (var i = 0; i < resultado.length; i++) {
			
		var divName = "product-div-" + i;
			
		$("<div id='"+ divName +"' >").appendTo('div.product-commerce') + "</div>" 
			
		$('#product-div-' + [i]).append("<img src='" + resultado[i].image  + "'class='item' />")
		$('#product-div-' + [i]).append("<a class=product-name>" + resultado[i].name + " " + "</a>")
		$('#product-div-' + [i]).append("<a class=product-price>" +" R$ " + (resultado[i].price).toFixed(2) + " " + "</a>")
		$('#product-div-' + [i]).append("<a class=product-buy-button>" + "Comprar" + "</a>")
	}

	});	

});

//------------------------------------ BOTÃO SAPATOS MOBILE ------------------------------------

var btnSapatosMobile = document.getElementById("mobile-link-sapatos");

btnSapatosMobile.addEventListener("click", function () {

	$.get("mock-api/V1/categories/3", function (data) {

		var resultado = JSON.parse(data);
		resultado = resultado.items;

		console.log(resultado);
		$(".product-commerce").remove();
		$(".pagination").remove();
		$(".product-header-title").empty();

		$("<div class= product-main-title>").appendTo('div.product-header-title') + "</div>" 
		$('.product-main-title').append("SAPATOS");

		$("<div class= product-commerce >").appendTo('div.product-menu') + "</div>" 
		$("<div class= pagination >").appendTo('div.product-menu') + "</div>" 

		$('.pagination').append("<a>" + '<' + "</a>")
		$('.pagination').append("<a>" + 1 + "</a>")
		$('.pagination').append("<a>" + 2 + "</a>")
		$('.pagination').append("<a>" + 3 + "</a>")
		$('.pagination').append("<a>" + 4 + "</a>")
		$('.pagination').append("<a>" + '>' + "</a>")
	
    for (var i = 0; i < resultado.length; i++) {
			
		var divName = "product-div-" + i;
			
		$("<div id='"+ divName +"' >").appendTo('div.product-commerce') + "</div>" 
			
		$('#product-div-' + [i]).append("<img src='" + resultado[i].image  + "'class='item' />")
		$('#product-div-' + [i]).append("<a class=product-name>" + resultado[i].name + " " + "</a>")
		$('#product-div-' + [i]).append("<a class=product-price>" +" R$ " + (resultado[i].price).toFixed(2) + " " + "</a>")
		$('#product-div-' + [i]).append("<a class=product-buy-button>" + "Comprar" + "</a>")
	}

	});	

});