Date.prototype.getDayOfYear = function () {
    var year = this.getFullYear();
    var month = this.getMonth()+1;
    var days = this.getDate();

    for (var i = 1; i < month; i+=1) {
        days+=new Date(year, i, 0).getDate();
    }
    return days;
}