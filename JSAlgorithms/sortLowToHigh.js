let test = [3,6,-1,9,4,7,5];

function sortLowToHigh(array){
    let lowestNumber = array[0];
    for (i = 0; i < array.length; i++) {
        for (k = 0; k <array.length; k++) {
            if (array[i] < array[k]) {
                let oldNum = array[i];
                array[i] = array[k];
                array[k] = oldNum;
            }
        }
    }

    return array;
}