# Drop-down

Drop-down module.

# Project Description

Reusable drop-down module. Created with HTML and JS.

## Usage

1. Step one, add this markup to your HTML file. This code creates the dropdown. If multiple dropdowns are needed, copy and paste the code block as many times as you like.

```html
index.html
```

```html
<div class="dropdown-container">
  <button data-toggler="true">Drop-down</button>
  <ul class="dropdown-items">
    <li><a href="#">Items</a></li>
    <!-- append more li's/list items here -->
  </ul>
</div>
```

### Adding style options

Add `dropdown-items-darkmode` class to use dark-mode.

```html
<div class="dropdown-container">
  <button data-toggler="true">Drop-down</button>
  <ul class="dropdown-items dropdown-items-darkmode">
    <li><a href="#">Items</a></li>
    <!-- append more li's/list items here -->
  </ul>
</div>
```

> [!IMPORTANT]
> Please do not change the structure, or the class names. Otherwise you might run into errors.

2. Using npm, install this as a dependency. Import the dropdown module and call the function.

```
npm install
```

```javascript
import dropDown from "./dropdown";

dropDown();
```
