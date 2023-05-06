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
cuenta de que asignar los significados correctos a las cosas es más útil de o que pensamos, ya que esto nos permite evaluar proposiciones lógicas (más complejas) que nos 
conduzcan a un resultado correcto (reduciendo el margen de ambigüedad).

> Este artículo está diseñado para hacer notar la importancia de construir un entorno de evaluación adecuado para la validación de resultados (si eres programador, 
entenderás hasta aquí). Si no lo eres, déjame explicarte con otras palabras ya que posiblemente encontrarás útil lo que intento explicar. A lo que se le llama entorno 
en el lenguaje común, suele llamarsele `contexto`. Como sabrás, en un ejemplo práctico, dar una opinión acertada sobre un tema del que se sabe poco resulta ser muy difícil, 
debido a que no hay una base sólida sobre la cual construir juicios que tengan valor y que estén respaldados (validados).

Como sabrás, en el nivel más básico de la computación, no se reconoce el sarcasmo. Es decir, todo se interpreta literalmente cuando las instrucciones llegan al sistema 
de procesamiento. En su construcción de operaciones, solo se comprenden dos estados: encendido y apagado, polarizado negativo o positivo, 0 o 1, etc. 
Por lo tanto, nunca se dice que "a es un cero en una representación de uno", sino simplemente que es un cero o un uno. Esto es así porque los elementos básicos de 
información y almacenamiento en este nivel son los que permitirán construir `sistemas` lógicos más complejos, que serán la base para otros sistemas de un nivel de 
abstracción superior. Por lo tanto, el resultado de una operación en este punto no puede tener un margen mínimo de ambigüedad, ya que los 0 y 1 son la materia 
prima para la construcción de un entorno que amplíe las posibilidades (operaciones lógicas más complejas), `construcción de reglas` matemáticas en su escencia.

Si has notado, en esencia estamos hablando de sistemas y la construcción de reglas para crear más sistemas, que a su vez son reglas para otros sistemas (no es una 
broma, que quede claro que soy una persona seria, jajaja). A partir de cualquier conjunto de reglas que componen un sistema, podemos crear algo maravilloso que se 
llama algoritmo. Sabemos que usamos algoritmos todo el tiempo, nuestra interpretación subjetiva funciona sobre el conjunto de muchos subsistemas, cada uno de los 
cuales aplica algoritmos a su propio nivel. A este proceso se le llama emulación de sistemas: ejecutamos un sistema sobre otro aplicando algoritmos para dar una 
interpretación o significado final a las cosas.
