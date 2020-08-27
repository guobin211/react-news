import React, { createContext, useState } from "react"
import { MenuItemProps } from "@/components/Menu/MenuItem"
import "./_style.css"

export interface MenuProps {
  defaultIndex?: string
}

export interface IMenuContext {
  index: string
  onSelect?: (index: string) => void
}

export const MenuContext = createContext<IMenuContext>({ index: "0" })

const Menu: React.FC<MenuProps> = (props) => {
  const { children } = props
  const [currentActive, setActive] = useState(props.defaultIndex)

  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : "0",
    onSelect: (index) => {
      setActive(index)
    }
  }

  const renderChildren = () => {
    return React.Children.map(children, (child: any, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type
      if (displayName === "MenuItem" || displayName === "SubMenu") {
        return React.cloneElement(childElement, {
          index: index.toString()
        })
      } else {
        console.error("Warning: Menu has a child which is not a MenuItem component")
      }
    })
  }

  return (
    <ul className="menu menu-ul">
      <MenuContext.Provider value={passedContext}>{renderChildren()}</MenuContext.Provider>
    </ul>
  )
}

export default Menu
