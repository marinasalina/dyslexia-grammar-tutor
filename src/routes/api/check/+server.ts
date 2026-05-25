import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	const { sentence } = await request.json();

	return json({
		feedback: `Test works. You wrote: ${sentence}`
	});
}
