import { json } from '@sveltejs/kit';
import OpenAI from 'openai';
import { OPENAI_API_KEY } from '$env/static/private';

const openai = new OpenAI({
	apiKey: OPENAI_API_KEY
});

export async function POST({ request }) {
	const { sentence } = await request.json();

	const response = await openai.chat.completions.create({
		model: 'gpt-4o-mini',
		messages: [
			{
				role: 'system',
				content:
					'You are an English grammar tutor for dyslexic learners. Give simple grammar correction and explanation.'
			},
			{
				role: 'user',
				content: sentence
			}
		]
	});

	return json({
		feedback: response.choices[0].message.content
	});
}
