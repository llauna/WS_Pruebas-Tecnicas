import net from 'node:net'

export const ping = (ip, callback) => {
    const startTime = process.hrtime()

    const client = net.connect({ port: 80, host: ip}, () => {
        client.end()
        // return { time: process.hrtime(startTime), ip } //<- NO FUNCIONA
        callback(null, { time: process.hrtime(startTime), ip })
    })

    client.on('error', (err) => {
        client.end()
        callback(err)
        // throw err //<- NO FUNCIONA
        
    })
}

ping('midu.dev', (err, info) => {
    if(err) console.log(err)
    console.log(info)
})

// no funciona como se espera, hay que arreglar algo