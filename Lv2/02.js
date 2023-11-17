function solution(s) {          // 최댓값과 최솟값
    s = s.split(" ")
    let max = Math.max(...s)
    let min = Math.min(...s)
    return min+" "+max
}