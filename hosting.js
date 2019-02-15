/* case 1 */
var a = 8;
function b() {
    console.log(a); //undefind
    var a = { name: "J" }
    console.log(a);//obj
}
b();
console.log(a);//8

/* case 2 */
if (!(c in window)) {
    var c = 1;
}
console.log(c); //undefind

/* case 3 */
console.log(d);//fn
var d = 10;
console.log(d);//10
function d() {

}

/* case 4 */
e();
console.log(f);//error
console.log(g);//2
console.log(h);//2
function e() {
    var f = g = h = 2;
    console.log(f);//2
    console.log(g);//2
    console.log(h);//2
}

/* case 5 */
i();
function i() {
    for (let j = 0; j < 2; j++) {
        console.log(j);//0,1
    }
    console.log(j);//error
}