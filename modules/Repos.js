import React from 'react'
import { Link } from 'react-router'
export default class Repos extends React.Component {
    render() {
        return(
            <div>{this.props.params.repoName}
                <ul>
                    <li>
                        <Link to='/repos/reactjs/react-router'>React Router</Link> 
                    </li>
                    <li>
                        <Link to='/repos/facebook/react'>React</Link> 
                    </li>
                </ul>
                
                {
                    this.props.children
                }
            </div>
        )
    }
}
