function salarioLiquido(salario_bruto) {
    var salarioLiquidoInss = salario_bruto*0.11;
    var salarioLiquido = salario_bruto;
    var salarioBrutoInicial = salario_bruto;
    var salarioBruto = salario_bruto;
    if(salarioBruto<1903.98){
        salarioLiquido = salarioLiquido - salarioLiquidoInss;
    return salarioLiquido.toFixed(2);
    }else if(salarioBrutoInicial<2826.65){
        salarioBruto = salarioBruto - 1903.98;
        salarioLiquido = salarioLiquido - salarioBruto*0.075;
        salarioLiquido = salarioLiquido - salarioLiquidoInss;
        return salarioLiquido.toFixed(2);
    }else if(salarioBrutoInicial<3751.05){
        salarioBruto = salarioBruto - 1903.98;
        salarioLiquido = salarioLiquido - 922.67*0.075;
        salarioBruto = salarioBruto - 922.67;
        salarioLiquido = salarioLiquido - salarioBruto*0.15;
        salarioLiquido = salarioLiquido - salarioLiquidoInss;
        return salarioLiquido.toFixed(2);
    }else if(salarioBrutoInicial<4664.68){
        salarioBruto = salarioBruto - 1903.98;
        salarioLiquido = salarioLiquido - 922.67*0.075;
        salarioBruto = salarioBruto - 922.67;
        salarioLiquido = salarioLiquido - 924.41*0.15;
        salarioBruto = salarioBruto - 924.41;
        salarioLiquido = salarioLiquido - salarioBruto*0.225;
        salarioLiquido = salarioLiquido - salarioLiquidoInss;
        return salarioLiquido.toFixed(2);
    }else{
        salarioBruto = salarioBruto - 1903.98;
        salarioLiquido = salarioLiquido - 922.67*0.075;
        salarioBruto = salarioBruto - 922.67;
        salarioLiquido = salarioLiquido - 924.41*0.15;
        salarioBruto = salarioBruto - 924.41;
        salarioLiquido = salarioLiquido - 913.620*0.225;
        salarioBruto = salarioBruto - 913.620;
        salarioLiquido = salarioLiquido - salarioBruto*0.275;
        salarioLiquido = salarioLiquido - salarioLiquidoInss;
        return salarioLiquido.toFixed(2);
    }
}

module.exports = { salarioLiquido };