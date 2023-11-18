function solution(arr) {        // N개의 최소공배수
    let answer = arr[0];
    
    for(let i = 0; i < arr.length; i++){
        answer = answer * arr[i] / maxCheck(answer, arr[i]);
    }
    return answer;
}

function maxCheck(a, b){
    let x = a % b;
    if(x === 0) return b;
    return maxCheck(b, x);
}