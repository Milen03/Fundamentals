function ladyBugs(arr) {
    let fildSize = arr[0];
    let ladybugIdxs = arr[1].split(" ").map(Number)
    let field = []


    for (let i = 0; i < fildSize; i++) {
        if (ladybugIdxs.includes(i)) {
            field[i] = 1
        } else {
            field[i] = 0
        }
    }
    for (let j = 2; j < arr.length; j++){
        let comment=arr[j]
        let token=comment.split(' ')
        
        let ladybugIdx=Number(token[0])
        let direction=token[1]
        let flyLength=Number(token[2])

        if(!field[ladybugIdx]){
            continue;
        }

        field[ladybugIdx]=0

        if(direction=='left'){
            let newIndx=ladybugIdx-flyLength

            if(newIndx>=0){
                while(field[newIndx]==1){
                    newIndx-=flyLength
                }

                if(newIndx>=0){
                    field[newIndx]=1
                }
                
            }
        }else{
            let newIndx=ladybugIdx+flyLength

            if(newIndx<field.length){
                while(field[newIndx]==1){
                    newIndx+=flyLength
                }

                if(newIndx<field.length){
                    field[newIndx]=1
                }
                
            }
        }
    }
    console.log(field.join(' '));
}
ladyBugs([3, '0 1',

    '0 right 1',

    '2 right 1'])