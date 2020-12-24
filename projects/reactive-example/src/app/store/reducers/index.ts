import {Injectable} from '@angular/core';
import {Params, RouterStateSnapshot} from '@angular/router';
import {routerReducer, RouterReducerState, RouterStateSerializer} from '@ngrx/router-store';
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';

export interface RouterStateUrl {
    url: string;
    params: Params;
    queryParams: Params;
}

export interface State {
    router: RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
    router: routerReducer
};

// Reducer selectors
export const selectReducerState = createFeatureSelector<
    RouterReducerState<RouterStateUrl>
    >('router');

export const getRouterInfo = createSelector(
    selectReducerState,
    state => state.state
);

export const getRouterParams = createSelector(
    getRouterInfo,
    state => state.params
);

export const getSessionId = createSelector(
    getRouterParams,
    params => params.sessionId
);

@Injectable()
export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
    serialize(routerState: RouterStateSnapshot): RouterStateUrl {
        let route = routerState.root;

        while (route.firstChild) {
            route = route.firstChild;
        }

        const {
            url,
            root: { queryParams }
        } = routerState;
        const { params } = route;

        // Only return an object including the URL, params and query params
        // instead of the entire snapshot
        return { url, params, queryParams };
    }
}
