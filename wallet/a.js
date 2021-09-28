async function c() {
    return {name:'s'}
}

let t
(async () => {
    t = await c()
    console.log(t);
})()
console.log(t);
