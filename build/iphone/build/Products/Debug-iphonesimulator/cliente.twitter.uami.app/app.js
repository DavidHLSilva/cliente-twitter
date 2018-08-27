var win = Titanium.UI.createWindow({
	backgroundImage : 'assets/Home/fondoPrincipal.jpg',
	theme: 'Theme.AppCompat.Fullscreen',
	width: Titanium.UI.FILL,
	height: Titanium.UI.FILL,
	layout: 'vertical'
});
/**
*---------------WIN PRINCIPAL----------------------
*/
 var view_supPrin = Titanium.UI.createView({
 	//backgroundColor: 'red',
 	width: Titanium.UI.FILL,
 	height: '20%',
 	layout: 'absolute'
 });
 
 var view_iconoT = Titanium.UI.createView({
 	//backgroundColor: 'blue',
 	width: Titanium.UI.FILL,
 	height: '55%',
 	layout: 'absolute'
 });
 
 var view_sesionPrin = Titanium.UI.createView({
 	//backgroundColor: 'red',
 	width: Titanium.UI.FILL,
 	height: '25%',
 	layout: 'vertical'
 });
 
win.add(view_supPrin);
win.add(view_iconoT);
win.add(view_sesionPrin);

 /**
*---------------ICONO PRINCIPAL----------------------
*/

var img_iconoT = Titanium.UI.createImageView({
	image: 'assets/Home/iconoT.png',
	height: '45%'
	
});

view_iconoT.add(img_iconoT);

/**
*---------------LABs PRINCIPAL----------------------
*/

var lab_twPrin = Titanium.UI.createLabel({
	color: 'white',
	width: Titanium.UI.FILL,
	text: 'Twitter',
	bottom: '1dp',
	textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
	font: {
		fontSize: 35
	}
});

var lab_sesion = Titanium.UI.createLabel({
	color: 'white',
	width: Titanium.UI.FILL,
	text: 'Iniciar Sesion',
	top: '30dp',
	textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
	font: {
		fontSize: 20
	}
});

view_supPrin.add(lab_twPrin);
view_sesionPrin.add(lab_sesion);
win.open();

/**
*---------------WIN TWITTER----------------------
*/
var win_tw = Titanium.UI.createWindow({
	backgroundGradient: {
   		type: 'linear',
    	colors: ['#27A6F9', '#CEE9FB'],
    	startPoint: { x: 0, y: '100%' },
    	endPoint: { x: '100%', y: 0 },
    	backFillStart:false
   },
    theme: "Theme.AppCompat.Fullscreen",
	width: Titanium.UI.FILL,
	height: Titanium.UI.FILL,
	layout: 'vertical'
});

var view_supTw = Titanium.UI.createView({
	//backgroundColor : 'white',
	width: Titanium.UI.FILL,
	height: '15%',
	layout: 'absolute'
});

var view_supIcon = Titanium.UI.createView({
	//backgroundColor: 'red',
	width: '30%',
	height: Titanium.UI.FILL,
	left: 0,
	layout: 'absolute'
});

var view_supLogu = Titanium.UI.createView({
	//backgroundColor: 'blue',
	width: '30%',
	height: Titanium.UI.FILL,
	right: 0,
	layout: 'absolute'
});

var img_supIconTw = Titanium.UI.createImageView({
	image: 'assets/Home/iconoPt.png',
	height: '50%',
	left: '15dp'
});

var img_loguIcon = Titanium.UI.createImageView({
	image: 'assets/Home/logout.png',
	height: '40%',
	right: '15dp'
});
win_tw.add(view_supTw);
view_supIcon.add(img_supIconTw);
view_supLogu.add(img_loguIcon);
view_supTw.add(view_supIcon);
view_supTw.add(view_supLogu);

var view_cenTw = Titanium.UI.createView({
	//backgroundColor : 'black',
	width: Titanium.UI.FILL,
	height: '70%',
	layout: 'vertical'
});

win_tw.add(view_cenTw);

var view_infTw = Titanium.UI.createView({
	//backgroundColor : 'green',
	width: Titanium.UI.FILL,
	height: '15%',
	layout: 'absolute'
});

var view_iTweetaer = Titanium.UI.createView({
	//backgroundColor: 'black',
	width: '30%',
	height: Titanium.UI.FILL,
	right: 0,
	layout: 'absolute'
});

var img_iTweetear = Titanium.UI.createImageView({
	image: 'assets/Home/hachis.png',
	height: '50%',
	right: '15dp'
});

