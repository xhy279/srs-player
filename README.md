# SRS Player

## Description

This is the SRS ([Simple Realtime Server](https://github.com/ossrs/srs)) whipwhep player implementation using react and bundled in umd and esm format.

## Installation

```bash
bun add srs-player
```

## Usage

```javascript
import 'srs-player/lib/index.css';
import { SrsPlayer } from 'srs-player';

<SrsPlayer url={url} options={options} rtcOptions={rtcOptions}/>
```

Check more in the `examples` folder for usage.

### Props

url:
> The `url` is the SRS WebRTC endpoint you want to connect to.

options

> The `options` prop contains attributes for the HTML video tag.

The default `options`:

```javascript
{
    autoPlay: true,
    playsInline: true,
    muted: true,
}
```

rtcOptions

> The `rtcOptions` control the behavior of the WebRTC connection. You can provided customized `audio` and `video` options that will be recursively merged with the default options.

The default `rtcOptions`:

```javascript
{
    audio: {
        enable: true,
        transceiverOptions: {
            direction: 'recvonly',
        },
    },
    video: {
        enable: true,
        transceiverOptions: {
            direction: 'recvonly',
        },
    },
}
```

For example, to disable audio in the WebRTC connection:

```javascript
{
    audio: {
        enable: false
    }
}
```

## Development

```bash
bun i
bun demo
```
