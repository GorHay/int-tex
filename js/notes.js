// получаем из нашего файла элементы с class dragItem
const dragItems = document.querySelectorAll('.dragItem');
// получаем из нашего файла элементы с class dropZone
const dropZones = document.querySelectorAll('.dropZone');

dragItems.forEach(dragItem => {
    // добавляем  событию 'dragstart' - происходит когда пользователь начал перетаскивать элемент
    dragItem.addEventListener('dragstart', handlerDragstart);
    // добавляем  событию 'dragend' - происходит когда завершается перетаскивание
    dragItem.addEventListener('dragend', handlerDragend);

    // добавляем  событию 'dragenter' - происходит когда перетаскиваемый элемент попадает в допустимую цель сброса
    dragItem.addEventListener('dragenter', () => {
        if (draggedItem !== droppedItem) {
            droppedItem = dragItem;
        }
    });
    // добавляем  событию 'dragleave' - происходит когда перетаскиваемый элемент покидает допустимую цель сброса.
    dragItem.addEventListener("dragleave", () => {
        droppedItem = null;
    });
});

dropZones.forEach(dropZone => {
    // добавляем  событию 'dragover'
    dropZone.addEventListener('dragover', handlerDragover);
    // добавляем  событию 'drop' - происходит когда элемент сброшен в допустимую зону сброса
    dropZone.addEventListener('drop', handlerDrop);
});

let draggedItem = null; // текуший элемент которую перетаскивает пользователь
let droppedItem = null; // элемент сброшен в допустимую зону сброса

// пользователь начал перетаскивать элемент.
function handlerDragstart(event) {
    /*устанавливает для операции перетаскивания drag data указанные данные и тип.
    Если данные для данного типа не существуют, они добавляются в конце хранилища
    данных перетаскивания, так что последним элементом в types списке будет новый тип.
    Если данные для данного типа уже существуют, существующие данные заменяются в той же позиции.
    То есть порядок typesсписка не изменяется при замене данных одного и того же типа.*/
    event.dataTransfer.setData("dragItem", this.dataset.item);
    this.classList.add(".dragItem:active");
    draggedItem = this;
}

//завершается перетаскивание
function handlerDragend(event) {
    // убираем класс .dragItem:active
    this.classList.remove(".dragItem:active");
    draggedItem = null;
}

/* элемент перетаскивается над допустимой целью сброса 
каждые несколько сотен миллисекунд */
function handlerDragover(event) {
    /*Метод preventDefault () интерфейса Event сообщает 
    User agent, что если событие не обрабатывается явно, 
    его действие по умолчанию не должно выполняться так, как обычно.*/
    event.preventDefault();

}

//элемент сброшен в допустимую зону сброса
function handlerDrop(event) {
    if (droppedItem) {
        if (droppedItem.parentElement === draggedItem.parentElement) {
            const children = Array.from(droppedItem.parentElement.children);
            const draggedIndex = children.indexOf(draggedItem);
            const droppedIndex = children.indexOf(droppedItem);

            if (draggedIndex > droppedIndex) {
                draggedItem.parentElement.insertBefore(draggedItem, droppedItem)
            } else {
                draggedItem.parentElement.insertBefore(draggedItem, droppedItem.nextElementSibling);
            }
        }
        else {
            this.insertBefore(draggedItem,droppedItem);
        }
    } else {
        this.append(draggedItem);
    }
}