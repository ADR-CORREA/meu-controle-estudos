# Meu Controle de Estudos — Concursos (Amapá)

App de **uma página (1 HTML)** para **controlar** sua preparação para concurso. Não é um sistema de conteúdo (você usa seu curso/PDF para isso) — aqui você **senta e sabe o que fazer hoje**, registra o que estudou e acompanha sua evolução. Funciona **100% offline** e **sem IA**: tudo fica salvo no seu navegador.

## Para que serve

- **☀️ Hoje** — sua missão do dia: matéria do dia (rotaciona pelo seu ciclo, priorizando peso), checklist (flashcards/questões/teoria/lei seca), **registro manual** do que você fez (minutos, questões, acertos), metas diárias e ranking das **matérias que mais caem**.
- **📊 Painel** — KPIs, ofensiva (streak), % de acerto, desempenho por matéria e os **últimos 7 dias**.
- **📋 Edital Verticalizado** — disciplinas e tópicos em árvore, com checkbox de "dominado" e barra de progresso. 🔴 = alta incidência.
- **🗓️ Cronograma** — matérias com peso → gera o ciclo de estudos; inclui **Pomodoro**.
- **🃏 Flashcards** — criação manual + **revisão espaçada (SM-2)**: o app diz o que revisar hoje.
- **📜 Leis** — cole uma lei e leia por artigo (consulta rápida da legislação do seu concurso).
- **🧪 Simulados** — **registro manual** dos simulados feitos (data, foco, acertos, %), com histórico.
- **⚙️ Configurações** — concursos prontos do Amapá (PGM Macapá, TRT-8, Gestão Gov. AP) que já carregam edital + ciclo + leis; **backup** (export/import JSON).

## Como usar

1. Abra `index.html` no navegador (duplo-clique).
2. Em **⚙️ Configurações**, carregue um concurso pronto (PGM / TRT-8 / Gestão).
3. Abra **☀️ Hoje** todo dia: veja a missão, estude no seu curso e **registre** o que fez.
4. Faça **backup** (Configurações → Exportar) de tempos em tempos.

## Estrutura

```
index.html   → o app inteiro (controle de estudos, sem IA)
README.md    → este arquivo
```

> Materiais de apoio gerados nesta pasta: `edital-verticalizado-pgm-macapa.md/.pdf`, `cruzamento-editais-amapa.xlsx`, `plano-estudos-3h-amapa.xlsx`.
> `worker.js` (proxy de IA) **não é mais usado** — pode ser ignorado/removido.

## Observações

- Os dados ficam no **IndexedDB** do navegador. Trocar de navegador/computador exige importar o backup.
- Os concursos prontos são **projeções** (editais ainda não publicados em 2026) — ajuste quando os editais saírem.
