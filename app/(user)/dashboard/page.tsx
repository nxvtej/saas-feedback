/** @format */

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";

export default function Page() {
	return (
		<div>
			<Dialog>
				<DialogTrigger asChild>
					<Button>
						<Plus className='w-2 h-4 mr-1' />
						New Project
					</Button>
				</DialogTrigger>
				<DialogContent className='sm:max-w-[425px] rounded-md'>
					<DialogHeader>
						<DialogTitle>New Project</DialogTitle>
						<DialogDescription>
							Create a new Project to get started.
						</DialogDescription>
					</DialogHeader>
					<form className='flex gap-4 flex-col'>
						<div className='grid  sm:grid-cols-2 gap-4'>
							<div>
								<Label htmlFor='name'>Name</Label>
								<Input id='name' placeholder='Project Name' />
							</div>
							<div>
								<Label htmlFor='url'>URL</Label>
								<Input id='url' placeholder='https://example.com' />
							</div>
						</div>

						<div className='flex flex-col gap-1'>
							<Label htmlFor='description'>Description</Label>
							<Textarea id='description' placeholder='Description (optional)' />
						</div>
					</form>
					<DialogFooter>
						<Button className='bg-black'>Create Project</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
}
