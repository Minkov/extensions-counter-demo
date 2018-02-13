class Queue {
    constructor() {
        this.values = [];
    }

    enqueue(value) {
        this.values.push(value);
        return this;
    }

    dequeue() {
        return this.values.shift();
    }

    isEmpty() {
        return this.values.length === 0;
    }
}

module.exports = {
    Queue,
};
