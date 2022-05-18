const calculator = function(){
    let calcBtn = document.querySelectorAll('.calculator__button');
    let str = '';
    calcBtn.forEach(function(item){
        item.addEventListener('click', function(){
            let input = document.querySelector('.calculator__conclusion_input');
            let enter = item.innerHTML;

            const evalFunc = function(){
                input.value = eval(input.value);
                str = input.value;
            };

            const plusAndMinus = function () {
                let test = str.split('');
                if(test[0] != '-'){
                    test.unshift('-');
                    str = test.join('');
                    input.value = str;
                }else{
                    test.shift();
                    str = test.join('');
                    input.value = str;
                }
            }

            if(enter === "+/-"){
                plusAndMinus(str);
            }else if(enter === "C"){
                str = '';
                input.value = '';
            }
            else if(enter === '='){
                evalFunc();
            }else{
                str += enter;
                console.log(str);
                if (!/^(-?(([1-9]+0*[.]?\d*)|(0\.\d*)|(0))[/*\-+]?)[1-9]*$/.test(str)){
                    str = str.substring(0, str.length - 1);
                }else{
                    input.value = str;
                };
                
                
                
            }
        });
    });

};


calculator();
