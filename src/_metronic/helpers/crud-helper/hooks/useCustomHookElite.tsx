import React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios'
const API_URL_UNSTABLE  = process.env.REACT_APP_API_URL_UNSTABLE
// const GET_GETCNAME = `${API_URL_UNSTABLE}Jobs/GetCname`

function UseCustomHookElite(url:any,id?:any) {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    (async function () {
      try {
        setLoading(true)
        const response = await axios.get(`${API_URL_UNSTABLE}${url}/${id}`)
        setData(response.data)
      } catch (err:any) {
        setError(err)
      } finally {
        setLoading(false)
      }
    })()
  }, [url,id])

  return {data, error, loading}
 
}
export default UseCustomHookElite