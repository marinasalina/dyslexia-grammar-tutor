<script lang="ts">
	let sentence = $state('');
	let feedback = $state('');

	function checkSentence() {
		console.log('button clicked', sentence);
		feedback = 'Correct sentence: She goes to school. Use “goes” with she.';
	}
</script>

<h1>AI Grammar Tutor for Dyslexic Learners</h1>

<textarea bind:value={sentence}></textarea>

<button onclick={checkSentence}>Check Sentence</button>

<h2>Feedback:</h2>
<p style="background: yellow; color: black; padding: 20px; font-size: 24px;">
	{feedback}
</p>

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
	}
</style>
