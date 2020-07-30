import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react"
import classNames from "classnames"

export type ButtonSize = "lg" | "sm"

export type ButtonType = "primary" | "default" | "danger" | "link"

interface BaseButtonProps {
  children: React.ReactNode
  className?: string
  /**设置 Button 的禁用 */
  disabled?: boolean
  /**设置 Button 的尺寸 */
  size?: ButtonSize
  /**设置 Button 的类型 */
  btnType?: ButtonType
  href?: string
}

type ButtonAndAnchor = AnchorHTMLAttributes<HTMLAnchorElement> & ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = Partial<BaseButtonProps & ButtonAndAnchor>

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { btnType, className, disabled, size, children, href, ...restProps } = props
  const classes = classNames("btn", className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === "link" && disabled
  })
  if (btnType === "link" && href) {
    return (
      <a href={href} className={classes} {...restProps}>
        {children}
      </a>
    )
  } else {
    return (
      <button disabled={disabled} className={classes} {...restProps}>
        {children}
      </button>
    )
  }
}

export default Button
