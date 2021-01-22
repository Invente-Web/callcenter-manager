import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome"

export const Icon: React.FC<FontAwesomeIconProps> = (props) => {
  return <FontAwesomeIcon fixedWidth {...props} />
}