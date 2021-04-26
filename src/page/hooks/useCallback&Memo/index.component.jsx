import React,{useState,useCallback,useMemo,useEffect} from 'react';

const UseCallback_Memo = () => {

    let [content,setContent] = useState('');

    let changeValue = useCallback((e) => {
        setContent(e.target.value);
        console.log("asdasdasdasd")
    },[content])

    // useMemo(() => {
    //     setContent('qwe');
    //     console.log('zxczxc')
    // },[])
    
    useEffect(() => {
        setContent('aaaaa');
        console.log('zxczxc')
    },[])

    return (
        <>
            <div>{content}</div>
            <input type="text" value = {content} onChange = {changeValue} />
        </>
    )
}

export default UseCallback_Memo