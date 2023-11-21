let bancoDeDados = [];

function adicionarEncomenda() {
  const codigo = document.getElementById('codigo').value.toUpperCase();
  const status = document.getElementById('status').value;
  const dataHora = document.getElementById('dataHora').value;
  const destinatario = document.getElementById('destinatario').value;
  const telefone = document.getElementById('telefone').value;
  const endereco = document.getElementById('endereco').value;

  const novaEncomenda = {
    codigo,
    status,
    dataHora,
    destinatario,
    telefone,
    endereco,
  };

  bancoDeDados.push(novaEncomenda);
  limparFormulario();
  atualizarListaEncomendas();
}

function limparFormulario() {
  document.getElementById('encomendaForm').reset();
}

function atualizarListaEncomendas() {
  const listaEncomendas = document.getElementById('listaEncomendas');
  listaEncomendas.innerHTML = '';

  bancoDeDados.forEach(encomenda => {
    const itemLista = document.createElement('li');
    itemLista.textContent = `Código: ${encomenda.codigo}, Status: ${encomenda.status}`;
    listaEncomendas.appendChild(itemLista);
  });
}

document.getElementById('adicionarBtn').addEventListener('click', adicionarEncomenda);
document.getElementById('consultarBtn').addEventListener('click', consultarEncomenda);

function consultarEncomenda() {
  const consultaCodigo = document.getElementById('consultaCodigo').value.toUpperCase();
  const resultadoConsulta = bancoDeDados.find(encomenda => encomenda.codigo === consultaCodigo || encomenda.telefone === consultaCodigo);

  if (resultadoConsulta) {
    exibirResultadoConsulta(resultadoConsulta);
  } else {
    document.getElementById('resultadoConsulta').innerHTML = 'Encomenda não encontrada.';
  }
}

function exibirResultadoConsulta(encomenda) {
  const resultadoHTML = `
    <p><strong>Código:</strong> ${encomenda.codigo}</p>
    <p><strong>Status:</strong> ${encomenda.status}</p>
    <p><strong>Data e Hora do Pedido:</strong> ${encomenda.dataHora}</p>
    <p><strong>Destinatário:</strong> ${encomenda.destinatario}</p>
    <p><strong>Telefone do Destinatário:</strong> ${encomenda.telefone}</p>
    <p><strong>Endereço de Entrega:</strong> ${encomenda.endereco}</p>
  `;

  document.getElementById('resultadoConsulta').innerHTML = resultadoHTML;
}

atualizarListaEncomendas();