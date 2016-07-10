var mlabHelper;
$(document).ready(function(){
    var apikey = "_cAwbzebv6Z4yRuxHtJGzRs36HMKc5QS";
    mlabHelper = new mLabhelper(apikey);
    mlabHelper.setDBname("masungnet");
});
function insertCalling(){
    var dataobj = {"title":$("#title_id").val() || '', "contents":$("#contents_id").val()||''};
    mlabHelper.insertMlab(dataobj,function(data){
       console.dir(data); 
    });
}



function skillCalling(){
    mlabHelper.searchMlabSkill(function(data){
        console.dir(data);
        drawTable("skillTable",data);
    });
}
function visitorCalling(){
    mlabHelper.searchMlabVisitor(function(data){
        console.dir(data);
        drawTable("dynamicTable",data);
    });
}
function portfolioCalling(){
    mlabHelper.searchMlabPortfolio(function(data){
        console.dir(data);
        drawTable("dynamicTable",data);
    });
}

function drawTable(tableID, dataobj){
    var tableIns = $("#"+tableID);
    var inHTML = "";
    $.each(dataobj, function(index,value){
       var newItem = "<tr>";
        newItem += "<td><input type='text' value='"+value.title +"'></td>";
        newItem+="</tr>"
        inHTML +=newItem;
    });
    tableIns.html(inHTML);

}