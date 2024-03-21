export interface ISrsRtcWhipWhepAsync {
  constraints: MediaStreamConstraints
  publish: (url: string) => Promise<void>
  play: (url: string, options?: any) => Promise<ParseIdResult>
  close: () => void
  ontrack: ((event: { track: MediaStreamTrack }) => void) | null
  stream: MediaStream
}

export interface ParseIdResult {
  sessionid: string
  simulator: string
}

export interface InternalMethods {
  parseId: (url: string, offer: string, answer: string) => ParseIdResult
}

export declare class SrsRtcWhipWhepAsync implements ISrsRtcWhipWhepAsync {
  constructor()
  constraints: MediaStreamConstraints
  publish(url: string): Promise<void>
  play(url: string, options?: any): Promise<ParseIdResult>
  close(): void
  ontrack: ((event: { track: MediaStreamTrack }) => void) | null
  stream: MediaStream
  private __internal: InternalMethods
}
