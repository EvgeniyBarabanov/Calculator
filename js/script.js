const calculator = function(){
    let dataCalc = document.querySelectorAll('[data-calc]');
    dataCalc = Array.from(dataCalc);
    dataCalc.forEach(function(item){
        item.addEventListener('click', function(event){
            let enter = event.target.dataset.calc;
            let input = document.querySelector('.calculator__conclusion_input');
            input.value += enter;
            
        })
    })
};
calculator();
