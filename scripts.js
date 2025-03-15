//------------------PILHA--------------------------

var pilha = [];

function empilhar() {
   
    var elementopilha = document.getElementById("entrada").value;

    if (elementopilha !== "") {
        
        pilha.push(elementopilha);

       
        atualizarPilha();

       
        document.getElementById("entrada").value = "";
    } else {
        alert("Insira algum item");
    }
}

function desempilhar() {
    if (pilha.length > 0) {
        
        pilha.pop();

      
        atualizarPilha();
    } else {
        alert("A pilha está vazia");
    }
}

function atualizarPilha() {
  var pilhaElemento = document.getElementById("pilhar");
  pilhaElemento.innerHTML = ""; 

 
  for (var i = pilha.length - 1; i >= 0; i--) {
      var novoItemPilha = document.createElement("h2");
      novoItemPilha.textContent = pilha[i];
      pilhaElemento.appendChild(novoItemPilha);
  }
}



//------------------FILA--------------------------
 
var fila = [];

function enfileirar() {
    
    var elementofila = document.getElementById("entrada").value;

    if (elementofila !== "") {
        
        fila.push(elementofila);

       
        atualizarFila();

        
        document.getElementById("entrada").value = "";
    } else {
        alert("Insira algum item");
    }
}

function desenfileirar() {
    if (fila.length > 0) {
       
        fila.shift();

       
        atualizarFila();
    } else {
        alert("A fila está vazia");
    }
}

function atualizarFila() {
    var filaElemento = document.getElementById("fileira");
    filaElemento.innerHTML = ""; 

    
    fila.forEach(function(item) {
        var novoItemFila = document.createElement("h2");
        novoItemFila.textContent = item;
        filaElemento.appendChild(novoItemFila);
    });
}

  //------------------LISTA--------------------------

var lista = [];

function inserirLista() {
    var entrada = document.getElementById("entrada").value; 
    var posicao = document.getElementById("posicao").value; 

    if (entrada !== "") {
        if (posicao !== "") {
            posicao = parseInt(posicao);
            if (!isNaN(posicao) && posicao >= 0 && posicao <= lista.length) {
                lista.splice(posicao, 0, entrada); 
            } else {
                alert("Insira uma posição válida na lista.");
                return; 
            }
        } else {
            lista.push(entrada);
        }
        mostrarLista(); 
    } else {
        alert("Insira um item na lista.");
    }
}

function removerLista() {
  var posicao = parseInt(document.getElementById("posicao").value); 

  if (!isNaN(posicao) && posicao >= 0 && posicao < lista.length && lista.length > 0) {
      lista.splice(posicao, 1);
      mostrarLista(); 
  } else {
      alert("Insira uma posição válida.");
  }
}



function mostrarLista() {
    var mostralista = document.getElementById("mostralista"); 
    mostralista.innerHTML = ""; 
    document.getElementById("entrada").value = "";
    document.getElementById("posicao").value = "";

    lista.forEach(function(item, index) {
        var listItem = document.createElement("h2"); 
        listItem.textContent = item; 
        mostralista.appendChild(listItem); 
    });
}
