<script>
  import Pixel from './Pixel.svelte'

	let activePixels = new Array(50);
	let inactivePixels = new Array(50);
</script>

<main>
  {#each activePixels as pixel}
    <Pixel active={true}/>
  {/each}
  {#each inactivePixels as pixel}
    <Pixel active={false}/>
  {/each}
</main>

<style>
	main {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
	}
</style>