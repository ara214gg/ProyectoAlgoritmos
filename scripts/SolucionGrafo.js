/*Proyecto final analisis de algoritmos*/

/*Implementacion del algortimo PRIM para optimizar un rafo que represente 
las diferentes tareas del hogar que se realizan en el dia a dia */

/**/
/*
    Lista de tareas:  
     1. Tender las camas - A
     2. Lavar la ropa - B
     3. Lavar el piso - C
     4. Lavar los trates - D
     5. Bañar al perro - E
     6. Limpiar la lavadora -F
     7. Doblar la ropa - G
     8. Tender la ropa - H
     9. Sacar la basura - I 
     10. Lavar el patio - J
     11. Tarea - K
     12 FEW - L
*/

class nodo{
    constructor(nombre,listaEdge = []){
        this.listaEdge = listaEdge;
        this.nombre = nombre;
    }
    getNombre(){
        return console.log(`${this.nombre}`);
    };
    
    setNombre(nuevoNombre){
        this.nombre = nuevoNombre;
    };

    getEdge(){
        return this.listaEdge;
    }

    addEdge(enlace){
        this.listaEdge.push(enlace);
    }
};

class edge{
    constructor(nodoOrigen, nodoDestino){
        this.nodoOrigen = nodoOrigen;
        this.nodoDestino = nodoDestino;
    };

    getNodoOrigen(){
        return console.log(`${this.nodoOrigen}`);
    };

    setNodoOrigen(nuevoNodoOrigen){
        this.nodoOrigen = nuevoNodoOrigen;
    };

    getNodoDestino(){
        return console.log(`${this.nodoDestino}`);
    };

    setNodoDestino(nuevoNodoDestino){
        this.nodoDestino = nuevoNodoDestino;
    };
};

class grafo{
    constructor(listaNodosGrafo = []){
        this.listaNodosGrafo = listaNodosGrafo;
    };

    addNodos(nodoNuevo){
        this.listaNodosGrafo.push(nodoNuevo);
    }

    getNodos(){
        this.listaNodosGrafo.forEach(element => console.log(element));
    }
};


const tarea1 = new nodo("tarea1");
const tarea2 = new nodo("tarea2");
const tarea3 = new nodo("tarea3");
/*
const tarea4 = new nodo("tarea4");
const tarea5 = new nodo("tarea5");
const tarea6 = new nodo("tarea6");
const tarea7 = new nodo("tarea7");
const tarea8 = new nodo("tarea8");
const tarea9 = new nodo("tarea9");
const tarea10 = new nodo("tarea10");
const tarea11 = new nodo("tarea11");
const tarea12 = new nodo("tarea12");
*/

tarea1.addEdge(new edge(tarea1,tarea2));
tarea1.addEdge(new edge(tarea1,tarea3));

console.log(tarea1.getEdge());

const grafoTareasDelHogar = new grafo();
grafoTareasDelHogar.addNodos(tarea1);
grafoTareasDelHogar.addNodos(tarea2);
grafoTareasDelHogar.getNodos();




























