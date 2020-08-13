import React from "react";
import {Provider} from "react-redux";
import {store} from "../../store/store";


export const JuniorPlusDecorator = (storyFn: any) => {
    return <Provider store={store}>
        {storyFn()}
    </Provider>
}