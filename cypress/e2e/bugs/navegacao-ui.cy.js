import dashboard from '../../support/pages/DashboardPage';

describe('Bugs - Navegacao e Layout (Expected vs Actual)', () => {
    beforeEach(() => { dashboard.acessar(); });

    it('BUG-001: Deve expandir menu do usuario ao clicar (Falha Esperada)', () => {
        dashboard.menuUsuario.click();
        cy.get('[role="menu"], .dropdown-menu').should('be.visible');
    });

    it('BUG-002: Deve redirecionar ao clicar em Colmeia Forms na Sidebar (Falha Esperada)', () => {
        dashboard.linkColmeiaForms.click();
        cy.url().should('include', '/colmeia-forms');
    });

    it('BUG-005: Deve exibir conteudo principal na rota raiz /campanha (Falha Esperada)', () => {
        dashboard.areaConteudoPrincipal.should('be.visible');
    });
});
