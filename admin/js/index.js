$(function () {
    $.ajax({
        type: "get",
        url: BigNew.user_info,
        success: function (res) {
            console.log(res);
            if (res.code === 200) {
                $(".sider .user_info span").html(`欢迎&nbsp;&nbsp;${res.data.nickname}`);
                $(".sider .user_info img").attr("src", res.data.userPic);
                $(".header_bar img").attr("src", res.data.userPic);
            }
        }
    });
    //给退出注册点击事件
    $(".header_bar .logout").on("click", function () {
        window.localStorage.removeItem("token");
        location.href = "./login.html";
    });
    //左侧按钮实现高亮
    $(".menu .level01").on("click", function () {
        $(this).addClass("active").siblings("div").removeClass("active");
        if ($(this).index() == 1) {
            $(".menu .level02").slideToggle();
            $(".menu .level01 b").toggleClass("rotate0");
            $(".menu .level02 li:eq(0)").click();
        }
    });

    // 文章管理中的子标签高亮
    $(".menu .level02 li").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
    })
})