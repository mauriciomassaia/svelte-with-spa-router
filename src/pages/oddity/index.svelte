<script>
  import { onDestroy } from 'svelte'
  import ProviderA from '../../components/ProviderA.svelte'
  import { page } from '../../stores/oddity'
  import Details from './details.svelte'
  import Intro from './intro.svelte'

  const map =  new Map()
  map.set('intro', Intro)
  map.set('details', Details)

  let curComponent

  let unsub = page.subscribe(value => {
    console.log(value)
    curComponent = value
  })

  console.log('oddity/index created')

  onDestroy(() => {
    unsub()
    map.clear()
    console.log('oddity/index destroyed')
  })
</script>
<p>Oddity Page</p>
<ProviderA>
  {#if curComponent}{curComponent}{/if}
</ProviderA>