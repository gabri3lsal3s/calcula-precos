let result;
let metric_value = document.querySelector('#m').textContent;
let metric = document.querySelector('#metrics_options');
const forms_porta = document.querySelector('#porta');


addEventListener('submit', function(e){
    e.preventDefault();
})

forms_porta.addEventListener('submit', function(){
    let altura_ = document.querySelector('.altura').value;
    let largura_ = document.querySelector('.largura').value;
    result = altura_ * largura_;
    const mostra_resultado = document.querySelector('#resultado')
    mostra_resultado.textContent = result + metric_value;    
})