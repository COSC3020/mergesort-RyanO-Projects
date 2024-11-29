function mergesort(array) {
    // Base case, array is 0 or 1 in length, it is already sorted.
    var len = array.length;
    if ( len <= 1 ) {
        return array;
    }

    for ( var subLen = 1; subLen < len; subLen *= 2 ) { // Size of "subarrays" to sort for each iteration, doubles each time.
        for ( var start = 0; start < len; start += (2 * subLen) ) { // Iterates over pairs of "subarrays" for sorting.
            var start1 = start;
            var middle = Math.min(start + subLen, len);
            var end = Math.min(start + (2 * subLen), len);

            while ( start1 < middle && middle < end ) {
                if (array[start1] <= array[middle]) {
                    start1++;
                } 
                    
                else {
                    var val = array[middle];
                    var i = middle;
                    while (i > start1) {
                        array[i] = array[i - 1];
                        i--;
                    }
                    array[start1] = val;
                    
                    start1++;
                    middle++;
                }
            }
        }
    }
    
    return array;
}
