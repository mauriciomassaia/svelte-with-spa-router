<script>
  import { location, push } from 'svelte-spa-router'
  import AutoNavigate from './AutoNavigate.svelte'
  import {changeOddityPage} from '../stores/oddity'

  const routes = [
    '/home',
    '/oddity',
    '/oddity/intro',
    '/oddity/details',
    '/explore',
  ]

  function handleRoute (value) {
    console.log('handleRoute', value)
    const a = value.split('/')
    console.log(a, a[1], a[1] === 'oddity', value.split('/'))
    if (a[1] === 'oddity') {
      changeOddityPage(a[2])
    } else {
      console.log('push ', `/${a[1]}`)
      push(`/${a[1]}`)
    }
  }

</script>

<div>
  <ul>
    {#each routes as route}
    <li class:current={route === $location}><a on:click={() => handleRoute(route)}>{route}</a></li>
    {/each}
  </ul>
  <AutoNavigate />
</div>

<style>
  div {
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    padding: 1rem;
    background-color: gold;
    margin: 0;
  }

  ul {
    list-style: none;
    margin: 0 0 2rem 0;
    padding: 0;
  }

  li {
    margin: 0.5rem 0;
    padding: 0.5rem;
    font-size: 1.25rem;
  }

  .current {
    background-color: lightblue;
  }
</style>