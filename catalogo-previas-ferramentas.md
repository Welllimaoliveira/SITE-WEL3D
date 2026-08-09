# Catalogo de previas das ferramentas Weltec3D

Objetivo: usar este arquivo como fila de producao dos videos curtos que entrarao no site. Cada video deve mostrar o problema, a ferramenta em acao e o resultado, sem expor codigo, dados internos, nomes de clientes ou arquivos corporativos.

## Roteiro padrao para cada video

1. Mostrar o problema em 10 a 20 segundos.
2. Explicar qual ferramenta resolve aquele ponto.
3. Rodar a demonstracao em um arquivo didatico.
4. Mostrar o resultado final.
5. Fechar com a frase: "Na formacao eu mostro o raciocinio por tras desse fluxo."

## Lista inicial de ferramentas

| # | Ferramenta | Tecnologia | Previa para o site | Video sugerido |
|---|---|---|---|---|
| 01 | Gerar distribuidores | pyRevit / Revit | Cria e organiza distribuidores de ar no modelo. | Antes e depois criando distribuidores em lote. |
| 02 | Gerar simbolos | pyRevit / Revit | Gera simbologia de planta a partir dos elementos modelados. | Modelo 3D entrando, planta simbolizada saindo. |
| 03 | Lista de materiais | pyRevit / Excel | Transforma tabelas do Revit em lista padronizada. | Selecionar tabela, gerar Excel, revisar resultado. |
| 04 | Importar parametros | pyRevit / Excel | Atualiza parametros do Revit a partir de uma planilha. | Alterar dados no Excel e refletir no modelo. |
| 05 | Suporte associado | pyRevit / Qualidade | Relaciona instrumento com suporte proximo. | Selecionar area, encontrar suporte, gravar TAG. |
| 06 | Roda cabos | C# / Cabos | Apoia estudos de caminhos, comprimentos e ocupacao. | Demonstrar leitura dos dados e consolidacao da rota. |
| 07 | Rota de eletroduto | C# / Roteamento | Estuda encaminhamentos entre pontos do projeto. | Escolher origem/destino e mostrar rota candidata. |
| 08 | Dimensionar eletroduto | C# / Dimensionamento | Organiza criterios para dimensionamento de eletrodutos. | Mostrar entrada de cabos e resultado de ocupacao. |
| 09 | Instrumentos por XYZ | Dynamo / Coordenadas | Cria ou posiciona instrumentos por coordenadas. | Usar planilha simples com TAG, X, Y e Z. |
| 10 | Integracao Excel Revit | Dynamo / Excel | Conecta planilhas ao modelo para revisar dados. | Importar, validar e atualizar informacoes. |
| 11 | Coordenadas, grid e elevacao | Dynamo / Dados | Preenche localizacao dos elementos no modelo. | Mostrar parametros vazios e depois preenchidos. |
| 12 | Buscador de elementos | Dynamo / C# | Localiza elementos com filtros e interface. | Buscar por TAG, categoria ou parametro. |
| 13 | Controle de documentos | Excel / Gestao | Organiza revisoes, status e rastreabilidade. | Mostrar uma lista de documentos evoluindo por revisao. |
| 14 | Exportar DWG instrumentacao | pyRevit / Exportacao | Padroniza saidas CAD das plantas. | Selecionar vistas e exportar arquivos nomeados. |
| 15 | Extrator de conexoes E3D | Navisworks / E3D / CSV | Converte conectividade em dados analisaveis. | Mostrar CSV didatico gerado a partir de uma varredura. |
| 16 | Roteador E3D | Navisworks / Grafos | Estuda caminhos entre elementos por conexoes. | Origem, destino, grafo e rota encontrada. |
| 17 | Rotina AutoLISP didatica | AutoCAD / LISP | Ensina uma primeira rotina simples de tags. | Criar numerador de tags em um desenho didatico. |
| 18 | Revit com ChatGPT | IA / Revit | Usa IA para apoiar scripts, validacao e raciocinio. | Prompt tecnico, codigo sugerido, teste e revisao. |

## Cuidados antes de publicar

- Usar somente arquivos didaticos criados para a Weltec3D.
- Remover nomes de empresas, projetos, caminhos de rede e dados internos.
- Nao mostrar codigo proprietario na tela quando nao houver permissao clara.
- Transformar cada ferramenta em uma demonstracao propria, com dados ficticios.
- Gravar em resolucao limpa e com zoom suficiente para leitura dos comandos.
