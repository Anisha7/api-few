# API Project: Using the Web Audio API to create a Music Maker!

## What is the Web Audio API?

This API provides a system to control audio on the web by choosing sources, adding effects, creating visualizations, and more.
It uses an audio context, which has a modular design that allows the flexibility for complex audio functions, using audio nodes and different types of channel layouts.

## Features used in this Project

# Audio Context
This controls the creation of nodes and the execution of audio processing/decoding.
It must be created before anything else for this API to function because everything happens inside the audio context.

    
# Oscillator Node
This represents a periodic waveform that causes a specified frequency of a wave to be created.
Its' methods can be used to create different waves and frequencies, with a timer to start and stop playing the tune.
This allows for the Web Audio API to do its job: play sounds.

# Gain Node
This represents a change in volume. This is used to modify volume, inceasing it, muting it, or decreasing it.

## Notes on Browser Support
It is supported by Chrome, Edge, Firefox, Opera, and Safari. Same applies for mobile phones, as it is not supported on Android or Opera Mobile, but works on Chrome or Safari.

## Is this a Good Feature? How will it be used? What apps could make use of this feature?
This is definitely a good feature. It allows you to implement instruments and immitate their sounds on a website. Thus, a person could have a portable instrument, and not just one, but any and however many instruments. Music making apps, frequency testing apps, or any apps requiring sounds could use this feature.

## Running the demo
To run this demo, go on https://anisha7.github.io/api-few/.
To run it locally, clone or download the repo and open index.html in your browser.

## Links
- Documentation: https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API 
- Medium Post: 
Stretch goal: Write a Medium post about your experience with your chosen API. This article should be atleast 500 words. If you do the stretch goal post a link to your article in your Githup Repo.