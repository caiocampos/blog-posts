import * as React from 'react';
import { Tabs as TabsPrimitive } from '@base-ui/react/tabs';

import { cn } from '@/lib/utils';

const Tabs = TabsPrimitive.Root;

function TabsList({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.List>) {
	return (
		<TabsPrimitive.List
			data-slot="tabs-list"
			className={cn(
				'bg-muted text-muted-foreground relative inline-flex h-9 w-fit items-center justify-center rounded-lg p-1',
				className
			)}
			{...props}
		/>
	);
}

function TabsTrigger({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Tab>) {
	return (
		<TabsPrimitive.Tab
			data-slot="tabs-trigger"
			className={cn(
				'data-[selected]:bg-background data-[selected]:text-foreground data-[selected]:shadow-sm focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
				className
			)}
			{...props}
		/>
	);
}

function TabsIndicator({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Indicator>) {
	return <TabsPrimitive.Indicator data-slot="tabs-indicator" className={cn('hidden', className)} {...props} />;
}

export { Tabs, TabsList, TabsTrigger, TabsIndicator };
