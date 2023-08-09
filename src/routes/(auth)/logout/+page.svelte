<script lang="ts">
  import { goto } from '$app/navigation';
  import { user } from '$lib/store/user';
  import { auth } from '$lib/utils/firebase';
  import { signOut } from 'firebase/auth';

  const logout = async () => {
    try {
      await signOut(auth);
      $user = null;
      goto('/login');
    } catch (error) {
      console.error(error);
    }
  };
  logout();
</script>
