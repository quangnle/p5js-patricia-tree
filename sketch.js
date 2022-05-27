let t = new PatriciaTree(0,30,600);
t.addNode('abcd');
t.addNode('abcd1');
t.addNode('abcd2');
t.addNode('abcd3');
t.addNode('abcd4');
t.addNode('abcd5');
t.addNode('abcd6');
t.addNode('abcd7');
t.addNode('abcd8');
t.addNode('bef');
t.addNode('beg');
t.addNode('bek');
t.addNode('c');

function setup() {
	createCanvas(600, 400);
}

function draw() {
	background(250);
	t.draw();
}

