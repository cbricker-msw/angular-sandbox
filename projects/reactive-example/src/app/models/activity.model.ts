export enum ActivityType {
    Source = 'SOURCE',
    Form = 'FORM',
    Present = 'PRESENT',
    Deployment = 'DEPLOYMENT',
    Collect = 'COLLECT',
    Demographics = 'DEMOGRAPHICS'
}

export interface Activity {
    type: ActivityType;
    id?: string;
    name: string;
    description?: string;
    session_id?: string;
    sequence?: number;
}
