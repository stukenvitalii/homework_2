let compose = (...functions) => (x) => functions.reduceRight((y,fn) => fn(y),x);

let f = compose((x => x*2),(x => x*x));

console.log(f(4));
