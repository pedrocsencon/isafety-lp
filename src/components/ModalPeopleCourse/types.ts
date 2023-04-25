import { ListPeopleCourseItem, PeopleCoursesInfo } from "@/constants/types"

export type ModalPeopleCoursesProps = {
    item?: ListPeopleCourseItem,
    isOpen: boolean
    onClose: ()=> void
}