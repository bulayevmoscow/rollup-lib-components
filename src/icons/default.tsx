import { FC, ReactComponentElement } from 'react'
import * as Icons from './index'

// eslint-disable-next-line import/no-anonymous-default-export
export const Elem: FC<{name: keyof typeof Icons}> = ({name}) => {
    import {IconAce} from './index'
    const CIcon = Icons[name]
    return  <IconAce />
}