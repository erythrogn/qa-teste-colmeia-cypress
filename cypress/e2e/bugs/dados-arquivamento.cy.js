import database from '../../support/pages/DatabasePage';

/**
 * Suite de testes voltada para a validacao de integridade de dados e UX.
 * Foco em identificar divergencias entre o comportamento esperado e o obtido.
 */
describe('Bugs - Ciclo de Vida do Dado e UX', () => {
    const nomeBanco = 'bug_test_' + Date.now();

    beforeEach(() => { database.acessar(); });

    /**
     * Valida se o sistema mantem a persistencia do dado apos a acao de arquivamento.
     * Resultado Esperado: Dado visivel na aba de arquivados com opcao de restauracao.
     */
    it('BUG-003/004: Validar persistencia e funcionalidade de restauracao em itens arquivados', () => {
        database.criarBanco(nomeBanco);
        cy.contains('tr', nomeBanco).within(() => { cy.get('svg, img').first().click(); });
        
        database.btnArquivados.click();
        cy.contains('Itens Arquivados').should('be.visible');
        
        cy.contains('tr', nomeBanco).should('be.visible').within(() => {
            cy.get('[title="Restaurar"], [aria-label="Restaurar"]').should('exist');
        });
    });

    /**
     * Valida a aplicacao de mascaras e localizacao de data conforme padrao PT-BR.
     * Resultado Esperado: Data no formato DD/MM/YYYY.
     */
    it('MELHORIA-001: Validar formatacao de data de criacao conforme localizacao do usuario', () => {
        database.criarBanco(nomeBanco);
        const dataHoje = new Date();
        const dia = String(dataHoje.getDate()).padStart(2, '0');
        const mes = String(dataHoje.getMonth() + 1).padStart(2, '0');
        const ano = dataHoje.getFullYear();
        const dataPTBR = dia + '/' + mes + '/' + ano;
        
        cy.contains('tr', nomeBanco).should('contain.text', dataPTBR);
    });
});
