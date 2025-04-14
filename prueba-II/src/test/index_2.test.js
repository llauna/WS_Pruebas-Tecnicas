import { obtenerDatosPromise } from '../solutions/index_2.js'
import { describe, it } from 'node:test'
import { equal } from 'node:assert/strict'



describe('2. obtenerDatosPromise', () => {
    it('2.1. obtenerDatosPromise', async () => {
        const { data } = await obtenerDatosPromise({ time: 1})
        equal(data, 'datos importantes')
    })
})

obtenerDatosPromise()
    .then(info => {
        console.log(info)
    })
    .catch(error => {
        console.error(error)
    })