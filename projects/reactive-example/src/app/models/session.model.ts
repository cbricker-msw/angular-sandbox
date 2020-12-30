export class Session {
    id?: string;
    name: string;
    description?: string;

    constructor(session: Session) {
        this.id = session.id || '';
        this.name = session.name;
    }
}
