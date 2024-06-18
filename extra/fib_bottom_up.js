function BottomUp(n){

    //Edge cases
    if (n<= 1){
        return n;
    }

    // create an array to store the fib numbers
    let fib = new Array(n + 1);

    //Edge cases for fibonnaci sequence
    fib[0] = 0;
    fib[1] = 1;

    //Same formula but calculate iteratively
    for (let i = 2; i <= n; i++){
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    // return fib number at index n
    return fib[n];
}

//console.log(BottomUp(3));