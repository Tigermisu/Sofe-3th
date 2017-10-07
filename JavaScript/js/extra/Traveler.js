(function () {

    Traveler = function () {

    };

    Traveler.minimizeTravel = function (adjacencyMatrix) {
        var nodes = [],
            sums = {
                currentSum: 0,
                minSum: Infinity
            };

        for(var i = 0; i < adjacencyMatrix.length; i++) {
            nodes.push(i);
        }

        travel(sums, 0, nodes, adjacencyMatrix);

        return sums.minSum;
    };

})();

function travel(sums, currentNode, remainingNodes, matrix) {
    // Remove current node from array
    var index = remainingNodes.indexOf(currentNode);
    remainingNodes.splice(index, 1);

    if(remainingNodes.length == 0) {
        sums.currentSum += getDistance(currentNode, 0, matrix);
        if(sums.currentSum < sums.minSum) {
            sums.minSum = sums.currentSum;
        }
        sums.currentSum -= getDistance(currentNode, 0, matrix);
    }

    for(var i = 0; i < remainingNodes.length; i++) {
        sums.currentSum += getDistance(currentNode,remainingNodes[i],matrix);
        travel(sums, remainingNodes[i], remainingNodes, matrix);
        sums.currentSum -= getDistance(currentNode,remainingNodes[i],matrix);
    }

    // Return element to array
    remainingNodes.splice(index, 0, currentNode);
}

function getDistance(a,b, matrix) {
    return matrix[a][b];
}