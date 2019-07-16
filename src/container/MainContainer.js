import React from 'react';
import HomeContent from '../components/HomeContent';



function MainContainer(props) {
  if(!props.listArticle){
    return null;
  }else {
    return (
        
        <HomeContent 
          listArticle={props.listArticle}
          addToHistory={props.addToHistory}
          readArticles={props.readArticles}
          totalPage={props.totalPage}
          activePage={props.activePage}
          itemPerPage={props.itemPerPage}
          requestArticleByPage={props.requestArticleByPage}
        />
    );
  }
    
}

export default MainContainer;