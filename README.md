# Desafio Técnico de QA - Relatório de Execução

## Arquitetura do Projeto
A automação foi estruturada utilizando o padrão **Page Object Model (POM)** para garantir escalabilidade e fácil manutenção. Os testes foram categorizados em:
- \eatures/\: Validação de caminhos felizes (Happy Paths).
- \ugs/\: Scripts desenvolvidos com o propósito de falhar, servindo como evidência técnica (Expected vs. Actual) dos comportamentos inesperados mapeados no exploratório.

## Relatório de Comportamentos Inesperados (Bugs)

* **BUG-001 (UX/Funcional):** Menu do usuário ("Candidato") inoperante no Dashboard.
* **BUG-002 (Blocker):** Links de navegação da barra lateral ("Bancos de dados", "Colmeia Forms") inoperantes na interface base.
* **BUG-003 (Severidade Alta):** Registros arquivados não são renderizados na lista de "Itens Arquivados" (Possível falha de persistência ou renderização do DOM).
* **BUG-004 (Regra de Negócio):** Ausência completa de fluxo de recuperação/restauração para itens arquivados, violando heurísticas de usabilidade e controle de dados.
* **BUG-005 (UX):** Rota raiz (\/dashboard/campanha\) exibe tela em branco (Blank State) sem redirecionamento de fallback ou dashboard de boas-vindas.
* **MELHORIA-001 (Localização):** Datas na tabela expostas no padrão ISO do banco de dados (YYYY-MM-DD) sem formatação para a localização do usuário (PT-BR).
