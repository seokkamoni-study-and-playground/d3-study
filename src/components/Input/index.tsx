import * as S from './styles';
import Search from '../../assets/search.svg';

export default function Input() {
  return (
    <S.Form>
      <S.InnerContent>
        <S.Input placeholder="구단주명을 입력하세요." />
        <S.Button>
          <S.Search src={Search} />
        </S.Button>
      </S.InnerContent>
    </S.Form>
  );
}
