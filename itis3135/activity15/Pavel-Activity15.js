$(document).ready(function(){
    $.ajax({
        type: "get",
        url: "facultyList.json",
        beforeSend: function() {
            $("#faculty").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#faculty").html("");
            $.each(data, function() {
                $.each(this, function(key, value) {
                    $("#faculty").append(
                        "<img src='" + value.image + "'>" +
                        "<br><h2>" + value.full_name + "</h2>" +
                        "<br><h3>" + value.department + "</h3>" +
                        "<br><p>" + value.bio + "</p>"
                    );
                });
            });
        }
    });
});
