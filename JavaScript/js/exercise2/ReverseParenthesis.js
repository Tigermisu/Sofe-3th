(function () {

    ReverseParenthesis = function () {

    };

    ReverseParenthesis.reverseParenthesis = function (text) {
        var pStack = [];
        for(var i = 0; i < text.length; i++){
            if(text[i] == "("  ){
                pStack.push(i);
            }
        }
        while(pStack.length > 0){
            var start = pStack.pop();
            var word = "";
            for(var i = start; i < text.length; i++){
                
                if(text[i] == ")"  ){
                    break;
                }
                word += text[i];
            }
            text = text.replace(word + ")", word.substring(1).split("").reverse().join(""));
        }
        
        return text;
    }

})();