import express from 'express';
import path from 'path';
const app = express();

// Configure Express to use EJS
app.set( 'views', path.join( __dirname, 'views' ) );
app.set( 'view engine', 'ejs' );

// define a route handler for the default home page
app.get('/', (req: any, res: any) => {
	// render the index template
	res.render( 'index' );
});

export default app;
