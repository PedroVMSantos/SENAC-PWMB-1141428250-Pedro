const agencias = {
   SP: [
       { nome: "LogisTrack Global Reach", rua: "Rua A", numero: "123", cep: "01000-000", cidade: "São Paulo", cnpj: "00.000.000/0001-01" },
   ],
   BA: [
       { nome: "LogisTrack Connect", rua: "Rua B", numero: "456", cep: "40000-000", cidade: "Salvador", cnpj: "00.000.000/0001-02" },
   ],
   PR: [
       { nome: "LogisTrack Connect", rua: "Rua C", numero: "789", cep: "80000-000", cidade: "Curitiba", cnpj: "00.000.000/0001-03" }
   ],
   AM: [
       { nome: "LogisTrack Connect", rua: "Rua D", numero: "101", cep: "69000-000", cidade: "Manaus", cnpj: "00.000.000/0001-04" }
   ],
   RJ: [
       { nome: "LogisTrack Express", rua: "Rua E", numero: "202", cep: "20000-000", cidade: "Rio de Janeiro", cnpj: "00.000.000/0001-05" }
   ],
   GO: [
       { nome: "LogisTrack SpeedShip", rua: "Rua F", numero: "303", cep: "70000-000", cidade: "Goiânia", cnpj: "00.000.000/0001-06" },
   ]
};

function carregarAgencias() {
   const estadoSelecionado = document.getElementById("estado").value;
   const agenciasInfoDiv = document.getElementById("agencias-info");

   agenciasInfoDiv.innerHTML = "";

   if (estadoSelecionado === "") {
       return;
   }
   const agenciasEstado = agencias[estadoSelecionado];

   agenciasEstado.forEach(agencia => {
       const agenciaInfo = `
           <div>
               <h2>${agencia.nome}</h2>
               <p><strong>Endereço:</strong> ${agencia.rua}, ${agencia.numero}</p>
               <p><strong>CEP:</strong> ${agencia.cep}</p>
               <p><strong>Cidade:</strong> ${agencia.cidade}</p>
               <p><strong>CNPJ:</strong> ${agencia.cnpj}</p>
           </div>
       `;
       agenciasInfoDiv.innerHTML += agenciaInfo;
   });
}
