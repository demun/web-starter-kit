// 이것은 간단한 export 의 예입니다.
//
// 이 파일에서 자신의 함수를 제거하거나 추가 할 수 있습니다.
/* eslint-disable */

const dotsEffect = () => {
    const createCells = () => {
        const width = 10;
        const height = 10;
        const size = width * height;
        let html = '<div class="entry-cells">';

        for (let i = 0; i < size; i += 1) {
            html += `<div class="cell cell-${i}"></div>`;
        }

        html += '</div>';

        return html;
    };

    const init = () => {
        const $cnt = $('#home-canvas');
        const cells = createCells();
        $cnt.html(cells);
    };

    return {
        init,
    };
};

export default dotsEffect();
