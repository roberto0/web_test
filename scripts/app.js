function addRow(){

    $("#MyTable tbody").append("<tr>" + 
        "<td class='pt-3-half' contenteditable='true'></td>" +
        "<td class='pt-3-half text-center' contenteditable='true' ></td>" +
        "<td class='pt-3-half text-center' contenteditable='false'></td>" +
        "</tr>");

    //alert("Hello! I am an alert box!");
}