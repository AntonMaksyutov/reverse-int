module.exports = function reverse (n) {
    let posNum = Math.abs(n);
    return Number(posNum.toString()
        .split('')
        .reverse()
        .join(''));
}
