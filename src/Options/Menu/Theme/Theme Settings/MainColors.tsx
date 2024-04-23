import { Container, Typography } from '@mui/material';

import ButtonOption from '../Components/ButtonOption';

export default function MainsColor({ setOption, option }: any) {
    return (
        <Container sx={ContainerSX}>
            <Typography>Основные цвета</Typography>

            <ButtonOption
                setOption={setOption}
                option={option}
                name="primary.main"
            >
                Цвет фона
            </ButtonOption>

            <ButtonOption
                setOption={setOption}
                option={option}
                name="secondary.contrastText"
            >
                Цвет текста
            </ButtonOption>
        </Container>
    );
}

export const ContainerSX = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
};
