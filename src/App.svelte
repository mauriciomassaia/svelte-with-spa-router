<script>
  import Router from 'svelte-spa-router'
  import Background from './components/Background.svelte';
  import Nav from './components/Nav.svelte';
  import Explore from './pages/explore.svelte';
  import Home from './pages/home.svelte';
  import Oddity from './pages/oddity/index.svelte'

  const routes = {
    '/home': Home,
    '/explore': Explore,
    '/oddity': Oddity,
    '/oddity/*': Oddity
  }
</script>

<Background />
<div>
 <Nav />
  <main>
    <h1>Hello svelte.</h1>
    <Router {routes} />
  </main>
</div>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

  div {
    z-index: 2;
  }
</style>