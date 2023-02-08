import { GitHubStats } from "./RepoStats";

import { LinkTo } from "@/lib/components/Anchor";

export const Footer = () => (
	<footer className="sticky bottom-0 text-sm text-center pb-5">
		{/* @ts-expect-error async Server Component */}
		<GitHubStats />
		Made with <LinkTo href="https://nextjs.org">Next.js</LinkTo> &bull; View source on{" "}
		<LinkTo href="https://github.com/sreetamdas/sreetamdas.com">GitHub</LinkTo>{" "}
		<span className="hidden md:inline-block">&bull;</span> <br className="md:hidden" />
		Find me on <LinkTo href="https://twitter.com/_SreetamDas">Twitter</LinkTo>
		<p className="pt-8">I hope you have a very nice day :)</p>
	</footer>
);
