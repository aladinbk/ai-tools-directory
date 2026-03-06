const tools = [

{
name: "ChatGPT",
category: "AI Chatbot",
link: "chatgpt.html",
description: "Advanced AI chatbot for writing, coding and productivity."
},

{
name: "Midjourney",
category: "AI Image Generator",
link: "#",
description: "Generate stunning AI images."
},

{
name: "Copy AI",
category: "AI Writing",
link: "#",
description: "Create marketing content automatically."
},

{
name: "Runway ML",
category: "AI Video",
link: "#",
description: "AI video creation platform."
},

{
name: "Notion AI",
category: "Productivity",
link: "#",
description: "Smart productivity workspace powered by AI."
}

];

const container = document.getElementById("tools-container");

tools.forEach(tool => {

const card = document.createElement("div");

card.className = "card";

card.innerHTML = `
<a href="${tool.link}">${tool.name}</a>
<p>${tool.description}</p>
`;

container.appendChild(card);

});
