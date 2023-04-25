import {  ListPeopleCourseItem } from "@/constants/types"

export type PeopleCoursesItemProps = {
    item: ListPeopleCourseItem,
    onOpen: (item: ListPeopleCourseItem)=> void
}