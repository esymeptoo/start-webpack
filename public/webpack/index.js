import styles from './components/layer/layer.less';

import Layer from './components/layer/layer';

const App = function () {
    const dom = document.getElementById('page');
    const layer = new Layer();
    dom.innerHTML = layer.tpl({
        name: 'zc'
    })
}

new App();