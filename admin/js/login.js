//入口函数
$(function () {
    $(".login_form").on("submit", function (e) {
        var username = $(".input_txt").val().trim();
        var password = $(".input_pass").val().trim();
        //阻止表单的默认行为
        e.preventDefault();
        $.ajax({
            type: "post",
            url: BigNew.user_login,
            data: $(this).serialize(),
            beforeSend: function () {
                if (username == "" || password == "") {
                    $("#myModal").modal("show");
                    $("#myModal .modal-body").text("用户或密码不能为空");
                }

            },
            success: function (res) {
                console.log(res);
                //用户名及密码错误    用户登录成功   都弹出模态框
                $("#myModal").modal("show");
                $("#myModal .modal-body").text(res.msg);
                if (res.code === 200) {
                    $('#myModal').on('hidden.bs.modal', function (e) {
                        window.localStorage.setItem("token", res.token)
                        window.location.href = "./index.html"
                    })

                }

            }
        })
    })
})