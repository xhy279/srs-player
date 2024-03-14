import React, { useEffect, useRef } from 'react'
import './index.css'
import { SrsRtcWhipWhepAsync } from './srs.sdk'

export interface SrsWhepPlayerProps {
  url: string
  options?: React.VideoHTMLAttributes<HTMLVideoElement>
}

const getIdFromUrl = (url: string) => {
  const searchParams = new URLSearchParams(new URL(url).search)
  const streamValue = searchParams.get('stream')
  return streamValue || ''
}

enum Status {
  Loading = 'loading',
  Playing = 'playing',
}

export const SrsPlayer: React.FC<SrsWhepPlayerProps> = ({ url, options }) => {
  const videoOptions = {
    ...{
      autoPlay: true,
      playsInline: true,
      muted: true,
    },
    ...options,
  }
  const videoRef = useRef<HTMLVideoElement>(null)
  const srsSdkRef = useRef<SrsRtcWhipWhepAsync | null>(null)
  const id = getIdFromUrl(url)
  const [status, setStatus] = React.useState(Status.Loading)

  const startPlay = async () => {
    srsSdkRef.current = new SrsRtcWhipWhepAsync()
    try {
      const parseIdResult = await srsSdkRef.current.play(url)
      console.log(`SrsWhepPlayer play success on ${id}`, parseIdResult)
      setStatus(Status.Playing)
      if (videoRef.current) {
        videoRef.current.srcObject = srsSdkRef.current.stream
      }
    } catch (e) {
      console.error(`SrsWhepPlayer error happens on ${id}`, e)
      setStatus(Status.Loading)
    }
  }

  const cleanup = () => {
    if (srsSdkRef.current) {
      srsSdkRef.current.close()
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null
    }
  }

  const refresh = () => {
    cleanup()
    startPlay()
  }

  useEffect(() => {
    startPlay()
    return () => {
      cleanup()
    }
  }, [url, status])

  return (
    <div className='video-container'>
      {status === Status.Loading && (
        <div className='player-mask'>
          <span>Loading...</span>
          <button className='refresh-button-always' onClick={refresh}></button>
        </div>
      )}
      <>
        <video ref={videoRef} {...videoOptions}></video>
        <button className='refresh-button' onClick={refresh}></button>
      </>
    </div>
  )
}
