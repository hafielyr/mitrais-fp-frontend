import {Location} from './location.model';

export class Employee{
    constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public gender: string,
        public dob: Date,
        public nationality :string,
        public martial :string,
        public phone :string,
        public subDivision :string,
        public status :string,
        public suspendDate :Date,
        public hireDate :Date,
        public division :string,
        public email :string,
        public photo :string,
        public locationId :Location
    ){}
}
