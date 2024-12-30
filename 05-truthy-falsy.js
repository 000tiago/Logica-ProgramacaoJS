//Truthy ou Falsy

//O que seria truthy: [ ], { }, true, número diferente de 0, string não vazia
//O que seria falsy: null, underfined, 0, string vazia, NaM

console.log(!![], !!{}, !!1, !!"asf"); //ou
if ([] && {} && 2 && "asf" && true) {
    console.log("tudo é truthy");
}
//Quando não faço a negação (!!), ele não retorna true ou false, mas sim o valor inverso (positivo)
console.log(!!null, !!undefined, !!0, !!"", !!NaN);
console.log(null, undefined, !0, !!"", !NaN);


