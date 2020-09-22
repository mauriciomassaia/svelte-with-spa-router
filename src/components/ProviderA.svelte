<script>
import { setContext } from "svelte";
  setContext('a', { message: 'This message is inside ProviderA, use key: "a" to access it via getContext' })
</script>

<slot />