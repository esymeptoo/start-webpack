import tpl from './layer.jade'

function layer() {
    console.log('>>>');
    return {
        name: 'layer',
        tpl: tpl,
    }
}
export default layer;