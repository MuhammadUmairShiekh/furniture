import React, { useEffect, useState } from 'react'
import '../../src/Style/Clock.css'


const Clock = () => {
  const [days, setDays] = useState()
  const [hours, setHours] = useState()
  const [min, setMin] = useState()
  const [sec, setSec] = useState()
  let interval;

  const countDown = () => {
    const distination = new Date("Dec 31, 2023").getTime()
    interval = setInterval(() => {
      const now = new Date().getTime()
      const differnce = distination - now
      const days = Math.floor(differnce / (1000 * 60 * 60 * 24))
      const hour = Math.floor(differnce % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
      const min = Math.floor(differnce % (1000 * 60 * 60) / (1000 * 60))
      const sec = Math.floor(differnce % (1000 * 60) / 1000)

      if (distination < 0) clearInterval(interval.current)
      else {
        setDays(days)
        setHours(hour)
        setMin(min)
        setSec(sec)

      }

    })
  }
  useEffect(() => {
    countDown()
  })
  return (
    <div className='clock_wrapper d-flex align-items-center gap-5'>
      <div className='clock_data d-flex align-items-center gap-3' >
        <div className='mb-3 text-center '>
          <h1 className='text-white fs-3'>
            {`${days<10?"0":""}` + `${days}`}
          </h1>
          <h3 className='border-0 text-white fs-6'>
            Days
          </h3>
        </div>
        <span className='text-white fs-3 '>:</span>
      </div>
      <div className='clock_data d-flex align-items-center gap-3' >
        <div className='mb-3 text-center '>
          <h1 className='text-white fs-3'>
            {`${hours<10?"0":""}` + `${hours}`}
          </h1>
          <h3 className='border-0 text-white fs-6'>
            Hours
          </h3>
        </div>
        <span className='text-white fs-3 '>:</span>
      </div>
      <div className='clock_data d-flex align-items-center gap-3' >
        <div className='mb-3 text-center '>
          <h1 className='text-white fs-3'>
            {`${min<10?"0":""}` + `${min}`}
          </h1>
          <h3 className='border-0 text-white fs-6'>
            Minutes
          </h3>
        </div>
        <span className='text-white fs-3 '>:</span>
      </div>
      <div className='clock_data d-flex align-items-center gap-3' >
        <div className='mb-3 text-center '>
          <h1 className='text-white fs-3'>
            {`${sec<10?"0":""}` + `${sec}`}
          </h1>
          <h3 className='border-0 text-white fs-6'>
            Seconds
          </h3>
        </div>
        {/* <span className='text-white fs-3 '>:</span> */}
      </div>
    </div>
  )
}

export default Clock