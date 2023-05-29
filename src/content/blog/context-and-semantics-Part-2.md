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
Ya sea por comodidad o porque constituyen normas sociales, seguimos estos patrones para evitar parecer diferentes. 
Sin embargo, ahora nos adentraremos en un mundo en el que nada tiene coherencia ni sentido. 
Observamos desde todos los ángulos y solo vemos un montón de cosas sin sentido, una mezcla caótica de 0's y 1's sin ninguna estructura lógica. 
Nos movemos en este mundo sin orden ni coherencia, siendo solo observadores impotentes que no pueden hacer más que eso.

Es como sumergirse en un mar de 1's y 0's, donde todo carece de sentido. Estamos viendo los circuitos integrados y los millones de celdas de memoria,
cada celda almacena un 1 o un 0, solo sabemos que son lineas y columnas de estos numeros, no hay bloques más grandes que los agrupen, solo es un monton de celdas.


![Figure bits](https://marombeltran.com/assets/semantics-part-2-fig.0.png)

Todo esto es una locura, cierto. Aunque ahora creo que ya te hiciste una idea de lo que se intenta establecer, déjame te explico: 
`.. en realidad estamos hablando de un dispositivo de almacenamiento magnetico cualquiera`.
Un Hard Disc, una Random Access Memory, o cualquier otra variante.

---

> Quiero hacer un paréntesis, si recuerdas, en el artículo anterior hablabamos de sistemas, y sistemas sobre sistemas, luego hablamos de algoritmos, 
los cuáles son básicamente una capa superior al sistema. Los algorítmos son un concepto más especializado, más formales,
los cuáles implican en su construcción una comprensión más profunda de las capacidades y limitaciones del sistema base.

En el escenario planteado en este artículo no existe tal sistema, no existe un patrón para ser reconocido e interpretado, no hay nociones de un lenguaje comprensible y utilizable. 
Es aquí donde entran algunos `elementos` importantes, sin los cuales todo esto no tiene ningún uso.

> Los sistemas están en todas partes, desde la forma en que nos comunicamos, la forma en que nos relacionamos, la forma en que enfrentamos una tarea o resovemos un problema, etc. 
> Todos tenemos un sistema para todo, la forma en que hacemos nuestra vida tiene un sistema, es tu sistema. ¡Ya quitemosle el disfraz a todo esto que parece complicado!

Lo cierto es que para construir un sistema que funcione y que cumpla con los objetivos deseados necesitamos herramientas auxiliares 
(componentes electrónicos y software que trabaja a nivel electrónico), en la computación antes del algoritmo va este conjunto de herramientas.

### ¿Cómo sabe la computadora cuáles datos deben ejecutarse y cuáles no .. if everthing is binary?.

> Existe código en ese mar de 0's y 1's que puede ser ejecutado por la unidad de procesamiento ya que se corresponde con una interpretación comprensible para su arquitectura 
y existe otro grupo de información que no es interpretado como instrucciones de máquina, simplemente son datos correspondientes al los programas o archivos de texto plano, 
codificados en ASCII u otro tipo.


La "computadora" usa una combinación de hardware y software para distinguir entre diferentes tipos de datos.
Aquí hay algunos componentes clave involucrados :

**Instruction Set Architecture (ISA)**: la ISA *define el formato de las instrucciones y cómo se codifican en binario*.
Especifica la estructura de las instrucciones, incluido el código de operación (código de operación) y los operandos necesarios.

**Fetch-Decode-Execute Cycle**: el procesador de la computadora sigue un ciclo conocido como ciclo de obtención, decodificación y ejecución.
En el paso de búsqueda, el procesador recupera la siguiente instrucción de la memoria según el valor del contador de programa (PC).
La instrucción se obtiene como una secuencia binaria.

**Control Unit**: La unidad de control es un componente del procesador que coordina la ejecución de instrucciones.
Interpreta la instrucción obtenida y genera señales de control para dirigir el flujo de datos y operaciones dentro del procesador.

**Opcode Decoding**: la unidad de control decodifica el código de operación de la instrucción obtenida.
El código de operación especifica la operación a realizar, como operaciones aritméticas, lógicas o de movimiento de datos.

**Operand Handling**: los operandos especificados por la instrucción también se decodifican y procesan.
Los operandos pueden representar direcciones de memoria, valores de datos o registros donde se almacenan los datos.

**Execution**: una vez que se decodifica la instrucción, la unidad de control envía señales a las unidades funcionales apropiadas dentro del procesador para realizar las operaciones requeridas.
Esto puede involucrar cálculos aritméticos y lógicos, movimiento de datos entre registros y memoria, u operaciones de flujo de control.

**Data vs. Instructions**: la computadora distingue entre datos e instrucciones según el contexto en el que se accede a ellos.
Las instrucciones generalmente se almacenan en un área separada de la memoria, como un caché de instrucciones o un segmento de instrucciones, mientras que los datos residen en otras ubicaciones de la memoria.

**Program Counter (PC)**: El contador de programa es un registro que realiza un seguimiento de la dirección de memoria de la siguiente instrucción que se va a buscar.
Se incrementa después de que se obtiene cada instrucción y apunta a la siguiente instrucción que se ejecutará.

Siguiendo estos pasos y utilizando la arquitectura del conjunto de instrucciones definida, la computadora puede identificar y ejecutar correctamente las instrucciones codificadas en formato binario mientras trata otros datos como valores o direcciones de datos.
La combinación de componentes de hardware y la lógica de la unidad de control asegura que la computadora interprete y ejecute con precisión las instrucciones especificadas en el programa.

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

> Una secuencia de bits puede ser interpretada de muchas formas.

![Figure bits whatever](https://marombeltran.com/assets/semantics-part-2-fig.1.png)

Los tipos brindan significado a los datos y le indican a nuestro software cómo interpretar una secuencia específica de bits en un contexto dado, para que conserve el significado previsto. 
Además, los tipos limitan el conjunto de valores válidos que una variable puede tomar. 
Por ejemplo, un entero de 16 bits con signo puede representar cualquier valor entero entre -32768 y 32767, pero no más que eso. 
La capacidad de restringir el rango de valores permitidos ayuda a evitar clases completas de errores al no permitir la aparición de valores no válidos durante la ejecución del programa. 
Visualizar los tipos como conjuntos de valores posibles es fundamental para comprender muchos de los conceptos abordados en este post.

> La secuencia de bits escrita como un entero de 16 bits con signo. 
> La información de tipo (entero con signo de 16 bits) le dice al compilador y/o al tiempo de ejecución que la secuencia de bits representa un valor entero entre -32768 y 32767, asegurando la interpretación correcta como -15709.

![Figure 2](https://marombeltran.com/assets/semantics-part-2-fig.2.png)

Las computadoras ejecutan instrucciones almacenadas en la memoria y el procesador de la computadora interpreta estas instrucciones en 
formato binario. La computadora sigue un conjunto específico de reglas para determinar qué datos binarios representan instrucciones a 
ejecutar y qué datos representan otros tipos de información, como valores de datos o direcciones.

... 

La "computadora" usa una combinación de hardware y software para distinguir entre diferentes tipos de datos. 
Aquí hay algunos componentes clave involucrados :

Las instrucciones se almacenan en una secuencia y formato específicos, y la CPU sabe cómo interpretarlas y ejecutarlas correctamente.