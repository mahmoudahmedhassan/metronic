import React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios'
const API_URL_UNSTABLE  = process.env.REACT_APP_API_URL_UNSTABLE
// const GET_GETCNAME = `${API_URL_UNSTABLE}Jobs/GetCname`

function APiHook(url:any,values?:any) {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    (async function () {
      try {
        setLoading(true)
        const response = await axios.get(`${API_URL_UNSTABLE}${url}`)
        setData(response.data)
      } catch (err:any) {
        setError(err)
      } finally {
        setLoading(false)
      }
    })()
  }, [url])

  return {data, error, loading}
 
}

export default APiHook
