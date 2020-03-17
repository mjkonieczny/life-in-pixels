<script>
  import Pixel from './Pixel.svelte'

  const dayOfYear = new Date().getDayOfYear()
</script>

<main>
  {#each Array(dayOfYear) as pixel}
    <Pixel active={true}/>
  {/each}
  {#each Array(365 - dayOfYear) as pixel}
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