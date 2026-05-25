import { json } from '@sveltejs/kit';
import OpenAI from 'openai';
import { OPENAI_API_KEY } from '$env/static/private';

const openai = new OpenAI({
	apiKey: OPENAI_API_KEY
});

export async function POST({ request }) {
	try {
		const { sentence } = await request.json();

		const response = await openai.chat.completions.create({
			model: 'gpt-4o-mini',
			messages: [
				{
					role: 'system',
					content:
						'You are a friendly English grammar tutor for dyslexic learners. Correct grammar simply and explain clearly.'
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
	} catch (error: any) {
		console.error('OPENAI ERROR:', error);

		return json(
			{
				feedback: `AI error: ${error.message || 'unknown error'}`
			},
			{ status: 500 }
		);
	}
}
