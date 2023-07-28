export interface TimeLapseSchema {
   data: ITimeLapse[];
   currentTimeLaps: ITimeLapse
}

export interface ITimeLapse {
   id: number;
   nameTime: string;
   yearStart: number;
   yearEnd: number;
   events: ITimeEvents[];
}

interface ITimeEvents {
   id: number;
   eventYear: number;
   eventDescription: string;
}
