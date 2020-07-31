import React, { useContext } from "react"
import { MenuContext } from "@/components/Menu/Menu"
import classNames from "classnames"

export interface MenuItemProps {
  index?: string
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { children, index } = props
  const context = useContext(MenuContext)
  const classes = classNames("menu-item", {
    "is-active": context.index === index
  })
  const menuClick = () => {
    if (context.onSelect && index) {
      context.onSelect(index)
    }
  }
  return (
    <li className={classes} onClick={menuClick}>
      MenuItem {children}
    </li>
  )
}
MenuItem.displayName = "MenuItem"
export default MenuItem
