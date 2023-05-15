import {
  CompanyCoursesInfo,
  ListPeopleCourse,
  PeopleCoursesInfo,
} from "./types";

export const colors = [
  `#FFCA3A20`,
  `#FF595E20`,
  `#6A4C9350`,
  `#1982C420`,
  `#8AC92620`,
];

export const COMPANY_COURSES: CompanyCoursesInfo[] = [
  {
    title: "NR 6 –EPI – Equipamento de Proteção Individual",
    subtitle: "Utilização, guarda e conservação (inicial e Reciclagem)",
    availability: 2,
    description:
      "Este treinamento é ideal para colaboradoes e empresas que envolva qualquer atividade que possua algum tipo de risco físico necessário a utilização do equipamento de proteção individual (EPI). Esses equipamentos são indispensáveis afim de preservar a saúde física do colaborador. ",
    horary: "4 horas",
    urlImage:
      "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2021/02/Nr6.jpg",
  },
  {
    title: "NR 10 - Segurança em Instalações e Serviços de Eletricidade",
    subtitle: "(Básico, SEP e Reciclagem)",
    availability: 2,
    description:
      "Treinamento que tem por objetivo a capacitação e a qualificação do trabalhador que irá atuar com segurança em instalações elétricas e serviços com eletricidade. Deixando apto para o trabalho e regulamentado conforme as exigências do ministério do trabalho.",
    horary: "4 horas a 40 horas",
    urlImage:
      "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2020/12/Nr10.jpg",
  },
  {
    title: "NR 11 – Operador de Empilhadeira",
    subtitle: "Capacitação, reciclagem 100% online",
    availability: 2,
    description:
      "O curso de NR 11 é fundamental para todos os profissionais que irão atuar com empilhadeira em diversos seguimentos de carga e descarga de materiais, empilhamento por processo mecanizado, que além de capacitar, instrui sobe o gerenciamento de riscos dos colaboradores. Deixando apto para o trabalho e regulamentado conforme as normativas do ministério do trabalho exigem.",
    horary: "16 horas",
    urlImage:
      "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2020/12/Copia-de-Artes-Formaseg-1.png",
  },
  {
    title: "NR 11 – Operador de Máquinas Agrícolas e Equipamentos",
    subtitle: "(Capacitação e Reciclagem)",
    availability: 2,
    description:
      "Operador de máquinas agrícolas e equipamentos, tem o objetivo de instruir e capacitar pessoas que necessitem operar máquinas agrícolas de forma segura, com eficácia e respeitando as normas do TEM, para a sua proteção, dos seus colegas de trabalho de visitantes e da empresa",
    horary: "16 horas",
    urlImage:
      "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2020/12/Copia-de-Artes-Formaseg-1.png",
  },
  {
    title: "NR 11 – Operador de Muque",
    subtitle: "(Capacitação e Reciclagem)",
    availability: 2,
    description:
      "O curso é fundamental para todos os profissionais que irão atuar com caminhão muque em diversos seguimentos de carga e descarga de materiais, empilhamento por processo mecanizado, que além de capacitar, instrui sobre o gerenciamento de riscos dos colaboradores. Deixando apto para o trabalho e regulamentado conforme as normativas do ministério do trabalho exigem.",
    horary: "8 horas",
    urlImage:
      "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2020/12/Copia-de-Artes-Formaseg-1.png",
  },
  {
    title: "NR 11 – Operador de Ponte Rolante e Talha",
    subtitle: "(Capacitação e Reciclagem)",
    availability: 2,
    description:
      "Tem como objetivo qualificar e aprimorar os conhecimentos do profissional que a opera, como funciona, manutenção, técnicas de correto manuseio da máquina e possibilitar noções sobre a legislação e suas atribuições no local de trabalho. Deixando apto para o trabalho e regulamentado conforme as exigências do ministério do trabalho.",
    horary: "16 horas",
    urlImage:
      "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2020/12/Copia-de-Artes-Formaseg-1.png",
  },
  {
    title: "NR 11 – Operador de Hilo Tombador",
    subtitle: "(Capacitação e Reciclagem)",
    availability: 2,
    description:
      "O curso de capacitação para operador de Hilo Tombador, tem o objetivo de instruir e capacitar profissionais para estarem aptos a operar com segurança, equipamento responsável por meio de tração, pela elevação de cargas e materiais de difícil locomoção, como é o caso do Hilo Tombador. Deixando apto para o trabalho e regulamentado conforme as exigências do ministério do trabalho.",
    horary: "5 horas",
    urlImage:
      "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2020/12/Copia-de-Artes-Formaseg-1.png",
  },

  {
    title: "NR 12 – Segurança em Máquinas e Equipamentos",
    subtitle: "Inicial e Reciclagem",
    availability: 2,
    description:
      "O curso de NR 12 é destinado a operadores de máquinas e equipamentos. Tem como objetivo capacitar o profissional para identificar fatores de risco e utilizar as melhores práticas para a prevenção de acidentes no uso de seus instrumentos de trabalho. Deixando apto para o trabalho e regulamentado conforme as exigências do ministério do trabalho.",
    horary: "2 horas",
    urlImage:
      "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2021/02/Nr12.jpg",
  },

  {
    title: "NR 17 – Ergonomia",
    subtitle:
      "Operador de Check-out , trabalho em teleatendimento/telemarketing",
    availability: 2,
    description:
      "Esta norma regulamentadora visa estabelecer parâmetros que permitam a adaptação das condições de trabalho as características psicofisiológicas dos trabalhadores, proporcionando o máximo de conforto segurança e desempenho eficiente aos colaboradores.",
    horary: "2 à 4 horas",
    urlImage:
      "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2021/09/WhatsApp-Image-2021-07-28-at-13.15.15-1.jpeg",
  },

  {
    title: "NR 18 – Condição e Meio Ambiente na Construção Civil",
    subtitle: "Inicial e Reciclagem",
    availability: 2,
    description:
      "Esta norma regulamentadora é destinada a trabalhadores da construção civil e aborda os riscos e medidas necessárias nas condições e no meio ambiente de trabalho na indústria da construção.",
    horary: "4 à 16 horas",
    urlImage:
      "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2021/09/Nr18-1.jpg",
  },
  {
    title: "NR 20 – Inflamáveis e Combustíveis",
    subtitle: "Classe I,II e III – Iniciação, Básico, intermediário e avançado",
    availability: 2,
    description:
      "Esta norma regulamentadora tem como objetivo capacitar profissional com requisitos mínimos para a gestão de segurança do trabalho contra fatores de risco de acidentes provenientes das atividades de produtos inflamáveis. Deixando apto para o trabalho e regulamentado conforme as exigências do ministério do trabalho. ",
    horary: "16 à 32 horas",
    urlImage:
      "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2021/10/joao-5.png",
  },
  {
    title: "NR 23 – Proteção e Combate a Incêndio",
    subtitle: "Proteção contra incêndios no ambiente de trabalho",
    availability: 2,
    description:
      "Esta norma regulamentadora é destinado a profissionais para conhecer os conceitos e aprimorar seus conhecimentos sobre a área de combate dos princípios de incêndios. ",
    horary: "16 horas",
    urlImage:
      "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2020/12/085c09d7b5324a6bb72e40b8078f8e6c.jpeg",
  },
  {
    title: "Primeiros Socorros",
    subtitle: "Bombeiros, brigadistas, etc",
    availability: 2,
    description:
      "O Treinamento de Primeiros Socorros aborda todo conteúdo sobre as técnicas de primeiros socorros e o conjunto de medidas de prevenção, para ser aplicado em casos de necessidade.",
    horary: "10 horas",
    urlImage:
      "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2020/12/9c74dbd9b79f45b99b51065707428f87.jpeg",
  },
  {
    title: "Direção Defensiva",
    subtitle: "Veículos Leves e Pesados",
    availability: 2,
    description:
      "O Curso de Direção Defensiva aborda todo conteúdo sobre as técnicas de direção defensiva e o conjunto de medidas de prevenção de acidentes no trânsito.",
    horary: "6 horas",
    urlImage:
      "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2021/02/Copia-de-Artes-Formaseg-8.png",
  },
  {
    title: "Nr 33 – Segurança e Saúde em Espaços Confinados",
    subtitle:
      "Trabalhador autorizado, Vigia e Supervisor – Básico e reciclagem",
    availability: 2,
    description:
      "Esta norma tem como objetivo estabelecer os requisitos mínimos para identificação de espaços confinados e o reconhecimento, avaliação, monitoramento e controle dos riscos existentes, de forma a garantir permanentemente a segurança dos trabalhadores que interagem direta ou indiretamente nestes espaços.",
    horary: "8, 16 e 40 horas",
    urlImage:
      "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2022/08/Nr-33-Supervisor.jpeg",
  },
  {
    title: "Nr 35 - Trabalho em Altura",
    subtitle: "Básico e Reciclagem ",
    availability: 2,
    description:
      "Esta norma regulamentadora tem como objetivo capacitar o profissional para realizar trabalho em altura. Dentre elas envolve o planejamento, organização e execução da função, visa a segurança e a saúde dos trabalhadores envolvidos com atividades de risco de quedas. Deixando apto para o trabalho e regulamentado conforme as exigências no ministério do trabalho.",
    horary: "4 e 8 horas",
    urlImage:
      "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2021/02/Copia-de-Artes-Formaseg-21.png",
  },
];

