(function () {
    
        ContinuousArray = function () {
    
        };
    
        ContinuousArray.isAlmostIncreasingSequence = function (sequence) {
            var modCount = 0;
            
            for(var i = 0, l = sequence.length; i < l; i++) {
                var current = sequence[i];
    
                if((i + 1) < l && sequence[i+1] <= current) {
                    if((i + 2) < l && sequence[i+2] <= current) {
                        i++;
                    }
                    modCount += 1;
                    if(modCount > 1) {
                        return false;
                    }
                }
            }
            return true;
        }
    
    })();