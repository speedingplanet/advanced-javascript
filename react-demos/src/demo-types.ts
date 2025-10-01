import { Properties } from 'csstype';

export interface CSSProperties extends Properties {
	[variableName: `--${string}`]: unknown;
}

export interface Country {
	place: number;
	pop1980: number;
	pop2000: number;
	pop2010: number;
	pop2022: number;
	pop2023: number;
	pop2030: number;
	pop2050: number;
	country: string;
	area: number;
	landAreaKm: number;
	cca2: string;
	cca3: string;
	unMember: boolean;
	netChange: number | null;
	growthRate: number;
	worldPercentage: number | null;
	density: number;
	densityMi: number;
	id: number;
}

export interface GridColumn<T> {
	field: keyof T;
	label: string;
}

export type SortDirection = 'asc' | 'desc';

export interface SortConfig<T> {
	sortField: keyof T | '';
	sortDirection: SortDirection;
}

export interface CounterProps {
	value: number;
	increment: () => void;
	decrement: () => void;
}

export interface CounterState {
	counter: number;
}
