const tools = [
{
name: "ChatGPT",
category: "AI Chatbot",
link: "https://chat.openai.com",
description: "Advanced AI chatbot for writing, coding, and answering questions."
},
{
name: "Midjourney",
category: "AI Image Generator",
link: "https://midjourney.com",
description: "Create stunning AI generated images."
},
{
name: "Copy.ai",
category: "AI Writing",
link: "https://copy.ai",
description: "Generate marketing copy using AI."
},
{
name: "Runway ML",
category: "AI Video",
link: "https://runwayml.com",
description: "Create and edit videos with AI."
},
{
name: "Notion AI",
category: "Productivity",
link: "https://notion.so",
description: "AI powered productivity workspace."
}
];

const container = document.getElementById("tools-container");

tools.forEach(tool => {

const card = document.createElement("div");

card.className = "tool-card";

card.innerHTML = `
<h2>${tool.name}</h2>
<p><strong>Category:</strong> ${tool.category}</p>
<p>${tool.description}</p>
<a href="${tool.link}" target="_blank">Visit Tool</a>
`;

container.appendChild(card);

});
