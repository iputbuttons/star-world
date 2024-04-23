import { useTheme } from 'hooks/useTheme'
import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

export const Next = (props: SvgProps) => {
  const { colors } = useTheme()

  return (
    <Svg width={18} height={19} fill='none' {...props}>
      <Path
        fill={colors.black}
        d='M12.131 10.25H3v-1.5h9.131l-4.2-4.2L9 3.5l6 6-6 6-1.069-1.05 4.2-4.2Z'
      />
    </Svg>
  )
}
