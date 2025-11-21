import express from 'express';
import { BigQuery } from '@google-cloud/bigquery';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const bigquery = new BigQuery();
const port = process.env.PORT || 8080;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/api/activities', async (req, res) => {
    try {
        const query = `
      SELECT *
      FROM \`kotze-household-app.garmin_data.garmin_activities\`
      ORDER BY start_time_gmt DESC
    `;

        const [rows] = await bigquery.query(query);
        res.json(rows);
    } catch (error) {
        console.error('BigQuery error:', error);
        res.status(500).json({ error: 'Failed to fetch activities' });
    }
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
