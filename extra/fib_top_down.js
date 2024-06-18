function TopDown(n,array = []){

    //Handle edge cases
    if (n <= 1){
        return n;
    }

    //check if value of n is in the array
    if (array[n] !== undefined) { 
        return array[n]; 
    }

    //find the Fib number for n by adding the fib numbers for n-1 and n-2
    else{
        array[n] = TopDown(n-1, array) + TopDown(n-2, array);
        return array[n];
    }

}

//console.log(TopDown(3));

