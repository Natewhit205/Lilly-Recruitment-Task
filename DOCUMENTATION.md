# Lilly Technical Challenge Documentation Template

## Approach
First I decided that it would probably be best to place every html element I would need on the screen first then alter it with the JavaScript. I read all of the objects upfront so I had an overall idea of everything I would need to plan for and how I could implement them. I then went through the objectives one-by-one to make sure everything was covered. After that I went over the CSS file to change the interface. Initially I had to look into how to fetch the data from within JavaScript, but I was familiar with what it meant from the server side. Once I had that figured out, worked on writing the function to update the table from what was received.

## Objectives - Innovative Solutions
When I initially wrote the searchHandler function it had more lines than I would have liked, so I went over it to try and condense anything that I felt could be moved elsewhere. I did enjoy writing the function to update the table from the JSON data and handling whether or not the data was a single medicine or the entire list.

## Problems Faced
When submitting the POST request with the form, the submit button would change the page to the server's create page. To solve this I wrote an event handler on the submit button and stopped its default actions to do everything other than change the page.

## Evaluation
Overall the challenge was interesting. I found it easier to pull information from the server than to send information to the server. If I were to do this again, I would probably spend more time before hand looking into different ways to handle GET and POST requests on the client side before starting.