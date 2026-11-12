# Amigo Secreto

Aplicação web simples para organizar uma lista de participantes e sortear uma sequência de amigos secretos.

## Como usar

1. Abra o arquivo `index.html` em um navegador.
2. Digite o nome de um participante e clique em **Adicionar**. Repita para incluir os demais.
3. Clique em **Sortear** para gerar as combinações.
4. Use **Reiniciar** para limpar a lista e começar de novo.

O sorteio exige pelo menos dois participantes. Os nomes não podem ficar vazios nem ser repetidos; a comparação de duplicados ignora diferenças entre maiúsculas e minúsculas. A cada sorteio, os participantes são embaralhados e organizados em um ciclo: cada pessoa tira a próxima da lista, e a última tira a primeira.

## Tecnologias

- HTML
- CSS
- JavaScript, sem bibliotecas de aplicação

As fontes e folhas de normalização CSS são carregadas de serviços externos, então a página precisa de conexão com a internet para exibi-las corretamente.

## Estrutura do projeto

```text
.
├── index.html
├── style.css
├── js/
│   └── app.js
└── assets/
    └── imagem-presente.png
```
