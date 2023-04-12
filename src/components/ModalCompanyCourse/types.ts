import { CompanyCoursesInfo } from "@/constants/types"

export type ModalCompanyCoursesProps = {
    item?: CompanyCoursesInfo,
    isOpen: boolean
    onClose: ()=> void
}