import enyg, { hangulDecompose, toChosung } from '../index';
import testExpectResult from './hangul-decompose-result';

describe('은는이가.js 테스트', () => {
  test('조사 선택', () => {
    expect(
      enyg(
        '다람쥐[은|는] 헌 쳇바퀴[이|가] 타고파. 나[은|는] 너[을|를] 좋아해.',
      ),
    ).toBe('다람쥐는 헌 쳇바퀴가 타고파. 나는 너를 좋아해.');
  });

  test('한글 분해', () => {
    expect(
      Array.from('가나다핳헿쀍뾹뀱ㅔㅋ').map(hangulDecompose),
    ).toStrictEqual(testExpectResult);
  });

  test('초성 가져오기', () => {
    expect(['가을', '하늘'].map(toChosung)).toStrictEqual(['ㄱㅇ', 'ㅎㄴ']);
  });
});
