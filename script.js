const taskInput = document.querySelector('#taskInput');
const addButton = document.querySelector('#addButton');
const taskList = document.querySelector('#taskList');

addButton.addEventListener('click', function () {
    const taskText = taskInput.value.trim();    //.trim() 避免儲存或處理一堆開頭或結尾有空白的資料

    if (taskText) {
        const taskItem = document.createElement('li')
        taskItem.textContent = taskText;

        // taskItem.style.opacity = '0';
        // setTimeout(function () {
        //     taskItem.style.opacity = '1';
        // }, 10);
        // requestAnimationFrame(function(){ 
        //     taskItem.style.opacity = '1';
        // }); //這個也可以，但動畫更流暢配合螢幕刷新率、效能更好、資源更省

        taskItem.addEventListener('click', function () {
            taskItem.classList.toggle('finish');
        });

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = `
    <span class="delete-text">刪除</span>
    <i class="fa-solid fa-trash delete-icon"></i>`;

        deleteButton.addEventListener('click', function () {
                taskItem.remove();
        });

        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);

        taskInput.value = '';
    }
});