import React, { useState } from 'react';

function TabNavigator() {
  const [activeTab, setActiveTab] = useState('sobre');

  const tabs = {
    sobre: {
      title: 'Sobre',
      content: (
        <div>
          <h3>Sobre Nós</h3>
          <p>Somos uma empresa dedicada a criar soluções inovadoras e tecnológicas.</p>
          <p>Nossa missão é transformar ideias em realidade através da tecnologia.</p>
        </div>
      )
    },
    contato: {
      title: 'Contato',
      content: (
        <div>
          <h3>Entre em Contato</h3>
          <p>Email: contato@empresa.com</p>
          <p>Telefone: (11) 1234-5678</p>
          <p>Endereço: Rua Principal, 123 - São Paulo, SP</p>
        </div>
      )
    },
    servicos: {
      title: 'Serviços',
      content: (
        <div>
          <h3>Nossos Serviços</h3>
          <ul>
            <li>Desenvolvimento Web</li>
            <li>Consultoria em TI</li>
            <li>Design de Interfaces</li>
            <li>Suporte Técnico</li>
          </ul>
        </div>
      )
    }
  };

  return (
    <div className="tab-navigator">
      <h2>Navegação por Tabs</h2>
      <div className="tab-buttons">
        {Object.keys(tabs).map(tabKey => (
          <button
            key={tabKey}
            onClick={() => setActiveTab(tabKey)}
            className={activeTab === tabKey ? 'active-tab' : ''}
          >
            {tabs[tabKey].title}
          </button>
        ))}
      </div>
      
      <div className="tab-content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
}

export default TabNavigator;