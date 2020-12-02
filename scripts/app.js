const TMDB_ENDPOINT_BASE = 'https://api.themoviedb.org/3';
const API_KEY = '0c4f510650bf68ab3fbc21d31b190de5';


function MostraFilmesPopulares() {
    
    $.ajax({
        
        url: TMDB_ENDPOINT_BASE + '/movie/popular',
        data: {
            api_key: API_KEY
        }
    })

        .done(function (data) {
            let codigo_html = '';

            for (i = 0; i < data.results.length; i++) {
               
                id = data.results[i].id;
                link = 'https://www.themoviedb.org/movie/' + id;
                imagem = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;
                titulo = data.results[i].title;
                nota = data.results[i].vote_average;
                descricao = data.results[i].overview;
                linguagem = data.results[i].original_language;
                data_estreia = data.results[i].

                
                codigo_html +=
                `
                
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

                                    <small><a href="${link}"><button id="verMais">Ver Mais</button></a></small>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                `;
            }

           
            $('#populares').html(codigo_html)
        });
}


function MostraFilmesRecentes() {
    $.ajax({
       
        url: TMDB_ENDPOINT_BASE + '/movie/latest',
        data: {
            api_key: API_KEY
        }
    })

        
        .done(function (data) {
            
            let codigo_html = '';

            
            for (i = 0; i < data.results.length; i++) {
                
                id = data.results[i].id;
                link = 'https://www.themoviedb.org/movie/' + id;
                imagem = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;
                titulo = data.results[i].title;
                nota = data.results[i].vote_average;
                descricao = data.results[i].overview;

                
                codigo_html +=
                `
                
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

                                        <small><a href="${link}"><button id="verMais">Ver Mais</button></a></small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                `;
            }

            
            $('#filmes_recentes').html(codigo_html)
        });
}


function MostraMelhoresAvaliados() {
    $.ajax({
        
        url: TMDB_ENDPOINT_BASE + '/movie/top_rated',
        data: {
            api_key: API_KEY
        }
    })

        
        .done(function (data) {
            
            let codigo_html = '';

            
            for (i = 0; i < data.results.length; i++) {
                
                id = data.results[i].id;
                link = 'https://www.themoviedb.org/movie/' + id;
                imagem = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;
                titulo = data.results[i].title;               
                nota = data.results[i].vote_average;
                descricao = data.results[i].overview;

                      
                
                codigo_html +=
                `
               
                    <div class="card mb-3" style="max-width: 540px;">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src="${imagem}" class="card-img" alt="${titulo}">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${titulo}</h5>
                                <p class="card-text">${descricao}</p>
                                <p class="card-text">${nota}</p><small class="text-muted">Last updated 3 mins ago</small></p>

                                <small><a href="${link}"><button id="verMais">Ver Mais</button></a></small>
                                </div>
                            </div>
                        </div>
                    </div>
                
                `;
            }

            
            $('#melhores_avaliados').html(codigo_html)
        });
}


function MostraFilmesEmBreve() {
    $.ajax({
      
        url: TMDB_ENDPOINT_BASE + '/movie/upcoming',
        data: {
            api_key: API_KEY
        }
    })

        
        .done(function (data) {
            
            let codigo_html = '';
            
            for (i = 0; i < data.results.length; i++) {
                
                id = data.results[i].id;
                link = 'https://www.themoviedb.org/movie/' + id;
                imagem = 'https://image.tmdb.org/t/p/w500' + data.results[i].poster_path;
                titulo = data.results[i].title;               
                nota = data.results[i].vote_average;
                descricao = data.results[i].overview;

                
                codigo_html +=
                `
                
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

                                <small><a href="${link}"><button id="verMais">Ver Mais</button></a></small>
                                </div>
                            </div>
                        </div>
                    </div>
                
                `;
            }

           
            $('#cinema_atual').html(codigo_html)
        });
}

$(document).ready(function () {

    
    MostraFilmesPopulares();
    MostraFilmesRecentes();
    MostraMelhoresAvaliados();
    MostraFilmesEmBreve();
    
});