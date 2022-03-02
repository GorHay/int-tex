// получаем из нашего файла элемент с class collapsible 
let block = document.querySelector('.collapsible')
// возвращает коллекцию элементов с указанными именами классов
let coll = document.getElementsByClassName("collapsible");
for (let i = 0; i < coll.length; i++) {
    // события клика
    coll[i].addEventListener('click', function() {
        //добавляет/убирает класс 'active'
        this.classList.toggle('active');
        // возвращает последующий элемент перед текущим
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            block.style.backgroundColor = '#cccccc';
            block.style.width = '';
            block.style.borderRadius = '6px';
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
            block.style.backgroundColor = '#ababab';
            block.style.width = '100%';
            block.style.borderBottomLeftRadius = '0';
            block.style.borderBottomRightRadius = '0';
        }
    })
}

console.log(block);
console.log(coll);


