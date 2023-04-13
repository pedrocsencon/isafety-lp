import { PeopleCoursesInfo } from "@/constants/types"

export type ModalPeopleCoursesProps = {
    item?: PeopleCoursesInfo,
    isOpen: boolean
    onClose: ()=> void
}