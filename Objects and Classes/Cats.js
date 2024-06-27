function cat(catAsStiingin){
class Cat{
    constructor(name,age){
        this.name=name
        this.age=age
    }

    meow(){
        console.log(`${this.name}, age ${this.age} says Meow`);
    }
}
for (const catStr of catAsStiingin) {
   let token=catStr.split(' ')
   let name =token[0]
   let age= token[1]

   let cat=new Cat(name,age)
   cat.meow()
}

}
cat(['Mellow 2', 'Tom 5'])