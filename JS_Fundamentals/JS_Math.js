function zero_negativity(arr){
    for (var i=0; i < arr.length; i++){
        if (arr[i] < 0){
            return "false"
        }
        else {
            continue;
        }
    }
    return "true";
}

console.log(zero_negativity([3, 6, 9]));
console.log(zero_negativity([0, -1, 2]));



function is_even(num){
    if (num%2==0){
        return "true"
    }
    else{
        return "false"
    }
}

console.log(is_even(8));
console.log(is_even(9));



function how_many_even(arr){
    var count = 0
    for (var i=0; i < arr.length; i++){
        if (arr[i]%2 == 0){
            count += 1;
        }
    }
    return count;
}

console.log(how_many_even([2, 4, 6, 8]));
console.log(how_many_even([1, 4, 7, 8]));



function create_dummy_array(n){
    var x = [];
    for (var i=0; i<n; i++){
        x.push(Math.floor(Math.random()*10));
    }
    return x;
}

console.log(create_dummy_array(3));
console.log(create_dummy_array(4));


function random_choice(arr){
    return arr[Math.floor(Math.random()*arr.length)];
}

console.log(random_choice([1, 12, 30, 75]));
console.log(random_choice(["red", 5, "blue", 10]));