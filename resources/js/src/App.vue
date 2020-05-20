<script>
import Header from '@app/components/Header.vue';

export default {
	components: {
		'app-header': Header,
	},
	data() {
		return {
			msg: 'Laravel Vuejs App',
		};
	},
};
</script>

<template>
	<div>
		<app-header />
		<b-container>
			<b-row>
				<b-col>
					<div>
						<router-view />
					</div>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>
