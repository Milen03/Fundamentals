function dayOfWeek(day){
let days=["Monday", "Tuesday", 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday']

if(day>=1&&day<=7){

console.log(days[day-1]);
}else{
    console.log("Invalid day!");
}
}
dayOfWeek(1)
dayOfWeek(6)
dayOfWeek(11)
//Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, and Sunday.