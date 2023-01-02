import { Icon, BallStyleProps } from './styles';

type Props = {     
    type?: BallStyleProps;
  }

export function Ball({type, ...rest}: Props ){
    return(
        <Icon
            type='SECONDARY'
            // isActive={true}
        />
    );
}
