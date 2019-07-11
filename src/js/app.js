/* eslint-disable */
//  이 파일에 호출을 작성하고 함수를 가져올 수 있습니다.
// 이 파일은 app.js로 컴파일되며 축소되지 않습니다.
// 여기에서 ES6을 사용해보십시오.



// import dotsEffect from './modules/dots';
import checkBox from './modules/checkbox';
import dropDown from './modules/dropdown';
import exampleJs from './modules/ex';

(($) => {

    // When DOM is ready
    $(() => {

        // dotsEffect.init();
        checkBox.init();
        dropDown.init();
        exampleJs.init();

    });

})(jQuery);
