const play = ['Rock', 'Paper', 'Scissors']
const score = {player:0, computer:0}
const result = {player:'player wins', computer:'computer wins'}
const wins = {paper:'Paper covers Rock, ', rock:'Rock breaks Scissors, ', scissors:'Scissors cuts Paper, '}
const pairs = 	[['Rock', 'Paper', wins.paper, 'computer']
		,['Rock', 'Scissors', wins.rock, 'player']
		,['Paper', 'Rock', wins.paper, 'player']		
		,['Paper', 'Scissors', wins.scissors, 'computer']
		,['Scissors', 'Rock', wins.rock, 'computer']
		,['Scissors', 'Paper', wins.scissors, 'player']
		]
let error = false

function computerPlay()
{
	const index = Math.floor(Math.random() * 3)
	return play[index]
}

function playRound(player, computer)
{
	console.log('Player chooses ' + player)
	console.log('Computer chooses ' + computer)

	if (play.includes(player))
	{
		if (player == computer)
		{
			console.log('Player and computer chose ' + computer + ', a draw')
		}
		else
		{
			for (let i in pairs)
			{
				if (player == pairs[i][0] && computer == pairs[i][1])
				{
					console.log(pairs[i][2] + result[pairs[i][3]])
					score[pairs[i][3]]++
					break
				} 
			}
		}
	}
	else
	{
		console.log(`Invalid selection, please enter ${play[0]}, ${play[1]} or ${play[2]}`) 
		error = true
	}
}


function game()
{
	console.log('Play Game!!!')
	console.log('============')

	for (let i = 1; i <= 5; i++)
	{
		console.log('Game ' + i)
		console.log('--------')

		playerSelection = prompt("Welcome to our game\nTo play this game you need to open up your console panel\nPlease enter your selection 'rock', 'paper' or 'scissors'")

		if (playerSelection === null)
		{
			console.log('Player has cancelled the game')
			break
		}
		else
		{
			playerSelection = playerSelection.trim()
			playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()

			computerSelection = computerPlay()

			playRound(playerSelection, computerSelection)

			if (error)
			{
				i--
				error = false
			}

			console.log('Player score: ' + score.player + ', Computer score: ' + score.computer)

		}

		if (i == 5)
		{
			console.log('Game End!!!')

			if (score.player == score.computer)
			{
				console.log('A Draw')
			}
			else if (score.player > score.computer)
			{
				console.log('Player Wins!!')
			}
			else
			{
				console.log('Computer Wins')
			}
		}

	}



}

game()