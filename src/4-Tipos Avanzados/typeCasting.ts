/* eslint-disable @typescript-eslint/no-extra-semi */
const userinputElement = document.getElementById(
  'user-input',
)! as HTMLInputElement

userinputElement.value = 'Hey'

const userinputElement2 = document.getElementById('user-input')

if (userinputElement2) {
  ;(userinputElement2 as HTMLInputElement).value = 'Hey'
}

export {}
