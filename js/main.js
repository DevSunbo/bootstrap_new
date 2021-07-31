(function (window, document){
    const $toggles = document.querySelectorAll('.toggle'); // Return NodeList
    const $toggleBtn = document.getElementById('toggle-btn')

    $toggleBtn.addEventListener('click', function (){
        toggleElements();
    });

    window.addEventListener('resize', function (){
        if(window.innerWidth > 768){
            offElements();
        }
    });

    function toggleElements(){
        [].forEach.call($toggles, function (toggle){
            toggle.classList.toggle('on');
        });
    }

    function offElements(){
        [].forEach.call(($toggles, function (toggle){
            toggle.classList.remove('on')
        }))
    }
})(window, document);

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    let scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치
    if(scrollLocation < 80){
        header.style.position = 'relative';
        header.style.backgroundColor = '#6f5499';
    }
    else{
        header.style.position = 'fixed';
        header.style.backgroundColor = '#fff';
    }
})