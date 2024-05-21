function thePyramidOfKingDjoser(basiSize,increment){
let stolne=0;
let marble=0;
let lapis=0;
let gold=0;

let height=0;
let floore=1;


for(let curSize=basiSize;curSize>0;curSize-=2){
    height+=increment
    let totalArea=curSize**2;

    if(curSize<=2){
        gold=totalArea*increment
    }else{
        let stoneArea=(curSize-2)**2;
        stolne+=stoneArea*increment;

        if(floore%5===0){
            let lapisArea=totalArea-stoneArea;
            lapis+=lapisArea*increment;
        }else{
            let marbelArea=totalArea-stoneArea;
            marble+=marbelArea*increment
        }
    }
    floore++;
}
console.log(`Stone required: ${Math.ceil(stolne)}`);
console.log(`Marble required: ${Math.ceil(marble)}`);
console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
console.log(`Gold required: ${Math.ceil(gold)}`);
console.log(`Final pyramid height: ${Math.floor(height)}`);

}
thePyramidOfKingDjoser(11,1)