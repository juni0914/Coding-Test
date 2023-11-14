function solution(n) {          // 다음 큰 숫자
    let num = n.toString(2).split('').filter(e => e == 1).length;
    while(true){
        n++;
        if(n.toString(2).split('').filter(e => e == 1).length == num)
            return n;
    }
}