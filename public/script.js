$(document).ready(function() {

    $("#loginButton").click(function(){
        var username = $("#UserName").val();
        var password = $("#Password").val();
        console.log("username", username);
        console.log("password", password);

        if(username ==="admin" && password === "123"){
            localStorage.setItem("loggedInUser", JSON.stringify({username: username, password: password}));
            checkLogin();
        } else{
            alert("The information did not match any users...... sorry..... ); ");
          
        }
         return false;
    });

$('#logout').click(function () {
        localStorage.setItem("loggedInUser", null);
        checkLogin();
    });

$('#createAccount').click(function () {
        var user = { username: $('#CreateUserName').val(), email: $('#CreateEmail').val(), password: $('#CreatePassword').val() }
        var users = JSON.parse(localStorage.getItem("users"));
        consol.log(users);
        if (users === null) {
            users = [];
        }
        users.push(user);
        console.log('users: ', users);
        localStorage.setItem("users", JSON.stringify(users));
        return false;
    });

$('#toogle-createAccount').click(function () {
        $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
        return false;
    });

$('#toogle-loginReturn').click(function () {
        $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
        return false;
    });

function checkLogin() {
        var localUsers = JSON.parse(localStorage.getItem("users"));
        console.log('usies', localUsers);
        var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
        console.log('loggedInUser', loggedInUser);
        if (loggedInUser != null) {
            $('.LoggedInScreen').show();
            $('.LogInScreen').hide();
            console.log(localUsers);               
            if(localUsers != null){
                let userList = $("#userList");
                //userList.empty();
                for(i=0; i<localUsers.length; i++){
                    $("<li class=\"message\"><a >"+localUsers[i].username +"</a></li>").appendTo(userList);
                }
            }       
        } else {
           $('.LoggedInScreen').hide();
            $('.LogInScreen').show();

        }
    }
    checkLogin();

});
    