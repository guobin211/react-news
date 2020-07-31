import React from "react"
import Menu, { MenuProps } from "@/components/Menu/Menu"
import MenuItem, { MenuItemProps } from "@/components/Menu/MenuItem"
import SubMenu, { SubMenuProps } from "@/components/Menu/SubMenu"

export type MenuComponent = React.FC<MenuProps> & {
  Item: React.FC<MenuItemProps>
  SubMenu: React.FC<SubMenuProps>
}

const MenuGroup = Menu as MenuComponent
MenuGroup.Item = MenuItem
MenuGroup.SubMenu = SubMenu

export default MenuGroup
