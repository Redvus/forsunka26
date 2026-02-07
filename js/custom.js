$(document).ready(function () {
    /* Search Mobile */
    $("#searchMobile input[name='search']")
        .parent()
        .find("button")
        .on("click", function () {
            var url = $("base").attr("href") + "index.php?route=product/search";

            var value = $("#searchMobile input[name='search']").val();

            if (value) {
                url += "&search=" + encodeURIComponent(value);
            }

            location = url;
        });

    $("#searchMobile input[name='search']").on("keydown", function (e) {
        if (e.keyCode == 13) {
            $("#searchMobile input[name='search']")
                .parent()
                .find("button")
                .trigger("click");
        }
    });

    //Search button mobile
    $("#searchMobileButton").on("click", function (params) {
        $("#searchMobile").css({
            transform: "translateY(0)",
            transition: "transform 0.3s ease", // плавная анимация
        });
    });

    $("#searchMobileClose").on("click", function (params) {
        $("#searchMobile").css({
            transform: "translateY(-100%)",
            transition: "transform 0.3s ease", // плавная анимация
        });
    });
});
