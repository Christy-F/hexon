const cheerio = require('cheerio');
const fs = require('fs');

async function fetchAndParse(url) {
    try {
        const response = await fetch(url);
        const html = await response.text();
        const $ = cheerio.load(html);
        
        console.log(`\n\n--- CONTENT FOR ${url} ---\n`);
        const content = $('.service-contents').text();
        
        // Split by lines, trim, filter out empty lines, join back
        const cleanContent = content.split('\n')
            .map(line => line.trim())
            .filter(line => line.length > 0)
            .join('\n');
            
        console.log(cleanContent);
        
    } catch (err) {
        console.error(`Error fetching ${url}:`, err);
    }
}

async function run() {
    const urls = [
        'https://hexonindia.com/services/corporate-training-programs/',
        'https://hexonindia.com/services/leadership-program/',
        'https://hexonindia.com/services/young-aspirers/',
        'https://hexonindia.com/services/posh-training/',
        'https://hexonindia.com/services/english-language-course/',
        'https://hexonindia.com/services/learning-development-consulting/',
        'https://hexonindia.com/services/coaching/'
    ];
    
    for (const url of urls) {
        await fetchAndParse(url);
    }
}

run();
