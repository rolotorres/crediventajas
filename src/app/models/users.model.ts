export class User {
    constructor(
        public username: string,
        public userlastname: string,
        public usermail: string,
        // public alias: string,
        public pasword: string,
        public avatar?: string,
        public roleid?: number,
        public clientid?: number,
        public sucursalid?: number,
        public userid?: number,
    ) {
        
    }
}