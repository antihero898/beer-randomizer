<script>
	import { BeerPanel } from './BeerPanel.svelte';
	import { FilterButton } from './FilterButton.svelte';
	export let beerList = [];
	const FilterButtons = [
		{
			id: 'brewery',
			label: 'Sort By Brewery'
		},
		{
			id: 'name',
			label: 'Sort by Name'
		},
		{
			id: 'style',
			label: 'Sort by Style'
		},
		{
			id: 'alcohol',
			label: 'Sort by Alcohol Percentage'
		}
	];
	export let filterText = '';
</script>

<div class="app">
	<div class="filter-outer-container">
		<div classs="filter-container">
			<div class="filter-title-container">
				<span>
					Filter Options
				</span>
			</div>
			<div class="filter-container">
				<div>
					<span>Filter By Text (given selected filter):</span>
					<input 
						on:change={({ target: { value } = {}} = {}) => {
							filterText = value;
						}}
					/>
				</div>
			</div>
			<div class="filter-button-container">
			{#each FilterButtons as filterButton (filterButton.id)}
				<!-- TODO -->
				<FilterButton/>
			{/each}
			</div>
		</div>
	</div>
	<div>
		{#if beerList.length > 0}
			{#each beerList as beer (beer.id)}
			<!-- TODO -->
				<BeerPanel {beer}/>
			{/each}
		{/if}
	</div>
</div>

<style>
	.filter-container {
		margin: 10px;
	}
</style>