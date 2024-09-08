function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos.
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (campoPesquisa == "") {
        section.innerHTML = "<p class=\"aviso\">Nada foi encontrado</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    console.log(campoPesquisa);

    // Verifica se a seção foi encontrada.
    if (section) {
      // Inicializa uma string vazia para armazenar os resultados formatados.
      let resultados = "";
      let titulo = "";
      let descricao = "";
      let info1 = "";
      let info2 = "";
      let tags = "";
  
      // Itera sobre cada dado na lista de dados.
      for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        info1 = dado.info1.toLowerCase()
        info2 = dado.info2.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includes campoPesquisa
            if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || info1.includes(campoPesquisa) || info2.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
          <div class="item-resultado fade-in">
            <h3>${dado.titulo}</h3>
            <p class="descricao-meta">${dado.descricao}</p>
            <ul>
              <li><strong>${dado.info1.split(' ')[0]}</strong> ${dado.info1.substring(dado.info1.indexOf(' ') + 1)}</li>
              <li><strong>${dado.info2.split(' ')[0]}</strong> ${dado.info2.substring(dado.info2.indexOf(' ') + 1)}</li
            </ul>
          </div>
        `;
        }
           
        // Cria uma nova div para cada resultado, formatando os dados de acordo com o template.
        // A crase (`) permite a interpolação de strings, inserindo os valores das variáveis dentro da string.
        
      }
  
      if(!resultados){
        resultados = "<p class=\"aviso\">Nada foi encontrado. Você precisa pesquisar um mês ou um alimento.</p>"
      }

      // Atribui o conteúdo da string 'resultados' ao HTML da seção.
      section.innerHTML = resultados;
    } else {
      // Exibe um erro no console caso a seção não seja encontrada.
      console.error("Elemento 'resultados-pesquisa' não encontrado.");
    }
}