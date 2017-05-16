

## Debugging YouTube
![Spock](https://media.giphy.com/media/fECTyvPYevOHC/giphy.gif)

You can only count so many jumps, hula-hoop rotations and hot dogs being devoured before you go insane. Time to move on from our record judge job to greener pastures! Not to worry, we've secured ourselves a gig at YouTube this time! Our first task is to create some sort of debug bar that allows us to control the simulated network conditions on YouTube. Among other things, we can change our resolution, the bitrate of the videos, the audio quality, and so on.

1. In the `components/YouTubeDebugger.js` file, create a `YouTubeDebugger` React component.
2. This component has several state properties, the initial shape looks like this:

```
{
  errors: [],
  user: null,
  settings: {
    bitrate: 8,
    video: {
      resolution: '1080p'
    }
  }
}
```

3. Create a button with the class `'bitrate'`. Clicking this button changes the `settings.bitrate` state property to `12`.
4. Create a button with the class `'resolution'`. Clicking this button changes the `settings.video.resolution` state property to `'720p'`.

_Note: the classes are added to make testing your solution a little easier._

## Resources
- [React: `setState`](https://facebook.github.io/react/docs/component-api.html#setstate)
