const listTemplate = '<div><img src="IMAGESRC" alt="IMAGEALT" width="420" height="300"><div><h3>TITLE</h3><p>DESCRIPTION</p><a href="PAGE">View Recipe</a></div></div>';

$(document).ready(function(){
    $.ajax({
        type: "get",
        url: "json/featuredrecipes.json",
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
                    $(".bxslider").append(listBuilder);
                });
            });
            $(function(){
                $('.bxslider').bxSlider({
                  mode: 'fade',
                  auto: true,
                  pause: 6000,
                  touchEnabled: false,
                  slideWidth: 600
                });
            });
        }
    });
});
