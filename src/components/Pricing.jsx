import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { useTodosQuery } from "../queries/useTodosQuery";

export default function Pricing() {
    const todosQuery = useTodosQuery()

    return (

        <Container component="main" maxWidth="xs">
            <CssBaseline enableColorScheme />
            <h1>Pricing</h1>
        </Container>
    );
}