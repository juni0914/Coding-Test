function solution(n) {      // 숫자의 표현
    var answer = 0;
    for (let i = 0; i <= n; i++) {
        if (n % i === 0 && i % 2 === 1)  
            answer++
    }
    return answer;
}