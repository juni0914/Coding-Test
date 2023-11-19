function solution(elements) {       // 연속 부분 수열 합의 개수
    const set = new Set();
    const n = elements.length; 
    
    for(let i = 0; i < n; i++){
        let sum = 0;
        for(let j = i; j < i + n; j++){
            sum += elements[j%n];
            set.add(sum)
        }
    }
    return set.size;
}
