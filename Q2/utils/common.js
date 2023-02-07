
const commoncontoller = {

    GetLastURL(url) {
        return url.split('/')[url.split('/').length - 1].toLowerCase()
    },

    CheckIfModuleIsPresentOrNot(module) {
        let present = ['company', 'item', 'customer']
        let modal = ''
        present.indexOf(module) !== -1 ? modal = require(`../models/${module}`) : ''
        return modal
    },
    CheckIfParametersVaildOrNot(modal, inputs) {
        let result = 'valid'
        let col_name = []
        for (let key in modal.rawAttributes) {
            col_name.push(key)
            //modal.rawAttributes[key].type.key;
        }
        inputs.map(param => {
            col_name.indexOf(param) !== -1 ? '' : result = 'Not valid'
        })
        return result
    }
}

module.exports = commoncontoller