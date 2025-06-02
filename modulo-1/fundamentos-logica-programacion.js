/*
🟢 MÓDULO 1: Fundamentos de la Lógica de Programación
🎯 Objetivo:
Comprender los conceptos básicos de la lógica de programación, necesarios para construir cualquier algoritmo o programa.


📌 1. ¿Qué es la lógica de programación?
Es la capacidad de pensar paso a paso para resolver problemas usando instrucciones que una computadora pueda entender. Es como darle órdenes a una máquina, pero sin ambigüedad.

Ejemplo de lógica básica en la vida real:

🧠 "Si tengo hambre, abro la heladera. Si hay comida, como. Si no hay, pido delivery."

Eso es un algoritmo lógico.


📌 2. Algoritmo y Diagrama de flujo
🧾 Algoritmo
Es una secuencia ordenada de pasos que lleva a resolver un problema.

Ejemplo: Algoritmo para hacer café

--Calentar agua

--Agregar café al filtro

--Verter el agua caliente

--Servir en taza

--Endulzar si se desea

🔄 Diagrama de flujo
Representa gráficamente un algoritmo:

[Inicio]
   ↓
[Calentar agua]
   ↓
[Agregar café al filtro]
   ↓
[Verter agua]
   ↓
[Servir en taza]
   ↓
[Fin]


📌 3. ¿Qué es el pseudocódigo?
Es una forma intermedia entre el lenguaje humano y el lenguaje de programación. No tiene reglas estrictas, pero sigue una estructura lógica clara.

Ejemplo de pseudocódigo para sumar dos números:

INICIO
    LEER numero1
    LEER numero2
    resultado ← numero1 + numero2
    ESCRIBIR "La suma es ", resultado
FIN

📌 4. Tipos de datos y variables
Una variable es un espacio que guarda un valor.

| Tipo     | JavaScript | PHP            | Ejemplo                      |
| -------- | ---------- | -------------- | ---------------------------- |
| Número   | `number`   | `int`, `float` | `let x = 10;` / `$x = 10;`   |
| Texto    | `string`   | `string`       | `"Hola"`                     |
| Booleano | `boolean`  | `bool`         | `true`, `false`              |
| Arreglo  | `array`    | `array`        | `[1, 2, 3]` / `array(1,2,3)` |
| Nulo     | `null`     | `null`         | `let x = null;`              |


📌 5. Operadores
🔹 Aritméticos
-- +, -, *, /, % (resto)

🔹 Relacionales
-- ==, !=, >, <, >=, <=

🔹 Lógicos
-- && (Y)

-- || (O)

-- ! (NO)


✅ Ejercicio 1 (pseudocódigo básico):
Haz un pseudocódigo que reciba dos números y diga cuál es mayor.

¿Querés intentarlo vos y te corrijo, o preferís que lo hagamos juntos paso a paso?

También puedo darte un resumen visual en tabla si lo necesitás.

INICIO
    LEER numero1
    LEER numero2

    SI numero1 > numero2 ENTONCES
        resultado ← numero1
    SINO
        resultado ← numero2
    FIN SI

    ESCRIBIR "El número mayor es: ", resultado
FIN

// */
let numero1 = parseInt(prompt("Ingrese el primer número"))
let numero2 = parseFloat(prompt("ingresar el segundo numero"))
let resultado;


    if(numero1 > numero2) {
        resultado = numero1
        
    }else {
        resultado = numero2
    }

alert("El numero mayor es : " + resultado)

