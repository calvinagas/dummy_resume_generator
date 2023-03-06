function update() {
    // console.log('add new working experience filed');

    //header
    let name = document.getElementById('fname').value;
    let realname = document.getElementById('name');
    let email = document.getElementById('femail').value;
    let realemail = document.getElementById('email');
    let phone = document.getElementById('fphone').value;
    let realphone = document.getElementById('phone');
    let address = document.getElementById('faddress').value;
    let realaddress = document.getElementById('address');

    realname.innerHTML = name;
    realemail.innerHTML = email;
    realphone.innerHTML = phone;
    realaddress.innerHTML = address;

    //working experience1 
    let xfjobTitle1 = document.getElementById('fjobTitle1').value;
    let realfjobTitle1 = document.getElementById('jobTitle1');
    let xfjobTitleDetails1 = document.getElementById('fjobTitleDetails1').value;
    let realfjobTitleDetails1 = document.getElementById('jobTitleDetails1');
   
    let xfTitle1date = document.getElementById('fjobTitle1date').value;
    let realfTitle1date = document.getElementById('jobTitle1date');
    let xfjobTitle1bullet1 = document.getElementById('fjobTitle1bullet1').value;
    let realfjobTitle1bullet1 = document.getElementById('jobTitle1bullet1');
    let xfjobTitle1bullet2 = document.getElementById('fjobTitle1bullet2').value;
    let realfjobTitle1bullet2 = document.getElementById('jobTitle1bullet2');
    let xfjobTitle1bullet3 = document.getElementById('fjobTitle1bullet3').value;
    let realfjobTitle1bullet3 = document.getElementById('jobTitle1bullet3');

    realfjobTitle1.innerHTML = xfjobTitle1;
    realfjobTitleDetails1.innerHTML = xfjobTitleDetails1;
    realfTitle1date.innerHTML = xfTitle1date;
    realfjobTitle1bullet1.innerHTML = xfjobTitle1bullet1;
    realfjobTitle1bullet2.innerHTML = xfjobTitle1bullet2;
    realfjobTitle1bullet3.innerHTML = xfjobTitle1bullet3;

    //working experience2 
    let xfjobTitle2 = document.getElementById('fjobTitle2').value;
    let realfjobTitle2 = document.getElementById('jobTitle2');
    let xfjobTitleDetails2 = document.getElementById('fjobTitleDetails2').value;
    let realfjobTitleDetails2 = document.getElementById('jobTitleDetails2');
   
    let xfTitle2date = document.getElementById('fjobTitle2date').value;
    let realfTitle2date = document.getElementById('jobTitle2date');
    let xfjobTitle2bullet1 = document.getElementById('fjobTitle2bullet1').value;
    let realfjobTitle2bullet1 = document.getElementById('jobTitle2bullet1');
    let xfjobTitle2bullet2 = document.getElementById('fjobTitle2bullet2').value;
    let realfjobTitle2bullet2 = document.getElementById('jobTitle2bullet2');

    realfjobTitle2.innerHTML = xfjobTitle2;
    realfjobTitleDetails2.innerHTML = xfjobTitleDetails2;
    realfTitle2date.innerHTML = xfTitle2date;
    realfjobTitle2bullet1.innerHTML = xfjobTitle2bullet1;
    realfjobTitle2bullet2.innerHTML = xfjobTitle2bullet2;

    //working experience3 
    let xfjobTitle3 = document.getElementById('fjobTitle3').value;
    let realfjobTitle3 = document.getElementById('jobTitle3');
    let xfjobTitleDetails3 = document.getElementById('fjobTitleDetails3').value;
    let realfjobTitleDetails3 = document.getElementById('jobTitleDetails3');
   
    let xfTitle3date = document.getElementById('fjobTitle3date').value;
    let realfTitle3date = document.getElementById('jobTitle3date');
    let xfjobTitle3bullet1 = document.getElementById('fjobTitle3bullet1').value;
    let realfjobTitle3bullet1 = document.getElementById('jobTitle3bullet1');
    let xfjobTitle3bullet2 = document.getElementById('fjobTitle3bullet2').value;
    let realfjobTitle3bullet2 = document.getElementById('jobTitle3bullet2');

    realfjobTitle3.innerHTML = xfjobTitle3;
    realfjobTitleDetails3.innerHTML = xfjobTitleDetails3;
    realfTitle3date.innerHTML = xfTitle3date;
    realfjobTitle3bullet1.innerHTML = xfjobTitle3bullet1;
    realfjobTitle3bullet2.innerHTML = xfjobTitle3bullet2;

    //leadership experience1 
    let xfinternTitle1 = document.getElementById('finternTitle1').value;
    let realfinternTitle1 = document.getElementById('internTitle1');
    let xfinternTitleDetails1 = document.getElementById('finternTitleDetails1').value;
    let realfinternTitleDetails1 = document.getElementById('internTitleDetails1');
   
    let xfinternTitle1date = document.getElementById('finternTitle1date').value;
    let realfinternTitle1date = document.getElementById('internTitle1date');
    let xfinternTitle1bullet1 = document.getElementById('finternTitle1bullet1').value;
    let realfinternTitle1bullet1 = document.getElementById('internTitle1bullet1');
    let xfinternTitle1bullet2 = document.getElementById('finternTitle1bullet2').value;
    let realfinternTitle1bullet2 = document.getElementById('internTitle1bullet2');

    realfinternTitle1.innerHTML = xfinternTitle1;
    realfinternTitleDetails1.innerHTML = xfinternTitleDetails1;
    realfinternTitle1date.innerHTML = xfinternTitle1date;
    realfinternTitle1bullet1.innerHTML = xfinternTitle1bullet1;
    realfinternTitle1bullet2.innerHTML = xfinternTitle1bullet2;

    //leadership experience2 
    let xfinternTitle2 = document.getElementById('finternTitle2').value;
    let realfinternTitle2 = document.getElementById('internTitle2');
    let xfinternTitleDetails2 = document.getElementById('finternTitleDetails2').value;
    let realfinternTitleDetails2 = document.getElementById('internTitleDetails2');
   
    let xfinternTitle2date = document.getElementById('finternTitle2date').value;
    let realfinternTitle2date = document.getElementById('internTitle2date');
    let xfinternTitle2bullet1 = document.getElementById('finternTitle2bullet1').value;
    let realfinternTitle2bullet1 = document.getElementById('internTitle2bullet1');
    let xfinternTitle2bullet2 = document.getElementById('finternTitle2bullet2').value;
    let realfinternTitle2bullet2 = document.getElementById('internTitle2bullet2');

    realfinternTitle2.innerHTML = xfinternTitle2;
    realfinternTitleDetails2.innerHTML = xfinternTitleDetails2;
    realfinternTitle2date.innerHTML = xfinternTitle2date;
    realfinternTitle2bullet1.innerHTML = xfinternTitle2bullet1;
    realfinternTitle2bullet2.innerHTML = xfinternTitle2bullet2;

    //education 1
    let xfeduTitle1 = document.getElementById('feduTitle1').value;
    let realfeduTitle1 = document.getElementById('eduTitle1');
    let xfeduTitleDetails1 = document.getElementById('feduTitleDetails1').value;
    let realfeduTitleDetails1 = document.getElementById('eduTitleDetails1');
   
    let xfeduTitle1date = document.getElementById('feduTitle1date').value;
    let realfeduTitle1date = document.getElementById('eduTitle1date');
    let xfeduTitle1bullet1 = document.getElementById('feduTitle1bullet1').value;
    let realfeduTitle1bullet1 = document.getElementById('eduTitle1bullet1');
    let xfeduTitle1bullet2 = document.getElementById('feduTitle1bullet2').value;
    let realfeduTitle1bullet2 = document.getElementById('eduTitle1bullet2');

    realfeduTitle1.innerHTML = xfeduTitle1;
    realfeduTitleDetails1.innerHTML = xfeduTitleDetails1;
    realfeduTitle1date.innerHTML = xfeduTitle1date;
    realfeduTitle1bullet1.innerHTML = xfeduTitle1bullet1;
    realfeduTitle1bullet2.innerHTML = xfeduTitle1bullet2;

    //education 2
    let xfeduTitle2 = document.getElementById('feduTitle2').value;
    let realfeduTitle2 = document.getElementById('eduTitle2');
    let xfeduTitleDetails2 = document.getElementById('feduTitleDetails2').value;
    let realfeduTitleDetails2 = document.getElementById('eduTitleDetails2');
   
    let xfeduTitle2date = document.getElementById('feduTitle2date').value;
    let realfeduTitle2date = document.getElementById('eduTitle2date');
    let xfeduTitle2bullet1 = document.getElementById('feduTitle2bullet1').value;
    let realfeduTitle2bullet1 = document.getElementById('eduTitle2bullet1');
    let xfeduTitle2bullet2 = document.getElementById('feduTitle2bullet2').value;
    let realfeduTitle2bullet2 = document.getElementById('eduTitle2bullet2');

    realfeduTitle2.innerHTML = xfeduTitle2;
    realfeduTitleDetails2.innerHTML = xfeduTitleDetails2;
    realfeduTitle2date.innerHTML = xfeduTitle2date;
    realfeduTitle2bullet1.innerHTML = xfeduTitle2bullet1;
    realfeduTitle2bullet2.innerHTML = xfeduTitle2bullet2;

    //language
    let xflanguageBullet1 = document.getElementById('flanguageBullet1').value;
    let realflanguageBullet1 = document.getElementById('languageBullet1');
    let xflanguageBullet2 = document.getElementById('flanguageBullet2').value;
    let realflanguageBullet2 = document.getElementById('languageBullet2');

    realflanguageBullet1.innerHTML = xflanguageBullet1;
    realflanguageBullet2.innerHTML = xflanguageBullet2;

    //skill
    let xfskillBullet1 = document.getElementById('fskillBullet1').value;
    let realfskillBullet1 = document.getElementById('skillBullet1');
    let xfskillBullet2 = document.getElementById('fskillBullet2').value;
    let realfskillBullet2 = document.getElementById('skillBullet2');
    let xfskillBullet3 = document.getElementById('fskillBullet3').value;
    let realfskillBullet3 = document.getElementById('skillBullet3');
    let xfskillBullet4 = document.getElementById('fskillBullet4').value;
    let realfskillBullet4 = document.getElementById('skillBullet4');
    let xfskillBullet5 = document.getElementById('fskillBullet5').value;
    let realfskillBullet5 = document.getElementById('skillBullet5');
    
    realfskillBullet1.innerHTML = xfskillBullet1;
    realfskillBullet2.innerHTML = xfskillBullet2;
    realfskillBullet3.innerHTML = xfskillBullet3;
    realfskillBullet4.innerHTML = xfskillBullet4;
    realfskillBullet5.innerHTML = xfskillBullet5;
    
    //document.getElementById('form').style.display='none';
    //document.getElementById('template').style.display='block';

}

function refresh() {
    location.reload();
}


function printResume() {
    //document.getElementById('form').hidden = true;
    document.getElementById('template').style.display='block';
    document.getElementById('form').style.display='none';
    window.print();
}