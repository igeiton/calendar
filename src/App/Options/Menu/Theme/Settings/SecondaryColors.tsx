import { Container, Typography } from '@mui/material';

import ButtonOption from '../Button/ButtonOption';
import { ContainerSX } from './MainColors';

export default function SecondaryColors({ setOption, option }: any) {
    return (
        <Container sx={ContainerSX}>
            <Typography sx={{ transition: 'none' }}>
                Второстепенные цвета
            </Typography>

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
