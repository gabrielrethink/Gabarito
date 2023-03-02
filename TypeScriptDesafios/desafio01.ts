// Desafio
/*
    Criar um objeto funcionário com:
        - Array de strings com os nomes dos surpevisores
        - Função de bater ponto que recebe a hora (número)
            e retorna uma string
            -> Ponto normal (<= 8)
            -> Fora do horário (> 8)
*/

type Funcionario = {
  supervisores: string[];
  baterPonto: (hora: number) => "Ponto Normal" | "Fora do Horário";
};

const funcionario: Funcionario = {
  supervisores: ["Pedro", "André", "Lucas"],
  baterPonto: (hora) => (hora <= 8 ? "Ponto Normal" : "Fora do Horário"),
};

console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
