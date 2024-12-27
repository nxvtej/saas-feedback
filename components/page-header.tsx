/** @format */

import {
	SignInButton,
	SignedIn,
	SignUpButton,
	SignedOut,
	UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import { Button } from "./ui/button";
import { Separator } from "@/components/ui/separator";

const PageHeader = () => {
	return (
		<header className='sticky insert-x-0 top-0 z-30 w-full transition-all'>
			<div className='w-full max-w-screen-xl  px-2.5  lg:px-20 relative mx-auto'>
				<div className='flex justify-between items-center h-14'>
					<Image src={"/next.svg"} alt='logo' width={100} height={75} />

					<div>
						<SignedOut>
							<SignInButton>
								<Button className='bg-black rounded-md'>Sign-In</Button>
							</SignInButton>
							<SignUpButton>
								<Button className='bg-black rounded-md ml-2'>Sign-Up</Button>
							</SignUpButton>
						</SignedOut>
						<SignedIn>
							<UserButton />
						</SignedIn>
					</div>
				</div>
			</div>
			<Separator className='' />{" "}
		</header>
	);
};

export default PageHeader;
