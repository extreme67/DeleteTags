let str = "<br>, <col>, </embed>, <hr>, <img> и другие";

function deleteTags(str) {

    str = str.replace(/[\<|>|/|\\$]/g, '');
    return str;

};

console.log(deleteTags(str));