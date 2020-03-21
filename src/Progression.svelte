<script>
  import Pixel from './Pixel.svelte'

  export let total
  export let current
  export let color
</script>

<div>
  {#each Array(current) as pixel}
    <Pixel color={color}/>
  {/each}
  {#each Array(total - current) as pixel}
    <Pixel color="white"/>
  {/each}
</div>

<style>
	div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
	}
</style>