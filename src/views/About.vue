<template>
  <div class="about">
    <h2>Motivation</h2>

    <p>Nearing the end of my Web Development Immersive, I wanted to take a look back and see what I had done in the past twelve weeks since the beginning of the course.</p>
    <p>Over the course, I had a good habit of keeping track of how I spent my time. I used the application Toggl to keep track of the time I spent in class, on assignments, etc. I also saved my terminal output to Gists, and in most of my projects I have a "resources.md" file where I keep record of the additional links and articles I used to help me complete an assignment.</p>
    <p>For my final project, I wanted to go back and analyze this data, and see not only how I spent my time and energy, but to discover any insights about what I did well and what I can improve upon as I continue my journey as a developer after the course.</p>

    <h2>Insights</h2>

    <p>I found the most value in working with the timesheet data I accumulated through Toggl. With the course winding down, I am more interested in learning how I can utilize my time most effectively.</p>
    <p>One thing I quickly discovered is that while I did a pretty good job using Toggl to keep track of when I was working, I could improve on the metrics I used to keep track of what I was working on. I had a good system of tags in place to quickly categorize different tasks, but there were some inconsistencies that made it difficult to compare certain tasks with one another.</p>

    <p>For example, I used a 'wdi-hw' tag to mark homework tasks, but for projects I did not have an overarching 'wdi-project' tag. Instead, I had individual tags for each project, ie 'wdi-project-1' and 'wdi-project-4'. This made it <em>very</em> difficult to calculate the total amount of time I spent on all projects. Additionally, it might have been valuable to have another set of tags for the other tasks to keep track of the particular assignment (I used the description to keep track of it - but I can't query those value as easily as I can through tags).</p>

    <p>I also found I had some interesting habits in how I kept track of time. When I look at the MVP vs Bonus breakdown for Homework, it looks like I did not do any Bonus objectives at all. However, this is not the case. So what this tells me is that when I was keeping track of time, I had a clear goal of what bonus objectives I wanted to accomplish for each homework assignment, and once I finished I did not go back to do additional work. Which is something I would not have realized if I did not keep track of the data!</p>

    <h2>Conclusion</h2>
    <p>When I was working on this project, I would talk to the Data Science Immersive students and joke that they could do the data analytics in about 10 seconds. While I am comfortable enough with Javascript to write the code to analyze the data I wanted, it took me a considerable amount of time, and I know there are much better ways of doing so. I have an entire back end just for working with the data, which I think is the right approach, but it does make me respect the skills a Data Scientist has, and because I am intersted in these kinds of problems as well it did teach me a little more about myself and what I want to improve upon after the course is over.</p>

    <p>There are still some queries I want to run on my data, but I believe that it would be wiser to go back and improve the data itself so I don't have to write over complicated code to get the data I need. There are limitations to what I can do with Toggl, but I still think it is a better use of time to work within those limitations to improve the metadata so I have better tools to work with the data.</p>
  </div>
</template>

<style lang="scss" scoped>

  .about {
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 40px;
  }
  p {
    text-align: left;
  }
</style>
