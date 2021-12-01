(function(window, document){
    'use strict';

    // class
    const $toggles = document.querySelectorAll('.toggle'); // NodeList
    // id
    const $toggleBtn = document.getElementById('toggle-btn');

    $toggleBtn.addEventListener('click', function() {
        toggleElements();
    });

    function toggleElements(){
        [].forEach.call($toggles, function (toggle) {
            // toggle 이라는 클래스를 가진 요소에다가 on 을 추가해주겠다.
            toggle.classList.toggle('on');
        });
    }
})(window, document)