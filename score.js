// small functions to make stuff easier

// Score

function get_score (){
    return parseInt(countdown.innerHTML);
}

function set_score (score){
    countdown.innerHTML = score;
}

function decrease_score (){
    let current_score = get_score();

    if(current_score > 0){
        set_score(current_score - 1);
    }

}

function calculate_success(){
    let right_answers = get_correct()
    if (right_answers >= 16){
        exam_results.innerHTML = "Passed the exam!";
    }else{
        exam_results.innerHTML = "Did not pass yet.";
    }
}

// Right Answers

function get_correct (){
    return parseInt(correct_score.innerHTML);
}

function set_correct (score){
    correct_score.innerHTML = score;
}

// Wrong Answers

function get_incorrect (){
    return parseInt(incorrect_score.innerHTML);
}

function set_incorrect (score){
    incorrect_score.innerHTML = score;
}


// Handle the score logic

add_correct.addEventListener("click", () => {

    if(get_score() > 0 ){
        decrease_score();
        set_correct( get_correct() + 1 );
    }else{
        calculate_success();
    }
    
});

add_incorrect.addEventListener("click", () => {

    if(get_score() > 0 ){
        decrease_score();
        set_incorrect( get_incorrect() + 1 );
    }else{
        calculate_success();
    }

});

reset_score.addEventListener("click", () => {
    set_score(22);
    set_correct(0);
    set_incorrect(0);
     exam_results.innerHTML = "";
});