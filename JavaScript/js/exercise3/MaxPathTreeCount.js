(function () {

    MaxPathTreeCount = function () {

    };

    MaxPathTreeCount.maxPathCount = function (root) {
        var data = {
            maxSum: -Infinity,
            currentSum: 0,
            sumCount: 0
        }

        traverse(data, root);

        console.log(data);

        return data.sumCount;
    };    

})();

function traverse(data, node) {
    data.currentSum += node.value;

    if(!node.left && !node.right) {
        if(data.currentSum > data.maxSum) {
            data.sumCount = 1;
            data.maxSum = data.currentSum;
        } else if(data.currentSum == data.maxSum) {
            data.sumCount++;
        }
    }

    if(node.left) {
        traverse(data, node.left);
    }   

    if(node.right) {
        traverse(data, node.right);
    }

    data.currentSum -= node.value;


}
