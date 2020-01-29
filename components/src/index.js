import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () =>{
    return(
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                author = "Jourdan" 
                content="Wow I'm 독독해" 
                timeAgo="Today 4:45 PM" 
                avatar = {faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                author = "Inhwa" 
                content="Wow I'm 바새" 
                timeAgo ="Today at 2:00AM" 
                avatar = {faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
            <CommentDetail 
                author = "Brewner" 
                content="Wow I'm 개" 
                timeAgo="Today at 3:00PM" 
                avatar = {faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));