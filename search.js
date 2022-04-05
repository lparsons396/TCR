
function getKeybyValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

var pages = {
    'colombia.html': ["colombia", "colombian", "colombian coffee", "toffee", "praline", "berry", "berries"],
    'coffee.html' :["coffee", "coffees", "coffee beans"],
    'brazil.html' :["brazil", "brazilian", "brazilian coffee", "raisin", "mandarin", "honey"],
    'guatemalan.html':["guatamala", "guatemalan", "chocolate", "chocolatey", "nutty", "hazelnut", "molasses"],
};


console.log(getKeybyValue(pages, "2"));