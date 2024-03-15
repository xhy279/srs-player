# SRS Player

## Description

This is the SRS ([Simple Realtime Server](https://github.com/ossrs/srs)) whipwhep player implementation using react and bundled in umd and esm format.

## Usage

```javascript
import 'srs-player/dist/index.css';
import { SrsPlayer } from 'srs-player';

// url is the srs webrtc endpoint
// options is the html video tag attributes
<SrsPlayer url={url} options={options}/>
```

Check more in the `examples` folder for usage.

## Development

```bash
bun i
bun demo
```
