//SIMULADOR DE COMPRA DE UNA CERVECERIA ARTESANAL

//Definir productos a vender y precio

const stout = 50
const ipa = 65
const strongale = 60


let age;


function totalCost(value1, value2) {
    const cost = value1 * value2;
    return cost;
}

while (age >= 18) {
    age = parseInt(prompt('Ingrese su edad'))
    if (age < 18) {
        alert('Usted debe ser mayor de edad para poder comprar nuestros productos.');
        break;
    }
    let wishtobuy = prompt('¿Usted desea comprar nuestras cervezas?\n Escriba "si" para continuar, o "no" para salir');
    if (wishtobuy === "no") {
        alert("Gracias por visitarnos!.");
        break;
    }
    let listToBuy = prompt("Selecciona la cerveza que deseas comprar:\n A-Stout\n B-IPA\n C-Strong Ale");
    let cantidad;
    while (cantidad != 0) {
        cantidad = parseInt(prompt('Ingrese la cantidad de botellas a comparar: '))

        if (cantidad === 0) {
            alert('La cantidad debe ser mayor a 0');
            break;
        }

        switch (listToBuy.toUpperCase()) {
            case "A":
                cost = totalCost(stout, cantidad);
                alert('El monto a pagar es $' + cost + " por " + cantidad + " de botellas de cerveza Stout");
                break;
            case "B":
                cost = totalCost(ipa, cantidad);
                alert('El monto a pagar es $' + cost + " por " + cantidad + " de botellas de cerveza IPA");
                break;
            case "C":
                cost = totalCost(strongale, cantidad);
                alert('El monto a pagar es $' + cost + " por " + cantidad + " de botellas de cerveza Strong Ale");
                break;
            default:
                alert('El producto no existe.');
                break;

        }

    }

}

