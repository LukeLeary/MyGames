function Tree() {

    var tree1 = [900, 200];
    var tree2 = [500, 1500];
    var tree3 = [2500, 800];


    this.show = function () {
        image(TRimg, tree1[0], tree1[1]);
        image(TRimg, tree2[0], tree2[1]);
        image(TRimg, tree3[0], tree3[1]);
    }
}