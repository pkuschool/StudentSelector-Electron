function $(query) { //FUNC: Fake Jquery :D but not used often
    return document.querySelectorAll(query)
}
//func: M.Init
document.addEventListener('DOMContentLoaded', function () { //Modal Init
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {
        dismissible: true
    });
});
document.addEventListener('DOMContentLoaded', function () { //Tooltip Init
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems, {
        margin: -5
    });
});
var aboutTab = M.Tabs.init($('#aboutTab'), {
    swipeable: false
});
var mainTab = M.Tabs.init($('#mainTab'), {
    swipeable: false
});
//Tabs Init
// const M = require('materialize-css')