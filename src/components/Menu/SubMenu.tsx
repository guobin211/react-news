import React from "react"

export interface SubMenuProps {
  index?: string
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
  return <div>SubMenu</div>
}

SubMenu.displayName = "SubMenu"
export default SubMenu
