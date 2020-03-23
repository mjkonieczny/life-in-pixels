<script>
  import Progression from './Progression.svelte'

  const date = new Date()
  const dayOfYear = date.getDayOfYear()
  const yearOfLife = date.getFullYear()
  const dayOfWeek = date.getDay()
  const hours = date.getHours()
</script>

<main>
  <Progression total={83} current={yearOfLife - 1992} color="red"/>
  <Progression total={365} current={dayOfYear} color="green" />
  <Progression total={7} current={dayOfWeek} color="yellow" />
  <Progression total={24} current={hours} color="blue" />
</main>

<style>
	main {
    display: flex;
    flex-direction: column;
	}
</style>