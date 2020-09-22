import { replace, location } from 'svelte-spa-router'
import { writable } from 'svelte/store'

console.log(localStorage.getItem('oddity-page'))

export let page = writable(localStorage.getItem('oddity-page') || '')

let locationValue
location.subscribe(value => {
  console.log('store/oddity location', value)
  locationValue = value
})

export function changeOddityPage (value) {
  console.log('changeOddityPage', value, 'location', locationValue)
  if (locationValue.indexOf('oddity') === -1) {
    replace('/oddity')
  }

  localStorage.setItem('oddity-page', value)
  page.set(value)
}