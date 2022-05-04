/* eslint-disable @typescript-eslint/ban-types */
// @ts-nocheck

// Solo any acepta las asignación de un valor unknown
let unknownValue: unknown
const unknownV: unknown = unknownValue // OK
const anyV: any = unknownValue // OK
const booleanV: boolean = unknownValue // Error
const numberV: number = unknownValue // Error
const stringV: string = unknownValue // Error
const objectV: object = unknownValue // Error
const arrayAnyV: any[] = unknownValue // Error
const fnV: Function = unknownValue // Error

export {}
