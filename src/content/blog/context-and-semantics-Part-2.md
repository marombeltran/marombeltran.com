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
Nuestro mundo está lleno de patrones que se encuentran en todas partes, en nuestra naturaleza, incluso en nuestras conductas y rutinas. 
Ya sea por comodidad o porque siguen normas sociales, seguimos estos patrones para evitar parecer diferentes. 
Sin embargo, ahora nos adentraremos en un mundo en el que nada tiene coherencia ni sentido. 
Observamos desde todos los ángulos y solo vemos un montón de cosas sin sentido, una mezcla caótica de 0's y 1's sin ninguna estructura lógica. 
Nos movemos en este mundo sin orden ni coherencia, siendo solo observadores impotentes que no pueden hacer más que eso.

Es como sumergirse en un mar de 1's y 0's, donde todo carece de sentido. Estamos viendo los circuitos integrados y los millones de celdas de memoria,
cada celda almacena un 1 o un 0, solo sabemos que son lineas y columnas de estos numeros, no hay diviciones que hagan bloques más grandes de estos, solo es un monton de celdas.

Todo esto es una locura, cierto. Ahora que ya te hiciste una idea de lo que que sigue, me imagino que te estaras preguntando: 
[`..bueno en realidad estamos hablando de un dispositivo de almacenamiento, cierto?`]. ¡Estas en lo correcto!, estamos hablando de un dispositivo de almacenamiento magnetico cualquiera; 
un Hard Disc, una Random Access Memory, o cualquier otra variante.

Si recuerdas, en el artículo anterior hablabamos de sistemas, y sistemas sobre sistemas, luego hablamos de algoritmos, que es una capa superior al sistema, es un concepto más especializado, más formal,
el cuál implica comprender las capacidades y limitaciones del sistema.

...

Pero, pero.., ¿Cómo sabe la computadora qué datos en binario deben ejecutarse y cuáles no .. if everthing is binary?.

Las computadoras ejecutan instrucciones almacenadas en la memoria y el procesador de la computadora interpreta estas instrucciones en 
formato binario. La computadora sigue un conjunto específico de reglas para determinar qué datos binarios representan instrucciones a 
ejecutar y qué datos representan otros tipos de información, como valores de datos o direcciones.

La "computadora" usa una combinación de hardware y software para distinguir entre diferentes tipos de datos. 
Aquí hay algunos componentes clave involucrados:

`Instruction Set Architecture (ISA)`: la ISA define el formato de las instrucciones y cómo se codifican en binario. 
Especifica la estructura de las instrucciones, incluido el código de operación (código de operación) y los operandos necesarios.

`Fetch-Decode-Execute Cycle`: el procesador de la computadora sigue un ciclo conocido como ciclo de obtención, decodificación y ejecución. 
En el paso de búsqueda, el procesador recupera la siguiente instrucción de la memoria según el valor del contador de programa (PC). 
La instrucción se obtiene como una secuencia binaria.

`Control Unit`: La unidad de control es un componente del procesador que coordina la ejecución de instrucciones. 
Interpreta la instrucción obtenida y genera señales de control para dirigir el flujo de datos y operaciones dentro del procesador.

`Opcode Decoding`: la unidad de control decodifica el código de operación de la instrucción obtenida. 
El código de operación especifica la operación a realizar, como operaciones aritméticas, lógicas o de movimiento de datos.

`Operand Handling`: los operandos especificados por la instrucción también se decodifican y procesan. 
Los operandos pueden representar direcciones de memoria, valores de datos o registros donde se almacenan los datos.

`Execution`: una vez que se decodifica la instrucción, la unidad de control envía señales a las unidades funcionales apropiadas dentro del procesador para realizar las operaciones requeridas. 
Esto puede involucrar cálculos aritméticos y lógicos, movimiento de datos entre registros y memoria, u operaciones de flujo de control.

`Data vs. Instructions`: la computadora distingue entre datos e instrucciones según el contexto en el que se accede a ellos. 
Las instrucciones generalmente se almacenan en un área separada de la memoria, como un caché de instrucciones o un segmento de instrucciones, mientras que los datos residen en otras ubicaciones de la memoria.

`Program Counter (PC)`: El contador de programa es un registro que realiza un seguimiento de la dirección de memoria de la siguiente instrucción que se va a buscar. 
Se incrementa después de que se obtiene cada instrucción y apunta a la siguiente instrucción que se ejecutará.

Siguiendo estos pasos y utilizando la arquitectura del conjunto de instrucciones definida, la computadora puede identificar y ejecutar correctamente las instrucciones codificadas en formato binario mientras trata otros datos como valores o direcciones de datos. 
La combinación de componentes de hardware y la lógica de la unidad de control asegura que la computadora interprete y ejecute con precisión las instrucciones especificadas en el programa.