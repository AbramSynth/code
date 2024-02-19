# Gamelet

A starter program for writing JavaScript games.


## Usage

1. include gamemlet.js in an html doc containing an element with an id of 'ball'.

```
html
<div id="ball">@</div>
<script src ="gamelet.js"></script>
```

2. the script will detect when the left, right, up, or down arrow keys are pressed and will move the ball element accordingly.


3. adjust the value before px to increse length of movement. Default is no value (1px).


```
function refresh() {
    ball.style.left = positionX + 'px';
    ball.style.top = positionY + 'px';
}
```




 