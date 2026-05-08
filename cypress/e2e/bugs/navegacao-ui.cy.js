import dashboard from '../../support/pages/DashboardPage';

describe('Bugs - Navegacao e Layout (Expected vs Actual)', () => {
    beforeEach(() => { dashboard.acessar(); });

    it('BUG-001: Deve expandir menu do usuario ao clicar (Falha Esperada)', () => {
        dashboard.menuUsuario.click();
        cy.get('[role="menu"], .dropdown-menu').should('be.visible');
    });

    it('BUG-002: Deve redirecionar ao clicar nos links da Sidebar (Falha Esperada)', () => {
        dashboard.linkBancosDeDados.click();
        cy.url().should('include', '/bancos-de-dados');
    });

    it('BUG-005: Deve exibir conteudo principal na rota raiz /campanha (Falha Esperada)', () => {
        dashboard.areaConteudoPrincipal.should('be.visible');
    });
});
