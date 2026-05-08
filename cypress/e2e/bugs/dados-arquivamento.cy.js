import database from '../../support/pages/DatabasePage';

describe('Bugs - Ciclo de Vida do Dado e UX', () => {
    const nomeBanco = 'bug_test_' + Date.now();

    beforeEach(() => { database.acessar(); });

    it('BUG-003/004: Deve listar item nos arquivados e permitir restauracao (Falha Esperada)', () => {
        database.criarBanco(nomeBanco);
        cy.contains('tr', nomeBanco).within(() => { cy.get('svg, img').first().click(); });
        
        database.btnArquivados.click();
        cy.contains('Itens Arquivados').should('be.visible');
        
        // Valida se o item existe nos arquivados e se possui botao de restaurar
        cy.contains('tr', nomeBanco).should('be.visible').within(() => {
            cy.get('[title="Restaurar"], [aria-label="Restaurar"]').should('exist');
        });
    });

    it('MELHORIA-001: Deve formatar data de criacao no padrao PT-BR (Falha Esperada)', () => {
        database.criarBanco(nomeBanco);
        const dataHoje = new Date();
        const dia = String(dataHoje.getDate()).padStart(2, '0');
        const mes = String(dataHoje.getMonth() + 1).padStart(2, '0');
        const ano = dataHoje.getFullYear();
        const dataPTBR = dia + '/' + mes + '/' + ano;
        
        cy.contains('tr', nomeBanco).should('contain.text', dataPTBR);
    });
});
