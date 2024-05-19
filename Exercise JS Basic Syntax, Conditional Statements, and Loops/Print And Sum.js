function printAndSum(m,n){
    let sum=0
    let space=""
for(let i =m;i<=n;i++){
sum+=i
space+=i+" "

}
console.log(space);
console.log(`Sum: ${sum}`);
}
printAndSum(5, 10)