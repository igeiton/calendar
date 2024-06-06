import { memo } from 'react';
import Day from './Day';
import { Box, Divider, List, ListItemText, styled } from '@mui/material';
import { daily } from './DaysActions/data';
import getDaysByDiff from './DaysActions/getDaysByDiff';

function Days({ date }: any) {
    const days: any = getDaysByDiff(date);

    return (
        <>
            <StyledList sx={{ bgcolor: 'primary.main' }}>
                {daily.map((name: string, index: number) => (
                    <StyledListItemText
                        sx={{
                            color: 'primary.contrastText',
                            transition: 'none',
                        }}
                        key={index}
                        primary={name}
                    />
                ))}

                <StyledDivider sx={{ ...DividerSX, gridColumn: '1/8' }} />
            </StyledList>

            <StyledBox>
                {days.map((day: any, index: number) => (
                    <Day key={index} day={day} days={days} index={index} />
                ))}
            </StyledBox>
        </>
    );
}

export default memo(Days);

export const StyledList = styled(List)({
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '10px',
    position: 'sticky',
    top: '0px',
    zIndex: '5',
    padding: '0px',
    paddingTop: '10px',
});

export const StyledListItemText = styled(ListItemText)({
    flex: '1 0 0',
    textAlign: 'center',
});

export const StyledDivider = styled(Divider)({
    width: '100%',
    opacity: '0.11',
});
export const DividerSX = {
    height: '1px',
    bgcolor: 'primary.contrastText',
};

export const StyledBox = styled(Box)({
    display: 'grid',
    gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
    // gridAutoRows: '30px',
    gridTemplateRows: 'repeat(auto, minmax(0, 1fr))',
    gap: '15px 5px',
});
