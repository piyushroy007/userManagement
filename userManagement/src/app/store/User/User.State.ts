import { createEntityAdapter } from "@ngrx/entity";
import { Users, UserModel } from "../Model/user.model";

export const UserAdapter = createEntityAdapter<Users>();

export const UserState: UserModel = UserAdapter.getInitialState();