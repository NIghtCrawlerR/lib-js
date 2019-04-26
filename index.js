
var Lib = new Lib()
Lib.onlyNums($('[onlynum]'))
Lib.onlyAlphaChars($('[onlyalpha]'))
$('.form').submit(function(e){
    e.preventDefault();
    Lib.checkEmpty($(this), '[reqval]', function(hasEmpty){
        console.log(hasEmpty)
    });
})






