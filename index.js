const model = [
    {type: 'title', value: 'Тест шаблон' },
    {type: 'text', value: 'here we go with some text' },
    {type: 'colums', value: [
        '11111111111',
        '22222222222',
        '33333333333'
    ] }
]

const $site = document.querySelector(selectors:'#site')

model.forEach(block =>) {
    console.log(block)

})