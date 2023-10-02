function enviarContato() {
    const nome = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const telefone = document.getElementById('contactPhone').value;
    const texto = document.getElementById('contactText').value;

    // Aqui você pode implementar a lógica para enviar os dados do contato
    console.log('Dados de contato enviados:');
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Telefone:', telefone);
    console.log('Texto:', texto);
}

function limparCampos() {
    document.getElementById('petName').value = '';
    document.getElementById('petBreed').value = '';
    document.getElementById('petAge').value = '';
    document.getElementById('petDescription').value = '';
    document.getElementById('dog').checked = false;
    document.getElementById('cat').checked = false;
    document.getElementById('bird').checked = false;
    document.getElementById('other').checked = false;
    document.getElementById('contactName').value = '';
    document.getElementById('contactEmail').value = '';
    document.getElementById('contactPhone').value = '';
    document.getElementById('contactText').value = '';
}
