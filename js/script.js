const calculator = function(){
    let calcBtn = document.querySelectorAll('.calculator__button');
    calcBtn.forEach(function(item){
        item.addEventListener('click', function(){
            let input = document.querySelector('.calculator__conclusion_input');
            let enter = item.innerHTML;

            const evalFunc = function(){
                input.value = eval(input.value);
            };

            const plusAndMinus = function (value) {
                let test = value.split('');
                if(test[0] != '-'){
                    test.unshift('-');
                    input.value = test.join('');
                }else{
                    test.shift();
                    input.value = test.join('');
                }
            }

            if(enter === "+/-"){
                plusAndMinus(input.value);
            }else if(enter === "C"){
                input.value = "";
            }
            else if(enter === '='){
                evalFunc();
            }else{
                input.value += enter;
                console.log(/^-?\d+[+*/-]?[\d+]?$/.test(input.value));
                
                
            }
        });
    });

};


calculator();
