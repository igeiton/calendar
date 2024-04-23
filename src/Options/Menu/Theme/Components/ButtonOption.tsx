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
        >
            {children}
        </Button>
    );
}

const ButtonSX = {
    color: 'primary.contrastText',
    '&:hover': {
        color: 'primary.contrastText',
    },
    borderRadius: '0px',
};

const selectedOption = {
    bgcolor: 'secondary.dark',
    color: 'secondary.contrastText',
    '&:hover': {
        bgcolor: 'secondary.dark',
    },
};
