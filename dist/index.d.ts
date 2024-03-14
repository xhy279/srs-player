interface ISrsRtcWhipWhepAsync {
  constraints: MediaStreamConstraints
  publish: (url: string) => Promise<void>
  play: (url: string) => Promise<ParseIdResult>
  close: () => void
  ontrack: ((event: { track: MediaStreamTrack }) => void) | null
  stream: MediaStream
}

interface ParseIdResult {
  sessionid: string
  simulator: string
}

interface InternalMethods {
  parseId: (url: string, offer: string, answer: string) => ParseIdResult
}

declare class SrsRtcWhipWhepAsync implements ISrsRtcWhipWhepAsync {
  constructor()
  constraints: MediaStreamConstraints
  publish(url: string): Promise<void>
  play(url: string): Promise<ParseIdResult>
  close(): void
  ontrack: ((event: { track: MediaStreamTrack }) => void) | null
  stream: MediaStream
  private __internal: InternalMethods
}

interface SrsWhepPlayerProps {
  url: string
  options?: React.VideoHTMLAttributes<HTMLVideoElement>
}
declare const SrsPlayer: React.FC<SrsWhepPlayerProps>

export { type ISrsRtcWhipWhepAsync, type InternalMethods, type ParseIdResult, SrsPlayer, SrsRtcWhipWhepAsync, type SrsWhepPlayerProps };
