const pino = require('pino')

const transport = pino.transport({
    targets: [
        {
            target: 'pino/file',
            options: {destination: './app.log'}
        },
        {target: 'pino/file'},
    ]
})

module.exports = pino(transport)