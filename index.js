
var Lib = new Lib()

$('.form').submit(function(e){
    e.preventDefault();
    Lib.checkEmpty($(this), '[reqval]', function(hasEmpty){
        console.log(hasEmpty)
    });
})






