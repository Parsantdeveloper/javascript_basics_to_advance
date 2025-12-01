

// const anime={
//     title:"One Piece",
//     play(){
//         console.log(this)
//     }
// }
// anime.stop=function(){
//     console.log(this)
// }
// anime.stop()

// function anime(title){
//     this.title=title;
//     console.log(title)
// }
// const reader = new anime("Attak On Titan"); 

const anime ={
    title:'Naruto',
    tags:['adventure','comedy','ninja','fantasy'],
    // ShowTags(){
    //     this.tags.map((data)=>console.log(data))
    // }
    ShowTags(){
        this.tags.forEach(function(tag){
            console.log(this.title,tag)
        },this);
    }
}
anime.ShowTags()
