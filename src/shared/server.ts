import { app } from './http/App';

const PORT = 3333;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});