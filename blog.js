(function(window, document){
    'use strict';
    // class
    const $toggles = document.querySelectorAll('.toggle'); // NodeList
    const $toggleBtn = document.getElementsByClassName('toggle-btn');

    // toggle btn click
    for(var i =0; i< $toggleBtn.length; i ++){
        $toggleBtn[i].addEventListener('click', function(){
            toggleElements();
        })
    }

    window.addEventListener('resize', function() {
        console.log('Resized');
        if(window.innerWidth > 1024){
            offElements();
        }
    });


    function toggleElements(){
        console.log('click');
        [].forEach.call($toggles, function (toggle) {
            // sidebar 이라는 클래스를 가진 요소에다가 on 을 추가해주겠다.
            toggle.classList.toggle('on');
        });
    }

    function offElements(){
        [].forEach.call($toggles, function(toggle){
            toggle.classList.remove('on');
        })
    }
})(window, document)