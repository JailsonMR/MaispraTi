import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Desafio: Validar se todos os campos estão preenchidos
    if (!formData.name || !formData.email || !formData.password) {
      alert('Por favor, preencha todos os campos');
      return;
    }

    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      password: ''
    });
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="welcome-message">
        <h2>Bem-vindo, {formData.name}!</h2>
        <p>E-mail: {formData.email}</p>
        <button onClick={resetForm}>Voltar</button>
      </div>
    );
  }

  return (
    <div className="registration-form">
      <h2>Formulário de Registro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input 
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Digite seu nome"
            required
          />
        </div>
        <div>
          <label>E-mail:</label>
          <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Digite seu e-mail"
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input 
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Digite sua senha"
            required
          />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default RegistrationForm;