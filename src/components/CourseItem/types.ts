import { CompanyCoursesInfo } from "@/constants/types"

export type CompanyCoursesItemProps = {
    item: CompanyCoursesInfo,
    onOpen: (item: CompanyCoursesInfo)=> void
}