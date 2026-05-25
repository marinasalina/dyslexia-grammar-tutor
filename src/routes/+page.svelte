<script lang="ts">
	let sentence = $state('');
	let feedback = $state('');
	let loading = $state(false);

	async function checkSentence() {
		loading = true;
		feedback = '';

		const res = await fetch('/api/check', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ sentence })
		});

		const data = await res.json();
		feedback = data.feedback;
		loading = false;
	}
</script>

<h1>AI Grammar Tutor for Dyslexic Learners</h1>

<p>Write an English sentence and AI will explain the grammar simply.</p>

<textarea bind:value={sentence} placeholder="Example: She go to school"></textarea>

<button onclick={checkSentence}>
	{loading ? 'Checking...' : 'Check Sentence'}
</button>

{#if feedback}
	<div class="feedback">
		{feedback}
	</div>
{/if}

<style>
	textarea {
		display: block;
		width: 100%;
		height: 120px;
		margin: 20px 0;
		font-size: 20px;
	}

	button {
		font-size: 18px;
		padding: 10px 20px;
	}

	.feedback {
		margin-top: 20px;
		padding: 20px;
		background: lightgreen;
		color: black;
		font-size: 22px;
		border: 3px solid green;
		white-space: pre-wrap;
	}
</style>
