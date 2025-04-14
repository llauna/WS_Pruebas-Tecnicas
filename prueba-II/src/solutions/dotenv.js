import fs from 'node:fs'

export function config( { path = ".env"} = {} ) {
    try {
        const env = fs.readFileSync(path, 'utf8')
        const lines = env.split('\n')

        lines.forEach(line => {
            const [key, ... value] = line.split('=')
            const joinedValue = value.join("=")

            const hasQuotes = joinedValue.startsWith('"') &&
                joinedValue.endsWith('"')

            const valueToStore = hasQuotes
                ? joinedValue.slice(1, -1)
                : joinedValue
            
            process.env[key] = valueToStore
        })

        // Array -> string -> .join()
        // string -> Array -> .split()

    } catch (error) {
      //console.error(e)  
    }
}

const dotenv = {
    config
}

export default dotenv