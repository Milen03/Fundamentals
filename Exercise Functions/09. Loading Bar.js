function loadingBar(num){
let bar="["
let procent=num/10
let dotc=10-procent

bar+='%'.repeat(procent)
bar+='.'.repeat(dotc)
bar+=']'

if(num===100){
    console.log(`${num}% Complete!`);
    console.log(`${bar}`);
}else{
    console.log( `${num}% ${bar}`);
    console.log(`Still loading...`);
}

}
loadingBar(100)