export const PEOPLE_COURSES: ListPeopleCourse = [
  {
    title: "Conhecendo as NRs",
    description:
      "Este treinamento é voltado a gestores e a todos com interesse em conhecer as aplicações das NR’s, o objetivo é transmitir um resumo da aplicação de cada NR. Assim como documentação e responsabilidade de modo geral.",
    subtitle:
      "Integrando um novo colaborador apresentando a aplicação de cada NR.",
    urlImage:
      "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2021/05/Conhecendo-NRs.png",
    courses: [
      {
        title: "Conhecendo as NRs - Básico",
        subtitle:
          "Integrando um novo colaborador apresentando a aplicação de cada NR.",
        price: "45,90",
        horary: "8 horas",
        avaliable: "12 meses",
        urlImage:
          "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2021/05/Conhecendo-NRs.png",
        link: "https://grupoisafety.formasegead.com.br/Curso/conhecendo-as-nrs/",
      },
    ],
  },
  {
    title: "NR-5 CIPA",
    subtitle: "Formação de Cipeiros ( Grau de risco 1, 2, 3 e 4)",
    description:
      "Este treinamento tem como finalidade educar para prática de segurança do trabalho tendo a comissão interna de prevenção de acidentes, constituída por representantes  indicados pelo empregador e membros eleitos pelos trabalhadores, em cada estabelecimento da empresa, que tem a finalidade de prevenir acidentes e doenças decorrentes do trabalho, de modo a tornar compatível permanentemente o trabalho com a preservação da vida e promoção da saúde do trabalhador.",
    urlImage:
      "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2021/02/Nr5.jpg",
    courses: [
      {
        title: "CIPA GRAU DE RISCO I",
        subtitle: "Formação de Cipeiros ( Grau de risco 1, 2, 3 e 4)",
        price: "67,90",
        horary: "8 horas",
        avaliable: "12 meses",
        urlImage:
          "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2021/02/Nr5.jpg",
        link: "https://grupoisafety.formasegead.com.br/Curso/nr-5-cipa-comissao-interna-de-prevencao-a-acidentes-grau-de-risco-1/",
      },
      {
        title: "CIPA GRAU DE RISCO II",
        subtitle: "Formação de Cipeiros ( Grau de risco 1, 2, 3 e 4)",
        price: "67,90",
        horary: "8 horas",
        avaliable: "12 meses",
        urlImage:
          "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2021/02/Nr5.jpg",
        link: "https://grupoisafety.formasegead.com.br/Curso/nr-5-cipa-comissao-interna-de-prevencao-a-acidentes-grau-de-risco-2-parte-teorica/",
      },
      {
        title: "CIPA GRAU DE RISCO III",
        subtitle: "Formação de Cipeiros ( Grau de risco 1, 2, 3 e 4)",
        price: "67,90",
        horary: "8 horas",
        urlImage:
          "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2021/02/Nr5.jpg",
        avaliable: "12 meses",
        link: "https://grupoisafety.formasegead.com.br/Curso/nr-5-cipa-comissao-interna-de-prevencao-a-acidentes-grau-de-risco-3-parte-teorica/",
      },
      {
        title: "CIPA GRAU DE RISCO IV",
        subtitle: "Formação de Cipeiros ( Grau de risco 1, 2, 3 e 4)",
        price: "67,90",
        horary: "8 horas",
        avaliable: "12 meses",
        urlImage:
          "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2021/02/Nr5.jpg",
        link: "https://grupoisafety.formasegead.com.br/Curso/nr-5-cipa-comissao-interna-de-prevencao-a-acidentes-grau-de-risco-4-parte-teorica/",
      },
    ],
  },
  {
    title: "NR 06 - EPI EQUIPAMENTO DE PROTEÇÃO INDIVIDUAL",
    subtitle: "Utilização, guarda e conservação",
    description:
      "Este treinamento é ideal para colaboradoes e empresas que envolva qualquer atividade que possua algum tipo de risco físico necessário a utilização do equipamento de proteção individual (EPI). Esses equipamentos são indispensáveis afim de preservar a saúde física do colaborador.",
    urlImage:
      "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2021/02/Nr6.jpg",
    courses: [
      {
        title: "NR 06- EPI EQUIPAMENTO DE PROTEÇÃO INDIVIDUAL - INICIAL",
        subtitle: "Inicial",
        price: "48,90",
        horary: "4 horas",
        avaliable: "12 meses",
        urlImage:
          "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2021/02/Nr6.jpg",
        link: "https://grupoisafety.formasegead.com.br/Curso/treinamento-de-nr-6-epi/",
      },
      {
        title: "NR 06- EPI EQUIPAMENTO DE PROTEÇÃO INDIVIDUAL - RECICLAGEM",
        subtitle: "Reciclagem",
        price: "48,90",
        horary: "4 horas",
        avaliable: "24 meses",
        link: "https://grupoisafety.formasegead.com.br/Curso/nr-6-epi-equipamento-de-protecao-individual-reciclagem/",
        urlImage:
          "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2021/02/Copia-de-Artes-Formaseg-9.png",
      },
    ],
  },
  {
    title: "NR 10 - Segurança em Instalações e Serviços de Eletricidade",
    subtitle: "(Básico, SEP e Reciclagem)",
    urlImage:
      "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2020/12/Nr10.jpg",
    courses: [
      {
        title:
          "NR 10 - Segurança em Instalações e Serviços de Eletricidade - BÁSICO",
        subtitle: "Básico",
        price: "128,90",
        horary: "40 horas",
        avaliable: "24 meses",
        urlImage:
          "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2020/12/Nr10.jpg",
        link: "https://grupoisafety.formasegead.com.br/Curso/treinamento-de-nr-10/",
      },
      {
        title:
          "NR 10 - Segurança em Instalações e Serviços de Eletricidade - SISTEMA ELÉTRICO DE POTÊNCIA (SEP)",
        subtitle: "SEP",
        description:
          "Treinamento que tem por objetivo a capacitação e a qualificação do trabalhador que irá atuar com segurança em instalações elétricas e serviços com eletricidade. Deixando apto para o trabalho e regulamentado conforme as exigências do ministério do trabalho.",
        price: "165,90",
        horary: "40 horas",
        avaliable: "24 meses",
        urlImage:
          "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2020/12/Nr10.jpg",
        link: "https://grupoisafety.formasegead.com.br/Curso/nr-10-curso-complementar-seguranca-no-sistema-eletrico-de-potencia-sep-e-em-suas-proximidades/",
      },
      {
        title:
          "NR 10 - Segurança em Instalações e Serviços de Eletricidade - RECICLAGEM",
        subtitle: "Reciclagem",
        price: "165,90",
        horary: "40 horas",
        avaliable: "24 meses",
        urlImage:
          "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2020/12/Nr10.jpg",
        link: "https://grupoisafety.formasegead.com.br/Curso/nr-10-curso-complementar-seguranca-no-sistema-eletrico-de-potencia-sep-e-em-suas-proximidades/",
      },
    ],
  },
  {
    title: "NR 11 – Operador de Empilhadeira",
    subtitle: "Capacitação, reciclagem 100% online",
    description:
      "O curso de NR 11 é fundamental para todos os profissionais que irão atuar com empilhadeira em diversos seguimentos de carga e descarga de materiais, empilhamento por processo mecanizado, que além de capacitar, instrui sobe o gerenciamento de riscos dos colaboradores. Deixando apto para o trabalho e regulamentado conforme as normativas do ministério do trabalho exigem.",
    urlImage:
      "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2020/12/joao-4.png",
    courses: [
      {
        title: "NR 11 – Operador de Empilhadeira - ",
        subtitle: "Parte teórica",
        price: "199,90",
        horary: "16 horas",
        avaliable: "12 meses",
        link: "https://grupoisafety.formasegead.com.br/Curso/operador-de-empilhadeira-teorico/",
        urlImage:
          "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2020/12/joao-4.png",
      },
      {
        title:
          "NR 11 – Operador de Máquinas Agrícolas e Equipamentos - TEÓRICA",
        subtitle: "Parte teórica",

        price: "199,90",
        horary: "16 horas",
        avaliable: "12 meses",
        link: "https://grupoisafety.formasegead.com.br/Curso/nr-11-operador-maquinas-agricolas-e-equipamentos/",
        urlImage:
          "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2021/09/NR-11-OPERADOR-MAQUINAS-AGRICOLAS-E-EQUIPAMENTOS-FORMACAO-1.jpg",
      },
      {
        title: "NR 11 – Operador de Muque",
        subtitle: "(Capacitação e Reciclagem)",

        price: "199,90",
        horary: "8 horas",
        avaliable: "12 meses",
        urlImage:
          "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2020/12/Copia-de-Artes-Formaseg-1.png",
        link: "https://grupoisafety.formasegead.com.br/Curso/modelo-de-seguranca-do-trabalho-2/",
      },
      {
        title: "NR 11 – Operador de Ponte Rolante e Talha",
        subtitle: "(Capacitação e Reciclagem)",

        price: "199,90",
        horary: "16 horas",
        avaliable: "12 meses",
        urlImage:
          "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2021/02/Nr11-Ponte.jpg",
        link: "https://grupoisafety.formasegead.com.br/Curso/treinamento-de-nr-11-pontes-rolantes/",
      },
      {
        title: "NR 11 – Operador de Hilo Tombador",
        subtitle: "(Capacitação e Reciclagem)",

        price: "199,90",
        horary: "5 horas",
        avaliable: "12 meses",
        urlImage:
          "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2020/12/Copia-de-Artes-Formaseg.png",
        link: "https://grupoisafety.formasegead.com.br/Curso/modelo-de-seguranca-do-trabalho-3/",
      },
    ],
  },
  {
    title: "NR 12 – Segurança em Máquinas e Equipamentos - BÁSICO",
    subtitle: "Inicial e Reciclagem",
    description:
      "O curso de NR 12 é destinado a operadores de máquinas e equipamentos. Tem como objetivo capacitar o profissional para identificar fatores de risco e utilizar as melhores práticas para a prevenção de acidentes no uso de seus instrumentos de trabalho. Deixando apto para o trabalho e regulamentado conforme as exigências do ministério do trabalho.",
    urlImage:
      "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2020/12/Copia-de-Artes-Formaseg.png",
    courses: [
      {
        title: "NR 12 – Segurança em Máquinas e Equipamentos - BÁSICO",
        subtitle: "Inicial",

        price: "199,90",
        horary: "8 horas",
        urlImage:
          "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2020/12/Copia-de-Artes-Formaseg.png",
        avaliable: "12 meses",
        link: "https://grupoisafety.formasegead.com.br/Curso/treinamento-de-nr-12/",
      },
      {
        title: "NR 12 – Segurança em Máquinas e Equipamentos - RECLICLAGEM",
        subtitle: "Reciclagem",

        price: "199,90",
        horary: "8 horas",
        urlImage:
          "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2021/02/Nr12.jpg",
        avaliable: "12 meses",
        link: "https://grupoisafety.formasegead.com.br/Curso/nr-12-seguranca-em-maquinas-e-equipamentos-reciclagem/",
      },
    ],
  },
  {
    title: "NR 17 – Ergonomia",
    description:
      "Esta norma regulamentadora visa estabelecer parâmetros que permitam a adaptação das condições de trabalho as características psicofisiológicas dos trabalhadores, proporcionando o máximo de conforto segurança e desempenho eficiente aos colaboradores.",
    subtitle:
      "Operador de Check-out, trabalho em teleatendimento/telemarketing",
    urlImage:
      "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2021/09/WhatsApp-Image-2021-07-28-at-13.15.15-1.jpeg",
    courses: [
      {
        title: "NR 17 – Ergonomia - BÁSICO",
        subtitle:
          "Operador de Check-out , trabalho em teleatendimento/telemarketing",

        price: "67,90",
        horary: "2 horas",
        urlImage:
          "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2021/09/WhatsApp-Image-2021-07-28-at-13.15.15-1.jpeg",
        avaliable: "12 meses",
        link: "https://grupoisafety.formasegead.com.br/Curso/nr-17-ergonomia/",
      },
      {
        title: "NR 17 – Ergonomia - OPERADORES DE CHECK-OUT",
        subtitle:
          "Operador de Check-out , trabalho em teleatendimento/telemarketing",
        price: "67,90",
        horary: "2 horas",
        avaliable: "12 meses",
        urlImage:
          "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2022/11/CAPA-DE-VENDA.jpg",
        link: "https://grupoisafety.formasegead.com.br/Curso/nr-17-ergonomia-ergonomia-para-operadores-de-check-out/",
      },
      {
        title: "NR 17 – Ergonomia - TRABALHO EM TELEATENDIMENTO/ TELEMARKETING",
        subtitle:
          "Operador de Check-out , trabalho em teleatendimento/telemarketing",

        price: "67,90",
        horary: "2 horas",
        avaliable: "12 meses",
        urlImage:
          "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2023/01/CAPA-DE-VENDA.jpg",
        link: "https://grupoisafety.formasegead.com.br/Curso/nr-17-ergonomia-trabalho-em-teleatendimento-telemarketing/",
      },
    ],
  },
  {
    title: "NR 18 – Condição e Meio Ambiente na Construção Civil - BÁSICO 4H",
    subtitle: "Inicial e Reciclagem",
    description:
      "Esta norma regulamentadora é destinada a trabalhadores da construção civil e aborda os riscos e medidas necessárias nas condições e no meio ambiente de trabalho na indústria da construção.",
    urlImage:
      "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2021/09/Nr18-1.jpg",
    courses: [
      {
        title:
          "NR 18 – Condição e Meio Ambiente na Construção Civil - BÁSICO 4H",
        subtitle: "Básico",

        price: "58,90",
        horary: "4 horas",
        avaliable: "12 meses",
        urlImage:
          "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2021/09/Nr18-1.jpg",
        link: "https://grupoisafety.formasegead.com.br/Curso/nr-18-seguranca-na-construcao-civil/",
      },
      {
        title:
          "NR 18 – Condição e Meio Ambiente na Construção Civil - RECLICLAGEM",
        subtitle: "Reciclagem",

        price: "49,90",
        horary: "4 horas",
        urlImage:
          "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2021/09/Nr18-1.jpg",
        avaliable: "12 meses",
        link: "https://grupoisafety.formasegead.com.br/Curso/nr-18-seguranca-na-construcao-civil-reciclagem/",
      },
      {
        title:
          "NR 18 – Condição e Meio Ambiente na Construção Civil - BÁSICO 16H",
        subtitle: "Básico",

        price: "49,90",
        urlImage:
          "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2021/09/Nr18-1.jpg",
        horary: "16 horas",
        avaliable: "12 meses",
        link: "https://grupoisafety.formasegead.com.br/Curso/nr-18-seguranca-na-construcao-civil-2/",
      },
      {
        title:
          "NR 18 – Condição e Meio Ambiente na Construção Civil - BÁSICO 16H",
        subtitle: "Básico",

        price: "49,90",
        urlImage:
          "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2021/09/Nr18-1.jpg",
        horary: "16 horas",
        avaliable: "12 meses",
        link: "https://grupoisafety.formasegead.com.br/Curso/nr-18-seguranca-na-construcao-civil-2/",
      },
      {
        title:
          "NR 18 – Condição e Meio Ambiente na Construção Civil - RECICLAGEM 16H",
        subtitle: "Reciclagem",

        urlImage:
          "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2021/09/Nr18-1.jpg",
        price: "64,90",
        horary: "16 horas",
        avaliable: "12 meses",
        link: "https://grupoisafety.formasegead.com.br/Curso/nr-18-seguranca-na-construcao-civil-reciclagem-2/",
      },
      {
        title:
          "NR 18 – Condição e Meio Ambiente na Construção Civil - RECICLAGEM 16H",
        subtitle: "Reciclagem",

        urlImage:
          "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2021/09/Nr18-1.jpg",
        price: "64,90",
        horary: "16 horas",
        avaliable: "12 meses",
        link: "https://grupoisafety.formasegead.com.br/Curso/nr-18-seguranca-na-construcao-civil-reciclagem-2/",
      },
    ],
  },
  {
    title: "NR 20 – Inflamáveis e Combustíveis - INICIAÇÃO",
    subtitle: "Classe I,II e III – Iniciação, Básico, intermediário e avançado",
    description:
      "Esta norma regulamentadora tem como objetivo capacitar profissional com requisitos mínimos para a gestão de segurança do trabalho contra fatores de risco de acidentes provenientes das atividades de produtos inflamáveis. Deixando apto para o trabalho e regulamentado conforme as exigências do ministério do trabalho.",
    urlImage:
      "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2021/02/Copia-de-Artes-Formaseg-2-1.png",
    courses: [
      {
        title: "NR 20 – Inflamáveis e Combustíveis - INICIAÇÃO",
        subtitle: "Iniciação",

        price: "89,90",
        horary: "3 horas",
        avaliable: "12 meses",
        urlImage:
          "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2021/02/Copia-de-Artes-Formaseg-2-1.png",
        link: "https://grupoisafety.formasegead.com.br/Curso/nr-20-iniciacao-sobre-inflamaveis-e-combustiveis/",
      },
      {
        title: "NR 20 – Inflamáveis e Combustíveis - RECICLAGEM",
        subtitle: "Reciclagem",

        price: "89,90",
        horary: "3 horas",
        avaliable: "12 meses",
        urlImage:
          "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2021/02/Copia-de-Artes-Formaseg-19.png",
        link: "https://grupoisafety.formasegead.com.br/Curso/nr-20-iniciacao-sobre-inflamaveis-e-combustiveis-reciclagem/",
      },
      {
        title: "NR 20 – Inflamáveis e Combustíveis - BÁSICO CLASSE 1",
        subtitle: "Básico - Classe I",

        urlImage:
          "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2021/10/joao-5.png",
        price: "199,90",
        horary: "4 horas",
        avaliable: "12 meses",
        link: "https://grupoisafety.formasegead.com.br/Curso/nr-20-seguranca-com-liquidos-e-inflamaveis-basico-classe-i/",
      },
      {
        title: "NR 20 – Inflamáveis e Combustíveis - BÁSICO CLASSE 2",
        subtitle: "Básico - Classe II",

        price: "199,90",
        urlImage:
          "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2021/10/joao-7.png",
        horary: "6 horas",
        avaliable: "12 meses",
        link: "https://grupoisafety.formasegead.com.br/Curso/nr-20-seguranca-com-liquidos-e-inflamaveis-basico-classe-ii/",
      },
      {
        title: "NR 20 – Inflamáveis e Combustíveis - BÁSICO CLASSE 3",
        subtitle: "Básico - Classe III",

        urlImage:
          "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2021/02/NR-20-Basico-Clase-III.png",
        price: "199,90",
        horary: "8 horas",
        avaliable: "12 meses",
        link: "https://grupoisafety.formasegead.com.br/Curso/nr-20-seguranca-com-liquidos-e-inflamaveis-basico/",
      },
      {
        title: "NR 20 – Inflamáveis e Combustíveis - INTERMEDIÁRIO CLASSE 1",
        subtitle: "Intermediário  - Classe I",

        price: "209,90",
        urlImage:
          "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2021/02/nr20inter.jpg",
        horary: "12 horas",
        avaliable: "12 meses",
        link: "https://grupoisafety.formasegead.com.br/Curso/nr-20-seguranca-com-liquidos-e-inflamaveis-intermediario-classe-i/",
      },
      {
        title: "NR 20 – Inflamáveis e Combustíveis - INTERMEDIÁRIO CLASSE 2",
        subtitle: "Intermediário  - Classe II",

        urlImage:
          "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2021/10/joao-9.png",
        price: "209,90",
        horary: "14 horas",
        avaliable: "12 meses",
        link: "https://grupoisafety.formasegead.com.br/Curso/nr-20-seguranca-com-liquidos-e-inflamaveis-intermediario-classe-ii/",
      },
      {
        title: "NR 20 – Inflamáveis e Combustíveis - INTERMEDIÁRIO CLASSE 3",
        subtitle: "Intermediário  - Classe III",

        urlImage:
          "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2021/02/Copia-de-Artes-Formaseg-4.png",
        price: "209,90",
        horary: "16 horas",
        avaliable: "12 meses",
        link: "https://grupoisafety.formasegead.com.br/Curso/nr-20-seguranca-com-liquidos-e-inflamaveis-intermediario-classe-iii/",
      },
      {
        title: "NR 20 – Inflamáveis e Combustíveis - ESPECÍFICO CLASSE 2",
        subtitle: "Específico - Classe II",

        price: "209,90",
        urlImage:
          "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2021/10/joao-11.png",
        horary: "14 horas",
        avaliable: "12 meses",
        link: "https://grupoisafety.formasegead.com.br/Curso/nr-20-seguranca-com-liquidos-e-inflamaveis-especifico-classe-ii/",
      },
      {
        title: "NR 20 – Inflamáveis e Combustíveis - ESPECÍFICO CLASSE 3",
        subtitle: "Específico - Classe III",

        price: "209,90",
        urlImage:
          "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2021/02/Copia-de-Artes-Formaseg-3.png",
        horary: "16 horas",
        avaliable: "12 meses",
        link: "https://grupoisafety.formasegead.com.br/Curso/nr-20-seguranca-com-liquidos-e-inflamaveis-especifico/",
      },
      {
        title: "NR 20 – Inflamáveis e Combustíveis - AVANÇADO CLASSE 1",
        subtitle: "Avançado - Classe I",

        urlImage:
          "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2021/10/joao-13.png",
        price: "229,90",
        horary: "20 horas",
        avaliable: "12 meses",
        link: "https://grupoisafety.formasegead.com.br/Curso/nr-20-seguranca-com-liquidos-e-inflamaveis-avancado-i/",
      },
      {
        title: "NR 20 – Inflamáveis e Combustíveis - AVANÇADO CLASSE 2",
        subtitle: "Avançado - Classe II",

        urlImage:
          "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2020/12/nr20a.jpg",
        price: "229,90",
        horary: "32 horas",
        avaliable: "12 meses",
        link: "https://grupoisafety.formasegead.com.br/Curso/treinamento-de-nr-20-avancado-ii/",
      },
    ],
  },
  {
    title:
      "NR 23 – Proteção e Combate a Incêndio - COMBATE E PROTEÇÃO CONTRA INCENDIO",
    subtitle: "Proteção contra incêndios no ambiente de trabalho",
    urlImage:
      "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2020/12/085c09d7b5324a6bb72e40b8078f8e6c.jpeg",
    description:
      "Esta norma regulamentadora é destinado a profissionais para conhecer os conceitos e aprimorar seus conhecimentos sobre a área de combate dos princípios de incêndios.",
    courses: [
      {
        title:
          "NR 23 – Proteção e Combate a Incêndio - COMBATE E PROTEÇÃO CONTRA INCENDIO",
        subtitle: "Proteção contra incêndios no ambiente de trabalho",

        price: "145,90",
        urlImage:
          "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2020/12/085c09d7b5324a6bb72e40b8078f8e6c.jpeg",
        horary: "16 horas",
        avaliable: "12 meses",
        link: "https://grupoisafety.formasegead.com.br/Curso/modelo-de-seguranca-do-trabalho-7/",
      },
      {
        title: "Primeiros Socorros",
        subtitle: "Bombeiros, brigadistas, etc",

        urlImage:
          "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2020/12/9c74dbd9b79f45b99b51065707428f87.jpeg",
        price: "150,00",
        horary: "10 horas",
        avaliable: "12 meses",
        link: "https://grupoisafety.formasegead.com.br/Curso/modelo-de-seguranca-do-trabalho/",
      },
    ],
  },

  {
    title: "Direção Defensiva",
    subtitle: "Veículos Leves e Pesados",
    description:
      "O Curso de Direção Defensiva aborda todo conteúdo sobre as técnicas de direção defensiva e o conjunto de medidas de prevenção de acidentes no trânsito.",
    urlImage:
      "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2021/02/Copia-de-Artes-Formaseg-8.png",
    courses: [
      {
        title: "Direção Defensiva",
        subtitle: "Veículos Leves e Pesados",

        price: "59,90",
        urlImage:
          "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2021/02/Copia-de-Artes-Formaseg-8.png",
        horary: "6 horas",
        avaliable: "12 meses",
        link: "https://grupoisafety.formasegead.com.br/Curso/direcao-defensiva/",
      },
    ],
  },

  {
    title:
      "Nr 33 – Segurança e Saúde em Espaços Confinados - SUPERVISOR DE ENTRADA – BÁSICO",
    subtitle:
      "Trabalhador autorizado, Vigia e Supervisor – Básico e reciclagem",
    description:
      "Esta norma tem como objetivo estabelecer os requisitos mínimos para identificação de espaços confinados e o reconhecimento, avaliação, monitoramento e controle dos riscos existentes, de forma a garantir permanentemente a segurança dos trabalhadores que interagem direta ou indiretamente nestes espaços.",
    urlImage:
      "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2022/08/Nr-33-Supervisor.jpeg",
    courses: [
      {
        title:
          "Nr 33 – Segurança e Saúde em Espaços Confinados - SUPERVISOR DE ENTRADA – BÁSICO",
        subtitle: "Básico",

        price: "169,90",
        urlImage:
          "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2022/08/Nr-33-Supervisor.jpeg",
        horary: "20 horas",
        avaliable: "12 meses",
        link: "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2022/08/Nr-33-Supervisor.jpeg",
      },
      {
        title:
          "Nr 33 – Segurança e Saúde em Espaços Confinados - SUPERVISOR DE ENTRADA – RECICLAGEM",
        subtitle: "Reciclagem",

        urlImage:
          "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2022/08/Nr-33-supervisor-Reciclagem.jpg",
        price: "99,90",
        horary: "4 horas",
        avaliable: "12 meses",
        link: "https://grupoisafety.formasegead.com.br/Curso/nr-33-supervisor-de-entrada-2022-2/",
      },
      {
        title:
          "Nr 33 – Segurança e Saúde em Espaços Confinados - TRABALHADOR AUTORIZADO E VIGIA – BÁSICO",
        subtitle: "Básico",

        price: "129,90",
        urlImage:
          "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2022/08/Nr-33-Trabalhador-autorizado-e-vigia.jpeg",
        horary: "8 horas",
        avaliable: "12 meses",
        link: "https://grupoisafety.formasegead.com.br/Curso/nr-33-trabalhador-autorizado-e-vigia-2022-2/",
      },
      {
        title:
          "Nr 33 – Segurança e Saúde em Espaços Confinados - TRABALHADOR AUTORIZADO E VIGIA – RECICLAGEM",
        subtitle: "Reciclagem",

        price: "99,90",
        urlImage:
          "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2022/08/Nr-33-Trabalhador-autorizado-e-vigia.jpeg",
        horary: "4 horas",
        avaliable: "12 meses",

        link: "https://grupoisafety.formasegead.com.br/Curso/nr-33-trabalhador-autorizado-e-vigia-reciclagem-2022-2/",
      },
    ],
  },
  {
    title: "Nr 35 – Trabalho em Altura - BÁSICO",
    subtitle: "Básico e Reciclagem",
    urlImage:
      "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2021/02/Copia-de-Artes-Formaseg-26.png",
    description:
      "Esta norma regulamentadora tem como objetivo capacitar o profissional para realizar trabalho em altura. Dentre elas envolve o planejamento, organização e execução da função, visa a segurança e a saúde dos trabalhadores envolvidos com atividades de risco de quedas. Deixando apto para o trabalho e regulamentado conforme as exigências no ministério do trabalho.",
    courses: [
      {
        title: "Nr 35 – Trabalho em Altura - BÁSICO",
        subtitle: "Básico",

        urlImage:
          "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2021/02/Copia-de-Artes-Formaseg-26.png",
        price: "129,90",
        horary: "8 horas",
        avaliable: "12 meses",
        link: "https://grupoisafety.formasegead.com.br/Curso/treinamento-de-nr-35/",
      },
      {
        title: "Nr 35 – Trabalho em Altura - RECICLAGEM",
        subtitle: "Reciclagem",
        urlImage:
          "https://grupoisafety.formasegead.com.br/wp-content/uploads/sites/410/2021/02/Copia-de-Artes-Formaseg-26.png",
        price: "99,90",
        horary: "8 horas",
        avaliable: "12 meses",
        link: "https://grupoisafety.formasegead.com.br/Curso/nr-35-seguranca-em-trabalho-em-altura-reciclagem/",
      },
    ],
  },
];
