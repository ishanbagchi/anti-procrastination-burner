import styled from 'styled-components'

export const AppContainer = styled.div`
	min-height: 100vh;
	background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 50%, #14b8a6 100%);
	padding: 20px;
`

export const Header = styled.header`
	text-align: center;
	margin-bottom: 40px;
`

export const Title = styled.h1`
	font-family: 'Source Code Pro', monospace;
	font-size: 48px;
	font-weight: 900;
	color: #fff;
	margin: 0 0 12px 0;
	text-transform: uppercase;
	letter-spacing: 2px;
	text-shadow: 4px 4px 0 #000;
`

export const Subtitle = styled.p`
	font-family: 'Source Code Pro', monospace;
	font-size: 18px;
	color: #fff;
	margin: 0;
	text-shadow: 2px 2px 0 #000;
`

export const Content = styled.div`
	max-width: 900px;
	margin: 0 auto;
`

export const TabContainer = styled.div`
	display: flex;
	gap: 12px;
	margin-bottom: 24px;
`

export const Tab = styled.button<{ $active: boolean }>`
	flex: 1;
	padding: 16px;
	font-family: 'Source Code Pro', monospace;
	font-size: 16px;
	font-weight: 700;
	background: ${(props) => (props.$active ? '#fff' : '#e0e0e0')};
	color: #000;
	border: 4px solid #000;
	box-shadow: ${(props) =>
		props.$active ? '6px 6px 0 #000' : '4px 4px 0 #000'};
	cursor: pointer;
	transition: all 0.2s ease;
	text-transform: uppercase;

	&:hover {
		transform: translateY(-2px);
		box-shadow: 6px 6px 0 #000;
	}

	&:active {
		transform: translateY(0);
		box-shadow: 3px 3px 0 #000;
	}
`

export const TaskSection = styled.div`
	margin-bottom: 32px;
`

export const SectionTitle = styled.h2`
	font-family: 'Source Code Pro', monospace;
	font-size: 20px;
	font-weight: 700;
	color: #fff;
	margin: 0 0 16px 0;
	text-shadow: 2px 2px 0 #000;
`

export const EmptyState = styled.div`
	background: #fff;
	border: 4px solid #000;
	box-shadow: 6px 6px 0 #000;
	padding: 60px 40px;
	text-align: center;
	font-family: 'Source Code Pro', monospace;
`

export const EmptyStateIcon = styled.div`
	font-size: 64px;
	margin-bottom: 16px;
`

export const EmptyStateText = styled.p`
	font-size: 18px;
	color: #666;
	margin: 0;
`

export const Stats = styled.div`
	background: #fff;
	border: 4px solid #000;
	box-shadow: 6px 6px 0 #000;
	padding: 20px;
	margin-bottom: 24px;
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	gap: 20px;
`

export const StatItem = styled.div`
	text-align: center;
`

export const StatValue = styled.div`
	font-family: 'Source Code Pro', monospace;
	font-size: 36px;
	font-weight: 900;
	color: #000;
	margin-bottom: 4px;
`

export const StatLabel = styled.div`
	font-family: 'Source Code Pro', monospace;
	font-size: 12px;
	font-weight: 700;
	color: #666;
	text-transform: uppercase;
`

export const ClearButton = styled.button`
	width: 100%;
	padding: 12px;
	font-family: 'Source Code Pro', monospace;
	font-size: 14px;
	font-weight: 700;
	background: #ff4444;
	color: white;
	border: 3px solid #000;
	box-shadow: 4px 4px 0 #000;
	cursor: pointer;
	transition: all 0.2s ease;
	text-transform: uppercase;
	margin-top: 16px;

	&:hover {
		transform: translateY(-2px);
		box-shadow: 6px 6px 0 #000;
	}

	&:active {
		transform: translateY(0);
		box-shadow: 2px 2px 0 #000;
	}
`
