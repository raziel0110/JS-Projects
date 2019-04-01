class MovieList {
    constructor(){
       
        this.items = [];
        this.next = null;
        this.prev = null;
        this.currentPage = "";
        this.nrPages = "";
    }
    fetchDataList(s){
        return $.ajax('https://ancient-caverns-16784.herokuapp.com/movies/?take=10&skip='+s,{
            method : 'GET',
            success : (movieData)=>{
                this.items = [];
                console.log(movieData.pagination);
                this.currentPage = movieData.pagination.currentPage;
                this.nrPages = movieData.pagination.numberOfPages;
                
                for( let i = 0; i < movieData.results.length; i++){
                    const movieItem  = movieData.results[i];
                    
                    const movieModel = new Movie();
                    movieModel._id = movieItem._id;
                    movieModel.Title = movieItem.Title;
                    movieModel.Year = movieItem.Year;
                    movieModel.Runtime = movieItem.Runtime;
                    movieModel.Genre = movieItem.Genre;
                    movieModel.Language = movieItem.Language;
                    movieModel.Country = movieItem.Country;
                    movieModel.Poster = movieItem.Poster;
                    movieModel.imdbRating = movieItem.imdbRating;
                    movieModel.imdbVotes = movieItem.imdbVotes;
                    movieModel.imdbID = movieItem.imdbID;
                    movieModel.Type = movieItem.Type;

                    this.items.push(movieModel);
                   // console.log(movieModel);
                }

               
            
            },
        error : () => {
            console.log('Errorrrr');
        }
        });
    }

    getPages(){
        return $.ajax('https://ancient-caverns-16784.herokuapp.com/movies/?take=10&skip='+s,{
            method : 'GET',
            success : (pages)=>{
                console.log(pages);
                
            }
        });
    }
   getMovieList(){
       return $.ajax('https://ancient-caverns-16784.herokuapp.com/movies',{
           method: 'GET',
           success: (freshMovieList)=>{
               console.log('freshMovieList:', freshMovieList.results);
           }
       })
   }
}

