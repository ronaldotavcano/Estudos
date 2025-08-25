/*
    Pacotes ou bibliotecas fornecem funcionalidades prontas
    que vc pode reutilizar em seus próprios projetos. Isso
    economiza tempo e esforço, evitando a necessidade de
    reescrever funcionalidades. Você pode acelerar o desen
    volvimento pq nn precisa criar tudo do zero. Isso é
    especialmente útil para tarefas repetitivas ou padrões
    de programação comuns.
    Bons pacotes são mantidos pela comunidade ou por orga
    nizações dedicadas, Isso significa que elas são atualizadas
    para corrigir bugs, melhorar o desempenho e fornecer novos 
    recursos. Ao usar pacotes vc se beneficia dessas atuali
    zações sem ter que implementalas vc mesmo


const now = dayjs()
console.log(now)
console.log(now.format("DD")) // só o dia
console.log(now.format("DD-MM-YY"))// dia mes ano

Gerenciador de pacotes --> é uma ferramenta que facilita a
instalação, atualização e gerenciamento de bibliotecas e
dependências de um projeto. O gerenciador de pacotes lida
com a resolução de dependencias, garantindo que as bibliotecas
necessárias estejam disponíveis e em versões compatíveis.

NPM --> Node package manager, é um dos gerenciadores de paco
tes mais populares para javascript. Usado principalmente no
ecossistema do Node.js, mas tambem é amplamente utilizado em
proetos front-end. O npm permite instalar e gerenciar pacotes
javascript, tambem permite executar scripts e bibliotecas ins
taladas.

Dependências e Ambientes:
    [Produção] -> Inclui as dependências (pacotes/bibliotecas)
    necessárias para a execução do projeto em um ambiente de
    produção.

    [Desenvolvimento] -> Inclui as dependências que são neces-
    sárias apenas durante o desenvolvimento, mas não são neces-
    sárias para a execução do aplicativo em produção (por 
    exemplo transpiladores).

RESOLUÇÃO DE DEPENDÊNCIAS

    Versionamento semantico -> padrão de atualizações de versoes
    que oferece um modelo, fácil de entender o que mudou de uma
    versão. Ex: 9.1.3
    
    9 .     1 .     3
  major    minor    patch

  Major -> versão principal: aumenta quando são feitas altera
  ções incompatíveis. Isso significa que, se vc atualizar para
  nova versão principal, poderá haver alterções que quebrarão
  a compatibilidade com versões anteriores.

  Minor -> versão menor: Aumenta quando são adicionadas novas
  funcionalidades de maneira compatível com versões anteriores.
  As atualizações de versão menor não devem introduzir altera-
  ções que quebram a compatibilidade com o código existente.

  Patch -> versão de correção: aumenta quando são feitas corr
  eções de bugs compatíveis com versões anteriores. Isso signi-
  fica que essas correções não devem introduzir novas funcional
  idades ou quebrar a compatibilidade.

  Convenções -> O npm utiliza convenções para gerenciar a resolução
  de dependências e garantir qu as instalações subsequentes
  mantenham a compatibilidade com as versões utilizadas na
  aplicação.

  ~ -> permite a atualização automatica para versoes compativeis
  isso permite receber patchs e correções de bugs.
  Ex:
        {
            "dependencies" : {
                "package-name" : "~4.17.20"
            }
        }
  ^ -> indica que o npm pode instalar automaticamente a ver
  são mais recente compativel, mas nao a proxima versao in
  compativel. Isso permite receber patchs, correções de bugs
  e pequenas alterações de versão, mas não grandes alterações
  de versão.
  Ex:
        {
            "dependencies" : {
                "package-name" : "^4.17.20"
            }
        }
  @ -> quando usa @ antes da versão, indica uma versao exata
  o npm instalara exatamente a versao especificada
*/