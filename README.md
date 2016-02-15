# jQuery.cycleClass

CDN : https://cdn.rawgit.com/BOXNYC/jQuery.cycleClass/master/jQuery.cycleClass.js

## $().cycleClass(classes str [, options])

## Options
- loopType: The type of cycling of the classes
- direction: The direction of the cycling

## Option Constants
- $.CYCLE_CLASS_FORWARD : Class cycle direction forward.
- $.CYCLE_CLASS_REVERSE : Class cycle direction in reverse.
- $.CYCLE_CLASS_BOUNCE : Toggles forward and reverse class cycling. Another words, back and forth. Initial direction is determined but the directions option.
- $.CYCLE_CLASS_REWIND : If the option direction is forward, classes cycle forward, and when last class is reached, the first class is selected. If direction is reverse, classes cycle in reverse, and when first is reached, the last class is selected.

## Examples
```javascript
$('li').click(function(){
  $(this).cycleClass('small medium large');
});

$('li').click(function(){
  $(this).cycleClass(['small', 'medium', 'large']);
});

$('li').click(function(){
  $(this).cycleClass('small medium large', {
    direction: $.CYCLE_CLASS_FORWARD,
    loopType: $.CYCLE_CLASS_BOUNCE
  });
});

$('li').click(function(){
  $(this).cycleClass('small medium large', {
    direction: $.CYCLE_CLASS_REVERSE,
    loopType: $.CYCLE_CLASS_BOUNCE
  });
});

$('li').click(function(){
  $(this).cycleClass('small medium large', {
    direction: $.CYCLE_CLASS_REVERSE
  });
});
```
