function frontend(req, res) {
    const form = `
        <form action="/scrape">
            <label for="url">URL:</label><br>
            <input type="text" id="url" name="url"><br>
            <label for="keyword">Keyword:</label><br>
            <input type="text" id="keyword" name="keyword"><br>
            <input type="submit" value="Scrape">
        </form>
    `;

    res.send(form);
}

module.exports = frontend;