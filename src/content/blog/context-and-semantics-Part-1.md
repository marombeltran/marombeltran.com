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

Cuando comenzamos a pensar en términos más elementales de la construcción de significados para nuestro entendimiento sobre una situación o cosa, podemos darnos 
cuenta de que asignar los significados correctos a las cosas es más útil de o que pensamos, ya que esto nos permite evaluar proposiciones lógicas (más complejas) que nos 
conduzcan a un resultado correcto (reduciendo el margen de ambigüedad).

> Este artículo está diseñado para hacer notar la importancia de construir un entorno de evaluación adecuado para la validación de resultados (si eres programador, 
entenderás hasta aquí). Si no lo eres, déjame explicarte con otras palabras ya que posiblemente encontrarás útil lo que intento explicar. A lo que se le llama entorno en este párrafo, 
en el lenguaje común suele llamarsele `contexto`. Como sabrás, en un ejemplo práctico, dar una opinión acertada sobre un tema del que se sabe poco resulta ser muy difícil, 
debido a que no hay una base sólida sobre la cual construir juicios que tengan valor y que estén respaldados (validados).

Pero, regresemos al contexto que es la computación y al código. Bien decirte que en el nivel más básico de la computación no se reconoce el sarcasmo. 
Es decir, todo se interpreta literalmente cuando las instrucciones llegan al 
sistema de procesamiento. En su conjunto de operaciones, solo se comprenden dos estados: encendido y apagado, polarizado negativo o positivo, 0 o 1, etc. 
Por lo tanto, nunca se dice que "a es un cero en una representación de uno", sino simplemente que es un cero o un uno. Esto es así porque los elementos básicos de 
de construcción en este nivel son los que permitirán elaborar `sistemas` lógicos más complejos (en conjunto con los transistores a nivel electrónico), que serán la 
base para otros sistemas de un nivel de abstracción superior. Por lo tanto, el resultado de una operación en este punto no puede tener un margen mínimo de ambigüedad, 
ya que los 0 y 1 son la materia prima para la construcción de un entorno que amplíe las posibilidades (operaciones lógicas más complejas), `construcción de reglas` 
matemáticas en su escencia.

Si has prestado atención al último párrafo, en esencia estamos hablando de sistemas y de la construcción de reglas para crear más sistemas, que a su vez son la base para otros 
sistemas (no es una broma, quiero dejar claro que soy una persona seria, jajaja). A partir de cualquier conjunto de reglas que componen un sistema, podemos 
crear algo maravilloso que se llama algoritmo. Los algoritmos son herramientas que usamos todo el tiempo, nuestra interpretación subjetiva funciona sobre 
el conjunto de muchos subsistemas, cada uno de los cuales aplica algoritmos a su propio nivel. A este proceso se le llama emulación de sistemas: ejecutamos 
un sistema sobre otro, aplicando algoritmos para dar una interpretación o significado final a las cosas.

Bien, después de explicar esta complejidad, quisiera presentarte un ejemplo más comprensible: vivimos y operamos en sistemas que están construidos con reglas. 
Cada uno de estos sistemas tiene un conjunto de reglas o leyes que les dan sentido, coherencia y consistencia a nuestro entorno, como la ley de la gravedad, 
por ejemplo. Si ignoramos estas leyes, nos exponemos a sufrir graves consecuencias o descubrir algo impredecible para nuestra experiencia. A partir de ahí, 
creamos rutinas que nos llevan a lograr ciertos resultados, siempre dentro de esas posibilidades. Es por eso que la reproducción efectiva de estas rutinas 
conduce inequívocamente al mismo resultado bajo las mismas condiciones.

Las ciencias de la computación se basan en un lenguaje matemático y leyes complejas, pero no entraré en ese tema en este momento. Lo que es importante 
destacar es que, `para aprender el arte de programar, es vital comprender las reglas que rigen la movilidad y manipulación de este entorno`. 
La pregunta es: ¿Qué es lo que puedo hacer y qué no? Cuando nos movemos y actuamos en nuestra vida diaria en nuestro entorno, casi todo resulta fácil 
de realizar siempre y cuando actuemos dentro de lo que es posible, ¿verdad? Pero si de repente se te ocurre algo que no es posible (que no está dentro de 
las posibilidades), simplemente estás limitado no porque no puedas pensarlo, sino porque el ambiente no te brinda las condiciones para ejecutar esa acción. 
Si sucediera lo contrario, estaríamos ante una anomalía en la matrix :). 

Como programador me imagino que haz hecho las siguiente preguntas:
- ¿Qué es un tipo de dato y cómo se construyen?
- ¿Qué sucede cuando hago un casting de un dato un int a un char?
- ¿Qué es una bifurcación?
- ¿Qué es una variable (dejando de lado lo que nos han enseñado)?
- ¿Por qué una constante no se puede modificar una vez inicializada?
- ¿Cómo se interpreta la siguiente operación? 
```ts
let a = 10;
let b = a;
a = 0;
```
- ¿Qué le da consistencia a ese resultado, no importando el número de veces que lo ejecute?
- ¿Existen leyes que le den consistencia para que siempre sea el mismo valor?
- ¿Qué son los operadores?
- ¿Por qué al final todo es un valor?
- Etc, etc.

Volvamos al capítulo anterior y a la introducción de este.
> Como habrás notado en estos dos artículos, construir un modelo mental sólido del contexto y los elementos de construcción te 
permitirá crear un entorno mental de ejecución lo más preciso posible para que puedas leer y ejecutar el código (mentalmente) en un solo vistazo, 
sin necesidad de compilarlo o interpretarlo para conocer su resultado. Además, te permitirá formular las preguntas correctas 
en cualquier situación relacionada con la programación en la que te encuentres atascado (algo que suele suceder).

A lo largo de estos artículos, cuestionaré algunos conceptos clave para ayudarte a construir un esquema más preciso. 
No te preocupes, no soy un gurú, ¡también tengo muchas dudas y las vamos a explorar 
juntos! Si quieres seguir aprendiendo y descubriendo junto a mí, ¡sigue leyendo esta serie de artículos!

---
Si estas interesado en colaborar conmigo en esta investigación o te gusta mi contenido puedes seguirme, y contactarme en mis redes sociales, siempre 
será un placer hablar sobre tecnología. Saludos!
