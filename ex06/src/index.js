function main() {
    var x;
    var y;
    var z = "My name is";

    x = 7;
    y = 12;

    x = x + 2;
    y = y + 4;
    z = z + " John";




    return [x, y, z];
}

console.log(main());
module.exports = main;