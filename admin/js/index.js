$(function () {
    $.ajax({
        type: "get",
        url: "http://localhost:8080/api/v1/admin/user/info",
        success: function (res) {
            console.log(res);
            if (res.code === 200) {
                $(".sider .user_info span").html(`欢迎&nbsp;&nbsp;${res.data.nickname}`);
                $(".sider .user_info img").attr("src", res.data.userPic);
                $(".header_bar img").attr("src", res.data.userPic);
            }
        }
    })
})