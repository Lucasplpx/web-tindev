import React, { useState } from 'react'
import './style.css'

import api from '../../services/api'
import logo from '../../assets/logo.svg'

export default function Login({ history }){
  const [username, setUsername] = useState('')

  async function handleSubmit(e){
    e.preventDefault()

    const res = await api.post('/devs', { username })

    const { _id } = res.data

    history.push(`/dev/${_id}`)
  }

  return (
    <div className="login-container">

      <form onSubmit={handleSubmit}>
        <img src={logo} alt="logo"/>
        <input
          placeholder="Digite seu user no Github"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button type="submit">Enviar</button> 
      </form>    
      
    </div>
  )
}