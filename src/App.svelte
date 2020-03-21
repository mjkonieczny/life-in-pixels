<script>
  import Progression from './Progression.svelte'

  const date = new Date()
  const dayOfYear = date.getDayOfYear()
  const yearOfLife = date.getFullYear()
</script>

<main>
  <Progression total={83} current={yearOfLife - 1992} color="red"/>
  <Progression total={365} current={dayOfYear} color="green" />
</main>

<style>
	main {
    display: flex;
    flex-direction: column;
	}
</style>