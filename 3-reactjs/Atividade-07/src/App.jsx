import React, { useState } from 'react';
import Counter from './components/Counter';
import BackgroundColorChanger from './components/BackgroundColorChanger';
import TodoList from './components/TodoList';
import Timer from './components/Timer';
import ListFilter from './components/ListFilter';
import RegistrationForm from './components/RegistrationForm';
import PostList from './components/PostList';
import ImageGallery from './components/ImageGallery';
import CountdownTimer from './components/CountdownTimer';
import TabNavigator from './components/TabNavigator';

function App() {
  const [activeComponent, setActiveComponent] = useState(null);

  const components = [
    { name: 'Contador Simples', component: Counter },
    { name: 'Alteração de Cor de Fundo', component: BackgroundColorChanger },
    { name: 'Lista de Tarefas', component: TodoList },
    { name: 'Temporizador', component: Timer },
    { name: 'Filtro de Lista', component: ListFilter },
    { name: 'Formulário de Registro', component: RegistrationForm },
    { name: 'Requisição de Dados', component: PostList },
    { name: 'Galeria de Imagens', component: ImageGallery },
    { name: 'Timer com Intervalo', component: CountdownTimer },
    { name: 'Navegação por Tabs', component: TabNavigator }
  ];

  const renderComponent = () => {
    if (!activeComponent) return null;
    const Component = activeComponent.component;
    return <Component />;
  };

  return (
    <div className="app">
      <h1>Atividade 07 - Projeto em React(Desafios)</h1>
      <div className="component-selector">
        {components.map((comp, index) => (
          <button 
            key={index} 
            onClick={() => setActiveComponent(comp)}
            className={activeComponent?.name === comp.name ? 'active' : ''}
          >
            {comp.name}
          </button>
        ))}
      </div>
      <div className="active-component">
        {renderComponent()}
      </div>
    </div>
  );
}

export default App;