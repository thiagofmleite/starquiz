import { People } from "./people";

export interface PeopleResponse {
    count: number;
    next: string;
    previous: string;
    results: People[];
}