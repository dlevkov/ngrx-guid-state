import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { UserViewModel } from 'src/app/models/user-view-model';

export interface State {}

export const reducers: ActionReducerMap<State> = {
  users: UserViewModel,
};

export const metaReducers: Array<MetaReducer<State>> = !environment.production ? [] : [];
