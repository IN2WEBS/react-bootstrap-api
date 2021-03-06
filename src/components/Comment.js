import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';


class ReplyForm extends Component {

    state = {
        categories: [],
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/comments?postId=1').then((Response) => Response.json()).then((findresponse) => {
            this.setState({
                categories: findresponse,
            })
        })
    }


    render() {
        return (
            <div>
                {
                    this.state.categories.map((category, key) =>
                        <div className="card-body small bg-faded" key={category.id}>
                            <div className="media">
                                <Link to="single">
                                    <img className="d-flex mr-3" src="http://placehold.it/45x45" alt=""/>
                                </Link>
                                <div className="media-body">
                                    <h6 className="mt-0 mb-1"><a href="/single">{category.name}</a></h6>
                                    {category.email}
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}


export default connect((state) => {
    return {};
})(ReplyForm);