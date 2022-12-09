import { Icon, BallStyleProps } from './styles';

type Props = {     
    type?: BallStyleProps;
  }

export function Ball({type}: Props ){
    return(
        <Icon
            type='PRIMARY'
        />
    );
}