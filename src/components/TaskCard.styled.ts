import styled, { keyframes, css } from 'styled-components'

const flicker = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
`

const burn = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`

export const TaskCardContainer = styled.div<{
	$isBurning: boolean
	$isBurned: boolean
}>`
	position: relative;
	background: ${(props) => (props.$isBurned ? '#1a1a1a' : '#fff')};
	border: 3px solid ${(props) => (props.$isBurned ? '#333' : '#000')};
	box-shadow: ${(props) =>
		props.$isBurned ? '4px 4px 0 #333' : '6px 6px 0 #000'};
	padding: 20px;
	margin-bottom: 20px;
	transition: all 0.2s ease;
	opacity: ${(props) => (props.$isBurned ? 0.6 : 1)};

	${(props) =>
		props.$isBurning &&
		css`
			animation: ${burn} 2s infinite;
			border-color: #ff4444;
			box-shadow: 6px 6px 0 #ff4444;
		`}

	&:hover {
		transform: translateY(-2px);
		box-shadow: ${(props) =>
			props.$isBurned ? '6px 6px 0 #333' : '8px 8px 0 #000'};
	}
`

export const TaskHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	margin-bottom: 12px;
`

export const TaskTitle = styled.h3<{ $isBurned: boolean }>`
	margin: 0;
	font-family: 'Source Code Pro', monospace;
	font-size: 18px;
	font-weight: 700;
	color: ${(props) => (props.$isBurned ? '#666' : '#000')};
	text-decoration: ${(props) => (props.$isBurned ? 'line-through' : 'none')};
	flex: 1;
`

export const TaskDescription = styled.p<{ $isBurned: boolean }>`
	margin: 0 0 16px 0;
	font-size: 14px;
	color: ${(props) => (props.$isBurned ? '#555' : '#333')};
	line-height: 1.5;
`

export const FuseContainer = styled.div`
	position: relative;
	width: 100%;
	height: 8px;
	background: #e0e0e0;
	border: 2px solid #000;
	margin-bottom: 12px;
	overflow: hidden;
`

export const FuseProgress = styled.div<{
	$progress: number
	$isBurning: boolean
}>`
	height: 100%;
	background: ${(props) => {
		if (props.$progress > 75) return '#ff4444'
		if (props.$progress > 50) return '#ff8800'
		return '#ffcc00'
	}};
	width: ${(props) => props.$progress}%;
	transition:
		width 1s linear,
		background 0.3s ease;

	${(props) =>
		props.$isBurning &&
		css`
			animation: ${flicker} 0.5s infinite;
		`}
`

export const TimeInfo = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 16px;
	font-family: 'Source Code Pro', monospace;
	font-size: 12px;
	color: #666;
`

export const TimeLabel = styled.span<{ $isUrgent: boolean }>`
	color: ${(props) => (props.$isUrgent ? '#ff4444' : '#666')};
	font-weight: ${(props) => (props.$isUrgent ? 700 : 400)};
`

export const ButtonGroup = styled.div`
	display: flex;
	gap: 8px;
	margin-top: 12px;
`

export const BurnedBadge = styled.div`
	display: inline-flex;
	align-items: center;
	gap: 4px;
	padding: 4px 8px;
	background: #ff4444;
	color: white;
	font-family: 'Source Code Pro', monospace;
	font-size: 12px;
	font-weight: 700;
	border: 2px solid #000;
`

export const CompletedBadge = styled.div`
	display: inline-flex;
	align-items: center;
	gap: 4px;
	padding: 4px 8px;
	background: #00cc66;
	color: white;
	font-family: 'Source Code Pro', monospace;
	font-size: 12px;
	font-weight: 700;
	border: 2px solid #000;
`
