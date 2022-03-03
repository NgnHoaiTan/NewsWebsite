import react,{useState,useRef, useEffect} from "react";
import JoditEditor from "jodit-react";

const Editor =()=>{
    const editor = useRef(null);
    const [content, setContent] = useState("");
    useEffect(()=>{
        setContent()
    },[]);
    const config ={
        readonly: false
    }
    return(
        <JoditEditor
            ref={editor}
            value={content}
            config={config}
            onBlur={newContent=> setContent(newContent)}
            onChange={newContent => {}}
        />
    )
};
export default Editor;