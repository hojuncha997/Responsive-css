https://youtu.be/_-aDOAMmDHI

1. rem vs. em

1em = 기본적으로 16px. 브라우저 기본값임. 부모 값에 기준하여 크기가 조정됨. 부모가 여러 개 있으면 compounding이 일어남

rem(root em)은 em의 문제를 보완하기 위해 만들어진 것임. 루트( :root {} )에 기반하여 사이즈가 변경됨. 루트는 기본적으로 html 요소이므로 html {}의 font-size를 수정해도 변경됨. compounding이 일어나지 않음

2. em으로 폰트사이즈를 설정하면 안 되는 이유

em으로 폰트 사이즈를 설정하면 해당 폰트 사이즈를 계산하기 위해 부모의 폰트 사이즈를 참고한다.
계속 곱해질 수 있는 문제가 있다.(compounding)

따라서 rem을 사용하기를 권장한다. rem은 기준이 root 하나뿐이라 크기가 예상 가능하다. 기본 설정이라면 1rem은 16px, 1.125rem은 18px정도 된다.

3. 그렇다면 em은 언제 사용할까
   em은 마진과 패딩 등을 설정할 때 사용된다. 폰트 사이즈를 em으로 설정하는 경우 부모를 참조하지만, 마진과 패딩 등의 경우,
   변경을 원하는 \***\*\*\*\*\***해당 요소의 폰트 사이즈\***\*\*\*\*\***를 참고한다.

.cta\_\_btn {
display: inline-block;
color: inherit;
text-decoration: none;
padding: 0.5em 1.5em;
background: whitel
transition: background 250ms;
font-size: 1rem;
}

여기서 font-size를 0.25만큼 줄이면 padding도 줄어들게 된다. 커지면 커진다.
따라서 버튼의 폰트 사이즈가 변경되면 패딩과 마진도 그에 따라 변경되므로 일정한 비율을 유지할 수 있다는 장점이 있다.

4. 폰트는 rem을 사용해라. 특히 반응형을 만들 때 편리하다.
