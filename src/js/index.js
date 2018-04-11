/*eslint no-undef: "error"*/
/*eslint-env browser*/

setTimeout(function() {alert("Hello")
})

var fs = require("fs");
module.exports = function() {
    console.log(fs);
};
