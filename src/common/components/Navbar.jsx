import logo from '@/assets/img/logo.png';
import menu from '@/assets/svg/menu.svg';

function Navbar() {
	return (
		<header className="border-b-2">
			<div className="container mx-auto flex justify-between px-4">
				<div className="py-5">
					<img className="h-9 md:h-12" src={logo} alt="logo" />
				</div>

				<div className="hidden lg:flex items-center">
					<a
						className="text-base capitalize hover:text-primary mx-5 transition-colors"
						href="/find-jobs">
						Find Workers
					</a>
					<a
						className="text-base capitalize hover:text-primary mx-5 transition-colors"
						href="/find-jobs">
						Find Jobs
					</a>
					<a
						className="text-base capitalize hover:text-primary mx-5 transition-colors"
						href="/find-jobs">
						About Us
					</a>
					<a
						className="text-base capitalize hover:text-primary mx-5 transition-colors"
						href="/find-jobs">
						Resources
					</a>
					<a
						className="text-base capitalize hover:text-primary mx-5 transition-colors"
						href="/find-jobs">
						Contact
					</a>
					<a
						className="text-base capitalize hover:text-primary mx-5 transition-colors xl:ml-20"
						href="/find-jobs">
						Login
					</a>

					<button
						className="border-2 border-[#212a34] rounded-xl lg:px-4 xl:px-9 py-3 font-black hover:bg-primary hover:border-primary hover:text-neutral-50 transition-colors"
						type="button">
						Open an account
					</button>
				</div>

				<div className="flex lg:hidden items-center">
					<button type="button">
						<img src={menu} alt="menu" />
					</button>
				</div>
			</div>
		</header>
	);
}

export default Navbar;
