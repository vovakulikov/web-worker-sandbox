import { log } from './utils.ts'

let i = 0;

function timedCount() {
    log('[WEB WORKER]', 'timedCount call')
    i = i + 1;
    postMessage(i);
    setTimeout(timedCount,1000);
}

timedCount();
