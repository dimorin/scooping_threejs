# 목차

[Three.js 교안](https://paullabworkspace.notion.site/Three-js-0c30b960ac224290b91176de3580269e)

Three.js
크게 scene + camera + renderer 로 구성된다.
scene 에는 빛, 그림자, 객체mesh(geometry + material) 을 담는다.
scene 은 배경색을 설정할 수 있다.

perspectivecamera는 원근감을 적용하여 객체를 투영하는 카메라로, 3D 공간감을 표현한다.
fov, 종횡비, near, far 을 설정한다.
fov(시야각)이 커지면, 더 많은 것을 보여줘야 하기 때문에 객체의 크기가 작아진다.

OrthographicCamera - 아이소메트릭(등축 투영법)을 표현할 때 이 카메라를 사용한다.

camera의 초기 위치는 0 0 0 이기 때문에 scene 안에 객체를 잘 보여 주기 위해서는 position과 lookat을 설정해준다.

MeshBasicMaterial - 빛에 영향을 받지 않는다.

threejs.org/editor 사용 방법 ?