class GuessingGame {
    constructor() {
      this.min;
      this.max;
      this.curr;
    }

    setRange(min, max) {
      this.min = min;
      this.max = max;
    }

    guess() {
       this.curr = Math.ceil((this.max-this.min) / 2 + this.min);  
       return this.curr;
    }

    lower() {
      this.max = this.curr;
    }

    greater() {
      this.min = this.curr;
    }
}

module.exports = GuessingGame;
