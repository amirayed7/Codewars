function NormalRecursion(n){

    // Handle edge cases
    if (n === 0) {
        return 0;
    }
    else if (n === 1){
        return 1;
    }
    //find the Fib number for n by adding the fib numbers for n-1 and n-2
    else {
        return NormalRecursion(n - 1) + NormalRecursion(n - 2);
    }
}

//console.log(NormalRecursion(3))