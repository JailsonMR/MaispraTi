import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [showOnlyPending, setShowOnlyPending] = useState(false);

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks, 
        { 
          id: Date.now(), 
          text: newTask, 
          completed: false 
        }
      ]);
      setNewTask('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = showOnlyPending 
    ? tasks.filter(task => !task.completed) 
    : tasks;

  return (
    <div className="todo-list">
      <h2>Lista de Tarefas</h2>
      <div className="task-input">
        <input 
          type="text" 
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nova tarefa"
        />
        <button onClick={addTask}>Adicionar</button>
      </div>
      <div className="task-filter">
        <label>
          <input 
            type="checkbox" 
            checked={showOnlyPending}
            onChange={() => setShowOnlyPending(!showOnlyPending)}
          />
          Mostrar apenas pendentes
        </label>
      </div>
      <ul>
        {filteredTasks.map(task => (
          <li 
            key={task.id} 
            style={{ 
              textDecoration: task.completed ? 'line-through' : 'none',
              color: task.completed ? 'gray' : 'black'
            }}
          >
            <input 
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            {task.text}
            <button onClick={() => removeTask(task.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;