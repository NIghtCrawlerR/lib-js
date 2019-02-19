var Lib = (function Lib() {
    var _pivateVars = {
        'var1': 12
    }

    return function LibConstructor() {
        var _this = this;

        _this.someMethod = function () {
            return _pivateVars.var1;
        }
        _this.getFullDate = function () {
            var d = new Date(),
                day = d.getDate(),
                month = d.getMonth() + 1,
                year = d.getFullYear();
            return `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year}`;
        }
        _this.getTime = function () {
            var d = new Date(),
                h = d.getHours(),
                m = d.getMinutes();
            return `${h}:${m}`;
        }
        _this.checkEmpty = function (form, el, callback) { //this form, selector, callback
            var empty = 0;
            $(el, form).removeClass('emptyval');
            $(el, form).each(function(){
                if($(this).val() == '') {
                    $(this).addClass('emptyval');
                    empty ++;
                }
            })
            callback(empty != 0);
        }
        _this.onlyNums = function (el) {
            var reg = /\d/;
            el.bind('keydown', function(e){
                if(reg.test(e.key) || e.keyCode == 8) return;
                else e.preventDefault();
            })
        }
    }
}())


