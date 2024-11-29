function mergesort(array) {
    // Base case, array is 0 or 1 in length, it is already sorted.
    var len = array.length;
    if ( len <= 1 ) {
        return array;
    }
    
    for ( var subLen = 1; subLen < len; subLen *= 2 ) { // Size of "subarrays" to sort for each iteration, doubles each time.
        for ( var start = 0; start < (len-1); start += (2 * subLen) ) { // Iterates over pairs of "subarrays" for sorting.
            var middle = start + subLen;
            var end = start + (2 * subLen);

            var start1 = start;
            var mid = middle;

            while ( start1 < end ) {
                if (array[start1] <= array[end]) {
                    start1++;
                } 
                    
                else {
                    val = array[end];
                    for ( var i = end; i > start1; i--) {
                        array[i] = array[i - 1];
                    }
                    
                    array[start1] = val;
                    start1++;
                    mid++;
                }
            }
        }
    }
    
    return array;
}
