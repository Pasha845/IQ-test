'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('1', '1.html', true),            
            new Route('2', '2.html'),
            new Route('3', '3.html'),
            new Route('4', '4.html'),
            new Route('5', '5.html'),
            new Route('6', '6.html'),
            new Route('7', '7.html'),
            new Route('8', '8.html'),
            new Route('9', '9.html'),
            new Route('10', '10.html'),
            new Route('11', '11.html'),
            new Route('12', '12.html'),
            new Route('end', 'end.html')
        ]);
    }
    init();
}());
