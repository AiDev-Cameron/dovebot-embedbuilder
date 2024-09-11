function generateCommand() {
    const title = document.getElementById('title').value.trim();
    const description = document.getElementById('description').value.trim();
    const color = document.getElementById('color').value.trim();
    const author = document.getElementById('author').value.trim();
    const authorIcon = document.getElementById('author_icon').value.trim();
    const footer = document.getElementById('footer').value.trim();
    const footerIcon = document.getElementById('footer_icon').value.trim();
    const thumbnail = document.getElementById('thumbnail').value.trim();
    const image = document.getElementById('image').value.trim();
    const url = document.getElementById('url').value.trim();
    const timestamp = document.getElementById('timestamp').value.trim();
    const fields = document.getElementById('fields').value.trim();

    let command = '';

    if (title) command += ` {title: ${title}}`;
    if (description) command += `$v{description: ${description}}`;
    if (color) command += `$v{color: ${color}}`;
    if (author) command += `$v{author: ${author}}`;
    if (authorIcon) command += `$v{author_icon: ${authorIcon}}`;
    if (footer) command += `$v{footer: ${footer}}`;
    if (footerIcon) command += `$v{footer_icon: ${footerIcon}}`;
    if (thumbnail) command += `$v{thumbnail: ${thumbnail}}`;
    if (image) command += `$v{image: ${image}}`;
    if (url) command += `$v{url: ${url}}`;
    if (timestamp) command += `$v{timestamp: ${timestamp}}`;

    if (fields) {
        const fieldArray = fields.split('$v');
        fieldArray.forEach(fieldText => {
            const [name, value, inline] = fieldText.split('|').map(str => str.trim());
            command += `$v{fields: ${name}|${value}|${inline}}`;
        });
    }

    document.getElementById('commandOutput').textContent = command;

    // Enable the copy button after generating the command
    document.getElementById('copyButton').disabled = false;
}

function copyCommand() {
    const commandOutput = document.getElementById('commandOutput').textContent;
    navigator.clipboard.writeText(commandOutput).then(() => {
        alert('Command copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy command: ', err);
    });
}
