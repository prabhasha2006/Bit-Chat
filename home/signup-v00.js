//* LOGIN V7
let BOX_NAME = document.getElementsByClassName("box-1")[0]
let BOX_DETAIL = document.getElementsByClassName("box-1")[1]
let BOX_UN_PW = document.getElementsByClassName("box-1")[2]
let BOX_PREVIEW_DATA = document.getElementsByClassName("box-1")[3]

BOX_DETAIL.style.display = "none"
BOX_UN_PW.style.display = "none"
let USERNAME_AVALABLE = false

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
    }
    var pw = document.getElementById('password')
    if(pw.value.length < 6){error_feedback("Password is weak !", "password-tag")}else{
        if(!pw.value.match(/1|2|3|4|5|6|7|8|9/gi)){error_feedback("Password is weak !", "password-tag")}else{
            if(!pw.value.match(/!|@|#|\$|%|&|\*|\(|\)|_|~|\.|,|<|>|:|;|-|\+|=/gi)){error_feedback("Password is weak !", "password-tag")}else{correct_feedback("Password:", "password-tag"); updatepagestate = updatepagestate + 1}
        }
    }
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
    //* username check and their box
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
        display_data()
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

//* Cheking username avalability
let UN_DATA = null
fetch('https://script.google.com/macros/s/AKfycbwsiyudOTAIlXmhxMXlIrjsb9Z1_RsRiX8BxSLFJQiTJW8SBPoIyyl097-pYwPjNAM/exec')
.then(res => res.json())
.then(data => {UN_DATA = data})

function username_checking(){
    var USERNAME = document.getElementById('username').value
    for(let io = 0; io < UN_DATA.content.length; io++){
        if(USERNAME.length > 3){
        if(!USERNAME.match(" ")){
            if(UN_DATA.content[io][0].toUpperCase() === USERNAME.toUpperCase()){
                USERNAME_AVALABLE = false
                document.getElementById("username-tag").style.color = "rgb(255, 0, 0)"
                document.getElementById("username-tag").innerHTML = "<b>"+USERNAME+"</b> is not avalable !"
                document.getElementsByClassName("box-body-footer-next-btn")[2].style.visibility = "hidden"
                return
            }else{
                USERNAME_AVALABLE = true
                document.getElementById("username-tag").style.color = "rgb(0, 255, 0)"
                document.getElementById("username-tag").innerHTML = "<b>"+USERNAME+"</b> is avalable."
                document.getElementsByClassName("box-body-footer-next-btn")[2].style.visibility = "visible"
            }
        }else{document.getElementsByClassName("box-body-footer-next-btn")[2].style.visibility = "hidden"}
        }else{document.getElementsByClassName("box-body-footer-next-btn")[2].style.visibility = "hidden"}
    }
}

//* display data preview
const display_data = () => {
    BOX_PREVIEW_DATA.style.display = "block"
    var pw_chars = 0
    pw_chars = PASSWORD[0] + "●".repeat(PASSWORD.length - 1)
    document.getElementById('name-output-display').innerHTML = FIRST_NAME + " " + LAST_NAME
    document.getElementById('email-output-display').innerHTML = EMAIL
    document.getElementById('phone-output-display').innerHTML = PHONE
    document.getElementById('birthday-output-display').innerHTML = BIRTHDAY
    document.getElementById('gender-output-display').innerHTML = GENDER
    document.getElementById('un-output-display').innerHTML = USERNAME
    document.getElementById('pw-output-display').innerHTML = pw_chars
}
//* submit account
let HIDDEN_FORM = document.getElementById('hidden-data')
const submit_data = (button) => {
    HIDDEN_FORM = document.getElementById('hidden-data')
    document.getElementById('data-full_name').value = FIRST_NAME
    document.getElementById('data-last_name').value = LAST_NAME
    document.getElementById('data-email').value = EMAIL
    document.getElementById('data-phone').value = PHONE
    document.getElementById('data-birthday').value = BIRTHDAY
    document.getElementById('data-gender').value = GENDER
    document.getElementById('data-username').value = USERNAME
    document.getElementById('data-password').value = PASSWORD

    if(USERNAME_AVALABLE){
        var ACCOUNT_DATA = new FormData(HIDDEN_FORM)
        fetch('https://script.google.com/macros/s/AKfycbwsiyudOTAIlXmhxMXlIrjsb9Z1_RsRiX8BxSLFJQiTJW8SBPoIyyl097-pYwPjNAM/exec', {
            method: "POST",
            body: ACCOUNT_DATA
        })
        .then(res => res.text())
        .then(ACCOUNT_DATA => console.log(ACCOUNT_DATA))
    }

    //* button diable
    button.style.display = "none"
}