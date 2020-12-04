<<<<<<< HEAD
function convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
}
=======
/*


function bindDataToTableJob(data, tableid) {
    $(`bestjob tbody tr`).ready().each(function (index, value){
        console.log(value);
    });
}
*/

>>>>>>> 0c89f12f1dff22779ee60dac9587728ac3bb5e7e
