graph    = []; 
shortWay = []; 

n = 6;  

for i in range(n):
    graph.append([]);
    shortWay.append(float('inf'));
    for j in range(n):
        graph[i].append(0);


graph[0][1] = 7;
graph[0][2] = 9;
graph[0][5] = 14;

graph[1][2] = 10;
graph[1][3] = 15;

graph[2][3] = 11;
graph[2][5] = 2;

graph[3][4] = 6;

graph[4][5] = 9;

def findShortWay(start):
  shortWay[start] = 0;
  l = len(shortWay);
  for i in range(l):
    for j in range(l): 
      if (i != j) and (graph[i][j] != 0): 
        
        if shortWay[i] != float('inf'):
          way = graph[i][j] + shortWay[i]
        else:
          way = graph[i][j]
        
        if shortWay[j] > way and way > 0:
          shortWay[j] = way;

findShortWay(0);
print shortWay;


