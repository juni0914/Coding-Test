function solution(people, limit) {      // 구명보트
    let answer = 0;
    let sortPeople = people.sort((a,b)=> a - b);
    
    while(sortPeople.length !== 0){
        if(sortPeople[0] + sortPeople[sortPeople.length - 1] <= limit){
            answer++;
            sortPeople.shift();
            sortPeople.pop();
        }
        else{
            answer++;
            sortPeople.pop();
        }
    }
    return answer;
}