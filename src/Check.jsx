import React from "react";

import * as val from './assets/values/index';

export default function Check() {
    return (
        <div>
            <h1>{val.values.name}</h1>
            <h1>{val.default.TITLE}</h1>
            <h1>{val.default.MEMBERSHIP}</h1>
            <h1>{val.values.name}</h1>
            <h1>{val.values.mobile}</h1>
            <p>{val.myRectFunction()}</p>
            <h1></h1>
        </div>
    );

}