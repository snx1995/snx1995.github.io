function Comtansy(selector, option) {
    const $el = document.querySelector(selector);
    if (!$el) {
        console.error("elemen: " + selector + " not found");
        return;
    }

    let comData = [];

    this.data = function (comList, mapper) {
        comData = comList;
        comData.forEach(function (comment) {
            let com = typeof mapper == "function" ? mapper(comment) : comment;
            

        })
    }

    this.page = function (i) {

    }

    this.nextPage = function () {

    }

    this.prePage = function() {

    }


}