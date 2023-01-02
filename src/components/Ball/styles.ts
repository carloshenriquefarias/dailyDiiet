import styled, {css} from "styled-components/native";

export type BallStyleProps = {
    type: 'PRIMARY' | 'SECONDARY';
    isActive?: boolean;
}

type Props = BallStyleProps;

export const Icon = styled.View<Props>`
    width: 12px;
    height: 12px;
    /* margin-right: 8px; */
    border-radius: 50px;
    background-color: ${({ theme, type }) => type === 'PRIMARY' ?
        theme.COLORS.STYLES.PRIMARY_DARK : theme.COLORS.STYLES.SECONDARY_DARK
    };
`