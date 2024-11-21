class TodoApp {
    constructor() {
        this.taskInput = document.getElementById('taskInput');
        this.addTaskBtn = document.getElementById('addTaskBtn');
        this.taskList = document.getElementById('taskList');
        
        this.addTaskBtn.addEventListener('click', () => this.addTask());
        this.taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTask();
        });

        this.loadTasks();
    }

    addTask() {
        const taskText = this.taskInput.value.trim();
        if (taskText === '') return;

        const task = {
            id: Date.now(),
            text: taskText,
            completed: false
        };

        this.renderTask(task);
        this.saveTasks();
        this.taskInput.value = '';
    }

    renderTask(task) {
        const li = document.createElement('li');
        li.dataset.id = task.id;
        li.className = `flex items-center justify-between p-2 border rounded ${task.completed ? 'bg-green-50 line-through' : ''}`;
        
        li.innerHTML = `
            <span class="flex-grow">${task.text}</span>
            <div>
                <button class="complete-btn mr-2 text-green-500 hover:text-green-700">
                    <i class="ri-check-line"></i>
                </button>
                <button class="edit-btn mr-2 text-blue-500 hover:text-blue-700">
                    <i class="ri-edit-line"></i>
                </button>
                <button class="delete-btn text-red-500 hover:text-red-700">
                    <i class="ri-delete-bin-line"></i>
                </button>
            </div>
        `;

        li.querySelector('.complete-btn').addEventListener('click', () => this.toggleComplete(task.id));
        li.querySelector('.edit-btn').addEventListener('click', () => this.editTask(task.id));
        li.querySelector('.delete-btn').addEventListener('click', () => this.deleteTask(task.id));

        this.taskList.appendChild(li);
    }

    toggleComplete(id) {
        const taskElement = this.taskList.querySelector(`[data-id="${id}"]`);
        taskElement.classList.toggle('line-through');
        taskElement.classList.toggle('bg-green-50');

        const tasks = this.getTasks();
        const taskIndex = tasks.findIndex(t => t.id === id);
        tasks[taskIndex].completed = !tasks[taskIndex].completed;
        
        this.saveTasks(tasks);
    }

    editTask(id) {
        const taskElement = this.taskList.querySelector(`[data-id="${id}"]`);
        const currentText = taskElement.querySelector('span').textContent;
        const newText = prompt('Editar tarefa:', currentText);

        if (newText !== null && newText.trim() !== '') {
            taskElement.querySelector('span').textContent = newText;
            
            const tasks = this.getTasks();
            const taskIndex = tasks.findIndex(t => t.id === id);
            tasks[taskIndex].text = newText;
            
            this.saveTasks(tasks);
        }
    }

    deleteTask(id) {
        const taskElement = this.taskList.querySelector(`[data-id="${id}"]`);
        taskElement.remove();

        const tasks = this.getTasks().filter(t => t.id !== id);
        this.saveTasks(tasks);
    }

    saveTasks(tasks = null) {
        const tasksToSave = tasks || Array.from(this.taskList.children).map(li => ({
            id: parseInt(li.dataset.id),
            text: li.querySelector('span').textContent,
            completed: li.classList.contains('line-through')
        }));

        localStorage.setItem('tasks', JSON.stringify(tasksToSave));
    }

    getTasks() {
        return JSON.parse(localStorage.getItem('tasks') || '[]');
    }

    loadTasks() {
        const tasks = this.getTasks();
        tasks.forEach(task => this.renderTask(task));
    }
}

// Inicializar o aplicativo
document.addEventListener('DOMContentLoaded', () => new TodoApp());