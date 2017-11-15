import React, {Component} from 'react';
import {connect} from 'react-redux';


class SinglePage extends Component {

    constructor() {
        super();
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users?id=1').then((Response) => Response.json()).then((findresponse) => {
            this.setState({
                data: findresponse,
            })
        })
    }


    render() {
        return (
            <div>
                {
                    this.state.data.map((dynamicData, key) =>
                        <ul key={dynamicData.id}>
                            <li>{dynamicData.name}</li>
                            <li>{dynamicData.username}</li>
                            <li>{dynamicData.email}</li>
                            <li>Address:<br/>
                                {dynamicData.address.street}
                                {dynamicData.address.suite}
                                {dynamicData.address.city}
                                {dynamicData.address.zipcode}
                            </li>
                            <li>{dynamicData.phone}</li>
                            <li>{dynamicData.website}</li>
                            <li>Company:<br/>
                                {dynamicData.company.name}
                                {dynamicData.company.catchPhrase}
                                {dynamicData.company.bs}
                            </li>
                        </ul>
                    )
                }
            </div>
        );
    }
}


export default connect((state) => {
    return {};
})(SinglePage);