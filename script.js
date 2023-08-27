let checkbox = document.querySelectorAll('.check')
let btnCheckfalse = document.querySelector('#btnCheckfalse')
var valor = 0

btnCheckfalse.addEventListener('click', () => {
    for(let current of checkbox) {
        current.checked = false
        current.disabled = false
        if(current.id == "parceria") {
            current.disabled = true
        }
    }
    var f = valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    document.getElementById("total").innerHTML = f;
})

//mudar foto da mec
function mudafoto (foto) {
    document.getElementById("icone").src = foto;
}

// função de soma
function soma(){
    var valor = 0
    var pacote = document.getElementsByName('teste');

    for (var i = 0; i < pacote.length; i++){
        if(pacote[i].checked){
            if(pacote[i].id == "full"){
                document.getElementById("parceria").disabled = false;
                document.getElementById("motor1").disabled = true;
                document.getElementById("motor1").checked = true;
                document.getElementById("motor2").disabled = true;
                document.getElementById("motor2").checked = true;
                document.getElementById("motor3").disabled = true;
                document.getElementById("motor3").checked = true;
                document.getElementById("motor4").disabled = true;
                document.getElementById("motor4").checked = true;
                document.getElementById("motor5").disabled = true;
                document.getElementById("motor5").checked = true;
            }
            valor = valor + parseInt(pacote[i].value)
        }
    }
    
    if(document.getElementById("full").checked == false && document.getElementById("motor1").disabled == true){
        if( document.getElementById("parceria").checked == true) {
            valor = valor - document.getElementById("parceria").value;
        }
        document.getElementById("parceria").disabled = true;  
        document.getElementById("parceria").checked = false;
        document.getElementById("motor1").disabled = false;
        document.getElementById("motor1").checked = false;
        document.getElementById("motor2").disabled = false;
        document.getElementById("motor2").checked = false;
        document.getElementById("motor3").disabled = false;
        document.getElementById("motor3").checked = false;
        document.getElementById("motor4").disabled = false;
        document.getElementById("motor4").checked = false;
        document.getElementById("motor5").disabled = false;
        document.getElementById("motor5").checked = false;

        valor = valor - document.getElementById("motor1").value;
        valor = valor - document.getElementById("motor2").value;
        valor = valor - document.getElementById("motor3").value;
        valor = valor - document.getElementById("motor4").value;
        valor = valor - document.getElementById("motor5").value;
    }
    
    if(document.getElementById("full").checked == true){
        valor = valor - document.getElementById("motor1").value;
        valor = valor - document.getElementById("motor2").value;
        valor = valor - document.getElementById("motor3").value;
        valor = valor - document.getElementById("motor4").value;
        valor = valor - document.getElementById("motor5").value;
    }
    
    var f = valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    document.getElementById("total").innerHTML = f;
}

function copiarDados() {
    const dadosForm = document.querySelector(".input-group");
    const nome = document.getElementById("nome").value;
    const ids = document.getElementById("Number").value;
    const total = document.getElementById("number").value;

    let dadosCopiados = `Nome: ${nome}\nID: ${ids}\nTotal Gasto: R$ ${total}\nProdutos Selecionados:\n`;

    const checkboxes = dadosForm.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach(checkbox => {
        const produtoNome = checkbox.value;
        const produtoId = checkbox.name;
        dadosCopiados += `ID: ${produtoId}, Produto: ${produtoNome}\n`;
    });

    // Copiar para a área de transferência
    navigator.clipboard.writeText(dadosCopiados)
        .then(() => Swal.fire(
            'Bom trabalho',
            'Os dados foram copiados para a área de transferência',
            'info'
          ))
        .catch(() => alert("Erro ao copiar dados para a área de transferência"));
}