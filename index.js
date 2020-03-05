import fetch from './fetch.js'

function _pandora(cfgId) {
    if (!cfgId) { return }
    let t = new Date().getTime()
    let param = { t, cfgId }
    return new Promise((resolve, reject) => {
        fetch(param)
            .then((res) => {
                let config = res.topic && res.topic.config
                let _config = decodeConfig(config)
                let pluginConfig = _config.pages[0].items[0].pluginConfig
                resolve(pluginConfig.pandora)
            }).catch((err) => {
                reject(err)
            })
    })
}

_pandora.test = 'test'

export default _pandora