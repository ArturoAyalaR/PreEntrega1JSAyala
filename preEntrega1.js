//SIMULADOR DE COMPRA DE UNA CERVECERIA ARTESANAL

//El usuario debe ser mayor de edad, puede elegir entre 3 productos y la cantidad a comprar. 

const stout = 50;
const ipa = 65;
const strongale = 60;
let cost = 0;


function totalCost(value1, value2) {
    const cost = value1 * value2;
    return cost;
}


let age = parseInt(prompt('Ingrese su edad. Si desea salir, ingrese 0.'));
if (age === 0) {
    alert('Gracias por visitarnos, vuelve pronto')
} else if (age < 18) {
    alert('Debes ser mayor de edad para visitarnos.');
}
else {
    while (age >= 18) {

        let wishToBuy = confirm('¿Deseas compara nuestras cervezas?')
        if (wishToBuy === false) {
            alert('Gracias por visitarnos!')
            break;
        }

        let listToBuy = prompt("Selecciona la cerveza que deseas comprar:\n A-Stout\n B-IPA\n C-Strong Ale");
        let qty = parseInt(prompt('Ingrese la cantidad de botellas a comparar. Ingresa 0 para salir'));
        if (qty === 0) {
            alert('Gracias por visitarnos');
            break;
        }
        else {
            while (qty != 0) {


                switch (listToBuy.toUpperCase()) {
                    case "A":
                        cost = totalCost(stout, qty);
                        alert('El monto a pagar es $' + cost + " por " + qty + " de botellas de cerveza Stout");
                        break;
                    case "B":
                        cost = totalCost(ipa, qty);
                        alert('El monto a pagar es $' + cost + " por " + qty + " de botellas de cerveza IPA");
                        break;
                    case "C":
                        cost = totalCost(strongale, qty);
                        alert('El monto a pagar es $' + cost + " por " + qty + " de botellas de cerveza Strong Ale");
                        break;
                    default:
                        alert('El producto no existe.');
                        break;
                }
                listToBuy = prompt("Selecciona la cerveza que deseas comprar:\n A-Stout\n B-IPA\n C-Strong Ale");
                qty = parseInt(prompt('Ingrese la cantidad de botellas a comprar. Ingresar 0 para salir'));
                if (qty === 0) {
                    alert('Gracias por visitarnos');
                    break;

                }
            }
            break;


        }
    }
}
