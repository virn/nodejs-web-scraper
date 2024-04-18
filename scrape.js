const axios = require('axios');
const cheerio = require('cheerio');  // new addition

async function scrape(req, res) {
	// URL of the page to be scraped
	const url = req.query.url;

	// Keyword to be searched from the given URL
	const keyword = req.query.keyword;

	// Use Axios to fetch the page content
	const { data } = await axios.get(url);
	
	// Use Cheerio to parse the page content and extract the data
	const $ = cheerio.load(data);

	//Set conditions to target specific query types
	/*
		1. Emails
		2. Links
		3. Images??
	
	*/
	let scrapedData = [];

    // An example of how to scrape specific elements
    // $(keyword).each((index, element) => {
	// 	const imgSrc = $(elem).find('a').attr('href');
	// 	const text = $(elem).find('span:first-child').text();
	// 	console.log(imgSrc, text)
	// 	scrapedData.push({ imgSrc, text });
    // });

    // Find all anchor tags and their corresponding text
    $('a').each((index, element) => {
        const link = $(element).attr('href');
        const text = $(element).text();

        scrapedData.push({link: link, text: text});
    });

    // Convert the links array to a string and send it back to the front end
    const linksString = scrapedData.map(link => `Text: ${link.text}, Link: ${link.link}`).join('<br>');
    res.send(linksString);

    // res.send(scrapedData.join('<br>'));
}

// const keyword = "coffee"; // change with any keyword you want

// scrapeSite(keyword).then(result => {
//         console.log(result)
//     }).catch(err => console.log(err));

module.exports = scrape;