export enum RoastType {
	Light = 'Light',
	Medium = 'Medium',
	Dark = 'Dark'
}

export const coffeeData: Coffee[] = [
	{
		id: 1,
		brand: 'Kicking Horse',
		roast: RoastType.Dark,
		groundOrBeans: 'beans',
	},
	{
		id: 2,
		brand: 'Greenwood Lake Roasters',
		roast: RoastType.Medium,
		groundOrBeans: 'ground',
	},
	{
		id: 3,
		brand: 'Counter Culture',
		roast: RoastType.Light,
		groundOrBeans: 'beans',
	},
	{
		id: 4,
		brand: 'Starbucks',
		roast: RoastType.Medium,
		groundOrBeans: 'ground',
	},
];


// export type RoastType = 'light' | 'medium' | 'dark'| undefined;
export type GroundOrBeans = 'ground' | 'beans' | undefined;

export interface Coffee {
	id: number;
	brand: string;
	roast: RoastType;
	groundOrBeans: GroundOrBeans;
	// If you want to limit the numeric values, look here: https://stackoverflow.com/a/39495173
	grind?: number;
	singleOrigin?: boolean;
	flavorNotes?: string;
}
