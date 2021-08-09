// La interface se usa para el modelado de los datos
// Si bien, se puede usar una clase, la dif radica en que la clase puede
// recibir datos y muchas cosas más y la "interface" la usamos solo para modelar

export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    categoryId: number;
    stock: number;
}