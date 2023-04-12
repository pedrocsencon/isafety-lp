export enum Availability {
    Online = 'On-line',
    InCompany = 'In-company',
}


export type CoursesInfo = {
    title: string;
    subtitle: string;
    description: string;
    horary: string;
}

export type CompanyCoursesInfo = CoursesInfo & {
    availability: number;
}

export type PeopleCoursesInfo = CoursesInfo &{
    price: string;
    link: string;
    avaliable: string
}