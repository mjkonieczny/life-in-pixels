<script>
  import Pixel from './Pixel.svelte'

  export let name = ""
  export let total
  export let current
  export let color
</script>

<span>{name}</span>
<div>
  {#each Array(current) as pixel}
    <Pixel color={color}/>
  {/each}
  {#each Array(total - current) as pixel}
    <Pixel color="white"/>
  {/each}
</div>

<style>
  span {
    margin: 0.2em;
  }

	div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
	}
</style>