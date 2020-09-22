<script>
  import {replace} from 'svelte-spa-router'

  let active = false
  let interval

  const routes = [
    '/home',
    '/oddity',
    '/explore'
  ]

  function handleClick () {
    clearInterval(interval)
    active = !active
    console.log('handleClick', active)
    if (active) start()
  }

  function start () {
    console.log('start')
    interval = setInterval(() => {
      const route = routes.shift()
      routes.push(route)
      replace(route)
    }, 2000)
  }

</script>

<button on:click={handleClick}>
  AutoNav is {active ? 'ON' : 'OFF'}
</button>