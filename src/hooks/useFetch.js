import { useState, useEffect, useRef } from "react"

export const useFetch = ( url) => {
    
   const isMounted = useRef(true);

   const [state, setstate] = useState({
        data: null,
        loading: true,
        error: null
   });

   useEffect(() => {
       return () => {
            isMounted.current = false;
       }
   }, []);

   useEffect(() => {
        setstate({ loading: true, data: null, error: null});
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                if(isMounted){
                    setstate({
                        loading: false,
                        error: null,
                        data
                    });
                }
        });
   }, [url]);
   
  return state;
}