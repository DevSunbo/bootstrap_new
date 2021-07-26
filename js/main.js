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