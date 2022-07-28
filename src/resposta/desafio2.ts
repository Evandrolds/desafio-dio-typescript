interface Profissao1{
    Pedreiro:string,
    Desenvolvedor: string,
    AjudanteGeral: string,
    Proferror: string
}
type nomesComum1 = {
    nome1: 'João',
    nome2: 'Joãozinho',
    nome3: 'Pedro',
    nome4: 'Maria',
}
interface idades{
    idade1: 34,
    idade2: 38,
    idade3: 24,
    idade4: 19
}
type sexo ={
    max: "Masculino",
    fem: 'Feminino'
}
interface SerHumano {
     nome:nomesComum1,
     idade: idades,
     sexo: sexo,
     profissao: Profissao1

};


function pessoa3 (serHumano:SerHumano){
   serHumano.nome.nome2
   serHumano.idade.idade3
   serHumano.sexo.max
   serHumano.profissao.Pedreiro
};

