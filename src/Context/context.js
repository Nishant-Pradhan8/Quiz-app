import { createContext, useEffect, useState} from 'react';
const DataContext = createContext({});

export const DataProvider = ({children})=>{
    const [selection, setSelection] = useState(localStorage.getItem('Selection')||"")
    const [currentQn, setCurrentQn] = useState('');
    const [limit, setLimit] = useState(localStorage.getItem('Limit')||"");
    const [category, setCategory] = useState(localStorage.getItem('Category')||"");
    const [difficulty, setDifficulty] =  useState(localStorage.getItem('Difficulty')||"");
    const [totalQn, setTotalQn] = useState(0)
    const [questionIndex, setQuestionIndex] = useState(1);
    const [progress, setProgress] = useState(0)
    const [rightAns, setRightAns] = useState(0)
    const [theme, setTheme] = useState('Light');

 
    
    
    function iconImgSrc(selection){
        let imgSrc = ""
        if(selection==="HTML"){
            imgSrc = "/images/icon-html.svg";
        } else if(selection==="JavaScript"){
            imgSrc =  "/images/icon-js.svg";
        } else if(selection==="PHP"){
            imgSrc =  "/images/web.png";
        } else{
            imgSrc = "/images/mysql.png";
        }
        return imgSrc;
    }

    useEffect(()=>{
        if(theme==='Light'){
            document.body.classList.remove("body-dark")
        }else{
            document.body.classList.add("body-dark")
        }
    },[theme])

    
    return (
        <DataContext.Provider value={{currentQn,setCategory ,limit, setCurrentQn, setSelection,setTheme, theme, selection,  progress, questionIndex,  rightAns, setQuestionIndex,difficulty, setDifficulty,  setLimit, totalQn,iconImgSrc,category,setProgress,setRightAns, setTotalQn}}>
            {children}
        </DataContext.Provider>
    )

}
export default DataContext