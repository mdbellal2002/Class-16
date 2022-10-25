/*===============================================
                counter up 
================================================*/

$('.counter').counterUp({
    delay: 10,
    time: 1000,
});


/*===============================================
                counter down 
================================================*/

var countDownDate = new Date("Jan 26, 2023 24::00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("din").innerHTML = days + "D ";
  document.getElementById("gonta").innerHTML = hours + "H";
  document.getElementById("minute").innerHTML =  minutes + "M ";
  document.getElementById("second").innerHTML = seconds + "S ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("counterdown").innerHTML = "HAPPY BIRTHDAY TO YOU MD BELLAL";
  }
}, 1000);



/*===============================================
                typed js 
================================================*/

var typed = new Typed('.element', {
    strings: [
        'Early life:    Mizanur Rahman was born in a Muslim family on January 26, 1991 in Demra, Dhaka, Bangladesh. His father  is a Madrasa teacher and his mother is a housewife.',

        'Early education:    In 2004, Mizanur Rahman Azhari passed the Dakhil exam with GPA-5, and in 2006, he passed Alim with golden GPA-5 Galen GPA-5 and placed merit top 5 in Bangladesh.',

        'Ranked student:    Mizanur Rahman Azhari was the 1st-ranked student among thousands of Qoami and Alia Madrasah students in the Egyptian government’s scholarship exam organized by the Islamic Foundation in 2007. He went to Egypt to graduate from Al Azhar University in Egypt.',

        'CGPA:    From Al Azhar University, he passed the Honors with 90% CGPA from the Department of Tafseer & Quranic Science in 2012.',

        'PhD:    After 5 years of education in Egyp, he graduated from Malaysia International Islamic University with a bachelor’s degree and an M.Phil and a PhD.',

        'IELTS:    He also participated in the IELTS test, scored a score of 4.1 out of 5 and a score of 4.1 in the speaking section.',



    ],
    typeSpeed: 50,
    startDelay: 0,
    backSpeed: 30,
    backDelay: 700,
    fadeOut: false,
    fadeOutDelay: 500,
    loop: true,
    showCursor: false,
    cursorChar: '|',
  });