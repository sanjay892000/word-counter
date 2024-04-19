import React from 'react'

export default function AboutUs(props) {

   /*  const [MyStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    }) */

    let MyStyle={
        color:props.mode==='light'?'dark':'light',
        backgroundColor:props.mode==='light'?'rgba(5, 17, 20, 1)':'white'
    }

    /* const [MyBtn, setMyBtn] = useState("GoTo DarkMode")


    const GoTODarkmode = () => {
        if (MyStyle.color === 'black') {
            setMyStyle(
                {
                    color: 'white',
                    backgroundColor: 'rgb(43,48,53)'
                }
            )
            setMyBtn("GoTo LightMode");
        }
        else {
            setMyStyle(
                {
                    color: 'black',
                    backgroundColor: 'white'
                }
            )
            setMyBtn("GoTo DarkMode");
        }
    } */
    return (
        <div className='container my-3' style={MyStyle} >
            <div className="accordion" id="accordionExample" style={MyStyle}>
                <div className="accordion-item" style={MyStyle}>
                    <h2 className="accordion-header" style={MyStyle} >
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={MyStyle}>
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={MyStyle}>
                        <div className={`accordion-body accordion-bg-${MyStyle}`}>
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={MyStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={MyStyle}>
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={MyStyle}>
                        <div className="accordion-body" style={MyStyle}>
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={MyStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={MyStyle}>
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={MyStyle}>
                        <div className="accordion-body" style={MyStyle}>
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
           {/*  <div className="form-check form-switch my-2 mx-2">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={GoTODarkmode}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{MyBtn}</label>
            </div> */}
          {/*   <button type="button" className="btn btn-primary mx-2 my-3" onClick={GoTODarkmode}>{MyBtn}</button> */}
        </div>
    )
}
