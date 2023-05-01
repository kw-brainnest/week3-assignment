const play = ['Rock', 'Paper', 'Scissors']

function computerPlay()
{
	const index = Math.floor(Math.random() * 3)
	return play[index]
}



playerScore = 0
computerScore = 0

function playRound(p, c)
{
	console.log('Player chooses ' + p)
	console.log('Computer chooses ' + c)

	if (play.includes(p))
	{

		if (p == play[0] & c == play[0])
		{
			console.log(`Both players chose ${play[0]}, a draw`)
		}
		else if (p == play[0] & c == play[1])
		{
			console.log(`${play[1]} covers ${play[0]}, computer wins`)
			computerScore++
		}
		else if (p == play[0] & c == play[2])
		{
			console.log(`${play[0]} breaks ${play[2]}, player wins`)
			playerScore++
		}
		else if (p == play[1] & c == play[0])
		{
			console.log(`${play[1]} wraps ${play[0]}, players wins`)
			playerScore++
		}
		else if (p == play[1] & c == play[1])
		{
			console.log(`Both players choose ${play[1]}, a draw`)
		}
		else if (p == play[1] & c == play[2])
		{
			console.log(`${play[2]} cuts ${play[1]}, computer wins`)
			computerScore++
		}
		else if (p == play[2] & c == play[0])
		{
			console.log(`${play[0]} breaks ${play[2]}, computer wins`)
			computerScore++
		}
		else if (p == play[2] & c == play[1])
		{
			console.log(`${play[2]} cuts ${play[1]}, player wins`)
			playerScore++
		}
		else if (p == play[2] & c == play[2])
		{
			console.log(`both choose ${play[2]}, a draw`)
		}
	}
	else
	{
		console.log(`Invalid selection, please enter ${play[0]}, ${play[1]} or ${play[2]}`) 
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
		playerSelection = prompt('Please enter your selection')
		playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()
		computerSelection = computerPlay()
		playRound(playerSelection, computerSelection)
		console.log('Player score: ' + playerScore + ', computer score: ' + computerScore)
	}

	console.log('Game End!!!')


	if (playerScore == computerScore)
	{
		console.log('A Draw')
	}
	else if (playerScore > computerScore)
	{
		console.log('Player Wins!!')
	}
	else
	{
		console.log('Computer wins')
	}
}
game()