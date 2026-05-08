class DatabasePage {
    acessar() { cy.visit('/dashboard/campanha/bancos-de-dados'); }
    get btnCriar() { return cy.contains('Criar'); }
    get inputNomeBanco() { return cy.get('input[type="text"]').last(); }
    get btnSalvar() { return cy.contains('button', 'Salvar'); }
    get btnArquivados() { return cy.get('.container-do-icone-rosa, svg').first(); }
    
    criarBanco(nome) {
        this.btnCriar.click();
        this.inputNomeBanco.type(nome);
        this.btnSalvar.click();
    }
}
export default new DatabasePage();
