'use strict';

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: true}))

let platforms = [
    {
        text: 'Facebook',
        url: 'https://facebook.com'
    },
    {
        text: 'Twitter',
        url: 'https://twitter.com'
    }
]

app.post('/', (req, res) => {

    console.log('request!')
    console.log(req.body)

    let messageResponse = {
        text: '*Share this:* \n\n' + req.body.text,
        attachments: [
            {
                fallback: 'Share on social media',
                actions: [
                    {
                        type: 'button',
                        text: 'Facebook',
                        url: 'https://facebook.com'
                    },
                    {
                        type: 'button',
                        text: 'Twitter',
                        url: 'https://twitter.com'
                    }
                ]
            }
        ]
    }

    res.json(messageResponse)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
