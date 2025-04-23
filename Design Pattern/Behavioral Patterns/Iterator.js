//Iterator Pattern

// so we can say it actually works as a iterator which we use to loop

// The Iterator pattern provides a way to access the elements of a collection sequentially without exposing its underlying structure 


//real example :
// you dont need to know how the netflix stores the episode 
// you just hit the next and get the next episode 

//Playlist Collection

class Playlist{
  constructor(songs){
    this.songs =songs;
  }

  createIterator(){
    return new PlaylistIterator(this.songs);
  }
}

class PlaylistIterator{
  constructor(songs){
    this.songs =songs;
    this.index =0;
  }
  hasNext(){
    return this.index<this.songs.length
  }
  next(){
    return this.hasNext()?this.songs[this.index++]:null;
  }
}

const playlist = new Playlist(["songs1","songs2","songs3"]);

while(NodeIterator.hasNext()){
  console.log(iterator.next());
}

// useCase

// Pagination system 
//Dom Element
// tree traversal