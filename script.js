document.addEventListener('DOMContentLoaded', function() {
    let moveContainer = document.getElementById('move')

    document.addEventListener('mousemove', function (e) {
        let x = e.clientX;
        let y = e.clientY;
        moveContainer.style.left = x + "px"
        moveContainer.style.top = y + "px"
    })
})

function yes() {
    var audio = document.getElementById("yay")
    audio.play();
    audio.onended = function() {
        window.location.href = 'yes.html'
    }
}