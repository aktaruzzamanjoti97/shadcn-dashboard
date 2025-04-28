'use client';

import { format } from 'date-fns';
import { Calendar1Icon } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Checkbox } from './ui/checkbox';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { ScrollArea } from './ui/scroll-area';
import { Calendar } from './ui/calendar';

const TodoList = () => {
	const [date, setDate] = useState<Date | undefined>(new Date());
	const [open, setOpen] = useState(false);

	return (
		<div>
			<h1 className='text-lg font-medium mb-6'>Todo List</h1>
			{/* CALENDAR */}
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button className='w-full'>
						<Calendar1Icon />
						{date ? format(date, 'PPP') : <span>Pick a date</span>}
					</Button>
				</PopoverTrigger>
				<PopoverContent className='p-0 w-auto'>
					<Calendar
						mode='single'
						selected={date}
						onSelect={(date) => {
							setDate(date);
							setOpen(false);
						}}
					/>
				</PopoverContent>
			</Popover>
			{/* LIST */}
			<ScrollArea className='max-h-[400px] mt-4 overflow-y-auto'>
				<div className='flex flex-col gap-4'>
					<Card className='p-4'>
						<div className='flex items-center gap-4'>
							<Checkbox id='item1' />
							<label htmlFor='item1' className='text-sm text-muted'>
								Lorem ipsum dolor sit, amet consectetur
							</label>
						</div>
					</Card>
					<Card className='p-4'>
						<div className='flex items-center gap-4'>
							<Checkbox id='item1' checked />
							<label htmlFor='item1' className='text-sm text-muted'>
								Lorem ipsum dolor sit, amet consectetur
							</label>
						</div>
					</Card>
					<Card className='p-4'>
						<div className='flex items-center gap-4'>
							<Checkbox id='item1' checked />
							<label htmlFor='item1' className='text-sm text-muted'>
								Lorem ipsum dolor sit, amet consectetur
							</label>
						</div>
					</Card>
					<Card className='p-4'>
						<div className='flex items-center gap-4'>
							<Checkbox id='item1' checked />
							<label htmlFor='item1' className='text-sm text-muted'>
								Lorem ipsum dolor sit, amet consectetur
							</label>
						</div>
					</Card>
					<Card className='p-4'>
						<div className='flex items-center gap-4'>
							<Checkbox id='item1' checked />
							<label htmlFor='item1' className='text-sm text-muted'>
								Lorem ipsum dolor sit, amet consectetur
							</label>
						</div>
					</Card>
					<Card className='p-4'>
						<div className='flex items-center gap-4'>
							<Checkbox id='item1' checked />
							<label htmlFor='item1' className='text-sm text-muted'>
								Lorem ipsum dolor sit, amet consectetur
							</label>
						</div>
					</Card>
					<Card className='p-4'>
						<div className='flex items-center gap-4'>
							<Checkbox id='item1' checked />
							<label htmlFor='item1' className='text-sm text-muted'>
								Lorem ipsum dolor sit, amet consectetur
							</label>
						</div>
					</Card>
					<Card className='p-4'>
						<div className='flex items-center gap-4'>
							<Checkbox id='item1' checked />
							<label htmlFor='item1' className='text-sm text-muted'>
								Lorem ipsum dolor sit, amet consectetur
							</label>
						</div>
					</Card>
					<Card className='p-4'>
						<div className='flex items-center gap-4'>
							<Checkbox id='item1' checked />
							<label htmlFor='item1' className='text-sm text-muted'>
								Lorem ipsum dolor sit, amet consectetur
							</label>
						</div>
					</Card>
					<Card className='p-4'>
						<div className='flex items-center gap-4'>
							<Checkbox id='item1' checked />
							<label htmlFor='item1' className='text-sm text-muted'>
								Lorem ipsum dolor sit, amet consectetur
							</label>
						</div>
					</Card>
				</div>
			</ScrollArea>
		</div>
	);
};

export default TodoList;
