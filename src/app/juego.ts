import { Component, OnInit, AfterViewInit } from '@angular/core';


interface Pelota {
	x: number;
	y: number;
	vx: number;
	vy: number;
}
interface Raqueta {
	x: number;
	y: number;
}
@Component({
  selector: 'juego',
  templateUrl: './juego.html',
  styleUrls: ['./juego.css'],
  
})

  
export class Juego implements Pelota, Raqueta {

// Obtener el canvas y su contexto
const canvas = document.getElementById('tenis') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

// Definir constantes para el juego
const ANCHO_CANVAS = canvas.width;
const ALTO_CANVAS = canvas.height;
const TAMANO_PELOTA = 20;
const VELOCIDAD_PELOTA = 5;
const TAMANO_RAQUETA = 100;
const VELOCIDAD_RAQUETA = 10;

// Definir la pelota y la raqueta




let pelota: Pelota = {
	x: ANCHO_CANVAS / 2,
	y: ALTO_CANVAS / 2,
	vx: VELOCIDAD_PELOTA,
	vy: VELOCIDAD_PELOTA,
};

let raqueta: Raqueta = {
	x: 0,
	y: ALTO_CANVAS / 2 - TAMANO_RAQUETA / 2,
};

// Función para dibujar la pelota y la raqueta
function dibujar() {
	ctx.clearRect(0, 0, ANCHO_CANVAS, ALTO_CANVAS);
	ctx.fillStyle = 'white';
	ctx.beginPath();
	ctx.arc(pelota.x, pelota.y, TAMANO_PELOTA, 0, Math.PI * 2);
	ctx.fill();
	ctx.fillStyle = 'black';
	ctx.fillRect(raqueta.x, raqueta.y, TAMANO_RAQUETA, 10);
}

// Función para actualizar la posición de la pelota y la raqueta
function actualizar() {
	pelota.x += pelota.vx;
	pelota.y += pelota.vy;
	if (pelota.x + TAMANO_PELOTA > ANCHO_CANVAS || pelota.x - TAMANO_PELOTA < 0) {
		pelota.vx = -pelota.vx;
	}
	if (pelota.y + TAMANO_PELOTA > ALTO_CANVAS || pelota.y - TAMANO_PELOTA < 0) {
		pelota.vy = -pelota.vy;
	}
	if (pelota.x + TAMANO_PELOTA > raqueta.x && pelota.x - TAMANO_PELOTA < raqueta.x + TAMANO_RAQUETA && pelota.y + TAMANO_PELOTA > raqueta.y && pelota.y - TAMANO_PELOTA < raqueta.y + 10) {
		pelota.vy = -pelota.vy;
	}
}

// Función para manejar los eventos de teclado
function manejarTeclado(evento: KeyboardEvent) {
	if (evento.key === 'ArrowUp') {
		raqueta.y -= VELOCIDAD_RAQUETA;
	} else if (evento.key === 'ArrowDown') {
		raqueta.y += VELOCIDAD_RAQUETA;
	}
}

// Iniciar el juego
setInterval(() => {
	actualizar();
	dibujar();
}, 16); // 16ms = 60fps

// Agregar evento de teclado
document.addEventListener('keydown', manejarTeclado);


  
}
