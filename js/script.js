const calculator = function () {
    let calcBtn = document.querySelectorAll('.calculator__button');
    let str = '';
    calcBtn.forEach(function(item){
        item.addEventListener('click', function () {
            let input = document.querySelector('.calculator__conclusion_input');
            let enter = item.innerHTML;

            const evalFunc = function () {
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
                plusAndMinus();
            }else if(enter === "C"){
                str = '';
                input.value = '';
            }
            else if(enter === '='){
                evalFunc();
            }else{
                str += enter;
                if(str === '/' || str === '*' || str === '-' || str === '+' || str === '.'){
                    str = "";
                    console.log(str + "пустая строка");
                }else if(/^-?(([1-9]+0*[.]?\d*)|(0\.\d*)|(0))$/.test(str)){//первое слагаемое
                    input.value = str;
                    //console.log(str + " Правильно");                    
                }else{
                    if(/^-?(([1-9]+0*[.]?\d*)|(0\.\d*)|(0))[0-9\.]$/.test(str)){
                        //console.log("Запретить числа после 0 или точку");
                        str = str.substring(0, str.length - 1);
                        //console.log(str);
                    }else if(/-?(([1-9]+0*[.]?\d*)|(0\.\d*)|(0))[/*\-+]$/.test(str)){
                        input.value = str;
                        //console.log(str + " Правильно");
                    }else if(/-?(([1-9]+0*[.]?\d*)|(0\.\d*)|(0))[/*\-+]([1-9]+0*[.]?\d*)$/.test(str)){
                        input.value = str;
                        //console.log(str + " Правильно");
                    }else if(/-?(([1-9]+0*[.]?\d*)|(0\.\d*)|(0))[/*\-+]([1-9]+0*[.]?\d*[\.])$/.test(str)){
                        str = str.substring(0, str.length - 1);
                        //console.log(str + " Удалил точку");
                    }else if(/-?(([1-9]+0*[.]?\d*)|(0\.\d*)|(0))[/*\-+]0\.\d*$/.test(str)){
                        input.value = str;
                        //console.log(str + " Правильно");
                    }else if(/-?(([1-9]+0*[.]?\d*)|(0\.\d*)|(0))[/*\-+]0\.\d*[\.]$/.test(str)){
                        str = str.substring(0, str.length - 1);
                        //console.log(str + " Удалил точку");
                    }else if(/-?(([1-9]+0*[.]?\d*)|(0\.\d*)|(0))[/*\-+]0$/.test(str)){
                        input.value = str;
                        //console.log(str + " Правильно");
                    }else if(/-?(([1-9]+0*[.]?\d*)|(0\.\d*)|(0))[/*\-+]0[0-9]$/.test(str)){
                        str = str.substring(0, str.length - 1);
                        //console.log(str + " Удалил цифру от 0 до 9");
                    }else if(/-?(([1-9]+0*[.]?\d*)|(0\.\d*)|(0))[/*\-+]{2}$/.test(str)){
                        str = str.substring(0, str.length - 1);
                        //console.log(str + " Удален лишний оператор");
                    }
                }
            }
        });
    });

};


calculator();
