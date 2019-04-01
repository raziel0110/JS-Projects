
 $(document).ready(()=>{
     
    const searchList = new SearchList();
    const searchBtn = document.getElementById('search-btn');
    //const add_btn = document.getElementById("add-btn");
    const modal_container = document.getElementById('add-modal-container');
    const close_modal_add = document.getElementById('close-container');
    const save_new_movie = document.getElementById('updateChanges');
    const authToken = localStorage.getItem('loggedUser');
    const user_name = localStorage.getItem('username');
    console.log('AuthToken:', authToken);
    if(authToken !== null) {
        const h2MostRecentMvies = document.getElementById('h2-most-recent-movies');
        const topRatedMovies = document.getElementById('top-rated-movies');
        const searchBarForm = document.getElementById('searchBar-form');
        const displayAddBtn = document.createElement('a');
        displayAddBtn.setAttribute('id', 'add-btn');
        displayAddBtn.innerHTML = "Add new movie";
        topRatedMovies.parentNode.insertBefore(displayAddBtn, topRatedMovies.nextSibling);
        const logRegContainer = document.getElementById('log-reg');
        const loginDisplay = document.getElementById('login-anch');
        const registerDisplay = document.getElementById('register-anch');
        const userName = document.createElement('p');
        userName.setAttribute('id', 'user-name');
        userName.innerHTML = 'Hello, ' + user_name;
        loginDisplay.style.display = 'none';
        registerDisplay.style.display = 'none';
        logRegContainer.appendChild(userName);
        const logOutBtn = document.createElement('a');
        logOutBtn.setAttribute('href', 'home.html')
        logOutBtn.setAttribute('id', 'logout-btn');
        logOutBtn.innerHTML = 'Logout';
        userName.parentNode.insertBefore(logOutBtn, userName.nextSibling);
        logOutBtn.addEventListener('click', function(){
            localStorage.removeItem('loggedUser');
        });
        
        
    
    const add_btn = document.getElementById('add-btn');
    add_btn.addEventListener('click',(e)=>{
        modal_container.style.display = "block";
        close_modal_add.addEventListener('click',()=>{
            modal_container.style.display = "none";
        })
        
        const new_movie =  new Movie();

        const add_title = document.getElementById('movie-title');
        const add_year = document.getElementById('movie-year');
        const add_runtime = document.getElementById('movie-runtime');
        const add_genre = document.getElementById('movie-genre');
        const add_language = document.getElementById('movie-language');
        const add_country = document.getElementById('movie-country');
        const add_poster = document.getElementById('movie-poster');
        const add_imdb_rating = document.getElementById('movie-imdb-rating');
        const add_imdb_votes = document.getElementById('movie-imdb-votes');
        const add_imdb_id = document.getElementById('movie-imdb-id');
        const add_type = document.getElementById('movie-type');
        const add_to_database = document.getElementById('updateChanges');

        
        add_to_database.addEventListener('click',(e)=>{
             e.preventDefault();
            console.log('click');
            const addObj = {
                Title: add_title.value,
                Year: add_year.value,
                Runtime:add_runtime.value,
                Genre: add_genre.value,
                Language: add_language.value,
                Country: add_country.value,
                Poster: add_poster.value,
                imdbRaring: add_imdb_rating.value,
                imdbVotes: add_imdb_votes.value,
                imdbID: add_imdb_id.value,
                Type: add_type.value
            }
           
            modal_container.style.display = "none";
            
            new_movie.addMovie(addObj,authToken).then(()=>{
                location.reload();
            })
    
        });
    });
    }
    searchBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const input = document.getElementById('searchBar').value;
        const filterList = document.getElementById('filter-list').value;
        console.log("CLICK: ", input );
        searchMovies(filterList, input);
        
    });

    function searchMovies (filterList, input){
        searchList.fetchMovieList(filterList, input).then((item)=>{
            if(item.results==""){
                const globalContainer = document.getElementById('ceva');
                const childToRemove = globalContainer.lastElementChild
                globalContainer.removeChild(childToRemove );
                const notFoundMsg = document.createElement('p');
                notFoundMsg.innerHTML = "No movie was found with this description";
                notFoundMsg.style.color = "white";
                notFoundMsg.style.backgroundColor = "black";
                notFoundMsg.style.fontWeight = "bold";
                globalContainer.appendChild(notFoundMsg);
            }else{
            console.log('RES', item.results);
            const globalContainer = document.getElementById('ceva');
            const childToRemove = globalContainer.lastElementChild
            globalContainer.removeChild(childToRemove );
            const moviesGlobalContainer = document.createElement('article');
            moviesGlobalContainer.setAttribute('class', 'movies-global-container');
            globalContainer.appendChild(moviesGlobalContainer);
        for( let i = 0; i < item.results.length; i++){
            console.log("Result of search: ",item.results[i]);
            const movieElement = document.createElement('div');
          const ancor_element = document.createElement('a');
          ancor_element.setAttribute('href','../pages/movieDetails.html?postId='+item.results[i]._id);
          movieElement.setAttribute('class', 'movie-element');
          moviesGlobalContainer.appendChild(movieElement);
          const posterContainer = document.createElement('div');
          posterContainer.setAttribute('class', 'poster-container');
          ancor_element.appendChild(posterContainer);
          //posterContainer.style.height = "500px";
          posterContainer.style.backgroundImage = `url("${item.results[i].Poster}")`;
          posterContainer.style.backgroundSize = "100% 100%";
          const imdbRating = document.createElement('p');
          imdbRating.innerHTML = "Rating &nbsp;" + item.results[i].imdbRating;
          imdbRating.setAttribute('class', 'imdb-rating');
          posterContainer.appendChild(imdbRating);
          const movieTitle  = document.createElement('p');
          movieTitle.setAttribute('class', 'movie-title');
          ancor_element.appendChild(movieTitle);
          movieTitle.innerHTML = item.results[i].Title;
          movieElement.appendChild(ancor_element);
            
        }
        }
       });
    }
    

    const movieList = new MovieList();
    let skip = 0;
    const pages = document.getElementById('pages');
    const prev_btn = document.createElement('a');
    const next_btn = document.createElement('a');
    
    console.log(movieList.next);
    prev_btn.classList.add('page');
    next_btn.classList.add('page');
    prev_btn.innerHTML = "Prev";
    next_btn.innerHTML = "Next";
    pages.appendChild(prev_btn);
    pages.appendChild(next_btn);
    movieList.fetchDataList(skip).then(()=>{
    const globalContainer = document.getElementById('ceva');
    const moviesGlobalContainer = document.createElement('article');
    moviesGlobalContainer.setAttribute('class', 'movies-global-container');
    moviesGlobalContainer.setAttribute('id','movies-global-container');
    globalContainer.appendChild(moviesGlobalContainer);
    
    for( let i = 0; i < movieList.items.length; i++){
        console.log(movieList.items[i].Title);
        const movieElement = document.createElement('div');
        const ancor_element = document.createElement('a');
        ancor_element.setAttribute('href','../pages/movieDetails.html?postId='+movieList.items[i]._id);
        movieElement.setAttribute('class', 'movie-element');
        moviesGlobalContainer.appendChild(movieElement);
        const posterContainer = document.createElement('div');
        posterContainer.setAttribute('class', 'poster-container');
        movieElement.appendChild(posterContainer);
        posterContainer.style.backgroundImage = `url("${movieList.items[i].Poster}")`;
        posterContainer.style.backgroundSize = "100% 100%";
        const imdbRating = document.createElement('p');
        imdbRating.innerHTML = "Rating &nbsp;" + movieList.items[i].imdbRating;
        imdbRating.setAttribute('class', 'imdb-rating');
        posterContainer.appendChild(imdbRating);
        const movieTitle  = document.createElement('p');
        movieTitle.setAttribute('class', 'movie-title');
        ancor_element.appendChild(movieTitle);
        movieTitle.innerHTML = movieList.items[i].Title;
        movieElement.appendChild(ancor_element);
      }   
     
    }).catch(()=>{
      console.log('Eroare afisare');

});
// paginare


