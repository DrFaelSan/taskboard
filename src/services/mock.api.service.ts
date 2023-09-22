import { ColorEnum } from "../enums/ColorEnum";

export type CardItem = {
  id: number,
  content: string,
  labels: ColorEnum[] | [],
  user?: string | undefined;
}

export type ListItem = {
  title: string;
  creatable: boolean;
  done?: boolean | undefined;
  cards: CardItem[];
}

export function loadLists() : ListItem[] {


  return [
    { 
      title: 'Tarefas', 
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Estudar módulo 01 de NodeJS',
          labels: [ColorEnum.Purple],
          user: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Jack'
        },
        {
          id: 2,
          content: 'Criar vídeo para o Youtube ensinando a recriar a interface do Pipefy',
          labels: [ColorEnum.Purple],
          user: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Bubba'
        },
        {
          id: 3,
          content: 'Estudar módulo 03 de React Native',
          labels: [ColorEnum.Purple],
          user: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Sophie'
        },
        {
          id: 4,
          content: 'Gravar Aula "NextJS: Utilizando server-side rendering com ReactJS"',
          labels: [ColorEnum.Cyan],
          user: 'https://api.dicebear.com/7.x/adventurer/svg?seed=Buddy'
        },
        {
          id: 5,
          content: 'Gravar testes e deploy ReactJS',
          labels: [ColorEnum.Cyan],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        },
      ]
    },
    { 
      title: 'Fazendo', 
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'Recriando clone do Pipefy',
          labels: [],
          user: 'https://api.dicebear.com/7.x/croodles/svg?seed=George'
        }
      ]
    },
    { 
      title: 'Pausado', 
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'Gravar sobre Geolocalização e mapas com React Native',
          labels: [ColorEnum.Purple,ColorEnum.Cyan],
          user: 'https://api.dicebear.com/7.x/fun-emoji/svg?seed=Chloe'
        },
        {
          id: 8,
          content: 'Gravar testes e deploy ReactJS',
          labels: [ColorEnum.Cyan],
          user: 'https://api.dicebear.com/7.x/fun-emoji/svg?seed=Midnight'
        },
        {
          id: 9,
          content: 'Ajustes na biblioteca unform',
          labels: [ColorEnum.Green, ColorEnum.Red, ColorEnum.Yellow],
        }
      ]
    },
    { 
      title: 'Concluído', 
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'Gravar aula sobre deploy e CI com React Native',
          labels: [],
        },
        {
          id: 12,
          content: 'Gravar testes e deploy ReactJS',
          labels: [ColorEnum.Cyan],
        },
        {
          id: 13,
          content: 'Gravar Aula "Internacionalização de aplicações Node.js, ReactJS e React Native"',
          labels: [ColorEnum.Purple],
        }
      ]
    },
  ];
}