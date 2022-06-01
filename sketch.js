let t = new PatriciaTree(0,30,600);
let nodes = ['A',
    'B',
    'BC',
    'BE',
    'BF',
    'BEF',
    'BEK',
    'ABCD',
    'ABCD1',
    'ABCD2',
    'ABCD3',
    'ABCD4',
    'ABCD5',
    'ABCD6',
    'ABCD7'];

for	(let i=0; i < nodes.length; i++){
	t.addNode(nodes[i]);
}

function setup() {
	createCanvas(600, 400);
}

function draw() {
	background(250);
	t.draw();
}

