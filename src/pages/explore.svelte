<script>
  import { getContext } from "svelte"

  const ctx = getContext('a')
</script>

<p>Explore</p>
<hr />
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque laboriosam natus aperiam quae deleniti animi cupiditate molestiae saepe nulla laborum eum impedit autem, vel commodi sunt? Consequatur iusto eveniet commodi!</p>

{#if ctx}
<p>
  context a message: {ctx.message}
</p>
{:else}
<p>
  Cannot access context a
</p>
{/if}