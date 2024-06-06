import { Button } from '@mui/material';

export default function ButtonOption({
    setOption,
    option,
    name,
    children,
}: any) {
    return (
        <Button
            variant="contained"
            onClick={() => setOption(name)}
            sx={{
                ...ButtonSX,
                ...(option === name ? selectedOption : {}),
            }}
            disableElevation
        >
            {children}
        </Button>
    );
}

const ButtonSX = {
    color: 'primary.contrastText',
    '&:hover': {
        color: 'primary.contrastText',
        bgcolor: 'primary.main',
    },

    transition: 'inherit',
};

const selectedOption = {
    bgcolor: 'secondary.main',
    color: 'secondary.contrastText',
    '&:hover': {
        color: 'secondary.contrastText',
        bgcolor: 'secondary.main',
    },
};
