<script lang="ts" setup>
	import type { ButtonProps } from './types';

	defineProps<ButtonProps>();
</script>

<template>
	<button
		class="button"
		:class="[size, color]"
		:disabled="disabled"
		@click="onClick"
	>
		<slot name="left-icon" />
		<slot />
		<slot name="right-icon" />
	</button>
</template>

<style scoped>
	.button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		font-weight: 500;
		border: none;
		cursor: pointer;
		transition: all 0.2s ease;
		color: #ffffff;
		outline: none;
		padding: 0 16px;
	}

	.button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.small {
		height: 32px;
		font-size: 14px;
		border-radius: 8px;
	}

	.medium {
		height: 36px;
		font-size: 16px;
		border-radius: 10px;
	}

	.large {
		height: 40px;
		font-size: 18px;
		border-radius: 12px;
	}

	.primary {
		background: #535bf2;
	}

	.primary:hover:not(:disabled) {
		background: #4347d9;
	}

	.secondary {
		background: #a7a7a7;
	}

	.secondary:hover:not(:disabled) {
		background: #959595;
	}
</style>
