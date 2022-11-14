window.onload = () => {
    let count = 0
    setInterval(() => {
        count++
        document.getElementsByClassName['first-div'][0].innerHTML = count;
    }, 100)
}