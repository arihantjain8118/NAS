import React from 'react';
import NewsCard from './NewsCard';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        padding: '5px'
    },
  });

const NewsCardList = ({Data}) =>{
    const classes = useStyles()
    return(
        <div className={classes.root}>
            {  
                Data.map((user ,i) =>{
                return <NewsCard key={i} imageUrl={Data[i].urlToImage} publish={Data[i].publishedAt} title={Data[i].title} desc={Data[i].description} url={Data[i].url}/>
                })
            }
        </div>
    )
}

export default NewsCardList;