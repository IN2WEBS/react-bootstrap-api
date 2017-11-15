import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReplyForm from './Comment';
import MDSpinner from 'react-md-spinner';

class Home extends Component {

    constructor() {
        super();
        this.state = {
            data: [],
            show: false,
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts').then((Response) => Response.json()).then((findresponse) => {
            this.setState({
                data: findresponse,
            })
        })
    }

    toggleModal = () => {
        this.setState({show: !this.state.show});
    };

    render() {
        if (!this.state.data.length) {
            return <MDSpinner className="spinner" size={100}/>;
        }

        return (
            <div>
                {
                    this.state.data.map((dynamicData, key) =>
                        <div className="card mb-3" key={dynamicData.id}>
                            <img className="card-img-top img-fluid w-100" src="https://unsplash.it/700/450?image=180"
                                 alt=""/>
                            <div className="card-body">
                                <h6 className="card-title mb-1 hover-title">
                                    <a onClick={this.toggleModal}>{dynamicData.title}</a>
                                </h6>
                                <p className="card-text small">{dynamicData.body}</p>
                            </div>
                            <hr className="my-0"/>
                            <div className="card-body py-2 small hover-title">
                                <a className="mr-3 d-inline-block" onClick={this.toggleModal}>
                                    <i className="fa fa-fw fa-comment" />Read Comments</a>
                            </div>
                            <hr className="my-0"/>
                            <div>{this.state.show && <ReplyForm/>}</div>
                            <div className="card-footer small text-muted">Posted 46 mins ago</div>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default connect((state) => {
    return {};
})(Home);