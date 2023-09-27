let input = document.getElementById('box');
let allButtons = document.querySelectorAll('.btn');

let starting_string = "";
let arr = Array.from(allButtons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {


        if (e.target.innerHTML == '=') {
            starting_string = eval(starting_string);
            input.value = starting_string;
        }

        else if (e.target.innerHTML == 'Clr') {
            starting_string = "";
            input.value = starting_string;
        }
        else if (e.target.innerHTML == 'Del') {
            starting_string = starting_string.substring(0, starting_string.length - 1);
            input.value = starting_string;
        }
        else {
            starting_string += e.target.innerHTML;
            input.value = starting_string;
        }

    })
})