import Typography from '@mui/material/Typography';

interface Data {
    apellido: string;
    nombre: string;
    paralelo: number;
}

export default function Student({ apellido, nombre, paralelo }: Data) {
    return (
        <>
            <Typography component="p" variant="h4">
                {apellido} {nombre}

            </Typography>
            <Typography component="h2" variant="h6"
                color="primary" gutterBottom>

                Paralelo #{paralelo}
            </Typography>
        </>
    )
}