view_iTweetaer.add(img_iTweetear);
view_infTw.add(view_iTweetaer);
win_tw.add(view_infTw);

/**
*---------------EVENTOS SESION, ACTUALIZAR TIME LINE Y TWEETEAR----------------------
*/

lab_sesion.addEventListener('click', function(e){
	//validar la sesion con tokens
	win_tw.open();
	win.close();
});

img_loguIcon.addEventListener('click', function(e){
	//cerrar la sesion actual
	win.open();
});

img_supIconTw.addEventListener('click', function(e){
	//actualiza la time line
	loadTweets(datos);
});

img_iTweetear.addEventListener('click', function(e){
	
	win_tweetear.open();
	boton_cancelar.addEventListener('click', function(e){
		win_tweetear.close();
	});
	
	boton_twettear.addEventListener('click', function(e){
		var aux = text_tweetear.value;
		var salir = 0;
		if(aux.length <= 280 && aux.length > 0){
			console.log(aux);
			win_tweetear.close();
			salir = 1;
		}
		if (salir == 0){
			alert('Ups!! Algo salio mal');
			salir = 1;}
	});
});

var win_tweetear = Titanium.UI.createWindow({
	backgroundGradient: {
   		type: 'linear',
    	colors: ['#27A6F9', '#CEE9FB'],
    	startPoint: { x: 0, y: '100%' },
    	endPoint: { x: '100%', y: 0 },
  },
    title: 'Tweetear',
	width: '80%',
	height: '50%',
	layout: 'vertical',
	borderRadius: 10,
	borderColor: 'black'
}) ;

var text_tweetear = Titanium.UI.createTextArea({
	borderWidth: 2,
  	borderColor: 'black',
  	borderRadius: 5,
  	font: {fontSize:14, fontWeight:'bold'},
  	textAlign: 'left',
  	value: '¿Qué está pasando? (max 280 caracteres)',
  	top: 20,
  	width: 230, 
  	height : 150
});

var boton_twettear = Titanium.UI.createButton({
	title: 'Aceptar',
	width: 100,
	height: 50
});

var boton_cancelar = Titanium.UI.createButton({
	title: 'Cancelar',
	width: 100,
	height: 50
});
win_tweetear.add(text_tweetear);
win_tweetear.add(boton_twettear);
win_tweetear.add(boton_cancelar);
  
/**
*---------------TWITTER TIMELINE DATOS----------------------
*/

var fileName = 'prueba_twitter.json'; 
var file = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, fileName);     
var preParseData = (file.read().text);

var datos = JSON.parse(preParseData);
console.log("prueba", datos);

/**
*---------------TWITTER TIMELINE VISTA----------------------
*/

function loadTweets(response){
	var rowData = [];
	for (var i = 0; i < response.length; i++){
		var tweet = response[i].text;
		var user = response[i].user.screen_name;
		var avatar = response[i].user.profile_image_url;
		
		var row = Titanium.UI.createTableViewRow({height: 110});
		
		var post_view = Titanium.UI.createView({
			height: 'auto',
			top: 5,
			right: 5,
			bottom: 5,
			left: 5,
			layout: 'vertical'
		});
		
		var av_image = Titanium.UI.createImageView({
			image: avatar,
			top: 0,
			left: 0,
			height: 48,
			width: 48
		});
		post_view.add(av_image);
		
		var user_lbl = Titanium.UI.createLabel({
			text: user,
			color: 'black',
			left: 54,
			top: -48,
			bottom: 2,
			width: 120,
			height: 16,
			textAlign: 'left',
			font:{
				fontFamily: 'Trebuchet MS',
				fontSize: 14,
				fontWeight: 'bold'
			}
		});
		
		post_view.add(user_lbl);
		
		var tweet_lbl = Titanium.UI.createLabel({
			color: 'black',
			left: 54,
			top: 2,
			bottom: 2,
			height: 'auto',
			width: 236,
			textAlign: 'top',
			font:{
				fontSize: 14
			}
		});

		tweet_lbl.text = tweet;

		post_view.add(tweet_lbl);
		row.add(post_view);
		
		//row.className = 'item' + i;
		rowData[i] = row;
		
	}
	var tableView = Titanium.UI.createTableView({
   		data: rowData,
		left: 5,
		right: 5
	});
	view_cenTw.add(tableView);
	
} 

loadTweets(datos);
