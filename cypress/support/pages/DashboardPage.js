class DashboardPage {
    acessar() { cy.visit('/dashboard/campanha'); }
    get menuUsuario() { return cy.contains('Candidato'); }
    get linkBancosDeDados() { return cy.contains('Bancos de dados'); }
    get linkColmeiaForms() { return cy.contains('Colmeia Forms'); }
    get areaConteudoPrincipal() { return cy.get('h1, h2'); }
}
export default new DashboardPage();
