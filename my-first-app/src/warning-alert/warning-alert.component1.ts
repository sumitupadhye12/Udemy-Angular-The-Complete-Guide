import { Component } from "@angular/core";


@Component ({
    selector:"app-warning-alert",
    template:`
    <p>This is a warning component</p>
    `,
    styles :[`
    p{color:red;
        font-size:50px;
    }
    `]
})
export class WarningAlertComponent{

}

