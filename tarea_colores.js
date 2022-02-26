function ejecutar (color) {
	color_fondo=document.f_colores.c_fondo.value;
	color_texto=document.f_colores.c_texto.value;
	document.f_colores.res.style.background=color_fondo;
	document.f_colores.res.style.color=color_texto;
}
