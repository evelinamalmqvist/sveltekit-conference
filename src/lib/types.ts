export type Conference = {
	title: string;
	description: string;
	location: string;
	venue: string;
	startDate: string;
	endDate: string;
	talkCount: number;
	speakerCount: number;
	days: Day[];
};

export type Day = {
	id: string;
	title: string;
	description: string;
	date: string;
	talks: Talk[];
};

export type Talk = {
	id: string;
	title: string;
	time: string;
	speaker: Speaker['name'];
};

export type Speaker = {
	name: string;
	title: string;
	imageUrl: string;
};
