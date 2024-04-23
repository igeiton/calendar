import { Container, Typography } from '@mui/material';

import ButtonOption from '../Components/ButtonOption';
import { ContainerSX } from './MainColors';

export default function SecondaryColors({ setOption, option }: any) {
    return (
        <Container sx={ContainerSX}>
            <Typography>Второстепенные цвета</Typography>

            <ButtonOption
                setOption={setOption}
                option={option}
                name="secondary.dark"
            >
                Основные кнопки и дни
            </ButtonOption>

            <ButtonOption
                setOption={setOption}
                option={option}
                name="secondary.main"
            >
                Другие дни
            </ButtonOption>
        </Container>
    );
}
