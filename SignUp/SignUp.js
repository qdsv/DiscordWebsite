const regexMail = /^([a-z]+\d*)+(\.?\w+)+@\w+(\.\w{2,3})+$/;
const regexId = /^\w{8,20}$/;
const regexPw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
const regexYear = /^(19[0-9][0-9]|20\d{2})$/;
const regexMon = /^(0[1-9]|1[0-2])$/;
const regexDay = /^(0[1-9]|[1-2][0-9]|3[0-1])$/;


//메일
let isMail = false;
let mailCheck = document.querySelector('.email_input_check');

email_txt.addEventListener('keyup', function(e){
  let val = document.querySelector('#email_txt').value;

  if(regexMail.test(val)){
    isMail = true;
    mailCheck.innerHTML = "사용가능";
    mailCheck.style.color = "green";
  }else{
    isMail = false;
    mailCheck.innerHTML = "사용 불가능";
    mailCheck.style.color = "red";
  }
  isOk();
})

//사용자명
let isId = false;
let idCheck = document.querySelector('.id_input_check');

id_txt.addEventListener('keyup', function(e){
  let val = document.querySelector('#id_txt').value;

  if(regexId.test(val)){
    isId = true;
    idCheck.innerHTML = "사용가능";
    idCheck.style.color = "green";
  }else{
    isId = false;
    idCheck.innerHTML = "사용 불가능";
    idCheck.style.color = "red";
  }
  isOk();
})

//비번
let isPw = false;
let pwCheck = document.querySelector('.pw_input_check');

pw_txt.addEventListener('keyup', function(e){
  let val = document.querySelector('#pw_txt').value;

  if(regexPw.test(val)){
    isPw = true;
    pwCheck.innerHTML = "사용가능";
    pwCheck.style.color = "green";
  }else{
    isPw = false;
    pwCheck.innerHTML = "사용 불가능";
    pwCheck.style.color = "red";
  }
  isOk();
})

//년
let isYear = false;
let yearCheck = document.querySelector('.year_input_check');

year_txt.addEventListener('keyup', function(e){
  let val = document.querySelector('#year_txt').value;

  if(regexYear.test(val)){
    isYear = true;
    yearCheck.innerHTML = "확인";
    yearCheck.style.color = "green";
  }else{
    isYear = false;
    yearCheck.innerHTML = "다시 입력해주세요";
    yearCheck.style.color = "red";
  }
  isOk();
})

//월
let isMon = false;
let monCheck = document.querySelector('.mon_input_check');

mon_txt.addEventListener('keyup', function(e){
  let val = document.querySelector('#mon_txt').value;

  if(regexMon.test(val)){
    isMon = true;
    monCheck.innerHTML = "확인";
    monCheck.style.color = "green";
  }else{
    isMon = false;
    monCheck.innerHTML = "다시 입력해주세요";
    monCheck.style.color = "red";
  }
  isOk();
})

//일
let isDay = false;
let dayCheck = document.querySelector('.day_input_check');

day_txt.addEventListener('keyup', function(e){
  let val = document.querySelector('#day_txt').value;

  if(regexDay.test(val)){
    isDay = true;
    dayCheck.innerHTML = "확인";
    dayCheck.style.color = "green";
  }else{
    isDay = false;
    dayCheck.innerHTML = "다시 입력해주세요";
    dayCheck.style.color = "red";
  }
  isOk();
})

function isOk(){
  if (isMail && isId && isPw && isYear && isMon && isDay){
    document.querySelector('.reg_sign_btn').style.background = "pink";
  }
}

