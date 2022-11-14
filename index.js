window.onload = function() {
    let count = 0
    setInterval(() => {
        console.log(document.getElementsByClassName('first-div'))
        count++
        document.getElementsByClassName('firstdiv')[0].innerHTML = count;
    }, 1000)
}