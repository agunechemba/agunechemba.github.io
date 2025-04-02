![Agunechemba Ekene - The Celebrated Tech Trainer](https://agunechembaekene.wordpress.com/wp-content/uploads/2025/04/img_20241018_082917.jpg?w=1024)

In the world of functional programming, it's quite common for me to take several smaller, focused functions and combine them into one single function. I think of it like building a pipeline or snapping together pieces of a train track. 

My data starts at the beginning of this track, and as it moves along, each function I've added modifies it in some way before passing it on to the next piece. 

This process of combining functions is what we call "composition."
It makes transforming data really straightforward because I only need to work with that final composed function.

Let's imagine I have a couple of simple functions, each designed to do just one specific job. For example, I might have a function called capitalize. Its only task is to take a piece of text (like a string x) and make sure the very first letter is uppercase. So, x.replace(/^\w/, m => m.toUpperCase()) does exactly that.

Then, maybe I have another little function called sign. This one takes some text x and adds a friendly closing note, like x + ',\nmade with love'.

Now, instead of calling capitalize on my text first, and then taking that result and calling sign on it, I can compose them! I'd use a helper utility, typically named compose, to create a new function. Let's call my new combined function formatText. I'd create it like this: const formatText = compose(capitalize, sign);.

When I then use formatText('this is an example'), what happens behind the scenes is that my initial text 'this is an example' is first passed through the capitalize function, becoming 'This is an example'. Then, that result is immediately passed through the sign function, giving me the final output:
'This is an example,
made with love'

See how I built a transformation track? The data flowed through capitalize and then sign.

Now, about that compose function itself – I don't always have to write it myself. Many helpful JavaScript libraries like Lodash or Ramda already provide their own versions. But, if I needed a simple one, the example shows how I could create it. 

This specific compose function is designed to take any number of functions I give it (...funs). When the function it returns is called with some starting value (x), it uses reduce to process that value (x) through each function (f) in the list (funs), one after the other, accumulating the result (ac) as it goes.

So, in essence, function composition allows me to build sophisticated data processing pipelines by snapping together simple, reusable function building blocks.
