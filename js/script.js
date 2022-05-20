const calculator = function () {
    let calcBtn = document.querySelectorAll('.calculator__button');
    let str = '';
    
    calcBtn.forEach(function(item){
        item.addEventListener('click', function () {
            let input = document.querySelector('.calculator__conclusion_input');
            let enter = item.innerHTML;
            let percent = document.querySelector('.disabled');

            const evalFunc = function () {
                if(str === '') return;
                input.value = eval(input.value);
                str = input.value;
                percent.setAttribute('disabled','');
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
                };
            };

            const percentFunc = function(){
                let operator = str.match(/[/*\-+]/g);
                let lastOperator = operator[operator.length - 1];
                let elemPercent = str.split(/[/*\-+]/);
                let num1 = elemPercent[elemPercent.length-1];
                let num2 = elemPercent[elemPercent.length-2];
                switch(lastOperator){
                    case "/":
                        str = Number(num2) / ((Number(num2) / 100) * Number(num1));
                        input.value = str;
                        break;
                    case "*":
                        str = Number(num2) * ((Number(num2) / 100) * Number(num1));
                        input.value = str;
                        break;
                    case "-":
                        str = Number(num2) - ((Number(num2) / 100) * Number(num1));
                        input.value = str;
                        break;
                    case "+":
                        str = Number(num2) + ((Number(num2) / 100) * Number(num1));
                        input.value = str;
                        break;
                };
            };
            
            const clearStr = function(){
                str = '';
                input.value = '';
                percent.setAttribute('disabled','');
            };

            const result = function(){
                str += enter;
                if(str.length < 9){
                    input.style.fontSize = '50px';
                }else if(str.length > 9 && str.length < 15){
                    input.style.fontSize = '30px';
                }else if(str.length >= 15 && str.length < 23){
                    input.style.fontSize = '20px';
                }else if(str.length >= 23){
                    str = str.substring(0, str.length - 1);
                }

                if(str === '/' || str === '*' || str === '-' || str === '+' || str === '.'){
                    clearStr();
                }else{
                    if(/^-?(([1-9]+0*[.]?\d*)|(0\.\d*)|(0))$/.test(str)){//первое слагаемое
                        input.value = str;
                        console.log(str + " true");                    
                    }else if(/^-?(([1-9]+0*[.]?\d*)|(0\.\d*)|(0))[0-9\.]$/.test(str)){
                        //console.log("удалить числа после 0 или точку");
                        str = str.substring(0, str.length - 1);
                        //console.log(str);
                    }else if(/-?(([1-9]+0*[.]?\d*)|(0\.\d*)|(0))[/*\-+]$/.test(str)){
                        input.value = str;
                        //console.log(str + " true");
                    }else if(/-?(([1-9]+0*[.]?\d*)|(0\.\d*)|(0))[/*\-+]([\.]|[/*\-+])$/.test(str)){
                        str = str.substring(0, str.length - 1);
                        //console.log(str + " Удалить точку или лишний оператор");
                    }else if(/-?(([1-9]+0*[.]?\d*)|(0\.\d*)|(0))[/*\-+]([1-9]+0*[.]?\d*)$/.test(str)){
                        input.value = str;
                        percent.removeAttribute('disabled');
                        //console.log(str + " true");
                    }else if(/-?(([1-9]+0*[.]?\d*)|(0\.\d*)|(0))[/*\-+]([1-9]+0*[.]?\d*[\.])$/.test(str)){
                        str = str.substring(0, str.length - 1);
                        //console.log(str + " Удалить точку");
                    }else if(/-?(([1-9]+0*[.]?\d*)|(0\.\d*)|(0))[/*\-+]0\.\d*$/.test(str)){
                        input.value = str;
                        percent.removeAttribute('disabled');
                        //console.log(str + " true");
                    }else if(/-?(([1-9]+0*[.]?\d*)|(0\.\d*)|(0))[/*\-+]0\.\d*[\.]$/.test(str)){
                        str = str.substring(0, str.length - 1);
                        //console.log(str + " Удалить точку");
                    }else if(/-?(([1-9]+0*[.]?\d*)|(0\.\d*)|(0))[/*\-+]0$/.test(str)){
                        input.value = str;
                        //console.log(str + " true");
                    }else if(/-?(([1-9]+0*[.]?\d*)|(0\.\d*)|(0))[/*\-+]0[0-9]$/.test(str)){
                        str = str.substring(0, str.length - 1);
                        //console.log(str + " Удалить цифру от 0 до 9");
                    };
                };
            };

            if(enter === "+/-"){
                plusAndMinus();
            }else if(enter === "C"){
                clearStr();
            }else if(enter === '='){
                evalFunc();
            }else if(enter === '%'){
                percentFunc();
            }else{
                result();
            };
        });
    });

};
calculator();


