---
title: El contexto y la semántica - Parte 2
author: marombeltran
pubDatetime: 2023-05-20T10:59:19Z
postSlug: context-and-semantics-part-2
featured: true
draft: false
tags:
  - semantics
ogImage: ""
description:
  El sistema de tipos de un lenguaje de programación define los tipos de datos disponibles y las reglas que gobiernan su uso. 
  Proporciona una forma de clasificar y organizar los datos, lo que ayuda a prevenir errores y garantizar la integridad de los programas...
---
Nuestro mundo está lleno de patrones que se encuentran en todas partes, en la naturaleza, incluso en nuestras conductas y rutinas. 
Ya sea por comodidad o porque siguen normas sociales, seguimos estos patrones para evitar parecer diferentes. 
Sin embargo, ahora nos adentraremos en un mundo en el que nada tiene coherencia ni sentido. 
Observamos desde todos los ángulos y solo vemos un montón de cosas sin sentido, una mezcla caótica de 0's y 1's sin ninguna estructura lógica. 
Nos movemos en este mundo sin orden ni coherencia, siendo solo observadores impotentes que no pueden hacer más que eso.

Es como sumergirse en un mar de 1's y 0's, donde todo carece de sentido. Estamos viendo los circuitos integrados y los millones de celdas de memoria,
cada celda almacena un 1 o un 0, solo sabemos que son lineas y columnas de estos numeros, no hay diviciones que hagan bloques más grandes de estos, solo es un monton de celdas.

![Figure 1](https://marombeltran.com/assets/bits.png)

Todo esto es una locura, cierto. Ahora que ya te hiciste una idea de lo que que sigue, me imagino que te estaras preguntando: 
[`..bueno en realidad estamos hablando de un dispositivo de almacenamiento, cierto?`]. ¡Estas en lo correcto!, estamos hablando de un dispositivo de almacenamiento magnetico cualquiera; 
un Hard Disc, una Random Access Memory, o cualquier otra variante.

Si recuerdas, en el artículo anterior hablabamos de sistemas, y sistemas sobre sistemas, luego hablamos de algoritmos, que es una capa superior al sistema, es un concepto más especializado, más formal,
el cuál implica comprender las capacidades y limitaciones del sistema.

...

Pero, pero.., ¿Cómo sabe la computadora qué datos en binario deben ejecutarse y cuáles no .. if everthing is binary?.

--- 
### ¿Por qué existen los tipos de datos?

A nivel bajo, de hardware y código de máquina, tanto la lógica del programa (el código) como los datos con los que opera se representan en forma de bits. 
En este nivel, no existe una distinción clara entre el código y los datos, lo que puede llevar a errores cuando el sistema confunde uno con el otro. 
Estos errores pueden variar desde bloqueos en el programa hasta vulnerabilidades de seguridad graves, en las cuales un atacante puede "engañar" al sistema para que ejecute sus datos de entrada como si fueran código.

Un ejemplo de este tipo de interpretación imprecisa es la función JavaScript eval(), que evalúa una cadena como código. 
Funciona bien cuando la cadena proporcionada es un código JavaScript válido, pero provoca un error de tiempo de ejecución cuando no lo es, como se muestra en la siguiente lista.

```javascript
// Imprime “42” to the console
console.log(eval("40+2")); 

// Lanza “SyntaxError: unexpected token: identifier”
console.log(eval("Hello world!"));
```
### 0s y 1s..
Más allá de distinguir entre código y datos, necesitamos saber cómo interpretar un dato. 
La secuencia de 16 bits 1100001010100011 puede representar el entero de 16 bits sin signo 49827, el entero de 16 bits con signo -15709, el carácter codificado en UTF-8 '£', o algo completamente diferente. 
El hardware en el que se ejecutan nuestros programas almacena todo como secuencias de bits, por lo que necesitamos una capa adicional para dar significado a estos datos.

![Figure 1](https://marombeltran.com/assets/semantics-part-2-fig.1.png)
Una secuencia de bits puede ser interpretada de muchas formas.

Los tipos brindan significado a los datos y le indican a nuestro software cómo interpretar una secuencia específica de bits en un contexto dado, para que conserve el significado previsto. 
Además, los tipos limitan el conjunto de valores válidos que una variable puede tomar. 
Por ejemplo, un entero de 16 bits con signo puede representar cualquier valor entero entre -32768 y 32767, pero no más que eso. 
La capacidad de restringir el rango de valores permitidos ayuda a evitar clases completas de errores al no permitir la aparición de valores no válidos durante la ejecución del programa. 
Visualizar los tipos como conjuntos de valores posibles es fundamental para comprender muchos de los conceptos abordados en este post.

Además de distinguir entre código y datos, necesitamos saber cómo interpretar un fragmento de datos. 
La secuencia de 16 bits 1100001010100011 puede representar el entero sin signo de 16 bits 49827, el entero con signo de 16 bits -15709, el carácter codificado en UTF-8 '£' o algo completamente diferente. 
El hardware en el que se ejecutan nuestros programas almacena todo como secuencias de bits, por lo que necesitamos una capa adicional para darle significado a estos datos.

Las computadoras ejecutan instrucciones almacenadas en la memoria y el procesador de la computadora interpreta estas instrucciones en 
formato binario. La computadora sigue un conjunto específico de reglas para determinar qué datos binarios representan instrucciones a 
ejecutar y qué datos representan otros tipos de información, como valores de datos o direcciones.

La "computadora" usa una combinación de hardware y software para distinguir entre diferentes tipos de datos. 
Aquí hay algunos componentes clave involucrados :

> [Aquí](https://marombeltran.com/posts/context-and-semantics-part-2-1) te dejo la parte técnica, disfrutalo.

Las instrucciones se almacenan en una secuencia y formato específicos, y la CPU sabe cómo interpretarlas y ejecutarlas correctamente.