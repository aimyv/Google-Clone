const data = require('../data');

class SearchItem {
    constructor(data) {
        this.id = data.id;
        this.url = data.url;
        this.breadcrumb = data.breadcrumb;
        this.title = data.title;
        this.description = data.description;
    }

    static get all() {
        const searches = data.map((search) => new SearchItem(search))
        return searches;
    }

    static findById(id){
        const sData = data.filter((search) => search.id == id)[0];
        if (!sData){
            return;
        }
        const search = new SearchItem(sData);
        return search;
    }

}

module.exports = SearchItem;
