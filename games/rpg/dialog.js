
function Dialog(){

    this.state = 0;
    this.questions = {};

}

function Question(text, target) {

    this.text = text;
    this.target = target;

}

Question.prototype.getAnswer = function() {

}