prev_btn.addEventListener('click',()=>{
    const numberOfPage = movieList.nrPages;
    let current_page = movieList.currentPage;
    current_page -= 1;
    console.log(numberOfPage);
    console.log(current_page);
    
    skip = (current_page - 1) * 10;
    


    if (current_page < 1){
       
       current_page  = numberOfPage;
       skip = (current_page - 1) * 10;
       start = (current_page - 1) * 10;
       end = current_page;
    }
        global_container = document.getElementById('ceva');
        movies_items = document.getElementById('movies-global-container');
        global_container.removeChild(movies_items);
        movieList.fetchDataList(skip).then(()=>{
        const globalContainer = document.getElementById('ceva');
        const moviesGlobalContainer = document.createElement('article');
        moviesGlobalContainer.setAttribute('class', 'movies-global-container');
        moviesGlobalContainer.setAttribute('id','movies-global-container');
        globalContainer.appendChild(moviesGlobalContainer);
        
        for( let i = 0; i < movieList.items.length; i++){
            
            const movieElement = document.createElement('div');
            const ancor_element = document.createElement('a');
            ancor_element.setAttribute('href','../pages/movieDetails.html?postId='+movieList.items[i]._id);
            movieElement.setAttribute('class', 'movie-element');
            moviesGlobalContainer.appendChild(movieElement);
            const posterContainer = document.createElement('div');
            posterContainer.setAttribute('class', 'poster-container');
            movieElement.appendChild(posterContainer);
            posterContainer.style.backgroundImage = `url("${movieList.items[i].Poster}")`;
            posterContainer.style.backgroundSize = "100% 100%";
            const imdbRating = document.createElement('p');
            imdbRating.innerHTML = "Rating &nbsp;" + movieList.items[i].imdbRating;
            imdbRating.setAttribute('class', 'imdb-rating');
            posterContainer.appendChild(imdbRating);
            const movieTitle  = document.createElement('p');
            movieTitle.setAttribute('class', 'movie-title');
            ancor_element.appendChild(movieTitle);
            movieTitle.innerHTML = movieList.items[i].Title;
            movieElement.appendChild(ancor_element);
        }
    }).catch(()=>{
        console.log('Eroare afisare');
    });
});


    next_btn.addEventListener('click',()=>{
    let current_page = movieList.currentPage;
    const nrOfPages = movieList.nrPages;
    console.log(nrOfPages);
    skip = current_page * 10;
    current_page += 1;
    if (current_page > nrOfPages){
       current_page = 1;
       skip = 0;
    } 
        const global_container = document.getElementById('ceva');
        const movies_items = document.getElementById('movies-global-container');
        global_container.removeChild(movies_items);
        movieList.fetchDataList(skip).then(()=>{
        const globalContainer = document.getElementById('ceva');
        const moviesGlobalContainer = document.createElement('article');
        moviesGlobalContainer.setAttribute('class', 'movies-global-container');
        moviesGlobalContainer.setAttribute('id','movies-global-container');
        globalContainer.appendChild(moviesGlobalContainer);
        for( let i = 0; i < movieList.items.length; i++){
            const movieElement = document.createElement('div');
            const ancor_element = document.createElement('a');
            ancor_element.setAttribute('href','../pages/movieDetails.html?postId='+movieList.items[i]._id);
            movieElement.setAttribute('class', 'movie-element');
            moviesGlobalContainer.appendChild(movieElement);
            const posterContainer = document.createElement('div');
            posterContainer.setAttribute('class', 'poster-container');
            movieElement.appendChild(posterContainer);
            //posterContainer.style.height = "500px";
            posterContainer.style.backgroundImage = `url("${movieList.items[i].Poster}")`;
            posterContainer.style.backgroundSize = "100% 100%";
            const imdbRating = document.createElement('p');
            imdbRating.innerHTML = "Rating &nbsp;" + movieList.items[i].imdbRating;
            imdbRating.setAttribute('class', 'imdb-rating');
            posterContainer.appendChild(imdbRating);
            const movieTitle  = document.createElement('p');
            movieTitle.setAttribute('class', 'movie-title');
            ancor_element.appendChild(movieTitle);
            movieTitle.innerHTML = movieList.items[i].Title;
            movieElement.appendChild(ancor_element);
        }
       
    }).catch(()=>{
        console.log('Eroare afisare');
  
    });
  
    
  });
  
});
     
