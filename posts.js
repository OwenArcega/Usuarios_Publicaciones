class Posts{
    constructor(){
        this.posts = posts;
    }

    PostsUsuario(idUsuario){
        let posts = [];
        for(let i = 0; i < this.posts.length; i++){
            if(this.posts[i].userId == idUsuario){
                posts.push(this.posts[i]);
            }
        }
        return posts;
    }

    obtenerPost(idPost){
        for(let i = 0; i < this.posts.length; i++){
            if(idPost == this.posts[i].id){
                return this.posts[i];
            }
        }
        return null;
    }
}