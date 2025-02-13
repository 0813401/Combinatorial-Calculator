window.addEventListener("DOMContentLoaded", event => {
    var audio2 = document.getElementById("audio2");

    audio2.volume = 0.1;
});

function Factorial(n){ 
    
    let fact = 1;

    for (let i =1 ; i <= n; i++)
        fact *= i;
    return fact;
}

function Perm(m, n){
    
    let perm = m;

    for (let i = m-1; i > m-n; i--)
        perm *= i;
    return perm;
}

function Comb(m, n){ 
    return Perm(m, n) / Factorial(n);
}

function S(m ,n){

    let sum = 0;

    for(let k = 0; k <= n; k++){
        sum += Math.pow(-1, k)*Comb(n, n-k)*Math.pow(n-k, m);
    }
    
    return sum;
}

function Part(m, n){
    function _Part(m, n ,pre){
        if(m <= 0)
            return [];
        if(n == 1){
            if(m <= pre)
                return [[m]];
            return [];
        }
        let ret = []
        for(let i = Math.min(pre, m); i > 0; i--){
            aArray = _Part(m - i, n - 1, i);
            if(aArray.length != 0)
                ret.push(aArray);
        }
        return ret;
    }
    return _Part(m, n, m);
}

function invalid(m, n){ 

    if (parseInt(m) < 0 || isNaN(parseInt(m))) { 
        document.getElementById("m").focus();

        return true;
    }
    else if (parseInt(n) < 0 || isNaN(parseInt(n))){
        document.getElementById("n").focus();

        return true
    }

    return false;
}

function computeAll(){ 
    
    let m = document.getElementById("m").value;
    let n = document.getElementById("n").value;
    
    if (invalid(m, n))
        return;    

    clickArra(m, n);
    clickOnto(m, n);
    clickM1tn(m, n);
    clickSm_n(m, n);
    clickSel1(m, n);
    clickSel2(m, n);
    clickParM(m, n);
    clickPart(m, n);
}

function clickArra(m, n) { 
    document.getElementById("resArrangement").innerHTML = Math.pow(n, m);
}

function clickOnto(m, n) { 
    document.getElementById("resOnto").innerHTML = S(m, n);
}

function clickM1tn(m, n) {        
    
    let sum = 0;
    
    for(let i = 1; i<=n; i++)
        sum += S(m, i)/Perm(i,i);

    document.getElementById("resSm_1ton").innerHTML = sum;
}

function clickSm_n(m, n) {        
    document.getElementById("resSm_n").innerHTML = S(m, n)/Perm(n,n);
}

function clickSel1(m, n) { 
    m -= 0;
    n -= 0;
    document.getElementById("resSelectrofn").innerHTML = Comb(m + n - 1, m);
}

function clickSel2(m, n) { 
    m -= 0;
    n -= 0;
    document.getElementById("resSelectOther").innerHTML = Comb(m - 1, m - n);
}


function clickParM(m, n) { 
    sum = 0
    for(let i = 1; i <= n ; i++)
        sum += Part(m, i).length;
    document.getElementById("resPartitionMulti").innerHTML = sum;
}

function clickPart(m, n) {
    document.getElementById("resPartition").innerHTML = Part(m, n).length;
}


