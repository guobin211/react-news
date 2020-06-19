/**
 *  type alias.ts
 * @Date 2020-06-17
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project react-news
 */

export interface Person {
  name: string
  age: number
  city: string
}

type PersonKeys = keyof Person

// 可选操作
const jack: Partial<Person> = {
  name: "jack",
  age: 22
}
// 必选操作
const jams: Required<Partial<Person>> = {
  name: "jams",
  age: 11,
  city: "usa"
}

interface PageInfo {
  title: string
}

type Page = "home" | "about" | "contact"
// 组合记录属性
const spa: Record<Page, PageInfo> = {
  home: { title: "home" },
  about: { title: "about" },
  contact: { title: "contact" }
}

// 提取
type User = Pick<Person, "name" | "age">
const mary: User = {
  name: "nary",
  age: 22
}
// 排除
type UserName = Omit<Person, "age" | "city">
const tom: UserName = {
  name: "tom"
}
// 排除
type nameAge = Exclude<PersonKeys, "name" | "age">
const tony: nameAge = "city"
// Parameters参数类型推断
declare function f1(arg: { a: number; b: string }): void
// [{ a: number, b: string }]
type T4 = Parameters<typeof f1>

/**
 * 属性装饰器 enumerable
 * @param value
 * @constructor
 */
export function Enumerable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value
  }
}

/**
 * 属性装饰器 configurable
 * @param value
 * @constructor
 */
function Configurable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.configurable = value
  }
}
