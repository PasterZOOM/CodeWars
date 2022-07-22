const rakeGarden = (garden) => garden.split(' ').map(e => e === 'rock' ? 'rock' : 'gravel').join(' ')

console.log(rakeGarden('slug spider rock gravel gravel gravel gravel gravel gravel gravel'))