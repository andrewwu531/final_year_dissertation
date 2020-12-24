import React from 'react';
import axios from 'axios';

import Articles from '../components/Article';
import CustomForm from '../components/Form';
import CustomLayout from './Layout';

class ArticleList extends React.Component {

    state = {
        articles: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                this.setState({
                    articles: res.data
                });
                console.log(res.data);
            })
    }

    render() {
        return (
            <div>
                <h1>Hi</h1>
                <CustomLayout>
                    <Articles data={this.state.articles} />
                    <br />
                </CustomLayout>
                <h2>Create an article</h2>
                <CustomForm 
                    requestType="post"
                    articleID={null}
                    btnText="Create" />
            </div>
        )
    }
}

export default ArticleList;