function NewsLetter() {
	return (
		<div className="flex flex-col py-8 items-center justify-center">
			<h1 className="text-4xl sm:text-5xl font-extrabold mb-5 text-center">
				Subscribe to our <span className="text-primary">Newsletter</span>
			</h1>

			<p className="mb-10">Keep up with the Grizzly Force team!</p>

			<div className="flex gap-4 flex-wrap px-6">
				<div className="border border-primary px-3 pb-1 w-72 sm:w-80 rounded-lg focus-within:shadow-[0_0_2px_4px_rgba(17,178,168,25%)]">
					<label className="text-[10px]">Email Address</label>
					<div className="">
						<input className="outline-none" type="text" />
					</div>
				</div>

				<button className="bg-primary text-white font-extrabold rounded-lg p-4">
					Submit
				</button>
			</div>
		</div>
	);
}

export default NewsLetter;
