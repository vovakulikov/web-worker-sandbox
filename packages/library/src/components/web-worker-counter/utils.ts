import os from 'node:os'

export const log = (context: string, message: string) => {
    console.log(os.platform(), context, message)
    // console.log(context, message)
}
