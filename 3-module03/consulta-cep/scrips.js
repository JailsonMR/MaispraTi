
document.getElementById('form-cep').addEventListener('submit', function (e) {
    e.preventDefault();

    const cep = document.getElementById('cep').value.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (cep.length !== 8) {
        alert('Por favor, insira um CEP válido com 8 dígitos.');
        return;
    }

    // Fazendo a requisição à API de CEP
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                document.getElementById('resultado').innerHTML = `<p style="color:red;">CEP não encontrado!</p>`;
            } else {
                document.getElementById('resultado').innerHTML = `
                    <div>
                        <label for="cep">Logradouro:</label><br>
                        <input type="text" name="logradouro"  placeholder="Logradouro" value="${data.logradouro}" readonly><br>
                    </div>
                    <div>
                        <label for="cep">Bairro:</label><br>
                        <input type="text" name="bairro"  placeholder="Bairo" value="${data.bairro}" readonly><br>
                    </div>
                    <div>
                        <label for="cep">Localidade:</label><br>
                        <input type="text" name="localidade" placeholder="Localidade" value="${data.localidade}" readonly><br>
                    </div>
                    <div>
                        <label for="cep">UF:</label><br>
                        <input type="text" name="uf" placeholder="UF" value="${data.uf}" readonly><br>
                    </div>
                `;
            }
        })
        .catch(error => {
            document.getElementById('resultado').innerHTML = `<p style="color:red;">Erro ao buscar o CEP. Tente novamente.</p>`;
            console.error('Erro:', error);
        });
});
