export const ecosystemData = {
	categories: [
		{
			id: "apps",
			name: "Apps",
			subcategories: [
				{ id: "consumer", name: "Consumer" },
				{ id: "defi", name: "DeFi" },
				{ id: "gaming", name: "Gaming" },
				{ id: "art", name: "Art" },
				{ id: "other", name: "Other" },
			],
		},
		{
			id: "dev-tooling",
			name: "Dev Tooling",
			subcategories: [
                { id: "chains", name: "Chains" },
				{ id: "analytics", name: "Analytics" },
				{ id: "cross-chain", name: "Cross chain" },
				{ id: "explorer", name: "Explorer" },
				{ id: "infrastructure", name: "Infrastructure" },
                { id: "rollup-stacks", name: "Rollup stacks" },
				{ id: "raas", name: "RaaS" },
				{ id: "hubs", name: "Hubs" },
				{ id: "wallet", name: "Wallet" },
			],
		},
	],
	items: [
		// Consumer
		{
			title: "Towns",
			description: "The blockchain for communication.",
			image: "/images/app/ecosystem/towns.png",
			url: "https://www.towns.com/",
			chainIcon: "",
			chainIconLink: "",
			categories: ["consumer"],
			subcategory: "apps",
		},
		{
			title: "Dscvr",
			description: "The social home for Web3 communities.",
			image: "/images/app/ecosystem/dscvr.png",
			url: "https://dscvr.one/",
			chainIcon: "",
			chainIconLink: "",
			categories: ["consumer"],
			subcategory: "apps",
		},
		{
			title: "Stack",
			description: "Stack is a platform for creating and managing points systems.",
			image: "/images/app/ecosystem/stack.png",
			url: "https://www.stack.so/",
			chainIcon: "/images/app/ecosystem/base-chain-icon.png",
			chainIconLink: "https://www.base.org/",
			categories: ["consumer"],
			subcategory: "apps",
		},
		{
			title: "Zaar",
			description: "The fun network.",
			image: "/images/app/ecosystem/zaar.png",
			url: "https://gitbook.zaar.market/",
			chainIcon: "/images/app/ecosystem/initia-chain-icon.png",
			chainIconLink: "https://initia.xyz/",
			categories: ["consumer"],
			subcategory: "apps",
		},

		// DeFi
		{
			title: "Orderly",
			description: "Cloud liquidity. Trade anything, anywhere.",
			image: "/images/app/ecosystem/orderly.png",
			url: "https://orderly.network/",
			chainIcon: "",
			chainIconLink: "",
			categories: ["defi", "infrastructure"],
			subcategory: "apps",
		},
		{
			title: "Flame",
			description: "Celestia native DeFi.",
			image: "/images/app/ecosystem/flame.png",
			url: "https://flame.astria.org/swap",
			chainIcon: "/images/app/ecosystem/astria-chain-icon.png",
			chainIconLink: "https://www.astria.org/",
			categories: ["defi"],
			subcategory: "apps",
		},
		{
			title: "Foundation Network",
			description: "The First AI Marketplace on Blockchains. Buy. Sell. Borrow. Power of AI at your disposal.",
			image: "/images/app/ecosystem/foundation-network.png",
			url: "https://foundation.network/",
			chainIcon: "",
			chainIconLink: "",
			categories: ["defi"],
			subcategory: "apps",
		},
        {
			title: "Orca",
			description: "Orca is the go-to place to trade tokens and provide liquidity on Solana (and Eclipse!).",
			image: "/images/app/ecosystem/orca.png",
			url: "https://www.orca.so/?chainId=eclipse",
			chainIcon: "/images/app/ecosystem/eclipse-chain-icon.png",
			chainIconLink: "https://www.eclipse.xyz/",
			categories: ["defi"],
			subcategory: "apps",
		},
        {
			title: "Polymarket",
			description: "Trade politics, news, culture & tech.",
			image: "/images/app/ecosystem/polymarket.png",
			url: "https://eclipse.skatechain.org/polymarket",
			chainIcon: "/images/app/ecosystem/eclipse-chain-icon.png",
			chainIconLink: "https://www.eclipse.xyz/",
			categories: ["defi"],
			subcategory: "apps",
		},
        {
			title: "Blackwing",
			description: "Your favorite trader’s favorite app.",
			image: "/images/app/ecosystem/blackwing.png",
			url: "https://blackwing.fi/",
			chainIcon: "/images/app/ecosystem/initia-chain-icon.png",
			chainIconLink: "https://initia.xyz/",
			categories: ["defi"],
			subcategory: "apps",
		},
        {
			title: "Contro",
			description: "Liquid markets for any asset.",
			image: "/images/app/ecosystem/contro.png",
			url: "https://www.contro.tech/",
			chainIcon: "/images/app/ecosystem/initia-chain-icon.png",
			chainIconLink: "https://initia.xyz/",
			categories: ["defi"],
			subcategory: "apps",
		},
        {
			title: "Echelon",
			description: "Move Lending | Borrow & Lend Against Yield-Bearing Assets, BTC & RWAs.",
			image: "/images/app/ecosystem/echelon.png",
			url: "https://echelon.market/",
			chainIcon: "/images/app/ecosystem/initia-chain-icon.png",
			chainIconLink: "https://initia.xyz/",
			categories: ["defi"],
			subcategory: "apps",
		},
        {
			title: "MilkyWay",
			description: "The ultimate moo-dular staking portal for Liquid Staking and Restaking.",
			image: "/images/app/ecosystem/milkyway.png",
			url: "https://www.milkyway.zone/",
			chainIcon: "/images/app/ecosystem/initia-chain-icon.png",
			chainIconLink: "https://initia.xyz/",
			categories: ["defi"],
			subcategory: "apps",
		},

		// Gaming
		{
			title: "Cloudlines",
			description: "A game as an autonomous artwork where you foster friendships, meet your future partner, and simply enjoy playing together.",
			image: "/images/app/ecosystem/cloudlines.png",
			url: "https://cloudlines.xyz/",
			chainIcon: "",
			chainIconLink: "",
			categories: ["gaming"],
			subcategory: "apps",
		},
        {
			title: "Kamigotchi",
			description: "An onchain universe.",
			image: "/images/app/ecosystem/kamigotchi.png",
			url: "https://playtest.kamigotchi.io/",
			chainIcon: "/images/app/ecosystem/initia-chain-icon.png",
			chainIconLink: "https://initia.xyz/",
			categories: ["gaming"],
			subcategory: "apps",
		},
        {
			title: "Battle for Blockchain",
			description: "Onchain strategy game, set in the world of culinaris.",
			image: "/images/app/ecosystem/battle-for-blockchain.png",
			url: "https://battleforblockchain.com/",
			chainIcon: "/images/app/ecosystem/initia-chain-icon.png",
			chainIconLink: "https://initia.xyz/",
			categories: ["gaming"],
			subcategory: "apps",
		},
        {
			title: "Civitia",
			description: "The first onchain finance board game.",
			image: "/images/app/ecosystem/civitia.png",
			url: "https://app.civitia.org/",
			chainIcon: "/images/app/ecosystem/initia-chain-icon.png",
			chainIconLink: "https://initia.xyz/",
			categories: ["gaming"],
			subcategory: "apps",
		},
        {
			title: "Infinity Ground",
			description: "Enable everyone to create interactive entertainment 10x faster and easier with AI x Web3.",
			image: "/images/app/ecosystem/infinity-ground.png",
			url: "https://www.infinityg.ai/",
			chainIcon: "/images/app/ecosystem/initia-chain-icon.png",
			chainIconLink: "https://initia.xyz/",
			categories: ["gaming"],
			subcategory: "apps",
		},


		// Art
		{
			title: "Celestials",
			description: "Modular usernames with unique, generative artworks.",
			image: "/images/app/ecosystem/celestials.png",
			url: "https://celestials.id/",
			chainIcon: "/images/app/ecosystem/forma-chain-icon.png",
			chainIconLink: "https://forma.art/",
			categories: ["art"],
			subcategory: "apps",
		},
		{
			title: "Modularium",
			description: "Creative playground for the modular ecosystem.",
			image: "/images/app/ecosystem/modularium.png",
			url: "https://modularium.art/",
			chainIcon: "/images/app/ecosystem/forma-chain-icon.png",
			chainIconLink: "https://forma.art/",
			categories: ["art"],
			subcategory: "apps",
		},
        {
			title: "Kudzu",
			description: "Crowd-powered arcade.",
			image: "/images/app/ecosystem/kudzu.png",
			url: "https://kudzu.christmas/",
			chainIcon: "/images/app/ecosystem/forma-chain-icon.png",
			chainIconLink: "https://forma.art/",
			categories: ["art"],
			subcategory: "apps",
		},
        {
			title: "Highlight",
			description: "A place for collecting, creating, and trading digital artifacts.",
			image: "/images/app/ecosystem/highlight.png",
			url: "https://highlight.xyz/forma",
			chainIcon: "/images/app/ecosystem/forma-chain-icon.png",
			chainIconLink: "https://forma.art/",
			categories: ["art"],
			subcategory: "apps",
		},
        {
			title: "Forma",
			description: "The sovereign network for onchain creations.",
			image: "/images/app/ecosystem/forma.png",
			url: "https://forma.art/",
			chainIcon: "",
			chainIconLink: "",
			categories: ["art", "chains"],
			subcategory: "apps",
		},
        {
			title: "Scope",
			description: "Native NFT launchpad for Eclipse.",
			image: "/images/app/ecosystem/scope.png",
			url: "https://scopenft.xyz/",
			chainIcon: "/images/app/ecosystem/forma-chain-icon.png",
			chainIconLink: "https://forma.art/",
			categories: ["art"],
			subcategory: "apps",
		},

		// Other
		{
			title: "Echos.fun",
			description: "Launch AI agents with onchain trading and Twitter posting capability.",
			image: "/images/app/ecosystem/echos-fun.png",
			url: "https://beta.echos.fun/",
			chainIcon: "",
			chainIconLink: "",
			categories: ["other"],
			subcategory: "apps",
		},
		{
			title: "K2",
			description: "K2 is a modular, restaked layer 2 blockchain with native risk management and AI infrastructure.",
			image: "/images/app/ecosystem/k2.png",
			url: "http://karak.network/",
			chainIcon: "",
			chainIconLink: "",
			categories: ["other"],
			subcategory: "apps",
		},

        // Chains
		{
			title: "Eclipse",
			description: "Solana on Ethereum - The best place for apps.",
			image: "/images/app/ecosystem/eclipse.png",
			url: "https://www.eclipse.xyz/",
			chainIcon: "",
			chainIconLink: "",
			categories: ["chains"],
			subcategory: "dev-tooling",
		},
        {
			title: "Manta Network",
			description: "The largest modular L2.",
			image: "/images/app/ecosystem/manta.png",
			url: "https://manta.network/",
			chainIcon: "",
			chainIconLink: "",
			categories: ["chains"],
			subcategory: "dev-tooling",
		},
        {
			title: "RARI Chain",
			description: "The first creator-centric chain for the next generation of NFT use cases.",
			image: "/images/app/ecosystem/rari.png",
			url: "https://rarichain.org/",
			chainIcon: "",
			chainIconLink: "",
			categories: ["chains"],
			subcategory: "dev-tooling",
		},

		// Analytics
		{
			title: "Celestia Data",
			description: "Analytics platform for Celestia network data.",
			image: "/images/app/ecosystem/celestia-data.png",
			url: "https://celestiadata.com/",
			chainIcon: "",
			chainIconLink: "",
			categories: ["analytics"],
			subcategory: "dev-tooling",
		},
		{
			title: "Blockworks Research",
			description: "Onchain analytics and research.",
			image: "/images/app/ecosystem/blockworks-res.png",
			url: "https://app.blockworksresearch.com/analytics/tia",
			chainIcon: "",
			chainIconLink: "",
			categories: ["analytics"],
			subcategory: "dev-tooling",
		},
		{
			title: "ProbeLab",
			description: "Protocol analytics.",
			image: "/images/app/ecosystem/probelab.png",
			url: "https://probelab.io/",
			chainIcon: "",
			chainIconLink: "",
			categories: ["analytics"],
			subcategory: "dev-tooling",
		},

		// Cross chain
		{
			title: "Hyperlane",
			description: "Interoperability for everyone.",
			image: "/images/app/ecosystem/hyperlane.png",
			url: "https://hyperlane.xyz/",
			chainIcon: "",
			chainIconLink: "",
			categories: ["cross-chain"],
			subcategory: "dev-tooling",
		},
		{
			title: "Skip",
			description: "Tools for sovereign communities.",
			image: "/images/app/ecosystem/skip.png",
			url: "https://www.skip.build/",
			chainIcon: "",
			chainIconLink: "",
			categories: ["cross-chain"],
			subcategory: "dev-tooling",
		},
        {
			title: "Squid",
			description: "Seamlessly connecting chains, tokens, and wallets.",
			image: "/images/app/ecosystem/squid.png",
			url: "https://www.squidrouter.com/",
			chainIcon: "",
			chainIconLink: "",
			categories: ["cross-chain"],
			subcategory: "dev-tooling",
		},
        {
			title: "Relay",
			description: "Low cost, instant bridging and cross-chain execution.",
			image: "/images/app/ecosystem/relay.png",
			url: "https://relay.link/bridge/base",
			chainIcon: "",
			chainIconLink: "",
			categories: ["cross-chain"],
			subcategory: "dev-tooling",
		},

		// Explorer
		{
			title: "Celenium",
			description: "Blockchain explorer for Celestia.",
			image: "/images/app/ecosystem/celenium.png",
			url: "https://celenium.io/",
			chainIcon: "",
			chainIconLink: "",
			categories: ["explorer"],
			subcategory: "dev-tooling",
		},
        {
			title: "Dora",
			description: "Discover collectibles, tokens & earn on networks.",
			image: "/images/app/ecosystem/dora.png",
			url: "https://www.ondora.xyz/",
			chainIcon: "",
			chainIconLink: "",
			categories: ["explorer"],
			subcategory: "dev-tooling",
		},
		{
			title: "Mintscan",
			description: "The interchain portal.",
			image: "/images/app/ecosystem/mintscan.png",
			url: "https://www.mintscan.io/celestia",
			chainIcon: "",
			chainIconLink: "",
			categories: ["explorer"],
			subcategory: "dev-tooling",
		},
		{
			title: "Blockscout",
			description: "Open-source block explorer serving 1000+ EVM blockchains.",
			image: "/images/app/ecosystem/blockscount.png",
			url: "https://www.blockscout.com/",
			chainIcon: "",
			chainIconLink: "",
			categories: ["explorer"],
			subcategory: "dev-tooling",
		},

		// Infrastructure
		{
			title: "Succinct",
			description: "Prove the world’s software.",
			image: "/images/app/ecosystem/succinct.png",
			url: "https://www.succinct.xyz/",
			chainIcon: "",
			chainIconLink: "",
			categories: ["infrastructure"],
			subcategory: "dev-tooling",
		},
		{
			title: "RISC Zero",
			description: "The world's first RISC-V zkVM.",
			image: "/images/app/ecosystem/risczero.png",
			url: "https://risczero.com/",
			chainIcon: "",
			chainIconLink: "",
			categories: ["infrastructure"],
			subcategory: "dev-tooling",
		},
        {
			title: "Noble",
			description: "Purpose-built for stablecoin issuance.",
			image: "/images/app/ecosystem/noble.png",
			url: "https://www.noble.xyz/",
			chainIcon: "",
			chainIconLink: "",
			categories: ["infrastructure"],
			subcategory: "dev-tooling",
		},
        {
			title: "Redstone",
			description: "Modular oracles for DeFi.",
			image: "/images/app/ecosystem/redstone.png",
			url: "https://www.redstone.finance/",
			chainIcon: "",
			chainIconLink: "",
			categories: ["infrastructure"],
			subcategory: "dev-tooling",
		},
        {
			title: "Reservoir",
			description: "Reservoir is the easiest way to start building with NFTs and tokens.",
			image: "/images/app/ecosystem/reservoir.png",
			url: "https://reservoir.tools/",
			chainIcon: "",
			chainIconLink: "",
			categories: ["infrastructure"],
			subcategory: "dev-tooling",
		},
        {
			title: "ZeroDev",
			description: "The most powerful smart account development platform.",
			image: "/images/app/ecosystem/zerodev.png",
			url: "https://docs.zerodev.app/",
			chainIcon: "",
			chainIconLink: "",
			categories: ["infrastructure"],
			subcategory: "dev-tooling",
		},
        {
			title: "Nebra",
			description: "Proof based future now.",
			image: "/images/app/ecosystem/nebra.png",
			url: "https://nebra.one/",
			chainIcon: "",
			chainIconLink: "",
			categories: ["infrastructure"],
			subcategory: "dev-tooling",
		},

		// RaaS
		{
			title: "Caldera",
			description: "The internet of rollups.",
			image: "/images/app/ecosystem/caldera.png",
			url: "https://www.caldera.xyz/",
			chainIcon: "",
			chainIconLink: "",
			categories: ["raas"],
			subcategory: "dev-tooling",
		},
		{
			title: "Conduit",
			description: "Conduit is the complete rollup platform where the best teams in crypto scale their apps and ecosystems.",
			image: "/images/app/ecosystem/conduit.png",
			url: "https://www.conduit.xyz/",
			chainIcon: "",
			chainIconLink: "",
			categories: ["raas"],
			subcategory: "dev-tooling",
		},
        {
			title: "Gelato",
			description: "The #1 Rollup-As-A-Service Platform. 1-click ABC, OP, Orbit rollups.",
			image: "/images/app/ecosystem/gelato.png",
			url: "https://www.gelato.network/",
			chainIcon: "",
			chainIconLink: "",
			categories: ["raas"],
			subcategory: "dev-tooling",
		},
        {
			title: "Gateway",
			description: "Complete blockchain infrastructure for your project, with tech advisory and native product ecosystem.",
			image: "/images/app/ecosystem/gateway.png",
			url: "https://gateway.fm/",
			chainIcon: "",
			chainIconLink: "",
			categories: ["raas"],
			subcategory: "dev-tooling",
		},
        {
			title: "Karnot",
			description: "We help you deploy app chains using the Starknet Stack.",
			image: "/images/app/ecosystem/karnot.png",
			url: "https://karnot.xyz/",
			chainIcon: "",
			chainIconLink: "",
			categories: ["raas"],
			subcategory: "dev-tooling",
		},
        {
			title: "Zeeve",
			description: "Rollup-as-a-Service platform on Celestia.",
			image: "/images/app/ecosystem/zeeve.png",
			url: "https://www.zeeve.io/",
			chainIcon: "",
			chainIconLink: "",
			categories: ["raas"],
			subcategory: "dev-tooling",
		},

        // Wallet
		{
			title: "Keplr",
			description: "The fast, simple, secure wallet.",
			image: "/images/app/ecosystem/keplr.png",
			url: "https://www.keplr.app/",
			chainIcon: "",
			chainIconLink: "",
			categories: ["wallet"],
			subcategory: "dev-tooling",
		},
		{
			title: "Leap",
			description: "The interchain & modular wallet that loves you.",
			image: "/images/app/ecosystem/leap.png",
			url: "https://www.leapwallet.io/",
			chainIcon: "",
			chainIconLink: "",
			categories: ["wallet"],
			subcategory: "dev-tooling",
		},
        {
			title: "Privy",
			description: "Craft crypto-enabled experiences for everyone.",
			image: "/images/app/ecosystem/privy.png",
			url: "https://www.privy.io/",
			chainIcon: "",
			chainIconLink: "",
			categories: ["wallet"],
			subcategory: "dev-tooling",
		},

        // Rollup stacks
		{
			title: "Arbitrum Orbit",
			description: "The ideal way to permissionlessly launch your own custom chain.",
			image: "/images/app/ecosystem/arbitrum.png",
			url: "https://arbitrum.io/orbit",
			chainIcon: "",
			chainIconLink: "",
			categories: ["rollup-stacks"],
			subcategory: "dev-tooling",
		},
        {
			title: "OP Succinct",
			description: "Transform any OP Stack rollup into a fully type-1 ZK rollup using SP1.",
			image: "/images/app/ecosystem/op-succinct.png",
			url: "https://succinctlabs.github.io/op-succinct/",
			chainIcon: "",
			chainIconLink: "",
			categories: ["rollup-stacks"],
			subcategory: "dev-tooling",
		},
        {
			title: "ABC Stack",
			description: "The first Gigagas L1 stack.",
			image: "/images/app/ecosystem/abc.png",
			url: "https://www.abundance.xyz/",
			chainIcon: "",
			chainIconLink: "",
			categories: ["rollup-stacks"],
			subcategory: "dev-tooling",
		},
        {
			title: "Initia",
			description: "A network for interwoven rollups.",
			image: "/images/app/ecosystem/initia.png",
			url: "https://initia.xyz/",
			chainIcon: "",
			chainIconLink: "",
			categories: ["rollup-stacks", "hubs"],
			subcategory: "dev-tooling",
		},
        {
			title: "Astria",
			description: "The decentralized sequencing layer.",
			image: "/images/app/ecosystem/astria.png",
			url: "https://www.astria.org/",
			chainIcon: "",
			chainIconLink: "",
			categories: ["rollup-stacks", "hubs"],
			subcategory: "dev-tooling",
		},
        {
			title: "Dymension",
			description: "Powering the internet of rollups.",
			image: "/images/app/ecosystem/dymension.png",
			url: "https://dymension.xyz/",
			chainIcon: "",
			chainIconLink: "",
			categories: ["rollup-stacks", "hubs"],
			subcategory: "dev-tooling",
		},
        {
			title: "Rollkit",
			description: "The unstoppable stack.",
			image: "/images/app/ecosystem/rollkit.png",
			url: "https://rollkit.dev/",
			chainIcon: "",
			chainIconLink: "",
			categories: ["rollup-stacks"],
			subcategory: "dev-tooling",
		},
        {
			title: "Sovereign SDK",
			description: "An ecosystem of interoperable and scalable rollups that can run on any blockchain.",
			image: "/images/app/ecosystem/sovereign.png",
			url: "https://www.sovereign.xyz/",
			chainIcon: "",
			chainIconLink: "",
			categories: ["rollup-stacks"],
			subcategory: "dev-tooling",
		},
        {
			title: "Cartesi",
			description: "Linux-powered rollups: The simple way to build in web3.",
			image: "/images/app/ecosystem/cartesi.png",
			url: "https://cartesi.io/",
			chainIcon: "",
			chainIconLink: "",
			categories: ["rollup-stacks"],
			subcategory: "dev-tooling",
		},
        {
			title: "ZK Stack",
			description: "A developer friendly modular framework that makes it easy for you to customize & deploy your own interoperable ZK-powered blockchains.",
			image: "/images/app/ecosystem/zk-stack.png",
			url: "https://zkstack.io/",
			chainIcon: "",
			chainIconLink: "",
			categories: ["rollup-stacks"],
			subcategory: "dev-tooling",
		},
        {
			title: "Dojo",
			description: "Dojo is a provable game engine and toolchain for building high-performance onchain games and applications.",
			image: "/images/app/ecosystem/dojo.png",
			url: "https://dojoengine.com/",
			chainIcon: "",
			chainIconLink: "",
			categories: ["rollup-stacks"],
			subcategory: "dev-tooling",
		},
        {
			title: "Madara",
			description: "Building the integrity web with the most modular framework to create Validity Rollups.",
			image: "/images/app/ecosystem/madara.png",
			url: "https://www.madara.build/",
			chainIcon: "",
			chainIconLink: "",
			categories: ["rollup-stacks"],
			subcategory: "dev-tooling",
		},

        // Hubs
		{
			title: "B3",
			description: "The Open Gaming Layer.",
			image: "/images/app/ecosystem/b3.png",
			url: "https://www.b3.fun/",
			chainIcon: "",
			chainIconLink: "",
			categories: ["hubs"],
			subcategory: "dev-tooling",
		},
	],
};
