function magic_multiply(x,y){

    if (x == 0 && y == 0){
        return "All inputs 0";
    }

    else if (Array.isArray(x)){
        for(i=0; i<x.length; i++){
            x[i] = x[i]*y
        }
        return x;
    }

    else if (typeof y === 'string'){
        return "Error: can not multiply by string";
    }

    else if (typeof x === 'string'){
        return x.repeat(y);
    }

    else{
        return x*y;
    }
}

let test1 = magic_multiply(5,2);
console.log(test1);

let test2 = magic_multiply(0,0);
console.log(test2);

let test3 = magic_multiply([1, 2, 3], 2);
console.log(test3);

let test4 = magic_multiply(7, "Three");
console.log(test4);

let test5 = magic_multiply("Brendo", 4);
console.log(test5);