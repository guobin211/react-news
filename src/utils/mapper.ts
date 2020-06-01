/**
 * 对象设置默认属性
 * @param target 目标对象
 * @param props 对象的 key | keys
 * @param value 默认值
 */
export function setDefaultProp<T>(target: T, value: any, ...props: (keyof T)[]) {
  for (const key of props) {
    target[key] = value
  }
}
