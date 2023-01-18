let BOX_NAME = document.getElementsByClassName("box-1")[0]
let BOX_DETAIL = document.getElementsByClassName("box-1")[1]
let BOX_UN_PW = document.getElementsByClassName("box-1")[2]

BOX_DETAIL.style.display = "none"
BOX_UN_PW.style.display = "none"

//* next button
const on_submit_page = (page) => {
    //* scroll top
    document.body.scrollTop = 0
    //* back to home
    if(page === "home"){
        window.open("index.html", "_self")
    }
    //* submit grade
    if(page === "name"){
        get_name_data()
    }
    //* submit detail
    if(page === "detail"){
        get_detail_data()
    }
    //* submit to cloud
    if(page === "acount-unpw"){
        get_unpw_data()
    }
}

//* data variables
let FIRST_NAME = ""
let LAST_NAME = ""
let EMAIL = ""
let PHONE = ""
let BIRTHDAY = ""
let GENDER = ""
let USERNAME = ""
let PASSWORD = ""

//* names
const get_name_data = () => {
    FIRST_NAME = document.getElementById('fname').value
    LAST_NAME = document.getElementById('lname').value
    check_name_data()
}
const check_name_data = () => {
    var updatepagestate = 0
    document.getElementById("myName1").innerHTML = FIRST_NAME + " " + LAST_NAME
    if(!FIRST_NAME.trim()){error_feedback("What is your first name ?", "fname-tag")}else{updatepagestate = updatepagestate + 1}
    if(!LAST_NAME.trim()){error_feedback("What is your last name ?", "lname-tag")}else{updatepagestate = updatepagestate + 1}
    if(updatepagestate == 2){update_page('detail')}
}

//* detail
const get_detail_data = () => {
    EMAIL = document.getElementById('email').value
    PHONE = document.getElementById('phone').value
    BIRTHDAY = document.getElementById('birthday').value
    GENDER = document.getElementById('gender').value
    check_detail_data()
}
const check_detail_data = () => {
    var updatepagestate = 0
    if(!EMAIL.match(/@gmail.com/gi)){error_feedback("What is your email ?", "email-tag")}else{correct_feedback("Email Address:", "email-tag"); updatepagestate = updatepagestate + 1}
    if(!PHONE){error_feedback("What is your phone number ?", "phone-tag")}else{correct_feedback("Phone:", "phone-tag"); updatepagestate = updatepagestate + 1}
    if(!BIRTHDAY){error_feedback("When is your birthday ?", "birthday-tag")}else{correct_feedback("Birthday:", "birthday-tag"); updatepagestate = updatepagestate + 1}
    if(updatepagestate == 3){update_page('acount-unpw')}
}


//* un-pw
const get_unpw_data = () => {
    USERNAME = document.getElementById('username').value
    PASSWORD = document.getElementById('password').value
    check_unpw_data()
}
const check_unpw_data = () => {
    var updatepagestate = 0
    if(!USERNAME){error_feedback("Please enter a username", "username-tag")}else{
        if(USERNAME.match(/ |@|\$|%|\*|\(|\)|!|-|\+|=|,|'|"|\./gi)){error_feedback("Username can't include symbols!", "username-tag")}else{correct_feedback("Username:", "username-tag"); updatepagestate = updatepagestate + 1}
    } var Length = document.getElementById('password')
    if(Length.value.length < 6){error_feedback("Password is weak !", "password-tag")}else{correct_feedback("Password:", "password-tag"); updatepagestate = updatepagestate + 1}
    if(updatepagestate == 2){update_page('prewiew')}
}


//* go to next page
const update_page = (page) => {
    //* back to home
    if(page === "home"){
        window.open("index.html", "_self")
    }
    //* submit grade (second box)
    if(page === "name"){
        BOX_NAME.style.display = "flex"
        BOX_DETAIL.style.display = "none"
        BOX_UN_PW.style.display = "none"
    }
    //* submit detail (third box)
    if(page === "detail"){
        BOX_NAME.style.display = "none"
        BOX_DETAIL.style.display = "flex"
        BOX_UN_PW.style.display = "none"
    }
    //* submit detail (third box)
    if(page === "acount-unpw"){
        BOX_NAME.style.display = "none"
        BOX_DETAIL.style.display = "none"
        BOX_UN_PW.style.display = "flex"
    }
    //* submit detail (third box)
    if(page === "prewiew"){
        BOX_NAME.style.display = "none"
        BOX_DETAIL.style.display = "none"
        BOX_UN_PW.style.display = "none"
    }
}

//* display error
const error_feedback = (error_feedback, tag) => {
    document.getElementById(tag).innerHTML = error_feedback
    document.getElementById(tag).style.color = "rgb(250, 0, 0)"
}
//* display fix-error
const correct_feedback = (error_feedback, tag) => {
    document.getElementById(tag).innerHTML = error_feedback
    document.getElementById(tag).style.color = "rgb(70, 70, 70)"
}