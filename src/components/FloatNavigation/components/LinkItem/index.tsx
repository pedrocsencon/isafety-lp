import { LinkItemProps } from "./types";
import { Link } from 'react-scroll'
import { useCallback, useEffect, useMemo, useState } from "react";
import { Text, useBoolean } from "@chakra-ui/react";

export default function LinkItem({ text, to, currentLink, handleCurrentLink }: LinkItemProps) {

    const shouldActive = useMemo(()=> currentLink === to, [currentLink, text])

    return (
        <Link isDynamic spy onSetActive={handleCurrentLink} to={to} smooth offset={-50}>
            <Text cursor='pointer' textColor='black' fontWeight={shouldActive? 'bold' : 'normal'}>{text}</Text>
        </Link>
    )
}