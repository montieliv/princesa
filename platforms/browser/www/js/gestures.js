var app={
	inicio: function(){
		this.iniciaFastClick();
		this.iniciaHammer(); 
		alto  = document.documentElement.clientHeight;
    	ancho = document.documentElement.clientWidth;
		contador=0;
		miLista = ["Tu amor hacia mí","Tus labios","Tu sonrisa","Tus ojitos al sonreir","Tu aroma",
"Tus ponpinas","Hacerte el amor","Que me digas didi","Que me apoyes","Que seas mi complice",
"Tus cuidados","Tus caricias","Que eduques a mi hijo","Verte en el jardín","Tu inocencia",
"Que ames a Dios","Tu buen corazón","Tu bondad","Tus palabras de cariño","Tu precupación por mí",
"Verte al despertar","Que cuides mi economía","La confianza en ti misma","Tu entrega","Tu desición",
"Tus sueños","Desees darme otro hijo","Tu espaguetti con pollo frito","Hacerte reír",
"Tu reacción a mis bromas","Tu buen gusto","Tus detalles","Que cuides mi hogar","Tu fidelidad",
"Que cuides a mi hijo","Tu honestidad","Que perdones mis errores","Tomarte de la mano","Tus abrazos","Que me escuchas",
"Cuando te veo orgullosa por mí","Que me consientas","Que haces sentir importante","Que me das mi lugar",
"Tus reacciones en la intimidad","Que me sorprendas","Valoras nuestra historia","Tus besos",
"Que creas en mí","Que estas a mi lado hoy! Y deseo que sea por muchos años mas"];
	},

	iniciaFastClick: function(){
		FastClick.attach(document.body);
	},

	iniciaHammer: function(){
		var zona= document.getElementById('zona-gestos');
		var hammertime= new Hammer(zona);

		zona.addEventListener('webkitAnimationEnd',function(e) {
			zona.className='';
		});

		hammertime.on('swipe', function(ev){
			var clase=undefined;
			direccion=ev.direction;			
			
			if (direccion==4) { 				
				if (contador < 0) { contador=49; }								
				document.getElementById('imagenLyI').width=ancho-20;
				document.getElementById('imagenLyI').height=alto-120;
				num=contador+1;
				document.getElementById('imagenLyI').src= 'imagenes/'+num+'.JPG';				
				document.querySelector('#info').innerHTML='#'+(contador+1)+':'+miLista[contador];
				contador--;  	
				clase='swipe-izquierda';			
				}
			if (direccion==2) { 				
				if (contador > 49) { contador=0; }				
				document.getElementById('imagenLyI').width=ancho-20;
				document.getElementById('imagenLyI').height=alto-120;
				num=contador+1;
				document.getElementById('imagenLyI').src= 'imagenes/'+num+'.JPG';
				document.querySelector('#info').innerHTML='#'+(contador+1)+':'+miLista[contador];
				contador++;  
				clase='swipe-derecha';  				
				}
			zona.className=clase;			
			
		});
	},
};

if ('addEventListener' in document){
	document.addEventListener('DOMContentLoaded', function(){
		app.inicio();
	},false);
}