---
author: Marom Beltran
pubDatetime: 2023-02-23T21:28:00Z
title: Funciones como argumentos y asignación dinámica de memoria en C++
postSlug: functions-as-arguments-dynamic-memory-allocation
featured: true
draft: false
tags:
  - C++
ogImage: "https://marombeltran.com/assets/functions-as-arguments-dynamic-memory-allocation.jpg"
description:
C++ tiene caracteristicas que lo hacen único al momento de utilizar recursos a bajo nivel, en este post se exploran dos conceptos
primordiales; funciones como argumentos y manejo dinámico de memoria, los ejemplos resuelven dos ejercicios propuestos por la catedra de
Lógica de programación en mi ciclo escolar.
---
C++ tiene caracteristicas que lo hacen único al momento de utilizar recursos a bajo nivel, en este post se exploran dos conceptos
primordiales; funciones como argumentos y manejo dinámico de memoria, los ejemplos resuelven dos ejercicios propuestos por la catedra de
Lógica de programación en mi ciclo escolar.
```c
#include <limits>
#include <iostream>
#include <functional>

int invoke (int x, int y, std::function<int(int, int)> func)
{ return func(x, y); }

int add (int x, int y)
{ return x + y; }

int sub (int x, int y)
{ return x - y; }

int multiply (int x, int y)
{ return x * y; }

int division (int x, int y)
{ return (!y) ? 0 : x/y; }

int main(int argc, char const *argv[])
{
    int x, y;
    entry:
    std::cout << "Ingrese dos valores (enteros) separados de un espacio: ";
    std::cin >> x >> y;

    if (std::cin.fail()) {
        std::cin.clear();
        std::cin.ignore(std::numeric_limits<int>::max(), '\n');
        goto entry;
    }

    std::cout  << x << " + " << y << ": " << invoke(x, y, add) << std::endl;
    std::cout  << x << " - " << y << ": " << invoke(x, y, sub) << std::endl;
    std::cout  << x << " * " << y << ": " << invoke(x, y, multiply) << std::endl;
    std::cout <<  x << " / " << y << ": " << invoke(x, y, division) << std::endl;

    return 0;
}
```
Asignación dinámica de memoria, un ejemplo de exploración.
```c
#include <iostream>

void *allocateMemory (int nbytes)
{
    char *p;
    try {
        p = new char[nbytes];
        std::fill(p, p+nbytes, 0);
    } catch (std::bad_alloc e) {
        std::cout << "No hay memoria suficiente\n";
        return 0;
    }

    return p;
}

int main (int argc, char const *argv[])
{
    int *nums, num = 0;
    int i, total = 0, *nPt;
    std::cout << "Ingrese la cantidad (número) de datos a procesar: ";
    std::cin >> num;

    int nbytes = num * sizeof(int);

    if (nums = static_cast<int *>(allocateMemory(nbytes))) {
        std::cout << "Se han asignado " << nbytes << " bytes de memoria." << std::endl;
        std::cout << "Correspondiente a " << nbytes/sizeof(int) << " elementos de tipo integer." << std::endl;
        
        for (i = 0; i < num; i++)
        // Llenar el nuevo segmento asignado a `nums`
        {
            std::cout << "Ingrese el valor del elemento # " << i +1 << ": ";
            std::cin >> nums[i];
         }

        nPt = nums; // elemento [0]
        for (i = 0; i < num && (total += *nPt++); i++);

        std::cout << "El total de los elementos del arreglo es " << total << std::endl;
    }

    return 0;
}
```
