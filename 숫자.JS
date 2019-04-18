var input_text = document.getElementById("input_text");
var result = document.getElementById("result");
var if_correct = document.getElementById("if_correct");

function randomSet() {
    return parseInt(Math.random() * 2);
}

var random_value = randomSet();

function correctReset() {
    result.innerText = '';

    var correct_button = document.getElementById("correct_button");
    if_correct.removeChild(correct_button);
}

function check_Value() {
    var inputed_value = input_text.value;

    if(random_value == 1){
        var random_pick = '가위';
    } else if(random_value == 2){
        var random_pick = '보';
    } else if(random_value == 0){
        var random_pick = '바위';
    }

    if(inputed_value == '가위'){
        if(random_pick == '보'){
            result.innerText = '승리';
            random_value = randomSet();

            var node = document.createElement("button");
            node.id = 'correct_button';
            node.innerText = '다시하기';
            node.onclick = correctReset;
            if_correct.appendChild(node);
        } else if(random_pick == '바위'){
            result.innerText = '패배';
        } else if(random_pick == '가위'){
            result.innerText = '무승부';
        }
    } else if(inputed_value == '보'){
        if(random_pick == '바위'){
            result.innerText = '승리';
            random_value = randomSet();
            
            var node = document.createElement("button");
            node.id = 'correct_button';
            node.innerText = '다시하기';
            node.onclick = correctReset;
            if_correct.appendChild(node);
        } else if(random_pick == '가위'){
            result.innerText = '패배';
        } else if(random_pick == '보'){
            result.innerText = '무승부';
        }
    } else if(inputed_value == '바위'){
        if(random_pick == '가위'){
            result.innerText = '승리';
            random_value = randomSet();

            var node = document.createElement("button");
            node.id = 'correct_button';
            node.innerText = '다시하기';
            node.onclick = correctReset;
            if_correct.appendChild(node);
        } else if(random_pick == '보'){
            result.innerText = '패배';
        } else if(random_pick == '바위'){
            result.innerText = '무승부';
        }
    }
}

function onEnterKey (event) {
    if(event.code === "Enter") {
        check_Value();
    }
}

input_text.onkeypress = onEnterKey;