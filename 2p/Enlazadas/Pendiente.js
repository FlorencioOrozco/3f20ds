//Orozco Valdez Florencio Miguel 3°E
const mergeSort = Array => {
    if (Array.length < 2) {
        return Array;
    }
    const middle = parseInt(Array.length / 2) | 0;
    const left = Array.slice(0, middle);
    const right = Array.slice(middle);
    const merge = (left, right) => {
        const result = [];
        let il = ir = 0;

        function repetir (left, right){
                result.push( (left[il] < right[ir]) ? left[il++] : right[ir++]);
            }
            if(il < left.length && ir < right.length) {
                repetir(left,right)
            }
        return [...result, ...left.slice(il), ...right.slice(ir)];
    }

    return merge(mergeSort(left), mergeSort(right));
}

const Array = [125,50,56,300,64,22,150,12,2,1];
const result = mergeSort(Array);
console.log(Array);
console.log(result)