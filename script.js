let arr = ["Vlad", "damir","akbar","samir","shoxrux","farzod",]

    let max = arr

    arr.forEach((letter) => {
        if (letter > max) {
            max = letter
        } 
    })
    console.log(max);