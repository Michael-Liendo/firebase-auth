<script lang="ts">
  import { user } from '$lib/store/user';
</script>

<h1 class="text-3xl font-bold m-5">
  <img src={$user?.photoURL} alt={$user?.displayName} class="rounded-full" />
  Hi {$user?.displayName}!
</h1>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
