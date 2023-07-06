import React from 'react';
import Image from 'next/image'

import './MainContent.css';

const MainContent: React.FC = () => {
    return (
        <main className="main-content mx-10 mt-10">
            <Image
                className="rounded-full my-5"
                src="/me.png"
                width={100}
                height={100}
                alt={"My picture"}
            />
            <h1 className="text-5xl md:text-7xl">Hey, I'm Montana.</h1>
            <div className="my-5">I'm a product-oriented technologist that enjoys learning, building, and writing, mostly on&nbsp;
                <a className="font-bold underline" target="_blank" href="https://twitter.com/montana_wong">Twitter</a>.
            </div>
<div className="mb-5 flex flex-wrap justify-start gap-2">
	<a target="_blank" href="https://twitter.com/montana_wong">
      <button className="bg-blue-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
        </svg>
      </button>
    </a>
    <a target="_blank" href="https://linkedin.com/in/montanawong">
      <button className="bg-blue-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 fill-current"
          viewBox="0 0 256 256"
        >
          <path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0135.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013zM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0156.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16zM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"></path>
        </svg>
      </button>
      </a>
    <a target="_blank" href="https://github.com/montycheese">
      <button className="bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          ariaHidden="true"
          className="w-5"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      </a>
    </div>
            <div className="divider"/>
            <h1 className="text-3xl">Work</h1>
            <div className="my-5">
                I'm currently the co-founder of <a target="_blank" className="font-bold underline" href="https://sprise.co">Sprise</a>, a product studio and software agency. We've launched products like <a target="_blank" className="font-bold underline" href="https://pally.gg">Pally.gg</a> which has <a  target="_blank" className="font-bold underline" href="https://mediafeed.org/how-to-make-money-as-moderator/">helped content creator teams</a> earn $500k+ to date.&nbsp; On the agency side, we've also built software that's helped our clients raise a collective $12m in web3 crowdfunding.
            </div>
            <div className="mb-5">
                I worked at <a target="_blank" className="font-bold underline" href="https://amazon.com">Amazon</a> where I built software to optimize their online catalog selection. I then went over to <a className="font-bold underline" href="https://aws.amazon.com" target="_blank">AWS</a>, where I was a founding software engineer on the team that launched <a className="font-bold underline" href="https://aws.amazon.com/managed-blockchain/" target="_blank">Amazon Managed Blockchain</a> in 2019.
                &nbsp;I also started <a target="_blank" className="font-bold underline" href="https://sengage.io">Sengage</a>, a company in the live streaming space that built software for Twitch streamers and the technology for the&nbsp;<a className="font-bold underline" target="_blank" href="https://cash.app/legal/US/en-us/triviarules">Cash App Trivia</a>&nbsp;gameshow. It became one of the most popular shows on Twitch in 2020 and reached up to 100k concurrent viewers per episode. During college I was an undergraduate researcher in the <a className="font-bold underline" target="_blank" href="https://robotics.uga.edu/">University of Georgia Robotics lab</a> and performed an internship at <a className="font-bold underline" target="_blank" href="https://www.adultswim.com/">Adult Swim</a>.
            </div>
            <div className="mb-5">
                I currently or have previously been an advisor for the following companies: <a target="_blank" className="font-bold underline" href="https://3num.co">3num</a>, <a target="_blank" className="font-bold underline" href="https://yunity.io">Yunity</a>, and <a target="_blank" className="font-bold underline" href="https://gaudiumcapital.com">Gaudium Capital</a>.
            </div>
            <div className="divider"/>
            <h1 className="text-3xl">Some of my content has gone viral.</h1>
            <ul className="list-disc mx-5 mb-5">
                <li>
                    In 2020, I created <a className="font-bold underline" target="_blank" href="https://twitter.com/drdisrespectbot">DrDisrespectBot</a>, a Twitter bot that tracked news updates on <a className="font-bold underline" target="_blank" href="https://en.wikipedia.org/wiki/Dr_Disrespect">Dr. Disrespect</a>, one of the most popular live streamers in the world. The account amassed a lot of attention within the gaming industry during his Twitch ban and was profiled by several media outlets including <a className="font-bold underline" target="_blank" href="https://www.forbes.com/sites/paultassi/2020/07/11/dr-disrespects-twitch-ban-the-one-account-you-should-follow-for-updates/">Forbes</a>. I used a combination of big data ingestion and automated workflow based on social media triggers to power its content.
                </li>
                <li>
                    In 2021, I wrote a <a className="font-bold underline" target="_blank" href="https://twitter.com/Montana_Wong/status/1472023753865396227">Twitter thread</a> that analyzed and brought attention to a smart contract software exploit perpetuated by a lone developer that allowed them to profit $600k off of Adidas's first NFT drop. The tweet reached over 2 million people and was covered by news outlets such as <a href="https://decrypt.co/88705/adidas-ethereum-nft-drop-nets-23-million-and-shoots-to-top-of-charts" className="font-bold underline" target="_blank" >Decrypt</a>.
                </li>
                <li>
                    In 2022, I <a className="font-bold underline" target="_blank" href="https://twitter.com/Montana_Wong/status/1487886787305357313?s=20">covered</a> the attempted hostile takeover of ApeDAO, a small DAO whos mission was to collect and curate highly sought-after NFTs, which I was previously a member of. My Twitter thread was referenced by <a className="font-bold underline" target="_blank" href="https://markets.businessinsider.com/news/currencies/apedao-token-bored-ape-yacht-club-nft-sell-vote-valuation-2022-1">Business Insider</a> and other outlets.
                </li>
            </ul>
            <div className="divider"/>
            <h1 className="text-3xl">Writing and podcasts</h1>
            <ul className="list-disc mx-5 mb-5">
                <li>
                    <span>
                        Twitter, <a href="https://twitter.com/Montana_Wong/status/1545081928017031168?s=20" className="font-bold underline" target="_blank">Analysis of a recurring NFT exploit</a>&nbsp;(Jul. 2022)
                    </span>
                </li>
				<li>
                    <span>
                        Crypto Packaged Goods, <a href="https://podcasts.apple.com/us/podcast/deciphering-smart-contracts-with-montana-wong-genius/id1639146192?i=1000575677123" className="font-bold underline" target="_blank">Deciphering Smart Contracts </a>&nbsp;(Jun. 2022)
                    </span>
                </li>
                <li>
                    <span>
                        Mirror, <a href="https://mirror.xyz/montanawong.eth/mL2c0DJtI4wz_mQavLH-k8NQqJm4bKgV8fQ_rnq2fzY" className="font-bold underline" target="_blank">A framework for personal web3 wallet security</a>&nbsp;(May 2022)
                    </span>
                </li>
                <li>
                    <span>
                        Twitter, <a href="https://twitter.com/Montana_Wong/status/1472302215880527872?s=20" className="font-bold underline" target="_blank">NFT minting strategies and security best practices</a>&nbsp;(Dec. 2021)
                    </span>
                </li>
                <li>
                    <span>
                        Medium, <a href="https://montanawong.medium.com/how-nfts-will-transform-the-creator-economy-ee6a84317515" className="font-bold underline" target="_blank">NFTs will transform the creator economy</a>&nbsp;(Feb. 2021)
                    </span>
                </li>
                <li>
                    <span>
                        Medium, <a href="https://montanawong.medium.com/a-deep-dive-into-game-integrations-for-twitch-5196af8e7eed" className="font-bold underline" target="_blank">A Deep Dive into Game Integrations for Twitch</a>&nbsp;(Feb. 2020)
                    </span>
                </li>
                <li>
                    <span>
                        Medium, <a href="https://montanawong.medium.com/how-to-use-twitch-extensions-to-retain-viewers-1c7074d0c8df" className="font-bold underline" target="_blank">Retaining viewers on Twitch using Twitch Extensions</a>&nbsp;(Jan. 2020)
                    </span>
                </li>
                <li>
                    <span>
                        Medium, <a href="https://montanawong.medium.com/how-to-point-your-custom-domain-to-an-aws-load-balancer-51dc2eb6d84c" className="font-bold underline" target="_blank">Using a web domain with an AWS load balancer</a>&nbsp;(Jan. 2020)
                    </span>
                </li>
            </ul>
            <div className="divider"/>
            <h1 className="text-3xl">I ❤️ making cool stuff</h1>
            <ul className="list-disc mx-5 mb-5">
                <li>
                    <span>
                        In February 2023, when the <a className="font-bold underline" target="_blank" href="https://ordinals.com">Ordinals</a> protocol was released on Bitcoin, I immediately setup a Bitcoin node and minted <a href="https://gamma.io/ordinals/collections/travels-by-montana-wong" className="font-bold underline" target="_blank>">Travels</a>, a small personal photography collection onto the Bitcoin blockchain.
                    </span>
                </li>
                <li>
                    <span>
                        In September 2022, <a className="font-bold underline" target="_blank" href="https://twitter.com/fabdarice">fabdarice</a> and I launched <a href="https://nested.trade" className="font-bold underline" target="_blank">NestedTrade</a>, an open source decentralized protocol for buying and selling Moonbird NFTs on Ethereum. To date the protocol has facilitated ~$800k of trading volume. The protocol code is open sourced under the GPLv3 license.
                    </span>
                </li>
                <li>
	                <span>
	                	In March 2022, I collaborated with the artist <a className="font-bold underline" target="_blank" href="https://kuupottery.com">Kuu</a> to generate and launch <a href="https://nested.trade" className="font-bold underline" href="https://opensea.io/collection/womenwithvases">Women with Vases</a>. A generative digital art collection featuring her past ceramic work.
    	            </span>
                </li>
            </ul>
        </main>
    );
};

export default MainContent;
