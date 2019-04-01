class Page {
    constructor(){
        this.currentPage = "";
        this.prevPage = ""; 
        this.nextPage = "";
        this.self =  "";
    }

    paginate(){
        return $.ajax('https://ancient-caverns-16784.herokuapp.com/movies',{
            method : 'GET',
            success : (page)=>{
                this.currentPage = page.pagination.currentPage;
                this.prevPage = page.pagination.links.prev;
                this.nextPage = page.pagination.links.next;
                console.log(page.pagination.links.next);
                this.self = page.pagination.links.self;
             }
        });
    }
}