const fs = require('fs');
const { JSDOM } = require('jsdom');

test('El HTML contiene el mensaje correcto', () => {
    const html = fs.readFileSync('./index.html', 'utf-8');
    const dom = new JSDOM(html);
    const message = dom.window.document.getElementById('message').textContent;
    expect(message).toBe('Este es un proyecto de prueba');
});
