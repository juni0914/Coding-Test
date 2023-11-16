function solution(n, words) {       // 영어 끝말잇기
    for (let i = 1; i < words.length; i++) {
        if (words.indexOf(words[i]) !== i || words[i - 1][words[i - 1].length - 1] !== words[i][0]) {
            return [(i % n) + 1, Math.floor(i / n) + 1];
        }
    }
    return [0, 0];
}
