<script>
  import { getContext, onMount } from "svelte"

  const ctx = getContext('a')
  export let params = {}
  onMount(() => {
    console.log('oddity/intro onMount', ctx, params)
  })
</script>
<h3> Details nested page</h3>
<hr />
<p>{ctx.message}</p>