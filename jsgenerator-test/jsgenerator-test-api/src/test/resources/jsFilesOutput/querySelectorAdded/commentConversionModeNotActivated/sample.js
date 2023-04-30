{{keyword}} targetElement_000 = document.querySelector(`:root > body`);
{{keyword}} html_000 = document.createElement('html');
{{keyword}} text_000 = document.createTextNode(`    `);
html_000.appendChild(text_000);
{{keyword}} head_000 = document.createElement('head');
{{keyword}} text_001 = document.createTextNode(`        `);
head_000.appendChild(text_001);
{{keyword}} meta_000 = document.createElement('meta');
meta_000.setAttribute(`charset`, `utf-8`);
head_000.appendChild(meta_000);
{{keyword}} text_002 = document.createTextNode(`        `);
head_000.appendChild(text_002);
{{keyword}} title_000 = document.createElement('title');
{{keyword}} text_003 = document.createTextNode(`Sample`);
title_000.appendChild(text_003);
head_000.appendChild(title_000);
{{keyword}} text_004 = document.createTextNode(`        `);
head_000.appendChild(text_004);
{{keyword}} link_000 = document.createElement('link');
link_000.setAttribute(`rel`, `stylesheet`);
link_000.setAttribute(`href`, ``);
head_000.appendChild(link_000);
{{keyword}} text_005 = document.createTextNode(`    `);
head_000.appendChild(text_005);
html_000.appendChild(head_000);
{{keyword}} text_006 = document.createTextNode(`    `);
html_000.appendChild(text_006);
{{keyword}} body_000 = document.createElement('body');
{{keyword}} text_007 = document.createTextNode(`        `);
body_000.appendChild(text_007);
{{keyword}} div_000 = document.createElement('div');
div_000.setAttribute(`id`, `container`);
{{keyword}} text_008 = document.createTextNode(`            `);
div_000.appendChild(text_008);
{{keyword}} div_001 = document.createElement('div');
div_001.setAttribute(`id`, `header`);
{{keyword}} text_009 = document.createTextNode(`                `);
div_001.appendChild(text_009);
{{keyword}} text_010 = document.createTextNode(`                `);
div_001.appendChild(text_010);
{{keyword}} h1_000 = document.createElement('h1');
{{keyword}} text_011 = document.createTextNode(`Sample`);
h1_000.appendChild(text_011);
div_001.appendChild(h1_000);
{{keyword}} text_012 = document.createTextNode(`                `);
div_001.appendChild(text_012);
{{keyword}} img_000 = document.createElement('img');
img_000.setAttribute(`src`, `kanye.jpg`);
img_000.setAttribute(`alt`, `kanye`);
div_001.appendChild(img_000);
{{keyword}} text_013 = document.createTextNode(`            `);
div_001.appendChild(text_013);
div_000.appendChild(div_001);
{{keyword}} text_014 = document.createTextNode(`            `);
div_000.appendChild(text_014);
{{keyword}} div_002 = document.createElement('div');
div_002.setAttribute(`id`, `main`);
{{keyword}} text_015 = document.createTextNode(`                `);
div_002.appendChild(text_015);
{{keyword}} h2_000 = document.createElement('h2');
{{keyword}} text_016 = document.createTextNode(`Main`);
h2_000.appendChild(text_016);
div_002.appendChild(h2_000);
{{keyword}} text_017 = document.createTextNode(`                `);
div_002.appendChild(text_017);
{{keyword}} p_000 = document.createElement('p');
{{keyword}} text_018 = document.createTextNode(`This is the main content.`);
p_000.appendChild(text_018);
div_002.appendChild(p_000);
{{keyword}} text_019 = document.createTextNode(`                `);
div_002.appendChild(text_019);
{{keyword}} img_001 = document.createElement('img');
img_001.setAttribute(`src`, ``);
img_001.setAttribute(`alt`, ``);
div_002.appendChild(img_001);
{{keyword}} text_020 = document.createTextNode(`            `);
div_002.appendChild(text_020);
div_000.appendChild(div_002);
{{keyword}} text_021 = document.createTextNode(`            `);
div_000.appendChild(text_021);
{{keyword}} div_003 = document.createElement('div');
div_003.setAttribute(`id`, `footer`);
{{keyword}} text_022 = document.createTextNode(`                `);
div_003.appendChild(text_022);
{{keyword}} text_023 = document.createTextNode(`                `);
div_003.appendChild(text_023);
{{keyword}} p_001 = document.createElement('p');
{{keyword}} text_024 = document.createTextNode(`Copyright © 2019`);
p_001.appendChild(text_024);
div_003.appendChild(p_001);
{{keyword}} text_025 = document.createTextNode(`            `);
div_003.appendChild(text_025);
div_000.appendChild(div_003);
{{keyword}} text_026 = document.createTextNode(`        `);
div_000.appendChild(text_026);
body_000.appendChild(div_000);
{{keyword}} text_027 = document.createTextNode(`    `);
body_000.appendChild(text_027);
html_000.appendChild(body_000);
targetElement_000.appendChild(html_000);