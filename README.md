# Milestone 1 Project

This is a milestone 1 project from the Full Stack Software Engineering bootcamp by RevoU. This time, the students are examined on their knowledge and understanding of all the first milestones of the bootcamp, including:

-   HTML Structure: Creating the core structure and organization of a webpage using HTML.
-   CSS Styling: Applying visual styles and layout using Cascading Style Sheets (CSS).
-   Command Line & Git: Navigating projects using the command line interface and version control with Git.
-   Remote Repositories: Utilizing remote repositories on GitHub for collaborative development and version control.
-   Documentation Creation: Effectively documenting project details and processes.
-   Responsive Design: Developing websites that adapt seamlessly across various screen sizes (desktop, mobile, tablet).
-   Deployment: Deploying the final website to a custom domain for public access.
    For this milestone project, the students are tasked with creating a company profile of their choice.

After conducting research, I decided to create a company website for a fictitious company that provides space tours. The website will showcase the company's fleets, destinations, and testimonials from previous clients who have experienced space travel. For this project, I aimed to create a visually appealing UI/UX design, giving the website a futuristic theme as reflected in the chosen fonts and design.

Creating this website was a great hands-on experience where I encountered and learned from many challenges and mistakes along the way. Later in this documentation, I will explain each section of the project in further detail.il.

## Repository and Domain

-   [GitHub Repository](https://github.com/RevoU-FSSE-4/milestone-1-anojumisa)
-   Orbitours.com ([Live Website](https://orbitours.cloud/))

## External Resources

### Fonts

On this project, I utilized fonts from Google Fonts. The specific fonts used are:

-   [Orbitron] (https://fonts.google.com/specimen/Orbitron)
-   [Chakra Petch] (https://fonts.google.com/specimen/Chakra+Petch)

### Images

Images were generated using an AI service from Freepik.com.

## Design

During the website design process, I started from scratch with a website layout plan, as shown here:

![](/assets/readme/sketch.png)

1.  Navbar Section:

    Brand logo on the left side. Menu button on the right side. No background color, as the hero image is expected to be displayed in full width.

2.  Hero Image Section:

    Short text and a button placed on top.

3.  Destination Section:

    Showcasing planets or space destinations that clients are interested in visiting, along with a short description of each destination.

4.  Fleets Section:

    Showcasing the company's fleets, consisting of space rockets used to take clients to space, along with their names.

5.  Continuously Moving Animation:

    Brand logos of companies supporting Orbitours' operations.

6.  Carousel Section:

        Images of previous clients and their testimonials

    Animated and transitioned to highlight and enhance user experience.

7.  News and Updates Section:

    Features news and updates from the company about their recent work or achievements.

8.  Footer Section and Copyright Section.

## Development Process

During the development process, I began by creating HTML structures using semantic elements with the following outline:

```
<nav>
<header>
<section> - destination
<section> - fleets
<section> - animation
<section> - carousel
<section> - news and updates
<footer>
```

Following this, I proceeded with the CSS styling, which included tasks such as adding image backgrounds, adjusting font sizes, and optimizing the viewport.

Finally, I implemented media queries to ensure the website's responsiveness across various screen sizes. Specifically, I set breakpoints at 768px and 374px, employing different layout arrangements and image sizing strategies.

## Deployment Process

### Using Git and Command Lines

To start the project, I use Git to track changes and push them to a remote repository. The steps are outlined in the following image:
![](/assets/readme/version%20control%20system.png)

### Hosting the Website

After pushing to a remote repository, the next step is to host the website with a hosting provider. For this project, I used Netlify. To do this, log in to Netlify and select the previous GitHub repository to import it into Netlify.
![](/assets/readme/1.png)

Configure the project hosted on Netlify and add a custom domain to it.
![](/assets/readme/2.png)

Set up the Netlify DNS for later insertion into the domain provider.
![](/assets/readme/3.png)

### Creating a Custom Domain

Purchase a custom domain from a registrar. I used Niagahoster and navigated the menu to acquire a new custom domain.
![](/assets/readme/4.png)

Register the custom domain of your choice and complete the payment to finish the registration.
![](/assets/readme/5.png)

Set the nameservers of the recently purchased domain and insert the DNS nameservers I copied earlier from Netlify.
![](/assets/readme/6.png)
Wait for the domain to verify your hosting, and voilà! My website is now online with a custom name.
![](/assets/readme/7.png)

## Acknowledgements

-   [GitHub Profile](https://github.com/anojumisa)
-   [LinkedIn](https://www.linkedin.com/in/anojumisa/)
