
let track = document.querySelector(".track");
let images_array = track.children;
let index = document.querySelector(".index").children;
index[1].classList.toggle("active");
index[2].classList.toggle("active");
images_array[0].classList.toggle("hide", false);

let next = document.querySelector(".next");
let prev = document.querySelector(".prev");


let ix = 0;

function start() {
    let id = -1;
    let fun = function () {
        if (id != -1) clearTimeout(id);
        id = setInterval(move_forward, 5000);
    }

    return fun;
}

let fun = start();
fun();

function move_forward() {
    images_array[ix].classList.toggle("hide");
    index[ix].classList.toggle("active");
    ix++;
    ix %= images_array.length;
    images_array[ix].classList.toggle("hide");
    index[ix].classList.toggle("active");
    fun();
}

function move_back() {
    images_array[ix].classList.toggle("hide");
    index[ix].classList.toggle("active");
    ix--;
    ix += images_array.length;
    ix %= images_array.length;
    images_array[ix].classList.toggle("hide");
    index[ix].classList.toggle("active");
    fun();
}

next.onclick = move_forward;
prev.onclick = move_back;























