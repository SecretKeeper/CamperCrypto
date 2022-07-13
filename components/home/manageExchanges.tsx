import Image from "next/image";

const exchanges = [
	"ftx",
	"binance",
	"okx",
	"bitfinex",
	"bitmex",
	"bittrex",
	"bybit",
	"coinbase",
	"deribit",
	"gate_io",
	"gemini",
	"huobi",
	"kraken",
	"bitstamp",
];

const ManageExchanges = () => (
	<section className="container mx-auto mt-28">
		<h1 className="font-bold text-center text-4xl mb-10">
			بازار خود را با اطمینان رشد دهید
		</h1>
		<p className="text-center mb-10">
			لورم ایپسوم متن ساختگی با تولید از صنعت چاپ و با استفاده از طراحان گرافیک
			است
		</p>
		<div className="grid grid-cols-3 mb-12">
			{exchanges &&
				exchanges.slice(0, 3).map((exchange: string, index: number) => (
					<div key={index} className="flex justify-center">
						<Image
							alt={exchange}
							src={`/images/exchanges/${exchange}.svg`}
							width={250}
							height={75}
						/>
					</div>
				))}
		</div>
		<div className="grid grid-cols-5">
			{exchanges &&
				exchanges
					.slice(4, exchanges.length)
					.map((exchange: string, index: number) => (
						<div key={index} className="flex justify-center mb-10	">
							<Image
								alt={exchange}
								src={`/images/exchanges/${exchange}.svg`}
								width={100}
								height={50}
							/>
						</div>
					))}
		</div>
	</section>
);

export default ManageExchanges;
