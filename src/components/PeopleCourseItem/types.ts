import {  PeopleCoursesInfo } from "@/constants/types"

export type PeopleCoursesItemProps = {
    item: PeopleCoursesInfo,
    onOpen: (item: PeopleCoursesInfo)=> void
}