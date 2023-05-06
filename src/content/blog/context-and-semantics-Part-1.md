---
title: El contexto y la semántica - Parte 1
author: marombeltran
pubDatetime: 2023-05-05T10:59:19Z
postSlug: context-and-semantics-part-1
featured: true
draft: false
tags:
  - semantics
ogImage: ""
description: Hemos visto en el capítulo introductorio que la programación nos ayuda a comprender a través del modelado de información cómo es que 
  funcionan las cosas en un ambiente de ejecución controlado. Aunque lo digimos en palabras como estas "un modelo mental se refiere a una representación 
  interna y subjetiva que utilizamos para entender el mundo que nos rodea", entendiendo por modelo mental como ambiente de ejecución...
---
Todos tenemos un modelo mental de las cosas, tal vez no se corresponda directamente con la realidad, ya que a veces es difícil estar seguros si nuestra percepción 
es la correcta. El tema es que tenemos una construcción semántica de todo a lo que estamos expuestos por experiencia propia. 

Cuando comenzamos a pensar en términos más elementales de la construcción de significados para nuestro entendimiento sobre una situación, podemos darnos 
cuenta de que asignar los significados correctos a las cosas es más útil de lo que pensamos, ya que esto nos permite evaluar proposiciones lógicas (más complejas) que nos 
conduzcan a un resultado correcto (reduciendo el margen de ambigüedad).

> Este artículo está diseñado para hacer notar la importancia de construir un entorno de evaluación adecuado para la validación de resultados (si eres programador, 
entenderás hasta aquí). Si no lo eres, déjame explicarte con otras palabras ya que posiblemente encontrarás útil lo que intento explicar. A lo que se le llama entorno 
en el lenguaje común, suele llamarsele `contexto`. Como sabrás, en un ejemplo práctico, dar una opinión acertada sobre un tema del que se sabe poco resulta ser muy difícil, 
debido a que no hay una base sólida sobre la cual construir juicios que tengan valor y que estén respaldados (validados).

Como sabrás la computación (a nivel más básico) no sabe de sarcasmo, es decir todo se lo toma literal cuando las instrucciones llegan a su sistema de procesamiento.
En su sistema de construcción de operaciones solo entiende dos estados, encendido y apagado, polarizado negativo o polarizado positivo, 0 o 1, asi que, jamás se dice así mismo 
"..a es un zero en una representación de uno", es un zero o un uno así de simple.

Todo desarrollo de software pasa por un ambiente controlado, el cual permite evaluar los procesos antes de ser puestos en un ambiente de producción.