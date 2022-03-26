import React, { useState, useEffect, useRef } from "react";
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import MenuBar from "./MenuBar";
import OutputShower from './OutputShower';
import Header from './Header';
import Error404 from './Error404';
import Loading from "./Loading";
import { Switch, Route, useLocation } from "react-router-dom";
// CodeMirror Files
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/htmlmixed/htmlmixed';
// import 'codemirror/keymap/sublime';
const TextLabEditor = () => {

    let isPhone = useRef(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) === true ? true : false);
    const [showFullOutput, setShowFullOutput] = useState(false)
    const [isOutput, setIsOutput] = useState(false)
    const [editorState, setEditorState] = useState( // For Editor Component
        () => EditorState.createEmpty(),
    );

    const editorRef = useRef(null);
    const location = useLocation();
    const curLocationPath = useRef(null);
    const shouldCreateEditor = useRef(true);
    const [shouldLoad, setShouldLoad] = useState(true);

    useEffect(() => {
        if (window.innerWidth <= 900) {
            setShowFullOutput(true);
        }
    }, [])

    useEffect(() => {
        const init = () => {
            if (location.pathname === "/" && shouldCreateEditor.current === true) {
                let textData = (JSON.parse(localStorage.getItem("VARtTextLabMain")));
                let current = -1;
                if (textData !== null && textData.length !== 0) {
                    for (let i = 0; i < textData.length; i++) {
                        if (textData[i].current === true) {
                            current = i;
                            break;
                        }
                    }
                    editorRef.current = CodeMirror.fromTextArea(document.getElementsByClassName('baseTextArea')[0], {
                        lineNumbers: true,
                        autoCloseTags: true,
                        autoCloseBrackets: true,
                        // keyMap: 'sublime',
                        theme: 'dracula',
                        mode: { name: 'htmlmixed' }
                    })
                    editorRef.current.getDoc().setValue(textData[current].data);
                    shouldCreateEditor.current = false;
                    setShouldLoad(false);
                }
            } else {
                setShouldLoad(false);
            }
        }
        init();

    })

    const setMainEditorData = (data) => {
        editorRef.current.getDoc().setValue(data);
    }
    const getMainEditorData = () => {
        return (editorRef.current.getValue());
    }

    const hideToolBar = () => {
        if (document.getElementsByClassName("toolBarShower")[0].getAttribute("id") === "unHiddenToolBar") {
            document.getElementsByClassName("toolbar-class")[0].style.overflowY = "auto";
            document.getElementsByClassName("toolbar-class")[0].style.height = (document.getElementsByClassName("toolbar-class")[0].scrollHeight - 6) / 10 + "rem";
            setTimeout(() => {
                document.getElementsByClassName("toolBarShower")[0].setAttribute("id", "hiddenToolBar");
                document.getElementsByClassName("toolbar-class")[0].style.height = "0rem";
                document.getElementsByClassName("editor-class")[0].style.height = "69.2rem";
            }, 10)
        }
        else {
            document.getElementsByClassName("toolBarShower")[0].setAttribute("id", "unHiddenToolBar");
            document.getElementsByClassName("toolbar-class")[0].style.height = (document.getElementsByClassName("toolbar-class")[0].scrollHeight - 6) / 10 + "rem";
            setTimeout(() => {
                document.getElementsByClassName("toolbar-class")[0].style.overflowY = "visible";
                document.getElementsByClassName("toolbar-class")[0].style.height = "auto";
                document.getElementsByClassName("editor-class")[0].style.height = (700 - document.getElementsByClassName(
                    "toolbar-class")[0].offsetHeight) / 10 + 'rem'
            }, 500)
        }
    }

    const provideHtmlData = (elemClassName, parentLocation) => {
        if (parentLocation === "/simpleEditor") {
            const blocks = convertToRaw(editorState.getCurrentContent()).blocks;
            const pureTextValue = blocks.map(block => (!block.text.trim() && '\n') || block.text).join('\n');
            let abc = new Blob([pureTextValue],
                { type: 'text/html' });
            document.getElementById(elemClassName).setAttribute('src', URL.createObjectURL(abc))
        } else if (parentLocation === "/") {
            let abc = new Blob([getMainEditorData()],
                { type: 'text/html' });
            document.getElementById(elemClassName).setAttribute('src', URL.createObjectURL(abc))
        }
    }

    // const changeLoadStyle = (res) => {
    //     if (res === true) {
    //         document.getElementsByTagName("body")[0].style.overflow = "hidden"
    //         document.getElementsByClassName("CodeMirror-vscrollbar")[0].style.display = "none"
    //     } else {
    //         document.getElementsByTagName("body")[0].style.overflow = "auto"
    //         document.getElementsByClassName("CodeMirror-vscrollbar")[0].style.display = "block"
    //     }
    // }

    return (
        <>
            <Switch>
                <Route exact path='/output'>
                    {

                        (isOutput === true && showFullOutput === true) ?
                            <OutputShower setShouldLoad={setShouldLoad} shouldCreateEditor={shouldCreateEditor} htmlDataOp={provideHtmlData} curLocationPath={curLocationPath.current} />
                            : <> <Header headerName="TextLab" />
                                <div className="supportiveDiv"></div>
                                <Error404 /></>
                    }
                </Route>

                <Route exact path='/simpleEditor'>
                    <Header shouldCreateEditor={shouldCreateEditor} headerName="TextLab" />
                    <>
                        <MenuBar curLocationPath={curLocationPath} editorState={editorState} setEditorState={setEditorState} setIsOutput={setIsOutput} showFullOutput={showFullOutput} setShowFullOutput={setShowFullOutput} isPhone={isPhone.current} />
                        <div className="toolbarHider">
                            <i onClick={() => hideToolBar()} style={{ marginTop: "-0.2rem" }} id="hiddenToolBar" className="fa fa-chevron-right toolBarShower" aria-hidden="true"></i>
                        </div>
                        <div className="textEditorMainDiv">
                            <Editor
                                editorState={editorState}
                                onEditorStateChange={setEditorState}
                                wrapperClassName="wrapper-class"
                                editorClassName="editor-class"
                                toolbarClassName="toolbar-class"
                            />

                            <div style={{ display: showFullOutput === true && window.innerWidth <= 900 ? "none" : "block" }} className="outputPlace">
                                <iframe className="outputDisplay" src="" id="outputDisplay" title="VARt TextLab">
                                </iframe>
                            </div>

                        </div>
                    </>
                </Route>

                <Route exact path='/'>
                    <Header headerName="TextLab" />
                    <MenuBar curLocationPath={curLocationPath} getMainEditorData={getMainEditorData} setMainEditorData={setMainEditorData} setIsOutput={setIsOutput} showFullOutput={showFullOutput} setShowFullOutput={setShowFullOutput} isPhone={isPhone.current} />
                    <div className="textEditorMainDiv">
                        <textarea className="baseTextArea"></textarea>
                        <div style={{ display: showFullOutput === true && window.innerWidth <= 900 ? "none" : "block" }} className="outputPlace">
                            <iframe className="outputDisplay" src="" id="outputDisplay" title="VARt TextLab">
                            </iframe>
                        </div>
                    </div>
                    {shouldLoad === true ? <Loading /> : <></>}
                    {/* {shouldLoad === true ? changeLoadStyle(true) : changeLoadStyle(false)} */}

                </Route>
                <Route>
                    <Header headerName="TextLab" />
                    <div className="supportiveDiv"></div>
                    <Error404 />
                </Route>
            </Switch >
        </>
    )
}

export default TextLabEditor;
