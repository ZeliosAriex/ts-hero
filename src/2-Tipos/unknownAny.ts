/* eslint-disable @typescript-eslint/ban-types */

// Como any desactiva el typechecking, no hay problemas
let anyValue: any
const unknownV: unknown = anyValue // OK
const anyV: any = anyValue // OK
const booleanV: boolean = anyValue // Ok
const numberV: number = anyValue // Ok
const stringV: string = anyValue // Ok
const objectV: object = anyValue // Ok
const arrayAnyV: any[] = anyValue // Ok
const fnV: Function = anyValue // Ok

export {}
