import React from 'react'


export default function Alerts(props) {
    const capitalize = (word) => {
        let cplText = word.toLowerCase();
        return cplText.charAt(0).toUpperCase() + cplText.slice(1);
    }
    return (
        <div style={{height:'50px'}}>
       { props.alerts && <div className={`alert alert-${props.alerts.type} alert-dismissible `} style={{backgroundColor: props.alerts.type==='success'?'rgba(241, 246, 244, 1)':'rgb(9,31,36)',color: props.alerts.type==='success'?'black':'white'}} role="alert">
            <strong>{capitalize(props.alerts.type)}!</strong> {props.alerts.msg}
        </div>}
        </div>

    )
}
