document.addEventListener('DOMContentLoaded', function () {
    const circles = document.querySelectorAll('.step-circle');
    const middlePart = document.querySelector('.middle-part');
    let currentStep = 0;
    const iframe = document.querySelector('iframe'); // iframe 요소 선택
    const body = document.body; // body 요소

    // 페이지 스크롤 이벤트 리스너
    document.querySelectorAll('.scroll-btn').forEach(button => {
        button.addEventListener('click', function () {
            const targetSelector = this.getAttribute('data-target');
            const targetElement = document.querySelector(targetSelector);

            if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY; // 섹션의 절대 위치
                const offset = -20; // 위로 20px 이동
                
                // 부드러운 스크롤
                window.scrollTo({
                    top: targetPosition + offset,
                    behavior: 'smooth'
                });
            } else {
                console.error(`Target not found: ${targetSelector}`);
            }
        });
    });

    // 화면에 middle-part가 화면 상단에 오면 원들을 숨기고, 그 아래에 있으면 원들을 보이게 함
    window.addEventListener('scroll', function () {
        const middlePartTop = middlePart.getBoundingClientRect().top;

        // middle-part의 상단이 화면의 중간보다 위에 있으면 원 숨기기
        if (middlePartTop > window.innerHeight / 2) {
            document.querySelector('.step-indicator').style.visibility = 'hidden';
        } else {
            document.querySelector('.step-indicator').style.visibility = 'visible';
        }

        // 각 section 위치 확인
        const sections = [
            '#Dark_Blue',   // Necessity
            '#None',         // Suburban
            '#dark-gray',    // Urban
            '#Dark_Blue2',   // Challenges (새로운 섹션)
            '#System',       // System
        ];

        sections.forEach((section, index) => {
            const sectionElement = document.querySelector(section);
            if (sectionElement) {
                const sectionTop = sectionElement.getBoundingClientRect().top;

                // 현재 스크롤 위치에 따라 원 색상을 변경
                if (sectionTop <= window.innerHeight / 2 && currentStep < index + 1) {
                    if (currentStep < circles.length) {
                        circles[currentStep].classList.remove('filled');
                    }
                    currentStep = index + 1;
                    if (currentStep < circles.length) {
                        circles[currentStep].classList.add('filled');
                    }
                }

                // 스크롤을 위로 올렸을 때 원 색상 반대로 바뀌도록
                if (sectionTop > window.innerHeight / 2 && currentStep > index) {
                    if (currentStep < circles.length) {
                        circles[currentStep].classList.remove('filled');
                    }
                    currentStep = index;
                    if (currentStep >= 0) {
                        circles[currentStep].classList.add('filled');
                    }
                }

                // 'Suburban' 섹션에 도달했을 때 부모 스크롤을 막음
                const scrollTriggerHeight = window.innerHeight * 0.1; // 화면 높이의 20%

                if (section === '#None' && sectionTop <= scrollTriggerHeight && sectionTop >= 0) {
                    body.style.overflow = 'hidden'; // 부모 페이지 스크롤 비활성화
                    lockIframeScroll(); // iframe 스크롤이 끝날 때까지 부모 스크롤 막음
                } else if (section === '#None' && (sectionTop > scrollTriggerHeight || sectionTop < 0)) {
                    body.style.overflow = ''; // 부모 페이지 스크롤 활성화
                }
            }
        });

        // 첫 번째 원이 제대로 채워지도록 처리
        const firstSection = document.querySelector('h5:nth-of-type(1)');
        if (firstSection) {
            const firstSectionTop = firstSection.getBoundingClientRect().top;
            if (firstSectionTop <= window.innerHeight / 2 && currentStep === 0) {
                circles[0].classList.add('filled'); // 첫 번째 원 채우기
                currentStep = 1;
            }
        }
    });

    // iframe 스크롤 끝났을 때 부모 스크롤 복원
    function lockIframeScroll() {
        iframe.contentWindow.addEventListener('wheel', function (event) {
            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            const iframeHeight = iframeDoc.documentElement.scrollHeight;
            const iframeScrollTop = iframe.contentWindow.scrollY;
            const iframeClientHeight = iframe.contentWindow.innerHeight;

            // iframe의 스크롤이 맨 위일 때, 위로 스크롤하면 부모 스크롤 복원
            if (iframeScrollTop === 0 && event.deltaY < 0) {
                body.style.overflow = ''; // 부모 스크롤 복원
            }

            // iframe의 스크롤이 맨 아래일 때, 아래로 스크롤하면 부모 스크롤 복원
            if (iframeScrollTop + iframeClientHeight >= iframeHeight && event.deltaY > 0) {
                body.style.overflow = ''; // 부모 스크롤 복원
            }

            // 부모 페이지 스크롤 방지
            event.preventDefault(); // 부모 페이지 스크롤 이벤트 차단
        });
    }
});



