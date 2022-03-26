import React from "react";
import { useHistory, useLocation } from 'react-router-dom';

const Header = (props) => {
    const location = useLocation();
    const history = useHistory();
    const changeEditor = () => {
        if (location.pathname === "/simpleEditor") {
            props.shouldCreateEditor.current=true;
            history.push("/")
        } else if (location.pathname === "/") {
            history.push("/simpleEditor")
        }
    }
    return (
        <>
            {
                (location.pathname === "/output" && document.getElementById("fullOutputDisplay") !== null) ? <></> :
                    <>
                        <div className="headerPart">
                            <div className="headerTextDiv">
                                <div className="tempDivForDesign">
                                    <h1 className="headerName"><span className="subHeaderName" style={{ color: 'red', fontSize: '125%' }}>VARt</span>{props.headerName}</h1>
                                </div>
                            </div>
                            <i onClick={() => changeEditor()} className="fa fa-rocket"></i>
                        </div>
                    </>
            }
        </>
    )
}
export default Header;