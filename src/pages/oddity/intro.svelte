<script>
  import { getContext } from "svelte"

  const ctx = getContext('a')
  export const params = null
</script>

<h3> Intro nested page</h3>
<hr />
<p>{ctx.message}</p>