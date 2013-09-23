/**
 * Алгоритм Дейкстра
 * @param n {Number} - кол-во вершин графа (>= 2)
 * @constructor
 */
function Deikstra(n) {
    //таблица графа
    this.graph = [];

    //результирующий массив пути
    this.shortWay = [];

    if (typeof n === 'undefined' || n < 2) {
        throw new Error('В графе должно быть минимум 2 вершины');
    }

    //кол-во вершин графа
    this.vertexNum = n;

    //заполняем таблицу графа нулями, а массив кратчайшего пути бесконечностью
    this.initGraph();
    //заполняем таблицу графа за ранее подготовленными значениями
    this.constGraph();

}

/**
 * Инициализация таблицы графа (this.graph) и массива кратчайшего пути (this.shortWay)
 */
Deikstra.prototype.initGraph = function () {
    var i, j;
    for (i = 0; i < this.vertexNum; i++) {
        this.shortWay[i] = Infinity;
        for (j = 0; j < this.vertexNum; j++) {
            if (!j) {
                this.graph[i] = [];
            }
            this.graph[i][j] = 0;
        }
    }
};

/**
 * Подготовленная таблица графа
 * Изображение: http://comp-science.narod.ru/KPG/Deikstr.htm
 */
Deikstra.prototype.constGraph = function () {

    this.graph[0][1] = 7;
    this.graph[0][2] = 9;
    this.graph[0][5] = 14;

    this.graph[1][2] = 10;
    this.graph[1][3] = 15;

    this.graph[2][3] = 11;
    this.graph[2][5] = 2;

    this.graph[3][4] = 6;

    this.graph[4][5] = 9;

};

/**
 * Алгоритм Дейкстра, в результате работы которого заполняется массив this.shortWay
 * @param vertex - вершина, от которой начинаем искать кратчайший путь
 */
Deikstra.prototype.findShortWay = function (vertex) {
    var i
        , j
        , len;

    if (typeof vertex === 'undefined' || vertex < 0) {
        throw new Error('Укажите вершину, от которой будем искать кратчайший путь');
    } else if (vertex > this.vertexNum) {
        throw new Error('В графе нет столько вершин');
    }

    for (i = 0; i < this.vertexNum; i++) {
        if (this.shortWay[i] !== Infinity) {
            throw new Error('Мы уже находили кратчайший маршрут,' +
                ' перед поиском нового необходимо очистить массив this.shortWay');
        }
    }

    this.shortWay[vertex] = 0;

    //вершина, от которой надо искать
    for (i = vertex; i < this.vertexNum; i++) {

        //перебор всех вершин
        for (j = 0; j < this.vertexNum; j++) {
            //берём только разые вершины
            if (i !== j) {
                //если путь существует
                if (this.graph[i][j] !== 0) {
                    if (this.shortWay[i] !== Infinity) {
                        //если к данной вершине уже проложен путь от другой вершины
                        len = this.graph[i][j] + this.shortWay[i];
                    } else {
                        //если это первая встретившаяся вершина
                        len = this.graph[i][j];
                    }
                    if (this.shortWay[j] > len && len > 0) {
                        this.shortWay[j] = len;
                    }
                }
            }
        }
    }
};

Deikstra.prototype.getShortWay = function() {
    return this.shortWay;
};
