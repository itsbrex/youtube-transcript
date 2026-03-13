import { fetchTranscript } from '../dist/youtube-transcript.esm.js';

(async () => {
  console.log(await fetchTranscript(process.argv[2]));
})();
