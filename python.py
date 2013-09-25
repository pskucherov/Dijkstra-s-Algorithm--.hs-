graph    = [];
shortWay = [];

for x in range(6):
    graph.append([]);
    shortWay.append(float('inf'));
    for y in range(6):
        graph[x].append(0);


graph[0][1] = 7;
graph[0][2] = 9;
graph[0][5] = 14;

graph[1][2] = 10;
graph[1][3] = 15;

graph[2][3] = 11;
graph[2][5] = 2;

graph[3][4] = 6;

graph[4][5] = 9;


print graph, shortWay;

