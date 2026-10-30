<script>
	import About from '$lib/landingPage/About.svelte';
	import { jsonLd, person } from '$lib/seo.js';
</script>

<svelte:head>
	<title>Rahul — Full-Stack Developer</title>
	<meta
		name="description"
		content="I’m Rahul, a full-stack developer. I design and build interactive maps, data visualization and generative art, with AI in my workflow."
	/>
	<meta property="og:title" content="Rahul — Full-Stack Developer" />
	<meta
		property="og:description"
		content="I design and build interactive maps, data visualization and generative art, with AI in my workflow."
	/>
	<meta property="og:image" content="https://rahul-lilac-one.vercel.app/og.png" />
	{@html jsonLd(person)}
</svelte:head>

<About />
