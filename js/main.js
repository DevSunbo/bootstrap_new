(function (window, document) {
    const $toggles = document.querySelectorAll('.toggle'); // Return NodeList
    const $toggleBtn = document.getElementById('toggle-btn')

    $toggleBtn.addEventListener('click', function () {
        toggleElements();
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            offElements();
        }
    });

    function toggleElements() {
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.toggle('on');
        });
    }

    function offElements() {
        [].forEach.call(($toggles, function (toggle) {
            toggle.classList.remove('on')
        }))
    }
})(window, document);

const header = document.querySelector('.header');
const scrollLoc = document.querySelector('.scrollLoc');

window.addEventListener('scroll', () => {
    let scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치
    /* if(scrollLocation < 80){
         header.style.position = 'relative';
         header.style.backgroundColor = '#6f5499';
     }
     else{
         header.style.position = 'fixed';
         header.style.backgroundColor = '#fff';
     }*/
    let screenWid = screen.width;
    let screenHgt = screen.height;

    let heightRatio = (scrollLocation / screenHgt) * 100;
    let currentWid = (heightRatio / 100) * screenWid;
    /*    console.log('heightRatio ', heightRatio);
        console.log('currentWid ', currentWid);*/
    scrollLoc.style.width = `currentWid`;
    scrollLoc.style.border = '1px solid red';

})


const imgs = document.querySelectorAll('.izone')
console.log(imgs);

(function (window, document, undefined) {
    const imgLeft = document.querySelector('.img-left');
    const imgRight = document.querySelector('.img-right');
    const img_slide = document.querySelector('.image-slide');
    const imgs = document.querySelectorAll('.izone')
    let count = 0;
    imgLeft.addEventListener('click', async function  () {
        if (count === 0) {
            count = 3;
        } else {
            count--;
        }
        await makeNone(imgs);
        await makeRelav(imgs, count);
        // imgs[count].style.display = 'relative';


    });
    imgRight.addEventListener('click', async function () {
       /* const slider = new Promise(
            function (resolve, reject) {
                if (count === 3) {
                    count = 0;
                } else {
                    count++;
                }
            }
        );*/
        if (count === 3) {
            count = 0;
        } else {
            count++;
        }
        await makeNone(imgs);
        await makeRelav(imgs, count);

    })
})(window, document);

//todo: 비디오 링크 삽입
function makeNone (imgs) {
    imgs.forEach(v => {
        v.style.display = 'none';
    })
    return imgs;
}
function makeRelav (imgs, count){
    imgs[count].style.display = 'block';
}
