<script>
  import Pixel from './Pixel.svelte'

  export let total
  export let current
</script>

<div>
  {#each Array(current) as pixel}
    <Pixel active={true}/>
  {/each}
  {#each Array(total - current) as pixel}
    <Pixel active={false}/>
  {/each}
</div>

<style>
	div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
	}
</style>