MY (PARTIAL) COMPLETION OF REACT.JS EXERCISE
Marco Krizic, September 30, 2018

What I was able to complete:
-As a user I can run the application on my desktop web browser
	-The minimum requirement is to have the application run as an offline web page
-As a user I can optionally define the boundaries (valid range of the X axis) of the formula, so that it is plotted within those boundaries
	-As a bonus, I managed to make the y-Axes customizable as well. I opted to do so as I felt it would give the hypothetical user more convenience if
	they were able to adjust the Y-values as well
-As a user if I don't explicitly define the boundaries, the application will use a default range / heuristic to plot the formula.

What I wasn't able to complete:

-As a user I can write a one-variable formula so that it would be drawn on the canvas
	-Formula examples: “x^2”, “sin(x)”, “cos(x)”, “x+1”, “2*x + 10”
BRIEFING:

Steps required to run the program:
1. npm install
2. npm run build
3. npm start

This React.js program will outline the basic mathematical formula of perfect squares (y=x^2) while transcribing
the values onto a Cartesian grid, which should render on a local web page. Both the integers making up the x- and y-axes can be
adjusted manually by inputting numerical values into the respecive text boxes for both the X- and Y-axes. I was not able to figure out a way
for the user to input mathematical formulas into the program to graphically represent different formulaic equations other than (y=x^2). However, there
does exist a third text box intended for this purpose, with the defdault equation presented within.

RESOURCES:
This submission was made possible and put together by using the following tutorials and libraries (copy and paste links into browser):

http://www.chartjs.org/docs/latest/ - A website explaining ChartJS, a library I have found to be the most helpful in illustrating
what I've completed of the project
http://www.chartjs.org/samples/latest/ - Samples from the amove website with which I could explore using Chrome's developer tools

https://www.youtube.com/watch?v=sE08f4iuOhA - 'Getting Started With Chart.js'
https://www.youtube.com/watch?v=Ly-9VTXJlnA - 'Using Chart.js With React
https://github.com/bradtraversy/reactcharts - Source code from the above two videos

https://www.youtube.com/watch?v=BvtQMxekmH0 - 'React For Everyone #13 - Controlled Inputs'
https://www.youtube.com/watch?v=ZKnwLcBqAM8 - '10-React.js#10.Handling multiple inputs'
https://www.youtube.com/watch?v=qH4pJISKeoI - 'How to code a form in React'

UPDATED RESOURCES:
https://stackoverflow.com/questions/1133770/how-do-i-convert-a-string-into-an-integer-in-javascript - Helpful resource for the Javascript parseInt object
https://goshakkk.name/array-form-inputs/ - Resource for dynamic form inputs
https://www.w3schools.com/js/js_loop_for.asp - Resource for Javascript loops
https://canvasjs.com/docs/charts/how-to/render-chart-by-accepting-datapoints-from-user-input/ -Blog post explaining helpful way to change points through user input





