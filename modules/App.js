import React from 'react'
import { Link } from 'react-router'
import Home from './Home'
export default class App extends React.Component{
    
    constructor(props){
        super(props)
    }
  render() {
      return (
          <div>
            <ul>
                <li>
                    <Link to='/about' activeStyle={{ color: 'red'}}>About</Link>
                </li>
                <li>
                    <Link to='/repos' activeStyle={{ color: 'red' }}>Repos</Link>
                </li>
            </ul>
            {
                this.props.children // || <Home />
            }
          </div>
      )
  }
}
