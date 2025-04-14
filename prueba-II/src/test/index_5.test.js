export async function delay(time) {
    let timeoutId
    let promise = new Promise(resolve => {
        timeoutId = setTimeout(resolve, time)
    })
    
    return {
        clearTimeout: () => clearTimeout(timeoutId),
        promise
    }
}

const { promise, clearTimeout } = delay(500)
console.log('Hola llaunas!!!');