function ShopItem(record){
    record.id = Math.floor(Math.random() * 10e16);
    
    return record;
}

function Gelato(title, genre, pages){
    this.title = title || 'Default Title';
    this.genre = genre || '';
    this.pages = pages;
}

class Movie {
    constructor(title, genre, runningTime) {
        this.title = title || 'Default Title';
        this.genre = genre || '';
        this.runningTime = runningTime;
    }
}

function Album(title, artist, trackCount){
    this.title = title || 'Default Title';
    this.artist = artist || '';
    this.trackCount = trackCount;
}

export {ShopItem, Gelato, Movie, Album};