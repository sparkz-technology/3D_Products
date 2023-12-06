import { useSnapshot } from 'valtio'
import state from '../store'
import { getContrastingColor } from '../config/helpers'

type CustomButtonProps = {
  type: 'filled' | 'outlined'
  title: string
  handleClick: () => void
  customStyle?: string
}

const CustomButton: React.FC<CustomButtonProps> = ({
  type,
  title,
  handleClick,
  customStyle = '',
}) => {
  const snap = useSnapshot(state)
  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyle}`}
      onClick={handleClick}
      style={{
        backgroundColor: type === 'filled' ? snap.color : 'transparent',
        color: type === 'filled' ? getContrastingColor(snap.color) : snap.color,
        borderColor: type === 'outlined' ? snap.color : 'transparent',
      }}
    >
      {title}
    </button>
  )
}

export default CustomButton
