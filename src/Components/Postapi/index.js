import {Component} from 'react'

class App extends Component {
  state = {
    name: '',
    emails: '',
    messages: '',
  }

  addButton = async event => {
    event.preventDefault()

    const {name, emails, messages} = this.state
    const userData = {name, emails, messages}
    const url = ' https://admin.srkprojects.com/web/api/client/v1/contact-us/'
    const options = {
      method: 'POST',
      body: JSON.stringify(userData),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (data === ok) {
      console.log('success')
    } else {
      console.log('error')
    }
  }

  inputName = e => {
    this.setState({name: e.target.value})
  }

  email = e => {
    this.setState({emails: e.target.value})
  }

  message = e => {
    this.setState({messages: e.target.value})
  }

  render() {
    const {name, messages, emails} = this.state
    return (
      <div>
        <h1>User Data</h1>
        <label htmlFor="name">name</label>
        <input id="name" value={name} onChange={this.inputName} type="text" />
        <br />
        <label htmlFor="email">email</label>
        <input id="email" value={emails} onChange={this.email} type="text" />
        <br />
        <textarea value={messages} onChange={this.message} cols="12" rows="8" />
        <div>
          <button onClick={this.addButton} type="button">
            Add
          </button>
        </div>
      </div>
    )
  }
}
export default App
