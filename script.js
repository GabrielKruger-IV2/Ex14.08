var estrutura = document.getElementById('body')
var cont=0;

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.github.com/users/GabrielKruger-IV2/repos")
xhr.send();

xhr.onreadystatechange = function () {
    if (xhr.status == 200 && xhr.readyState == 4) {

        const result = JSON.parse(xhr.responseText);
        estrutura.innerHTML+= `<div id="Titulo">
        <h1>Repositorios</h1>
        </div>`
        for (i = 0; i < result.length; i++) {
            if(cont==0){
            estrutura.innerHTML += `    
            
            <div id="div" class="left">
                <table id="table" >
                    <tr >
                    
                        <td id="tdNome"><h3 id="nome">Nome:${result[i].name}</h3></td>
                        <td class="tdA"><a href="${result[i].html_url}" id="linkPagina">Link</a></td>
                    
                </tr>
    
                <tr>
                    
                    <td id="tdLing"><p id="linguagem">Linguagem principal:${result[i].language}</p></td>
                    <td class="tdA"><a href="${result[i].clone_url}" id="linkCline">Clonar</a></td>
                </tr>
    
        
                </table>
            </div>`;
        cont=1;
    }else{
        estrutura.innerHTML += `    
        
        
        <div id="div" class="right">
            <table id="table" >
                <tr >
                
                    <td id="tdNome"><h3 id="nome">Nome:${result[i].name}</h3></td>
                    <td class="tdA"><a href="${result[i].html_url}" id="linkPagina">Link</a></td>
                
            </tr>

            <tr>
                
                <td id="tdLing"><p id="linguagem">Linguagem principal:${result[i].language}</p></td>
                <td class="tdA"><a href="${result[i].clone_url}" id="linkCline">Clonar</a></td>
            </tr>

    
            </table>
        </div>
    `;
        cont=0;
        }

        }
    }
}