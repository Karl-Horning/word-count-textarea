# Word Count Textarea

A simple web application to count the number of words in a textarea, built using HTML, Bootstrap (for the example front end), and JavaScript.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
    - [Integration Steps](#integration-steps)
    - [How to Use](#how-to-use)
- [Contributing](#contributing)
- [Acknowledgments](#acknowledgments)
- [License](#license)
- [Author](#author)

## Overview

This project provides a straightforward way to count the number of words in a given text entered into a textarea. It's a lightweight and easy-to-use tool for users who need a quick word count without the need for complex features.

## Features

- Dynamic word count update as you type.
- Clean and normalize input text for accurate word counting.
- Utilizes Bootstrap for a responsive and visually appealing design.

## Installation

To get started with the Word Count project, simply clone the repository and open the `index.html` file in a web browser.

```bash
git clone https://github.com/Karl-Horning/word-count-textarea.git
cd word-count-textarea
```

## Usage

1. Open the `index.html` file in a web browser.
2. Enter text in the textarea.
3. The word count will be displayed dynamically.

To use the `wordCounter.js` in a different project, follow these steps:

### Integration Steps:

1. **Include Bootstrap:**
   - Ensure that Bootstrap is included in your project as the wordCounter.js uses Bootstrap's text-danger and text-success for styling. You can either link to the Bootstrap CDN in your HTML file or install it via a package manager.

   ```html
   <!-- Link to Bootstrap CDN -->
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
       integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
       crossorigin="anonymous" />
   ```

2. **Copy `wordCounter.js`:**
   - Copy the `wordCounter.js` file into your project's JavaScript folder or any desired location.

3. **Link `wordCounter.js` in HTML:**
   - Link the `wordCounter.js` file in your HTML file, making sure to use the correct path.

   ```html
   <script src="./path/to/wordCounter.js" defer></script>
   ```

4. **Create HTML Structure:**
   - Ensure you have an HTML structure with a textarea and an element to display the word count. The necessary elements should have specific IDs used in the `wordCounter.js` script.

   ```html
   <form>
       <div class="mb-3">
           <label for="wordCountTextarea" class="form-label">
               Word Count:
               <strong id="wordCountNumber" class="text-danger">0</strong>
           </label>
           <textarea class="form-control" id="wordCountTextarea" rows="10"></textarea>
       </div>
   </form>
   ```

### How to Use:

Now, you can use the `updateWordCount` function in your project to dynamically update the word count based on user input. Here's how you can use it:

```html
<script>
    // Add an event listener to the window's load event
    window.addEventListener("load", () => {
        const textareaId = "wordCountTextarea";
        const wordCountElementId = "wordCountNumber";

        // Add input event listener to update word count
        document.getElementById(textareaId).addEventListener("input", () => {
            updateWordCount(textareaId, wordCountElementId);
        });
    });
</script>
```

With these steps, you can easily integrate the `wordCounter.js` into your project, providing a simple and effective way to count words in a textarea.

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

## Acknowledgments

- [Bootstrap](https://getbootstrap.com) - Front-end framework used for styling.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Karl Horning:**
- [GitHub](https://github.com/Karl-Horning/)
- [LinkedIn](https://www.linkedin.com/in/karl-horning/)
- [CodePen](https://codepen.io/karlhorning)