import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
const OutputShower = (props) => {
    const history = useHistory();
    useEffect(() => {
        props.htmlDataOp("fullOutputDisplay", props.curLocationPath);
    })
    useEffect(() => {
        return () => {
            if (props.curLocationPath === "/") {
                if (props.shouldCreateEditor.current === false) {   
                    alert("Please Use Our Previous Button");        
                    history.go(1);          
                }
            }
        }
    }, [])
    const goBackToPrevPage = () => {
        props.shouldCreateEditor.current = true;
        props.setShouldLoad(true);
        history.goBack()
    }
    window.addEventListener('beforeunload', (event) => {
        event.returnValue = 'You have unfinished changes!';
    });

    return (
        <>
            <div className="outputShowerHeader">
                <i onClick={() => goBackToPrevPage()} className="fa fa-arrow-left backArrowOp"></i> Output
            </div>
            <div className="outputShower">
                <iframe style={{ transition: "height 0.5s", height: (((window.innerHeight - 60) - 10) / 10) + 'rem' }} className="outputDisplay" src="" id="fullOutputDisplay" title="VARt TextLab">
                </iframe>
            </div>
        </>
    )
}
export default OutputShower;