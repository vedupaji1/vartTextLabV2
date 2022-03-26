import React, { useState, useEffect } from "react";
import { EditorState, convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { ContentState } from 'draft-js';
import FileSaver from 'file-saver';
import { useHistory, useLocation } from "react-router-dom";
import introCodeForSimpleEditor from "./introCodeForSimpleEditor.json";
import introCodeForMainEditor from "./introCodeForMainEditor";

const MenuBar = (props) => {
    const location = useLocation();
    const localStoragePath = location.pathname === "/simpleEditor" ? "VARtTextLabSimple" : "VARtTextLabMain";
    const [localData, setLocalData] = useState(JSON.parse(localStorage.getItem(localStoragePath)));
    const [currentFile, setCurrentFile] = useState(null);
    const history = useHistory();

    const dataShower = (i) => {
        // It Will Convert Draft Data Into HTML Then It Will Show In TextBox
        if (location.pathname === "/simpleEditor") {
            try {
                let htmlData = draftToHtml(localData[i].data)
                let { contentBlocks, entityMap } = htmlToDraft(htmlData);
                const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
                const editorState = EditorState.createWithContent(contentState);
                props.setEditorState(editorState)
            } catch (error) {
                localStorage.clear();
                console.log(error);
                alert('We Have Found Some Immoral Activity From Your Side, We Have Deleted Your All Data')
            }
        } else if (location.pathname === "/") {
            try {
                props.setMainEditorData(localData[i].data);
            } catch (error) {
                // localStorage.clear();
                // console.log(error);
                // alert('We Have Found Some Immoral Activity From Your Side, We Have Deleted Your All Data')
            }
        }
    }
    useEffect(() => {
        if (window.innerWidth <= 900 && location.pathname === "/simpleEditor") {
            document.getElementsByClassName("textEditorMainDiv")[0].style.flexDirection = "column";
            document.getElementsByClassName("wrapper-class")[0].style.padding = "0rem";
            document.getElementsByClassName("wrapper-class")[0].style.width = "97%";
            document.getElementsByClassName("toolbar-class")[0].style.overflowY = "auto";
        } else if (window.innerWidth <= 900 && location.pathname === "/") {
            document.getElementsByClassName("textEditorMainDiv")[0].style.flexDirection = "column";
            if (document.getElementsByClassName("CodeMirror")[0]!==undefined) {
                document.getElementsByClassName("CodeMirror")[0].style.width = "97%";
            }
        }
    })

    useEffect(() => {
        try {
            let textData = localData;
            let current = -1;
            if (textData !== null && textData.length !== 0) {
                for (let i = 0; i < textData.length; i++) {
                    if (textData[i].current === true) {
                        current = i;
                        break;
                    }
                }
                setCurrentFile(current);
                if (current !== -1 ) {
                    dataShower(current);
                }
            }
            else {
                if (location.pathname === "/simpleEditor") {
                    localStorage.setItem('VARtTextLabSimple', JSON.stringify(introCodeForSimpleEditor));
                } else if (location.pathname === "/") {
                    localStorage.setItem('VARtTextLabMain', JSON.stringify(introCodeForMainEditor));
                }
                window.location.reload();
            }
        } catch (error) {
            localStorage.clear();
            alert('We Have Found Some Immoral Activity From Your Side, We Have Deleted Your All Data')
        }
    }, [])

    const saveFile = () => {
        let textData = localData;
        if (location.pathname === "/simpleEditor") {
            textData[currentFile].data = convertToRaw(props.editorState.getCurrentContent());
        } else if (location.pathname === "/") {
            textData[currentFile].data = props.getMainEditorData();
        }
        localStorage.setItem(localStoragePath, JSON.stringify(textData));
        let tempVar = [...textData];
        setLocalData(tempVar);
        alert("Your File Is Saved");
    }

    const createNewFile = () => {
        if (document.getElementsByClassName("fileNameInp")[0].value !== null && document.getElementsByClassName("fileNameInp")[0].value.length !== 0) {
            let textData = localData;
            let newTextObj = {
                key: null,
                fileName: document.getElementsByClassName("fileNameInp")[0].value + ".html",
                current: true,
                data: location.pathname === "/simpleEditor" ? convertToRaw(props.editorState.getCurrentContent()) : props.getMainEditorData()
            }

            if (textData == null || textData.length === 0) {
                localStorage.clear();
                newTextObj.key = 1;
                localStorage.setItem(localStoragePath, JSON.stringify([newTextObj]))
                setLocalData([newTextObj])
                setCurrentFile(0);
            }
            else {
                let notSame = true;
                for (let i = 0; i < textData.length; i++) {
                    textData[i].current = false;
                    if (textData[i].fileName === newTextObj.fileName) {
                        notSame = false;
                    }
                }
                if (notSame === true) {
                    newTextObj.key = textData.length + 1;
                    textData.push(newTextObj)
                    localStorage.setItem(localStoragePath, JSON.stringify(textData))
                    let tempVar = [...textData]
                    setLocalData(tempVar)
                    setCurrentFile(localData.length - 1)
                }
                else {
                    alert("File Name Already Exists, Use Another Name")
                }
            }
            alert("Your File Is Created And Saved In Local Storage");
            document.getElementsByClassName("createFileHead")[0].style.display = "none"
        }
        else {
            alert("Enter File Name")
        }
    }

    const downloadData = () => {
        alert("Your HTML Code Is Downloading In HTML Formate");
        let pureTextValue;
        if (location.pathname === "/simpleEditor") {
            const blocks = convertToRaw(props.editorState.getCurrentContent()).blocks;
            pureTextValue = blocks.map(block => (!block.text.trim() && '\n') || block.text).join('\n');
        } else if (location.pathname === "/") {
            pureTextValue = props.getMainEditorData();
        }
        var blob = new Blob([pureTextValue], { type: "text/plain;charset=utf-8" });
        FileSaver.saveAs(blob, "textLab.html");
        //console.log(pureTextValue)
    }

    const showOutput = () => {
        if (((window.innerWidth <= 900) && (props.showFullOutput === true)) || (document.getElementsByClassName("outputPlace")[0].style.display === "none")) {
            let textData = localData;
            textData[currentFile].data = location.pathname === "/simpleEditor" ? convertToRaw(props.editorState.getCurrentContent()) : props.getMainEditorData()
            localStorage.setItem(localStoragePath, JSON.stringify(textData))
            let tempVar = [...textData]
            setLocalData(tempVar)
            props.setShowFullOutput(true);
            props.setIsOutput(true);
            props.curLocationPath.current=location.pathname;
            history.push('/output');
        }
        else {
            let pureTextValue;
            if (location.pathname === "/simpleEditor") {
                const blocks = convertToRaw(props.editorState.getCurrentContent()).blocks;
                pureTextValue = blocks.map(block => (!block.text.trim() && '\n') || block.text).join('\n');
            } else if (location.pathname === "/") {
                pureTextValue = props.getMainEditorData();
            }
            let abc = new Blob([pureTextValue],
                { type: 'text/html' });
            document.getElementById("outputDisplay").setAttribute('src', URL.createObjectURL(abc))
        }
    }

    const changeOr = () => {
        if (window.innerWidth <= 900) {
            if (props.showFullOutput === true) {
                props.setShowFullOutput(false);
                props.setIsOutput(false);
                document.getElementsByClassName("fa fa-arrow-right")[0].style.transform = "rotate(90deg)"
                document.getElementsByClassName("outputPlace")[0].style.width = "97%"
                document.getElementsByClassName("outputPlace")[0].style.marginRight = "0rem"
                document.getElementsByClassName("outputPlace")[0].style.marginTop = "2rem"
            }
            else {
                document.getElementsByClassName("fa fa-arrow-right")[0].style.transform = "rotate(0deg)"
                props.setShowFullOutput(true);
                props.setIsOutput(true);
            }
        }
        else {
            if (document.getElementsByClassName("textEditorMainDiv")[0].style.flexDirection === "row") {
                document.getElementsByClassName("textEditorMainDiv")[0].style.flexDirection = "column"
                if (location.pathname === "/simpleEditor") {
                    document.getElementsByClassName("wrapper-class")[0].style.padding = "0rem"
                    document.getElementsByClassName("wrapper-class")[0].style.width = "97%"
                    document.getElementsByClassName("editor-class")[0].style.height = 700 - document.getElementsByClassName(
                        "toolbar-class")[0].offsetHeight + 'px'
                } else if (location.pathname === "/") {
                    document.getElementsByClassName("CodeMirror")[0].style.width = "97%";
                    document.getElementsByClassName("CodeMirror")[0].style.marginRight = "0%";
                }
                document.getElementsByClassName("outputPlace")[0].style.width = "97%"
                document.getElementsByClassName("outputPlace")[0].style.marginRight = "0rem"
                document.getElementsByClassName("outputPlace")[0].style.marginTop = "2rem"
                document.getElementsByClassName("fa fa-arrow-right")[0].style.transform = "rotate(90deg)"
            }
            else {
                document.getElementsByClassName("textEditorMainDiv")[0].style.flexDirection = "row"
                if (location.pathname === "/simpleEditor") {
                    document.getElementsByClassName("wrapper-class")[0].style.padding = "0rem 1rem 0rem 2rem"
                    document.getElementsByClassName("wrapper-class")[0].style.width = "50%"
                    document.getElementsByClassName("editor-class")[0].style.height = 700 - document.getElementsByClassName(
                        "toolbar-class")[0].offsetHeight + 'px'
                } else if (location.pathname === "/") {
                    document.getElementsByClassName("CodeMirror")[0].style.width = "49%";
                    document.getElementsByClassName("CodeMirror")[0].style.marginRight = "0.5%";
                }
                document.getElementsByClassName("outputPlace")[0].style.width = "50%"
                document.getElementsByClassName("outputPlace")[0].style.marginRight = "1rem"
                document.getElementsByClassName("fa fa-arrow-right")[0].style.transform = "rotate(0deg)"
                document.getElementsByClassName("outputPlace")[0].style.marginTop = "0rem"
            }
        }

    }

    const openFileStyle = () => {
        if (document.getElementsByClassName("fileShowerMenu")[0].style.visibility === "hidden") {
            document.getElementsByClassName("fileShowerMenu")[0].style.visibility = "visible"
            document.getElementsByClassName("fileShowerMenu")[0].style.maxHeight = "15rem"
        }
        else {
            document.getElementsByClassName("fileShowerMenu")[0].style.maxHeight = "0rem"
            setTimeout(() => {
                document.getElementsByClassName("fileShowerMenu")[0].style.visibility = "hidden"
            }, 500)
        }
    }

    const changeCurrentFile = (i) => {
        let tempData = localData;
        if (currentFile !== null) {
            tempData[currentFile].current = false;
        }
        tempData[i].current = true;
        localStorage.setItem(localStoragePath, JSON.stringify(tempData))
        let tempVar = [...tempData]
        setLocalData(tempVar)
        setCurrentFile(i);
        dataShower(i);
    }

    const deleteFile = (i) => {
        if (i === currentFile) {
            setCurrentFile(null)
        }
        let tempData = [...localData];
        tempData.splice(i, 1);
        if (tempData.length > 1) {
            for (let j = i; j < tempData.length; j++) {
                tempData[j].key = j + 1;
            }
        }
        else if (tempData.length === 1) {
            tempData[0].key = 1;
        }
        if (currentFile > i) {
            let cur = currentFile - 1;
            setCurrentFile(cur)
        }
        localStorage.setItem(localStoragePath, JSON.stringify(tempData))
        setLocalData(tempData);
        //console.log(tempData)
    }

    const headerShowHide = () => {
        if (window.innerWidth <= 900) {
            if (document.getElementsByClassName("supportiveDiv")[0].offsetHeight !== 20) {
                document.getElementsByClassName("fa-chevron-right")[0].setAttribute("id", "active")
                document.getElementsByClassName("supportiveDiv")[0].style.height = "2rem";
                document.getElementsByClassName("headerTextDiv")[0].style.width = "100%";
                setTimeout(() => {
                    document.getElementsByClassName("headerTextDiv")[0].style.height = "0rem";
                    document.getElementsByClassName("headerPart")[0].style.height = "0rem";
                }, 200)
            }
            else {
                document.getElementsByClassName("fa-chevron-right")[0].setAttribute("id", "unActive")
                let curWindowWidth = window.innerWidth;
                if (curWindowWidth <= 700) {
                    document.getElementsByClassName("headerTextDiv")[0].style.height = "5.5rem";
                    document.getElementsByClassName("supportiveDiv")[0].style.height = "7rem";
                }
                else {
                    document.getElementsByClassName("headerTextDiv")[0].style.height = "6rem";
                    document.getElementsByClassName("supportiveDiv")[0].style.height = "8rem";
                }
                document.getElementsByClassName("headerPart")[0].style.height = "7rem";

                setTimeout(() => {
                    if (curWindowWidth <= 390) {
                        document.getElementsByClassName("headerTextDiv")[0].style.width = "65%";
                    }
                    else if (curWindowWidth <= 450) {
                        document.getElementsByClassName("headerTextDiv")[0].style.width = "60%";
                    }
                    else if (curWindowWidth <= 600) {
                        document.getElementsByClassName("headerTextDiv")[0].style.width = "50%";
                    }
                    else if (curWindowWidth <= 800) {
                        document.getElementsByClassName("headerTextDiv")[0].style.width = "40%";
                    }
                    else {
                        document.getElementsByClassName("headerTextDiv")[0].style.width = "35%";
                    }
                }, 200)

            }
        }
    }


    return (
        <>
            <div className="supportiveDiv">
            </div>
            <div className="headerHider">
                <i onClick={() => headerShowHide()} className="fa fa-chevron-right" id="unActive" aria-hidden="true"></i>
            </div>

            <div className="mainMenuDiv">
                <div className="mainMenu">
                    <div className="openFile"><i onClick={() => openFileStyle()} className="fa fa-folder-open"></i>
                    </div>
                    <div className="createNewFile"><i onClick={() => document.getElementsByClassName("createFileHead")[0].style.display = "flex"} className="fa fa-plus"></i>
                    </div>
                    <div className="saveFile"><i onClick={() => currentFile === null ? document.getElementsByClassName("createFileHead")[0].style.display = "flex" : saveFile()} className="fa fa-save"></i></div>
                    <div className="changeOrientation"><i onClick={() => changeOr()} style={{ transition: 'transform 0.5s' }} className="fa fa-arrow-right"></i></div>
                    <div onClick={() => downloadData()} className="downloadCode"><i style={{ marginLeft: '0rem' }} className="fa fa-download"></i></div>
                    <div onClick={() => showOutput()} className="runCode">Run<i style={{ marginLeft: '1rem' }} className="fa fa-play"></i></div>
                    <div className="fileNameShower">{currentFile === null || currentFile < 0 ? <></> : <span>{localData[currentFile].fileName}</span>}</div>
                </div>
            </div>

            <div className="createFileHead">
                <div style={{ width: "100%" }} className="supporterForInp"><i onClick={() => document.getElementsByClassName("createFileHead")[0].style.display = "none"} className="fa fa-close"></i></div>
                <input type="text" className="fileNameInp" placeholder="Enter File Name" />
                <div onClick={() => createNewFile()} className="createFile">Create</div>
            </div>

            <div className="fileShowerMenu">
                {
                    localData !== null && localData.length !== 0 ? localData.map((tempData, i) => (
                        <div key={i} className="MainFilNameShower" style={{ display: 'flex', alignItems: ' center', borderBottom: ' 0.2rem solid #f0f2f5' }}>
                            <div onClick={() => changeCurrentFile(i)} className="fileShowerSub">{tempData.fileName}</div>
                            <div className="removeFileIcon">
                                <i onClick={() => deleteFile(i)} className="fa fa-close"></i>
                            </div>
                        </div>
                    )) : <div className="MainFilNameShower" style={{ width: "21.5rem", display: 'flex', alignItems: ' center', borderBottom: ' 0.2rem solid #f0f2f5' }}>
                        <div className="fileShowerSub">No Files</div>
                    </div>
                }
            </div>
        </>
    )
}
export default MenuBar;