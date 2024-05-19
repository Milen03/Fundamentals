function devison(number){
    let devison=0;

    if(number%10===0){
        devison=10;
    }
    else if(number%7===0){
        devison=7;
    }
   else if(number%6===0){
        devison=6;
    }
    else if(number%3===0){
        devison=3;
    }
    else if(number%2===0){
        devison=2;
    }


    if(devison>0){
        console.log(`The number is divisible by ${devison}`);
    }else{
        console.log('Not divisible');
    }
}
devison(12)