# Neat Starter

Starter template for **Eleventy** with **DecapCMS**, using **AlpineJS**, **Tailwind** and **Flowbite** and hosted in **Netlify**.

Developed by [@minimo-io](https://minimo.io) based on the outdated [Neat-Starter](https://github.com/surjithctly/neat-starter) by [@surjithctly](https://surjithctly.in/)

Many things where modified from the original starter. Among them I moved from NetlifyCMS (deprecated) to DecapCMS. Updated 11ty libraries and added the Flowbite components library to the boilerplate.

[![Netlify Status](https://api.netlify.com/api/v1/badges/b13a125f-5801-4744-b481-50ba5bd5cdd0/deploy-status)](https://app.netlify.com/sites/eleventy-cms-flowbite-starter/deploys)

## Live Demo

[https://eleventy-cms-flowbite-starter.netlify.app/](https://eleventy-cms-flowbite-starter.netlify.app/)

### Technologies used:

-   [Decap CMS](https://decapcms.org/) (Former NetlifyCMS)
-   [Eleventy](https://www.11ty.dev/)
-   [Alpine.js](https://github.com/alpinejs/alpine)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [Flowbite](https://tailwindcss.com/) (Tailwind components library)

| ![image](https://camo.githubusercontent.com/4f434f6d00f84af0f3a4f270c0f29cf3a41c84d0e05ae77a0ac144a6a85317bf/68747470733a2f2f692e696d6775722e636f6d2f544a4d424c36672e706e67) |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

## Getting Started

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/minimo-io/eleventy-cms-flowbite-starter&amp;stack=cms"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" /></a>

## To Do

-   Remove NetlifyCMS scripts and add DecapCMS.
-   Add a different package for minification, maybe [minify-html](https://www.npmjs.com/package/@minify-html/) instead of the unmaintained html-minifier (commented)

### 1\. Clone this Repository

```
git clone https://github.com/minimo-io/eleventy-cms-flowbite-starter.git
```

### 2\. Navigate to the directory

```
cd eleventy-cms-flowbite-starter
```

### 3\. Install dependencies

```
npm install
```

### 4\. Build the project to generate the first CSS

This step is only required the very first time.

```
npm run build
```

### 5\. Run Eleventy

```
npm run dev
```

## Authors

Nicolas Erramuspe ( [@minimo-io](https://minimo.io) )
Surjith S M ( [@surjithctly](https://surjithctly.in/) ) (original starter)
