const stateArea = document.querySelector('#estados');

function createStatesOptionDropDown() {
  let brazilStates = {
    states: [
      'Acre',
	    'Alagoas',
	    'Amapá',
	    'Amazonas',
	    'Bahia',
	    'Ceará',
	    'Distrito Federal',
	    'Espirito Santo',
	    'Goiás',
	    'Maranhão',
	    'Mato Grosso do Sul',
	    'Mato Grosso',
	    'Minas Gerais',
	    'Pará',
	    'Paraíba',
	    'Paraná',
	    'Pernambuco',
	    'Piauí',
	    'Rio de Janeiro',
	    'Rio Grande do Norte',
	    'Rio Grande do Sul',
	    'Rondônia',
	    'Roraima',
	    'Santa Catarina',
	    'São Paulo',
	    'Sergipe',
	    'Tocantins',
    ],
    initials: [ 
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MS',
    'MT',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
    ]
  };

  for (let index in brazilStates.states) {
    let option = document.createElement('option');
    let state = stateArea.appendChild(option);

    if(brazilStates.states[index] === 'São Paulo') {
      state.selected = true;
    }

    state.innerHTML = brazilStates.states[index];
    state.value = brazilStates.initials[index];
    state.required = true;
  }

}

window.onload = function() {
  createStatesOptionDropDown();
}