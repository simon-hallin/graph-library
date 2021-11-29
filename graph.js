class Graph {
    data = [];
    constructor (holder) {
        this.holder = holder;
    }

    create() {
        let svg = document.createElement("svg");
        this.holder.appendChild(svg);
    }

    printData() {
        
    }
}