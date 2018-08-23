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

//var tabGroup = Titanium.UI.createTabGroup(); 
/*
var mainTab = Titanium.UI.createTab({ 
    title: "Twitter", 
    icon: "assets/Home/iconoPt.png",
    window: win_tw  // We will create the window "mainWin" 
});*/
//tabGroup.addTab(mainTab);

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

var img_supIcon = Titanium.UI.createImageView({
	image: 'assets/Home/iconoPt.png',
	height: '50%',
	left: '7dp'
});

var img_loguIcon = Titanium.UI.createImageView({
	image: 'assets/Home/logout.png',
	height: '40%',
	right: '7dp'
});
win_tw.add(view_supTw);
view_supIcon.add(img_supIcon);
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
	right: '7dp'
});

view_iTweetaer.add(img_iTweetear);
view_infTw.add(view_iTweetaer);
win_tw.add(view_infTw);

lab_sesion.addEventListener('click', function(e){
	win_tw.open();
	win.close();
});
img_loguIcon.addEventListener('click', function(e){
	win.open();
});
  
//tabGroup.open();



