class calculator{
    constructor(a,b){
        this.a=a;
        this.b=b;
    }
    add(){
        return this.a+this.b
;    }
    Subtract(){
    return this.a-this.b
;    }
    Multiply(){
    return this.a*this.b
;    }
    Division(){
    return this.a/this.b
;    }
    Modulus(){
    return this.a%this.b
;    }
}

function calculate(){
    var p = Number(document.getElementById("val1").value);
    var q = Number(document.getElementById("val2").value);
    var choice = document.getElementById("optr").value;


let obj = new calculator(p,q);
switch (choice) {
    case'+':{
        document.getElementById("ans").innerHTML = obj.add();
        break;
    }
    case'-':{
        document.getElementById("ans").innerHTML = obj.Subtract();
        break;
    }
    case'*':{
        document.getElementById("ans").innerHTML = obj.Multiply();
        break;
    }
    case'/':{
        document.getElementById("ans").innerHTML = obj.Division();
        break;
    }
    case'%':{
        document.getElementById("ans").innerHTML = obj.Modulus();
        break;
    }
}
}