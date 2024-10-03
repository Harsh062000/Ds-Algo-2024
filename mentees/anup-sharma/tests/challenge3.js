function oddoccurrence(arr){
    let c = createdisctictarray(arr);
    let output = [];
    let map1 = new Map();
    for(let i=0; i<c.length; i++){
        let count = 0;
        for(let j=0; j<arr.length; j++){
            
            if(c[i] === arr[j]){
                count = count + 1;
            }
        }
        map1.set(arr[i], count);
    }

    for(let [key,value] of map1){
        if((value % 2) == 1){
            output.push(key);
        }
    }

    return output;
}

function createdisctictarray(arr){
    let disarr = [];

    for(let i=0; i<arr.length; i++){
        let isunique = true;
        for(let j=0; j<disarr.length; j++){
            if(arr[i] === disarr[j]){
                isunique = false;
                break;
            }
        }
        if(isunique){
            disarr.push(arr[i]);
        }
    }

    return disarr;
}

//Other way to do it 

function oddoccuranceoutput(arr){

    let output = [];
    let map1 = new Map();
    let i = 0;

    
        let count = 1;
        for(let i of arr){
            console.log(i);
            if(map1.has(i)){
                
                map1.set(i, count++);
            }
            else{
                
                map1.set(i, count);
            }
            console.log(map1);
       
        }
    
    for(let [key,value] of map1){
        if((value % 2) == 1){
            output.push(key);
        }
    }

    return output;
}


console.log(oddoccurrence([1,3,4,2,4,1,4]));
console.log(oddoccuranceoutput([1,3,4,2,4,1,4]));