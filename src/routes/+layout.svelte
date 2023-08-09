<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import { onAuthStateChanged } from 'firebase/auth';
  import '../app.css';
  import { user } from '$lib/store/user';
  import { auth } from '$lib/utils/firebase';

  onAuthStateChanged(auth, (authUser) => {
    $user = authUser;
  });
</script>

<Navbar />
<slot />
