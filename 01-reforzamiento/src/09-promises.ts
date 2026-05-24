// una promesa tiene 2 argumentos y es ascincrona ya que se usan para peticiones a servidor
/*  resolve, cuando la promesa se cumple 
    reject, cuando no se cumple la promesa.
    y puede devolver los siguientes metodos .then (si se cumplio), .catch (si no secumplio)
    .finally(si no paso nada) 
    Promise <number> se usa para dar un tipo de argumento generico. <T>
*/

const myPromise = new Promise <number> ( (resolve, reject) =>{
    setTimeout(() => {
        resolve(100);
    },2000);//2 segundos
    }) 

myPromise.then(
    (moneyBack) =>{
        console.log(`me regreso mi dinero ${moneyBack}`);
    }
).catch((reason) =>{
    console.warn(reason);
}).finally (() =>{
    console.log(`no se obtuvo nada`);
    }
)