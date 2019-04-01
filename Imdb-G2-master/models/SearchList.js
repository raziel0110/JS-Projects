class SearchList {
    constructor(){
       
        this.item = [];
    }
    fetchMovieList(filter,text){
        return $.ajax('https://ancient-caverns-16784.herokuapp.com/movies?'+filter+'='+text,{
            method : 'GET',
            success : (searchData)=>{
                console.log("response", searchData.results);
                for( let i = 0; i < searchData.results.length; i++){
                    const searchItem  = searchData.results[i];             
                    const searchModel = new Movie();
                    searchModel._id = searchItem._id;
                    searchModel.Title = searchItem.Title;
                    searchModel.Year = searchItem.Year;
                    searchModel.Runtime = searchItem.Runtime;
                    searchModel.Genre = searchItem.Genre;
                    searchModel.Language = searchItem.Language;
                    searchModel.Country = searchItem.Country;
                    searchModel.Poster = searchItem.Poster;
                    searchModel.imdbRating = searchItem.imdbRating;
                    searchModel.imdbVotes = searchItem.imdbVotes;
                    searchModel.imdbID = searchItem.imdbID;
                    searchModel.Type = searchItem.Type;

                    this.item.push(searchModel);
                    console.log("eachmovie: ",searchModel);
                }
            
            },
        error : () => {
            console.log('Errorrrr');
        }
        });
    }
}