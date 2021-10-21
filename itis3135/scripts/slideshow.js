$(document).ready(function()
{
    $("#slideShowImageList a").click(function(evt) 
    {
        var imageURL = $(this).attr("href");
        $("#mainImage").attr("src", imageURL);
        var caption = $(this).attr("title");
        $("#mainImageCaption").text(caption);
        evt.preventDefault();
    });
});