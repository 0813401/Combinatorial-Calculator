window.addEventListener("DOMContentLoaded", event => {
    var audio1 = document.getElementById("audio1");

    audio1.volume = 0.05;
});

function Factorial(r){ 
    
    let fact = 1;

    for (let i =1 ; i <= r; i++)
        fact *= i;
    return fact;
}

function Perm(n, r){
    
    let perm = n;

    for (let i = n-1; i > n-r; i--)
        perm *= i;
    return perm;
}

function Comb(n, r){ 
    n -= 0;
    r -= 0;
    return Perm(n, r) / Factorial(r);
}

function Cata(n){
    if(n == 0)
        return 1;
    return Comb(2*n, n) - Comb(2*n, n + 1);
}

function Tria(n){
    return n*(n+1)/2;
}

function Fibo(n){
    a = 0;
    b = 1;
    let temp;
    for(let i = 1; i <= n; i++){
        a += b;
        temp = a;
        a = b;
        b = temp;
    }
    return a;
}

function Eule(m, k){
    m -= 0;
    k -= 0;
    if(m == 0 && k == 0)
        return 1;
    if(k < 0)
        return 0;
    if(k >= m)
        return 0;
    return (m - k)*Eule(m-1, k-1) + (k + 1)*Eule(m-1, k);
}

function Stir(m, k){
    m -= 0;
    k -= 0;
    if(m <= 0)
        return 1;
    if(k <= 0)
        return 0;
    if (m == 0 && k == 0)
        return -1;
    if (m != 0 && m == k)
        return 1;
    if (m <= k)
        return 0;
    return k*Stir((m - 1), k) + Stir((m - 1), k - 1);
}

function invalid(n, r){ 

    if (parseInt(n) < 0 || isNaN(parseInt(n))) { 
        document.getElementById("n").focus();

        return true;
    }
    else if (parseInt(r) < 0 || isNaN(parseInt(r))){
        document.getElementById("r").focus();

        return true
    }

    return false;
}

function computeAll(){ 
    
    let n = document.getElementById("n").value;
    let r = document.getElementById("r").value;

    document.getElementById("resPermutation").innerHTML = "";
    document.getElementById("resCombination").innerHTML = "";
    document.getElementById("resArrangement").innerHTML = "";
    document.getElementById("resSelectrofn").innerHTML = ""; 
    
    if (invalid(n, r))
        return;    

    clickPerm(n,r);
    clickComb(n,r);
    clickArra(n,r);
    clickSele(n,r);
}

function clickPerm(n, r) { 
    document.getElementById("resPermutation").innerHTML = Perm(n, r);
}

function clickComb(n, r) { 
    document.getElementById("resCombination").innerHTML = Comb(n, r);
}

function clickArra(n, r) { 
    document.getElementById("resArrangement").innerHTML = Math.pow(n, r);
}

function clickSele(n, r) { 
    n -= 0;
    r -= 0;
    document.getElementById("resSelectrofn").innerHTML = Comb(r + n - 1, r);
}

function computeAllSpeical(){ 
    let n = document.getElementById("n2").value;
    let m = document.getElementById("m").value;
    let k = document.getElementById("k").value;

    document.getElementById("resCatalan").innerHTML = "";
    document.getElementById("resTriangular").innerHTML = "";
    document.getElementById("resHarmonic").innerHTML = "";
    document.getElementById("resFibonacci").innerHTML = ""; 
    document.getElementById("resLucas").innerHTML = ""; 
    document.getElementById("resEulerian").innerHTML = ""; 
    document.getElementById("resStirling").innerHTML = ""; 

    
    if (invalid(n, m, k))
        return;    

    clickCata(n);
    clickTria(n);
    clickHarm(n);
    clickFibo(n);
    clickLuca(n);
    clickEule(m,k);
    clickStir(m,k);
}

function clickCata(n){
    for(let i = 0; i < n; i++) {
        if(i == n - 1)
            document.getElementById("resCatalan").innerHTML += Cata(i);
        else
            document.getElementById("resCatalan").innerHTML += Cata(i) + ", ";
    }
}

function clickTria(n){
    for(let i = 1; i <= n ; i++) {
        if(i == n)
            document.getElementById("resTriangular").innerHTML += Tria(i);
        else
            document.getElementById("resTriangular").innerHTML += Tria(i) + ", ";    
    }
}

function clickHarm(n){
    for(let i = 1; i <= n ; i++) {
        sum = 0;
        for(let j = 1; j <= i; j++)
            sum += 1/j;
        sum = sum.toFixed(4);
        sum = parseFloat(sum);
        if(i == n)
            document.getElementById("resHarmonic").innerHTML += sum;
        else
            document.getElementById("resHarmonic").innerHTML += sum + ", ";   
    }
}

function clickFibo(n){
    for(let i = 1; i <= n; i++) {
        if(i == n)
            document.getElementById("resFibonacci").innerHTML += Fibo(i);
        else
            document.getElementById("resFibonacci").innerHTML += Fibo(i) + ", ";
    }
}

function clickLuca(n){
    for(let i = 1; i <= n; i++) {
        if(i == n)
            document.getElementById("resLucas").innerHTML += Fibo(i-1) + Fibo(i+1);
        else
            document.getElementById("resLucas").innerHTML += Fibo(i-1) + Fibo(i+1) + ", ";
    }
}

function clickEule(m, k){
    document.getElementById("resEulerian").innerHTML += Eule(m, k);
}

function clickStir(m ,k){
    document.getElementById("resStirling").innerHTML += Stir(m, k);
}
