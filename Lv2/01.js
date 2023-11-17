function solution(s) {          // JadenCase 문자열 만들기
    let answer = '';
    let result = s.split(' ');

    let result2 = result.map(e => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase())
    answer = result2.join(' ')

    return answer;
}