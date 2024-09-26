// CALL BACK

const test1= (callback) => {
    setTimeout( ()=>{
        console.log('boa noite')
        callback()
    }, 1000)
}

const callback = () => {
    console.log('Fim')
}

test1(callback)
console.log(1 + 1)
