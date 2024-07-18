function task1(input){
let pattern=/\b[A-Z][a-z]+ \b[A-Z][a-z]+/g
let validNames=[]
let validName=null
while((validName=pattern.exec(input))!==null){
    validNames.push(validName[0])
}
console.log(validNames.join(' '));

}
task1("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov")