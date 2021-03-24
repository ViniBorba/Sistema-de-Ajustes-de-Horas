//excluir dados
function apagarDaTabela(){
   confirm("Você deseja excluir os dados da linha?");
}

//Enviar para analise
function enviarParaAnalisar(){
   confirm("Tem certeza que deseja enviar para analisar?");
}

//verificar se tem uma entrada em data
function validar(){
    var dataBuscada = consultarDados.buscarData;
    
    if(dataBuscada.value == ""){
        alert("Informe uma data");
        dataBuscada.focus();
    }
}

function validarDataSaida(){
    var dataBuscada = consultarDados.buscarDataSaida;
    var dataBuscada2 = consultarDados.buscarDataEntrada;
    
    if(dataBuscada.value == "" || dataBuscada2.value == ""){
        alert("Informe uma data de saida e uma data de entrada");
        dataBuscada.focus();
    }
}