<script>
  export let active
</script>

<div class={active ? 'active box' : 'inactive box'}/>

<style>
  .box {
    height: 2em;
    width: 2em;
    margin: 0.2em;
  }
  
  .active {
    background: red;
  }
  
  .inactive {
    background: white;
    outline: 1px solid grey;
  }
</style>