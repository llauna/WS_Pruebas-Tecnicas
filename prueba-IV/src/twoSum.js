const input = [9,4,10,3,39,12,1,4,6]

function twoSum(array, target) {
    const differences = {};
    for (let i = 0; i < array.length; i++) {
        const n = array[i];
        if(differences[target - n]) {
            return [differences[target-n].index, i]
        }
        differences[n] = {
            value: target -n,
            index: i
        }
    }
    return [];
}