<script>
  import { location } from 'svelte-spa-router'
  import AutoNavigate from './AutoNavigate.svelte'

  const routes = [
    '/home',
    '/oddity',
    '/oddity/intro',
    '/explore',
  ]
</script>

<div>
  <ul>
    {#each routes as route}
    <li class:current={route === $location}><a href="#{route}">{route}</a></li>
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