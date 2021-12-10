const listTemplate = '<li><div class="imageGallery"><img src="IMAGESRC" alt="IMAGEALT" width="275" height="200"><div><h3><a href="PAGE">TITLE</a></h3><p>DESCRIPTION</p></div></div><br><li>';

$(document).ready(function(){
    $.ajax({
        type: "get",
        url: "json/recipes.json",
        beforeSend: function() {
            console.log();
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $.each(data, function() {
                $.each(this, function(key, value) {
                    listBuilder = listTemplate.slice(); //Create a copy of listTemplate for modification based on recipe
                    listBuilder = listBuilder.replace("IMAGESRC", value.image);
                    listBuilder = listBuilder.replace("IMAGEALT", value.imagealt);
                    listBuilder = listBuilder.replace("PAGE", value.page);
                    listBuilder = listBuilder.replace("TITLE", value.title);
                    listBuilder = listBuilder.replace("DESCRIPTION", value.description);
                    $("#recipelist").append(listBuilder);
                });
            });
        }
    });
});
