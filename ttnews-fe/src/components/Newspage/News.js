
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import apiSettings from "../../API";
import { ReadingNews } from "./ReadingNews";
// import { useNewsFetch } from "../../fetch/NewsFetch";
export const News=()=>{
    const {NewsId} = useParams(); 
    const [error, setError] = useState(false);
    const [view, setView] = useState();
    
    //console.log(NewsId);
    // update views of news
    const fetchView=async()=>{
        try{
            setError(false);
            const View =await apiSettings.fetchViewByIdNews(NewsId);
            
            setView({
                ...View
            })
        }catch{
            setError(true);
        }
    }
    
    const updateView=async()=>{
        try{
            setError(false);
            
            var id = view.id;
            var totalView = view.totalView + 1;
            var idNews = view.idNews;
            const data = {id, idNews,totalView};
            
            await fetch(`https://localhost:44387/api/Views/${id}`,{
                    method:'PUT',
                    headers:{
                        'Content-Type':'application/json',
                        'accept': '*/*'  
                    },
                    body:JSON.stringify(data)
                    }
                    ).then((data) =>
                        console.log(data)
                    ).catch(err => console.log(err))   
            
            
        }catch{
            setError(true);
        }
    }
    useEffect(()=>{
        fetchView()
    },[NewsId])

    useEffect(()=>{
        updateView()
    },[view])

   
    return(
        <>
        {view!=null && <ReadingNews Newsid={NewsId} view={view} />}
        {view==null && <ReadingNews Newsid={NewsId}  />}
        </>
    )
}

