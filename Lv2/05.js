function solution(s) {      // 이진 변환 반복하기
    var answer = [0, 0];
    let temp = [];
    while(s.length > 1){
        temp = s.split('').filter(e => e == 1)
        answer[1] += (s.length - temp.length);
        s = temp.length.toString(2);
        answer[0]++;
    }
    
    return answer;
}