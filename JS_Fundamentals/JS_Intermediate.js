function starString(num){
    var str = "*"
    return str.repeat(num);
}

let stars = starString(8);
console.log(stars);


function drawStars(arr){
    for (var i=0; i<arr.length; i++){
        if(typeof arr[i] === 'string'){
            var count = arr[i].length;
            console.log(arr[i][0].repeat(count).toLowerCase());
        }
        else if (typeof arr[i] === 'number'){
            var j = arr[i]
            console.log(starString(j));
        }
    }
}

let x = [4, 6, 1, 3, 5, 7, 25];
console.log(drawStars(x));

let y = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
console.log(drawStars(y));