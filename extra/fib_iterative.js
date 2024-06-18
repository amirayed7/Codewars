function Iterative(n){

    //Edge case
    if (n === 0){
        return 0;
    }

    // Initialize a and b (these will keep track of the last two fib numbers)
    let a = 0;
    let b = 1

    //calculate fib numbers iteravely from 2 to n
    for(let i = 2; i <= n; i++){
        //calculate fib number  by adding the last two and store/update a and b
        temp = a + b;
        a = b;
        b = temp;
    }

    //return fib number at index n(its kept in b)
    return b
}

//console.log(Iterative(3))