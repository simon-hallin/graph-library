class Graph {
    constructor (holder) {
        this.holder = holder;
    }

    set data(data) {
        if (data.length == 0) {
            console.log("Data cannot be empty");
            return;
        }
        this._data = data;
    }

    get data() {
        return this._data;
    }

    create() {
        let svg = document.createElement("svg");
        this.holder.appendChild(svg);
    }

    // append a list of data objects to the list of data
    appendData() {

    }

    // aooend a list/single piece of data before a data point
    addBefore() {

    }

    // aooend a list/single piece of data after a data point
    addAfter() {

    }

    static calculateMedium() {

        
    }
}