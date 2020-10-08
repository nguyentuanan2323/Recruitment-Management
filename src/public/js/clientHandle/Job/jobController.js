
$("#bestjob ").ready( function(){
   $.ajax({
       url: "/Job/get",
       type: "GET",
       contentType: "application/json;charset=utf-8",
       dataType: "json",
       success: function (result) {
           bindDataToTableJob(result.data, "bestjob")
       },
       error: function (){
           console.log("Lỗi không thể load dữ liệu")
       }
   })
})
/////////////////////////////////////////
//utill function

//bind data to table

function bindDataToTableJob(data, tableid) {
    console.log("data")
    /*$(`#bestjob tbody tr`).ready().each(data, function (index, value){
        console.log(value);
        $(`${tableid} tbody tr`).appendTo(
            `
                <tr>
                                        <td>${value.nameCompany}</td>
                                        <td>${value.exprence}</td>
                                        <td>${value.addressWork}</td>
                                        <td>${value.localzoneWork}</td>
                                        <td>${value.description}</td>
                                        <td>${value.requirement}</td>
                                        <td>${value.name}</td>
                </tr> 
            `
        )
    });*/
    $(`#bestjob`).ready( function (){
        data.forEach(function (element) {
            $(`#bestjob tbody`).append(
                `<tr style="height: 50px">
                                     
                                             <td >${element.name}</td>
                                            <td >${element.nameCompany}</td>
                                            <td >${element.exprence}</td>
                                            <td >${element.addressWork}</td>
                                            <td >${element.localzoneWork}</td>
                                            <td style="max-width: 200px;"> ${element.description}</td>
                                            <td style="max-width: 200px;">${element.requirement}</td>
                                            <td >${element.benefit}</td>
                                            <td >${element.major}</td>
                                             <td >${element.skill}</td>
                                            <td >${element.jobType}</td>
                </tr> 
            `
            )
        } );


    })


}

