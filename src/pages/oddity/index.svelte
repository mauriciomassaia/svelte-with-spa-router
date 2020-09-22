<script>
  import Router from 'svelte-spa-router'
  import ProviderA from '../../components/ProviderA.svelte'
  import Intro from './intro.svelte'

  const prefix = '/oddity'
  const routes = {
    '/intro': Intro,
  }

  export const params = ''
</script>

<h2>Oddity/</h2>
<ProviderA>
  <Router {routes} {prefix}/>
</ProviderA>
