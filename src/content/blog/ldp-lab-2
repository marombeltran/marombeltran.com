---
author: Marom Beltran
pubDatetime: 2023-02-23T21:28:00Z
title: Funciones como argumentos y asignación dinámica de memoria en C++
postSlug: ldp-lab-2
featured: true
draft: false
tags:
  - C++
ogImage: ""
description:
    C++ tiene caracteristicas que lo hacen único al momento de utilizar recursos a bajo nivel, en este post se exploran dos conceptos
    primordiales; funciones como argumentos y manejo de memoria, los ejemplos resuelven dos ejercicios propuestos por mi catedra de
    Lógica de programación de mi ciclo escolar.
---
C++ tiene caracteristicas que lo hacen único al momento de utilizar recursos a bajo nivel, en este post se exploran dos conceptos
primordiales; funciones como argumentos y manejo de memoria, los ejemplos resuelven dos ejercicios propuestos por mi catedra de
Lógica de programación de mi ciclo escolar.
```c++
#include <iostream>
#include <functional>

int invoke (int x, int y, std::function<int(int, int)> func)
{ return func(x, y); }

int add (int x, int y)
{ return x  + y; }

int sub (int x, int y)
{ return x - y; }

int multiply (int x, int y)
{ return x * y; }

int division (int x, int y)
{ return (!y) ? 0 : x/y; }

int main()
{
    int x, y;
    std::cout << "Ingrese dos valores (enteros) seguidos de un espacio: ";
    std::cin >> x >> y;

    std::cout << "Sumar " << x << " y  " << y << ": " << invoke(x, y, add) << std::endl;
    std::cout << "Restar " << y << " de " << x << ": " << invoke(y, x, sub) << std::endl;
    std::cout << "Multiplicar " << x << " y " << y << ": " << invoke(x, y, multiply) << std::endl;
    std::cout << "Dividir " << x << " entre " << y << ": " << invoke(x, y, division) << std::endl;

    return 0;
}
```
Asignación dinámica de memoria, un ejemplo de exploración.
```c++
#include <iostream>

void *allocateMemory (int nbytes)
{
    char *p;
    p = new char[nbytes];
    std::fill(p, p +nbytes, 0);

    return p; // Asumiendo que tenemos suficiente memoria,
}

int main ()
{
    int *nums, num = 0;
    int i, total = 0, *nPt;
    std::cout << "Ingrese la cantidad (número) de datos a procesar: ";
    std::cin >> num;

    if (nums = static_cast<int *>(allocateMemory(num * sizeof(int)))) {
        std::cout << "Lista de " << num << " elementos para llenar."<< std::endl;

        for (i = 0; i < num; i++) { // Llenar el nuevo segmento asignado a `nums`
            std::cout << "Ingrese el valor # " << i +1 << ": ";
            std::cin >> nums[i];
         }

        nPt = nums;
        for (i = 0; i < num; i++) total = total + *nPt;

        std::cout << "El total de los elementos del arreglo es " << total << std::endl;
    }

    return 0;
}
```
