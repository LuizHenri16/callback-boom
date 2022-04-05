

let text = document.querySelector("#text")

function one(callback) {
    setTimeout( () => {
        text.innerHTML = 1
        callback();
    }, 1000)
}
function two(callback) {
    setTimeout( () => {
        text.innerHTML = 2
        callback();
    }, 1000)
}
function three(callback) {
    setTimeout( () => {
        text.innerHTML = 3
        callback();
    }, 1000)
}
function four(callback) {
    setTimeout( () => {
        text.innerHTML = 4
        callback();
    }, 1000)
}
function five(callback) {
    setTimeout( () => {
        text.innerHTML = 5
        callback();
    }, 1000)
}
function six(callback) {
    setTimeout( () => {
        text.innerHTML = 6
        callback();
    }, 1000)
}
function seven(callback) {
    setTimeout( () => {
        text.innerHTML = 7
        callback();
    }, 1000)
}
function eight(callback) {
    setTimeout( () => {
        text.innerHTML = 8
        callback();
    }, 1000)
}
function nine(callback) {
    setTimeout( () => {
        text.innerHTML = 9
        callback();
    }, 1000)
}
function ten(callback) {
    setTimeout( () => {
        text.innerHTML = 10
        callback();
    }, 0)
}

let exec = function() {
    ten(() =>{
        nine(() => {
            eight(() => {
                seven(() => {
                    six(() => {
                        five(() => {
                            four(() => {
                                three(() => {
                                    two(() => {
                                        one(() => {
                                            setInterval(() => {
                                                text.innerHTML = "booom!"
                                            }, 2000)
                                        })
                                    })
    
                                })
                            })
                        })
                    })
                })
            })
        })
    })

}



