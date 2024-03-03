#import tkinter as TK
import sys
if sys.version_info[0] == 3:
    import tkinter as tk
else:
    import Tkinter as tk
import turtle

turtle.bgcolor("black")
turtle.pensize(2)
turtle.speed(0)

for i in range(6) :
    for colours in ("red", "blue", "cyan", "green", "magenta", "yellow", "white") :
        turtle.color(colours)
        turtle.circle(100)
        turtle.left(10)

turtle.hideturtle()