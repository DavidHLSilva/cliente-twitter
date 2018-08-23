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
	//height: '100%'
	
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
    	colors: ['#95CFF5', 'white'],
    	startPoint: { x: '100%', y: 0 },
    	endPoint: { x: 0, y: '100%' },
    	backFillStart:false
   },
    theme: "Theme.AppCompat.Fullscreen",
	width: Titanium.UI.FILL,
	height: Titanium.UI.FILL,
	layout: 'vertical'
});

var tabGroup = Titanium.UI.createTabGroup(); 

var mainTab = Titanium.UI.createTab({ 
    title: "Twitter", 
    icon: "assets/Home/iconoPt.png",
    window: win_tw  // We will create the window "mainWin" 
});
tabGroup.addTab(mainTab);

lab_sesion.addEventListener('click', function(e){
	win_tw.open();
});
  


//tabGroup.open();



