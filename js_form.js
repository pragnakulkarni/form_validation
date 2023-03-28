function validate()
{
    var username = document.getElementById("username").value
    var gmail = document.getElementById("gmail").value
    var password = document.getElementById("password").value
    var check = document.getElementById("check").value

    checkusername(username)
    checkgmail(gmail)
    checkpassword(password)
    checkconfirm(password,check)
}

function checkusername(username)
{
    if (username.length > 7)
    {
        document.getElementById('username').classList.replace('error','success')
        document.getElementById('username').classList.add('success')
        document.getElementById('username_error').innerHTML=""
    }
    else
    {
        document.getElementById('username').classList.add('error')
        document.getElementById('username_error').innerText="enter 8 characters"
    }
}

function checkgmail(gmail)
{
    if (gmail.length > 7 && gmail.includes('@gmail.com'))
    {
        document.getElementById('gmail').classList.replace('error','success')
        document.getElementById('gmail').classList.add('success')
        document.getElementById('email_error').innerHTML=""
    }
    else
    {
        document.getElementById('gmail').classList.add('error')
        document.getElementById('email_error').innerText="enter 8 characters and include @gmail.com"
    }
}

function checkpassword(password)
{
    if (password.length > 7 && password.includes('/'))
    {
        document.getElementById('password').classList.replace('error','success')
        document.getElementById('password').classList.add('success')
        document.getElementById('password_error').innerHTML=""
    }
    else
    {
        document.getElementById('password').classList.add('error')
        document.getElementById('password_error').innerText="enter 8 characters and include /"
    }
}

function checkconfirm(password,check)
{
    if (password==check && check!='')
    {
        document.getElementById('check').classList.replace('error','success')
        document.getElementById('check').classList.add('success')
        document.getElementById('check_p').innerHTML=""
    }
    else
    {
        document.getElementById('check').classList.add('error')
        document.getElementById('check_p').innerText="password not matched"
    }
}