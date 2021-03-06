<html>
<head>
<script type="text/javascript">

    // Challenge 1
    // Promise wrapping asynchronous operation, Promise status pending
    // Asynchronous operation completion,resolve function Make Promise objects from pending to fulfilled, eject function Make Promise objects from pending to rejected
    // The callback functions of resolve state by the then method,The callback functions of rejected state by the catch method

    function compute() {
        return new Promise( function(resolve, eject) {
            setTimeout( function(err, res) {
                var num;
                var err;
                var res;

                num = Math.random(1);
                if (num < 0.5) {
                    err = 'Error';
                    eject(err);
                }
                res = 'Success';
                resolve(res);
            }, 1000);
        });
    }

compute()
    .then((x) => console.log(x))
    .catch((err) => console.log(err));


// Challenge 2

function f2(a) {
    var res = new Array();
    var arr = a.match(/-?\d+(\.\d+)?/g);
    if (arr != null) {
        for (var i=0; i < arr.length; ++i) {
            res.push(parseFloat(arr[i]));
        }
    }
    return res;
}

console.log(f2("Hello World"));
console.log(f2("a1 12 13.b -14.5+2"));


// Challenge 3

function PentagonalNumber(num) {
    var res = new Array();

    var sumofBlueDots = 1;
    var sumOfRedDots = 0;

    for (var i=2; i <= num; ++i){
        sumofBlueDots = sumOfRedDots + sumofBlueDots;
        sumOfRedDots = (i-1)*5;
    }
    res.push(sumofBlueDots);
    res.push(sumOfRedDots);

    return res;
}
console.log(PentagonalNumber(1));
console.log(PentagonalNumber(2));
console.log(PentagonalNumber(3));
console.log(PentagonalNumber(4));

</script>
</head>
</html>
