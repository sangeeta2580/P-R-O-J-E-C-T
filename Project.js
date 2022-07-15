console.log('connected 🎈');
const stars = document.getElementsByClassName('star')[0];

for (var a = 0; a < 5; a++) {
    stars.innerHTML += `<span id=${a + 1}  class="fa fa-star m-1" onclick="func1(this)"> </span>`
}
const star = document.getElementsByClassName('fa-star');
// console.log(star);
var starss = 0
function func1(data) {
    console.log(data.id);
    starss = data.id
    for (var i = 0; i < data.id; i++) {
        star[i].classList.add('checked');
    }
}

// Backend JavaScript

class Lib_Data {
    constructor(topic, stack, link, starss) {
            this.topic = topic,
            this.stack = stack,
            this.link = link,
            this.starss = starss
    }
}

const card_data = document.getElementsByClassName('card_data')[0];

class Display_card {
    constructor(data) {
        this.data = data
    }
    cardAdd = function () {
        card_data.innerHTML += ` <div class="card shadow p-3 mb-5 bg-white       rounded"  style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${this.data.topic}</h5>

            <p class="card-text">${this.data.stack}</p>
            <a href="${this.data.link}" class="btn btn-dark card-link">Watch Now🎫</a>
        </div>
    </div>`
    }
}

const form_data = document.getElementById('form_data');
form_data.addEventListener('submit', data_form);

function data_form(e) {
    //By default refresh
    e.preventDefault();

    console.log('form submitted');
    const topic = document.getElementById('topic').value;
    const link = document.getElementById('link').value;
    const html = document.getElementById('html');
    const css = document.getElementById('css');
    const javascript = document.getElementById('javascript');
    const nodejs = document.getElementById('nodejs');
    const reactjs = document.getElementById('reactjs');
    var stack = ''
    if (html.checked) {
        stack = 'html'
    }
    else if (css.checked) {
        stack = 'css'
    }
    else if (javascript.checked) {
        stack = 'javascript'
    }
    else if (nodejs.checked) {
        stack = 'nodejs'
    }
    else {
        stack = 'reactjs'
    }
// java, c, c++ (oop classes (apie))
    const Data = new Lib_Data(topic, stack, link, starss);
    
    const display1 = new Display_card(Data);
    display1.cardAdd();
}


// arr= [12,34,'dwa']; Class

