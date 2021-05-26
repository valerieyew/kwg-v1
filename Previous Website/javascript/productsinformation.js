$(".thumb a").mouseover(function(x) {
    x.preventDefault();
    $(".imgBox img").attr("src", $(this).attr("href"));
})

$(".thumb a").click(function(x) {
    x.preventDefault();
    $(".imgBox img").attr("src", $(this).attr("href"));
})