document.addEventListener('DOMContentLoaded', function () {
  const darkModeToggle = document.getElementById('darkModeToggle'); // 토글 버튼 선택
  const moonIcon = document.querySelector('.fa-moon'); // 달 아이콘 선택
  const sunIcon = document.querySelector('.fa-sun'); // 해 아이콘 선택

  // 로컬 스토리지에서 다크 모드 설정을 불러와 적용
  function applyInitialTheme() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    document.body.classList.toggle('dark-mode', isDarkMode);
    darkModeToggle.checked = isDarkMode;
    // 다크 모드 상태에 따라 아이콘의 opacity 조정
    moonIcon.style.opacity = isDarkMode ? "1" : "0";
    sunIcon.style.opacity = isDarkMode ? "0" : "1";
  }

  // 다크 모드 상태를 토글하고 로컬 스토리지에 저장
  function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    // 다크 모드가 활성화되면 달 아이콘을 보이게, 해 아이콘을 숨김
    moonIcon.style.opacity = isDarkMode ? "1" : "0";
    sunIcon.style.opacity = isDarkMode ? "0" : "1";
  }

  // 페이지 로드 시 초기 다크 모드 설정 적용
  applyInitialTheme();

  // 토글 버튼에 클릭 이벤트 리스너 추가
  darkModeToggle.addEventListener('change', toggleDarkMode);
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
  });
});



document.querySelectorAll('input[name="level"]').forEach((input) => {
  input.addEventListener('change', function () {
    document.querySelectorAll('.level_label').forEach((label) => {
      label.classList.remove('active');
    });
    document.querySelector(`label[for="${this.id}"]`).classList.add('active');
  });
});

$(document).ready(function () {
  $('.level_label').click(function () {
    $('.level_label').removeClass('active').css({ 'background-color': '', 'color': '' });
    $(this).addClass('active').css({ 'background-color': 'brown', 'color': 'white' });
  });
});


$('.guide_new').click(function() {
  $('.guide_box').stop().hide(200, function() {
    $('.new_box').stop().show(200, function() {
    })
  })
})

$('.guide_luv').click(function() {
  $('.guide_box').stop().hide(200, function() {
    $('.luv_box').stop().show(200, function() {
    })
  })
})
$('.guide_life').click(function() {
  $('.guide_box').stop().hide(200, function() {
    $('.life_box').stop().show(200, function() {
    })
  })
})
$('.guide_mania').click(function() {
  $('.guide_box').stop().hide(200, function() {
    $('.mania_box').stop().show(200, function() {
    })
  })
})

$('.return').click(function() {
  $('.guide_tag').stop().hide(200, function() {
    $('.guide_box').stop().show(200)
  })
})



document.addEventListener('DOMContentLoaded', function() {
  const beanRadio = document.getElementById('bean');
  const grinderRadio = document.getElementById('grinder');
  const dripperRadio = document.getElementById('dripper');
  const introduceRadio = document.getElementById('introduce');

  const listBoxA = document.querySelector('.list_box.A');
  const listBoxB = document.querySelector('.list_box.B');
  const listBoxC = document.querySelector('.list_box.C');
  const listBoxD = document.querySelector('.list_box.D');

  beanRadio.addEventListener('change', function() {
    listBoxA.style.display = 'flex';
    listBoxB.style.display = 'none';
    listBoxC.style.display = 'none';
    listBoxD.style.display = 'none';
  });
  grinderRadio.addEventListener('change', function() {
    listBoxA.style.display = 'none';
    listBoxB.style.display = 'flex';
    listBoxC.style.display = 'none';
    listBoxD.style.display = 'none';
  });
  dripperRadio.addEventListener('change', function() {
    listBoxA.style.display = 'none';
    listBoxB.style.display = 'none';
    listBoxC.style.display = 'flex';
    listBoxD.style.display = 'none';
  });
  introduceRadio.addEventListener('change', function() {
    listBoxA.style.display = 'none';
    listBoxB.style.display = 'none';
    listBoxC.style.display = 'none';
    listBoxD.style.display = 'flex';
  })
})