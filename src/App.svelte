<script>
  import Progression from './Progression.svelte'

  const date = new Date()
  const dayOfYear = date.getDayOfYear()
  const yearOfLife = date.getFullYear()
  const dayOfWeek = date.getDay()
  const hours = date.getHours()
</script>

<main>
  <Progression 
    name="year of life"
    total={83} 
    current={yearOfLife - 1992} 
    color="red"
  />
  <Progression
    name="day of year"
    total={365}
    current={dayOfYear}
    color="green"
  />
  <Progression
    name="day of week"
    total={7}
    current={dayOfWeek}
    color="yellow" 
  />
  <Progression
    name="hour of day"
    total={24}
    current={hours}
    color="blue" 
  />
</main>

<style>
	main {
    display: flex;
    flex-direction: column;
	}
</style>