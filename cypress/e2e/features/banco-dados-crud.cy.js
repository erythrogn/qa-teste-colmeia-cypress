import database from '../../support/pages/DatabasePage';

describe('Feature - Gerenciamento de Bancos de Dados', () => {
    beforeEach(() => { database.acessar(); });

    it('Deve listar o estado inicial da tabela corretamente', () => {
        cy.contains('Bancos de dados').should('be.visible');
        cy.get('input[placeholder="Pesquisar"]').should('be.visible');
        database.btnCriar.should('not.be.disabled');
    });

    it('Deve criar um novo banco de dados com sucesso', () => {
        const nomeBanco = 'teste_senior_' + Date.now();
        database.criarBanco(nomeBanco);
        cy.contains('Adicionar novo item').should('not.exist');
        cy.contains('tr', nomeBanco).should('be.visible');
    });
});
