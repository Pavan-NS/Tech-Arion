import {Component} from 'react'

class Todos extends Component {
  state = {
    data: [],
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const url = 'https://gorest.co.in/public/v1/todos'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const dataApi = await response.json()
    console.log(dataApi)
    const newData = dataApi.data.map(each => ({
      id: each.id,
      dueOn: each.due_on,
      status: each.status,
      title: each.title,
      userId: each.user_id,
    }))
    this.setState({data: newData})
  }

  render() {
    const {data} = this.state
    return (
      <div>
        <h1>TodoList</h1>
        <ul>
          {data.map(eachAp => (
            <li className="li" key={eachAp.id}>
              <h1>{eachAp.title}</h1>
              <h1>{eachAp.status}</h1>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
export default Todos