function scrollToSection() {
    const targetSection = document.getElementById("Dark_Blue");
    targetSection.scrollIntoView({ behavior: "smooth" });
}
function toggleDescription(id) {
    const methodDescription = document.getElementById('method');
    const designDescription = document.getElementById('design');

    const methodBtn = document.querySelector(".toggle-btn-method");
    const designBtn = document.querySelector(".toggle-btn-design");

    if (id === 'method') {
        if (methodDescription.style.display === "none" || methodDescription.style.display === "") {
            methodDescription.style.display = "block";  // 내용이 보이도록 설정
            methodBtn.textContent = "-";  // 버튼을 '-'로 변경
            if (designDescription.style.display === "block") {
                designDescription.style.display = "none";  // 다른 설명이 보이면 접기
                designBtn.textContent = "+";  // 버튼을 '+'로 변경
            }
        } else {
            methodDescription.style.display = "none";  // 내용이 숨겨지도록 설정
            methodBtn.textContent = "+";  // 버튼을 '+'로 변경
        }
    } else if (id === 'design') {
        if (designDescription.style.display === "none" || designDescription.style.display === "") {
            designDescription.style.display = "block";  // 내용이 보이도록 설정
            designBtn.textContent = "-";  // 버튼을 '-'로 변경
            if (methodDescription.style.display === "block") {
                methodDescription.style.display = "none";  // 다른 설명이 보이면 접기
                methodBtn.textContent = "+";  // 버튼을 '+'로 변경
            }
        } else {
            designDescription.style.display = "none";  // 내용이 숨겨지도록 설정
            designBtn.textContent = "+";  // 버튼을 '+'로 변경
        }
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const iframe = document.querySelector('iframe');
    const body = document.body;

    // iframe 안의 스크롤 활성화 감지
    iframe.addEventListener('mouseenter', function () {
        // 부모 페이지 스크롤 잠금
        body.style.overflow = 'hidden';

        // iframe 내부에 메시지 전달
        iframe.contentWindow.postMessage({ type: 'lockParentScroll' }, '*');
    });

    iframe.addEventListener('mouseleave', function () {
        // iframe 스크롤 종료 시 부모 페이지 스크롤 복원
        body.style.overflow = '';
    });

    // iframe에서 스크롤 완료 메시지 수신
    window.addEventListener('message', function (event) {
        if (event.data.type === 'unlockParentScroll') {
            body.style.overflow = '';
        }
    });
});

document.getElementById('toggle-button').addEventListener('click', function () {
    const content = document.getElementById('content');
    const button = this;

    if (content.classList.contains('hidden-content')) {
        content.classList.remove('hidden-content');
        content.classList.add('visible-content');
        button.textContent = '-'; // +를 -로 변경
    } else {
        content.classList.remove('visible-content');
        content.classList.add('hidden-content');
        button.textContent = '+'; // -를 +로 변경
    }
});