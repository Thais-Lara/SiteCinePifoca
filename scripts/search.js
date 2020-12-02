const TMDB_ENDPOINT_BASE = 'https://api.themoviedb.org/3';
const API_KEY = '0c4f510650bf68ab3fbc21d31b190de5';

//Pesquisar Filmes
function MostraPesquisa() {
    //executar o AJAX
    $.ajax({
        //passar a URL ENDPOINT + /search/movie
        url: TMDB_ENDPOINT_BASE + '/search/movie',
        data: {
            api_key: API_KEY,
            query: document.getElementById('search').value
        }
    })

        //Receber o JSON
        .done(function (data) {
            //variável codigo_html
            let codigo_html = '';

            //mostras os cards
            for (i = 0; i < data.results.length; i++) {
                //variáveis dos dados
                id = data.results[i].id;
                link = 'https://www.themoviedb.org/movie/' + id;
                imagem = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;
                titulo = data.results[i].title;
                nota = data.results[i].vote_average;
                descricao = data.results[i].overview;

                //Concatenar o código do card cok os dados JSON
                codigo_html +=
                    `
                <a href="${link}">
                    <div class="card mb-3" style="max-width: 540px;">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                    <img src="${imagem}" class="card-img" alt="${titulo}">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${titulo}</h5>
                                    <p class="card-text">${descricao}</p>
                                    <p class="card-text">${nota}<small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </a> 
                `;
            }

            //repassar os cards para à página
            $('#resultados_pesquisa').html(codigo_html)
        });
}

