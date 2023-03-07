let sounds = document.querySelectorAll('audio')
let bubbles = document.querySelectorAll('.bubble')
let btn = document.querySelector('.snow__btn')
let snowflakes = document.querySelectorAll('.snowflake')

for (let bubble of bubbles) {
    bubble.addEventListener('mouseover', function(e) {
        i = e.target
        function toggleMove(i) {
            i.classList.add("rotate");
            function n() {
                i.classList.remove("rotate");
                i.classList.add("rotate1");
                function o() {
                    i.classList.remove("rotate1");
                    i.classList.add("rotate2");
                    function p() {
                        i.classList.remove("rotate2");
                        i.classList.add("rotate3");
                        function q() {
                            i.classList.remove("rotate3");
                        }
                        setTimeout(q, 100);
                    }
                    setTimeout(p, 100);
                }
                setTimeout(o, 100);
            }
            setTimeout(n, 100);
        }
        toggleMove(i)
    }) 
}

for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].addEventListener('mouseover' , function() {
        for (let k = 0; k < 1; k++) {
            sounds[i].play()
        }
    })
}

let size, left, start, sec
let screenWidth = window.screen.width
let screenHeight = window.screen.height

function randomSize(max, min) {
    size = Math.floor(Math.random() * (max - min) + min)
}

function randomLeft(screenWidth, min) {
    left = Math.floor(Math.random() * (screenWidth - min) + min)
}

function randomTop(max, min) {
    start = Math.floor(Math.random() * (max - min) + min)
}

function randomDuration() {
    sec = Math.floor(Math.random() * 10)
}

btn.addEventListener('click', function snow() {
    for (let snowflake of snowflakes) {
        randomSize(20, 8)
        randomLeft(screenWidth, 0)
        randomTop(-200, 0)
        randomDuration()
        snowflake.setAttribute("style", `width: ${size}px; height: ${size}px; top: ${start}px; left: ${left}px; animation: snowfall ${5 + sec}s linear infinite;`)
    }
})

