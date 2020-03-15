<script>
  import Pixel from './Pixel.svelte'

	let pixels = new Array(50);
</script>

<main>
  {#each pixels as pixel}
    <Pixel/>
  {/each}
</main>

<style>
	main {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
	}
</style>