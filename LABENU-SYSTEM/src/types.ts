export enum TIPO_TURMA {
  INTEGRAL = 'integral',
  NOTURNO = 'noturno'
}

export enum ESPECIALIDADE{
  REACT=1,
  REDUX=2,
  CDD=3,
  TESTES=4,
  TYPPESCRIPT=5,
  POO=6,
  BACKEND=7
}


export type criaTurmaInput ={
  id: number,
  nome:string,
  data_inicio: string,
  data_fim: string,
  modulo: number,
  tipo: TIPO_TURMA
}


export type criaEstudanteInput ={
  id:number,
  nome:string,
  email:string,
  data_nasc:string,
  hobbies:string[],
  turma_id:number
}
export type criaDocenteInput ={
  id:number,
  nome:string,
  email:string,
  data_nasc:string,
  especialidades:ESPECIALIDADE[],
  turma_id:number
}