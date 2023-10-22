// pages/api/twitch.js
import fetch from 'node-fetch';

export default async function handler(req, res) {
  const channelName = 'matchanekoffxiv';

  let a = await fetch(`https://www.twitch.tv/${channelName}`);
  if ((await a.text()).includes('isLiveBroadcast')) {
    res.status(200).json({ isLive: true });
  } else {
    res.status(200).json({ isLive: false });
  }
}
