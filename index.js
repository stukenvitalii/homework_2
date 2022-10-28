function main(num,operator) {
    if(operator == undefined){
        return num
    }
    return operator(num)
}
function zero(operator){
    return main(0,operator)
}
function one(operator) {
    return main(1,operator)
}
function two(operator) {
    return main(2,operator)
}
function three(operator) {
    return main(3,operator)
}
function four(operator) {
    return main(4,operator)
}
function five(operator) {
    return main(5,operator)
}
function six(operator) {
    return main(6,operator)
}
function seven(operator) {
    return main(7,operator)
}
function eight(operator) {
    return main(8,operator)
}
function nine(operator) {
    return main(9,operator)
}

function plus(secondOperand) {
    return (firstOperand)=>{ return firstOperand + secondOperand}
}
function minus(secondOperand) {
    return (firstOperand)=>{return firstOperand - secondOperand}
}
function dividedBy(secondOperand) {
    return (firstOperand)=>{ return Math.floor(firstOperand / secondOperand)}
}
function times(secondOperand) {
    return (firstOperand)=>{return firstOperand * secondOperand}
}
