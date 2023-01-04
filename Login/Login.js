//정규식 조건
const regexTM = /^([a-z]+\d*)+(\.?\w+)+@\w+(\.\w{2,3})+$/;
const regexTel = /^\d{2,3}-\d{3,4}-\d{4}$/;
const regexPw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

//전화번호,메일 입력
let isTM = false;
let isTel = false;

//유효성 검사
let TMCheck = document.querySelector('.email_input_check');

email_txt.addEventListener('keyup', function(e){
  let val = document.querySelector('#email_txt').value;

//유효성 체크
if ((regexTM.test(val)) || (regexTel.test(val))){
  isTel = true;
  isTM = true;
  TMCheck.innerHTML = "확인";
  TMCheck.style.color = "green";
}else{
  isTel = false;
  isTM = false;
  TMCheck.innerHTML = "다시 입력해주세요";
  TMCheck.style.color = "red";
}
isOk();
});

//비밀번호
let isPw = false;

let PwCheck = document.querySelector('.pw_input_check');

pw_txt.addEventListener('keyup', function(e){
  let val = document.querySelector('#pw_txt').value;

  //유효성 체크
  if (regexPw.test(val)){
    isPw = true;
    PwCheck.innerHTML = "확인"
    PwCheck.style.color = "green"
  }else{
    isPw = false;
    PwCheck.innerHTML = "다시 입력해주세요";
    PwCheck.style.color = "red";
  }
  isOk();
});

function isOk(){
  if(isPw && isTM){
    document.querySelector('.reg_log_btn').style.background = "pink";
  }
}
