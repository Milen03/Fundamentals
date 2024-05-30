function solev(parametar){
    const dataType=typeof parametar;
   // console.log(dataType);
    if(dataType=="string"||dataType=="number"){
        console.log(dataType);
        console.log(parametar);
    }else{
        console.log(dataType);
        console.log('Parameter is not suitable for printing');
    }

}
//solev('Hello, JavaScript!')
//solev(18)
solev(null)