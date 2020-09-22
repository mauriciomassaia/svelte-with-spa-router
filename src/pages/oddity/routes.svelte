<script>
  import Router, {location} from 'svelte-spa-router'
  import ProviderA from '../../components/ProviderA.svelte'
  import Intro from './intro.svelte'
  import Index from './index.svelte'
  import { onDestroy, onMount, setContext } from 'svelte';
  import Details from './details.svelte';


  export let params = {}

  const prefix = ''
  const routes = {
    '/oddity/intro': Intro,
    '/oddity/index': Index,
    '/oddity/details': Details
  }

  setContext('a', { message: 'This message is inside ProviderA, use key: "a" to access it via getContext' })

  let unsub

  onMount(() => {
    console.log('routes / onMount')
    unsub = location.subscribe(value => console.log('location', value))
  })

  onDestroy(() => {
    console.log('routes / onDestroy')
    setContext('a', null)
    unsub()
  })
  // export const params = ''
  console.log('/ODDITY params', params)
</script>
<Router {routes} {prefix} {params} />