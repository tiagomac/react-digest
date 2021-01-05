import React from 'react';

function ListarMoedas() {
    const MOEDAS = [
        {'sigla': 'AUD', 'descricao': 'Dólar australiano'},
        {'sigla': 'BGN', 'descricao': 'Lev búlgaro'},
        {'sigla': 'BRL', 'descricao': 'Real brasileiro'}
    ];

    return MOEDAS.sort((a, b) => {
        if (a.descricao < b.descricao) {
            return -1;
        } else if (a.descricao > b.descricao) {
            return 1;
        }
        return 0;
    }).map(moeda =>
        <option value={moeda.sigla} key={moeda.sigla}>
            {moeda.descricao}
        </option>
    );

}

export default ListarMoedas;