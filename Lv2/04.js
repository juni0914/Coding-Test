function solution(s){       // 올바른 괄호
    var answer = 0;
    
    for(let i = 0; i < s.length; i++){
        answer += s[i] === '(' ? 1 : -1;
        if(answer < 0) return false;
    }
    
    return answer === 0 ? true : false;
}