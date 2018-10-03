MY (PARTIAL) COMPLETION OF REACT.JS EXERCISE
Marco Krizic, September 30, 2018

What I was able to complete:
-As a user I can run the application on my desktop web browser
	-The minimum requirement is to have the application run as an offline web page

What I wasn't able to complete:
-As a user I can optionally define the boundaries (valid range of the X axis) of the formula, so that it is plotted within those boundaries
-As a user I can write a one-variable formula so that it would be drawn on the canvas
	-Formula examples: “x^2”, “sin(x)”, “cos(x)”, “x+1”, “2*x + 10”
-As a user if I don’t explicitly define the boundaries, the application will use a default range / heuristic to plot the formula

BRIEFING:

Steps required to run the program:
1. npm install
2. npm run build
3. npm start

This React.js program will outline the basic mathematical formula of perfect squares (y=x^2) while transcribing
the values onto a Cartesian grid, which should render on a local web page. Both the integers making up the x- and y-axes can be
adjusted manually by changing the array objects in the source code. I was not able to dynamically set the boundaries via user input or
create the parcer to dynamically set the function via user input. I was, however, able to create a text box that can store user input and a button to refresh
the graph. 

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




