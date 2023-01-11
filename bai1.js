let btn_submit = document.getElementById("btn_submit");

let UserSignIn = [];
btn_submit.addEventListener("click", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmpassword = document.getElementById("confirmpassword").value;
    const User_signIn = {
        username: username,
        email: email,
        password: password,
        confirmpassword: confirmpassword
    }
    UserSignIn.push(User_signIn);
    // console.log(UserSignIn)
    let signIn = JSON.stringify(UserSignIn);
    localStorage.setItem('SignIn', signIn);
    // Alert thong bao thanh cong
    Swal.fire({
        icon: 'success',
        title: `Xin chào ${username}, Bạn đã đăng kí thành công❤️`,
        showConfirmButton: false,
        timer: 1500
    })
    //Reset form sau khi submit
    document.getElementById("username").value = '';
    document.getElementById("email").value = '';
    document.getElementById("password").value = '';
    document.getElementById("confirmpassword").value = '';
    setTimeout(function () {
        window.location.href = "signin.html"
    }, 1500)
})

let btn_signin = document.getElementById("btn_signin");
btn_signin.addEventListener("click", function (event) {
    event.preventDefault();
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let user_signin = localStorage.getItem('SignIn');
    // console.log(user_signin);
    let data_user = JSON.parse(user_signin)
    if (user_signin === null) {
        alert('Vui long khong de trong!!!');
    } else if (username.value === data_user.username && password.value === data_user.password) {
        Swal.fire({
            icon: 'success',
            title: 'Đăng nhập thành công❤️',
            // showConfirmButton: false,
            // timer: 1500
        })
        // alert('Thanh cong');
            window.location.href = "bai2.html";
        
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Đăng nhập thất bại!',
        })
    }
})