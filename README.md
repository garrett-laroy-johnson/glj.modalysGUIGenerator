# glj.modalysGUIGenerator
This is a quick & dirty JS scriptsto generate GUI control panel for Modalys instruments when modalys~ is queried for ctrllist. 

`js glj.mdlysCtrlGen.js` object will expect a Max list with the firstitem = `createModalysController`, followed by strings corresponding to `modalys~` parameters (e.g. `MonoString@Tension`).

## Quickstart 
- put `glj.mdlysCtrlGen.js` in the same folder as your patch or in Max's search path.
- make a new `js` object with single argument, `glj.mdlysCtrlGen.js`. 
- route `ctrllist` data from rightmost outlet of `modalys~` into a `prepend createModalysController` object. Connect prepend to `modalys~`
- click `modalys~`, open the inspector, and set *script name* to `modalys`
- (see example patch for barebones workflow)
- you can send a `deleteObjects` message to clear out the interface (note: atm, after saving, closing, and opening the patch, this will not work and you'll need to delete manually). 

## dependencies
[IRCAM Modalys](https://forum.ircam.fr/projects/detail/modalys/) 

## to-do
- generate interface into a `bpatcher`
- create dictionary with generic ranges built into generated objects (e.g. string, 0-1)
- some way to toggle interface (dial, slider, number, etc.) 
- deal with modalys @name in some intuitive way
