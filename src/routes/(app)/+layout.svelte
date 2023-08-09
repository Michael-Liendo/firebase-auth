<script lang="ts">
  import { goto } from '$app/navigation';
  import { user } from '$lib/store/user';
  import { onMount } from 'svelte';

  onMount(() => {
    if (!$user?.uid) {
      goto('/login');
    }
  });
</script>

<slot />
