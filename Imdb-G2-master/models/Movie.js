class Movie {
  constructor(){
    this._id = "";
    this.Title = "";
    this.Year = "";
    this.Runtime = "";
    this.Genre = "";
    this.Language = "";
    this.Country = "";
    this.Poster = "";
    this.imdbRating = "";
    this.imdbVotes = "";
    this.imdbID = "";
    this.Type = ""
  }

  MovieFetchData(id){
   return $.ajax('https://ancient-caverns-16784.herokuapp.com/movies/'+id,{
     method : 'GET',
     success : (data)=>{
      this._id = data.id;
      this.Title = data.Title;
      this.Year = data.Year;
      this.Runtime = data.Runtime;
      this.Genre = data.Genre;
      this.Language = data.Language;
      this.Country = data.Country;
      this.Poster = data.Poster;
      this.imdbRating = data.imdbRating;
      this.imdbVotes = data.imdbVotes;
      this.imdbID = data.imdbID;
      this.Type = data.Type;
    },
    error :()=>{
     console.log('Error on showing the detail movie');
   }
 });
 }

 MovieUpdate(updateId, updateData, authToken) {
  return $.ajax('https://ancient-caverns-16784.herokuapp.com/movies/'+updateId, {
    method: 'PUT',
    beforeSend: function(request) {
      request.setRequestHeader("x-auth-token", authToken);
    },
    data: updateData,
    success: function(response) {
      console.log('Response =', response);

    },
    error :()=>{
      console.log('Error: Movie was not edited!');
    }
  });
  console.log("Can't see me!");
}

deleteMovie(id,pass) {
  return $.ajax('https://ancient-caverns-16784.herokuapp.com/movies/' +id,{
    method: 'DELETE',
    beforeSend : function(request){
      request.setRequestHeader('X-Auth-Token', pass );
    },
    success: (response)=>{
      window.location.href = "../pages/home.html";
      console.log('You deleted movie');     
    },
    error: ()=> {
      console.log('Error!!');
    } 
  });
}

  addMovie(Obj,pass){
    return $.ajax('https://ancient-caverns-16784.herokuapp.com/movies',{
      method : 'POST',
      beforeSend : function(request){
      request.setRequestHeader('X-Auth-Token', pass );
    },
    data : Obj,
      // {
      //   Title : Obj.Title,
      //   Year : Obj.Year,
      //   Runtime : Obj.Runtime,
      //   Genre : Obj.Genre,
      //   Language : Obj.Language,
      //   Country : Obj.Coutry,
      //   Poster : Obj.Poster,
      //   imdbRating : Obj.imdbRating,
      //   imdbVotes : Obj.imdbVotes,
      //   imdbID : Obj.imdbID,
      //   Type : Obj.Type
      // },
      success : function(response){
        console.log(response);
          this.Title = response.Title;
          this.Year = response.Year;
          this.Runtime = response.Runtime;
          this.Genre = response.Genre;
          this.Language = response.Language;
          this.Country = response.Country;
          this.Poster = response.Poster;
          this.imdbRating = response.imdbRating;
          this.imdbVotes = response.imdbVotes;
          this.imdbID = response.imdbID;
          this.Type = response.Type;
      },

      error : (error)=> {
        console.log(error,' erorare');
      }
    });
  }

}