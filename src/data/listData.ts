export interface Data {
	project: string;
	period: string;
	role: string;
	architecture: string;
	description: string;
	location: string;
	article?: string;
}

export const data: Data[] = [
	{
		project: `매그나칩반도체 Legacy System OSDB 단종에 따른 System Migration 구축`,
		period: `2018.06.18 - 2018.07.09`,
		role: `프론트개발`,
		architecture: `Micro Service Architecture`,
		description: `노후된 레거시 시스템 마이그레이션 및 차세대 서비스 개발 및 연동 API 개발 `,
		location: `서울시 구로구`,
	},
	{
		project: `SKCC표준견적서_공유Office IT 환경 구현 - Digital Workplace 구축`,
		period: `2018.07.10 - 2018.12.31`,
		role: `프론트개발`,
		architecture: `Micro Service Architecture`,
		description: `본인이 개발에 참여한 SK 하이닉스의 실시간 대화형 협업 플랫폼인 CUBE를 C&C로 도입 및 초기 구축.`,
		article:
			'https://www.google.com/search?q=%ED%95%98%EC%9D%B4%EB%8B%89%EC%8A%A4+%22CUBE%22&newwindow=1&client=safari&rls=en&sxsrf=ALeKk03gMsWumE-0a4Ung1kx46MvaY4z6w:1617634507062&source=lnms&tbm=nws&sa=X&ved=2ahUKEwiZrq2RrufvAhUbc3AKHYb4Bm0Q_AUoAnoECAEQBA&biw=1024&bih=1175',
		location: `분당역`,
	},
	{
		project: `SKCC표준견적서_공유Office IT 환경 구현 - Digital Workplace 구축분의 1차 고도화`,
		period: `2019.01.01 - 2019.06.30`,
		role: `풀스택개발 & DevOps`,
		architecture: `Micro Service Architecture`,
		description: `구축된 서비스를 C&C의 사용목적에 맞게 기능 추가 및 기존 Legacy 시스템 마이그레이션 및 커스터마이징`,
		location: `분당역`,
		article:
			'https://www.google.com/search?q=%ED%95%98%EC%9D%B4%EB%8B%89%EC%8A%A4+%22CUBE%22&newwindow=1&client=safari&rls=en&sxsrf=ALeKk03gMsWumE-0a4Ung1kx46MvaY4z6w:1617634507062&source=lnms&tbm=nws&sa=X&ved=2ahUKEwiZrq2RrufvAhUbc3AKHYb4Bm0Q_AUoAnoECAEQBA&biw=1024&bih=1175',
	},
	{
		project: `SKCC표준견적서_공유Office IT 환경 구현 - Digital Workplace 구축분의 2차 고도화`,
		period: `2019.07.01 - 2019.12.31`,
		role: `풀스택개발 & DevOps`,
		architecture: `Micro Service Architecture`,
		description: `추가 기능 개발 , 메신저 및 협업 기능의 고도화 실현`,
		location: `분당역`,
		article:
			'https://www.google.com/search?q=%ED%95%98%EC%9D%B4%EB%8B%89%EC%8A%A4+%22CUBE%22&newwindow=1&client=safari&rls=en&sxsrf=ALeKk03gMsWumE-0a4Ung1kx46MvaY4z6w:1617634507062&source=lnms&tbm=nws&sa=X&ved=2ahUKEwiZrq2RrufvAhUbc3AKHYb4Bm0Q_AUoAnoECAEQBA&biw=1024&bih=1175',
	},
	{
		project: `SKCC표준견적서_공유Office IT 환경 구현 - Digital Workplace 구축분의 3차 고도화`,
		period: `2020.01.01 - 2020.02.26`,
		role: `풀스택개발 & DevOps`,
		architecture: `Micro Service Architecture`,
		description: `기존 서비스에 추가 서비스 개발 및 IBM 챗봇 연동`,
		location: `분당역`,
		article:
			'https://www.google.com/search?q=%ED%95%98%EC%9D%B4%EB%8B%89%EC%8A%A4+%22CUBE%22&newwindow=1&client=safari&rls=en&sxsrf=ALeKk03gMsWumE-0a4Ung1kx46MvaY4z6w:1617634507062&source=lnms&tbm=nws&sa=X&ved=2ahUKEwiZrq2RrufvAhUbc3AKHYb4Bm0Q_AUoAnoECAEQBA&biw=1024&bih=1175',
	},
	{
		project: `매그나칩반도체 Legacy System OSDB 단종에 따른 System Migration 구축 1차`,
		period: `2020.02.26 - 2020.05.31`,
		role: `풀스택개발`,
		architecture: `Micro Service Architecture`,
		description: `기존 시스템의 노후로 인하여 새로운 시스템 개발 및 마이그레이션 기술리더로써 참여`,
		location: `충북 청주시`,
	},
	{
		project: `우리은행 차세대 클라우드 플렛폼`,
		period: `2020.06.01 - 2020.10.11`,
		role: `프론트개발`,
		architecture: `Micro Service Architecture`,
		description: `우리은행 차세대 클라우드 플렛폼 개발 및 API 개발 참여`,
		location: `서울시 구로구`,
	},
	{
		project: `매그나칩반도체 Legacy System OSDB 단종에 따른 System Migration 구축 2차`,
		period: `2020.10.12 - 2020.12.23`,
		role: `풀스택개발`,
		architecture: `Micro Service Architecture`,
		description: `개발된 시스템 통합 테스트 및 추가 구현분 개발 참여`,
		location: `충북 청주시`,
	},
];

