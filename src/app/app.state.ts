import { Users } from "./core/model/users.model";

export interface AppState{
    readonly users: Users[];
}