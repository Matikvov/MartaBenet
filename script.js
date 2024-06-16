document.getElementById("more").addEventListener('click', function() {
    var element = document.getElementsByClassName("moreinfo");
    for (var i = 0; i < element.length; i++) {  
        if(element[i].style.display === 'block') {
            element[i].style.display = 'none';
        } else {
            element[i].style.display = 'block';
        }
    }
});

document.getElementById("contact-me").addEventListener('click', function() {
    var element = document.getElementsByClassName("moreinf");
    for (var i = 0; i < element.length; i++) {  
        if(element[i].style.display === 'block') {
            element[i].style.display = 'none';
        } else {
            element[i].style.display = 'block';
        }
    }
});

document.getElementById("contact-me").addEventListener('click', function() {
    var element = document.getElementById("moreinf");
        if(element.style.display === 'block') {
            element.style.display = 'none';
        } else {
            element.style.display = 'block';
        }
});


document.getElementById("moreinf1").addEventListener('click', function() {
    alert('Подзвонити по цьому номеру?')
});

document.getElementById("moreinfo5").addEventListener('click', function() {
    alert('Перейти по цій адресі?')
});

document.getElementById('next').addEventListener('click', function() {
    var section2 = document.getElementById('selection2');
    var section1 = document.getElementById('selection1')
    if (section2.style.display === 'none') {
        section2.style.display = 'flex';
        section1.style.display = 'none';
    } else {
        section2.style.display = 'flex';
        section1.style.display = 'none';
    }
});

document.getElementById('prev').addEventListener('click', function() {
    var section2 = document.getElementById('selection2');
    var section1 = document.getElementById('selection1')
    if (section1.style.display === 'none') {
        section1.style.display = 'flex';
        section2.style.display = 'none';
    } else {
        section1.style.display = 'flex';
        section2.style.display = 'none';
    }
});