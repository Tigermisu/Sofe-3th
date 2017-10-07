(function () {
    describe("MaxPathTreeCountSpec", function () {

        it("testMaxPathCountOne", function () {
            var E1 = new TreeNode(1);
            var E2 = new TreeNode(2);
            var E3 = new TreeNode(1);
            var E4 = new TreeNode(2);
            var E5 = new TreeNode(2);
            var E6 = new TreeNode(3);
            var E7 = new TreeNode(2);
            var E8 = new TreeNode(2);
            var E9 = new TreeNode(2);
            var E0 = new TreeNode(3);
            var EA = new TreeNode(1);
            var EB = new TreeNode(3);
            var EC = new TreeNode(1);
            var ED = new TreeNode(3);
            var EE = new TreeNode(1);
            var EF = new TreeNode(3);

            var D1 = new TreeNode(1, E1, E2);
            var D2 = new TreeNode(2, E3, E4);
            var D3 = new TreeNode(3, E5, E6);
            var D4 = new TreeNode(2, E7, E8);
            var D5 = new TreeNode(3, E9, E0);
            var D6 = new TreeNode(2, EA, EB);
            var D7 = new TreeNode(2, EC, ED);
            var D8 = new TreeNode(1, EE, EF);

            var C1 = new TreeNode(2, D1, D2);
            var C2 = new TreeNode(1, D3, D4);
            var C3 = new TreeNode(2, D5, D6);
            var C4 = new TreeNode(2, D7, D8);

            var B1 = new TreeNode(2, C1, C2);
            var B2 = new TreeNode(1, C3, C4);

            var root = new TreeNode(3, B1, B2);

            var result = MaxPathTreeCount.maxPathCount(root);

            expect(result).toBe(2);
        });

        it("testMaxPathCountOne", function () {
            var E1 = new TreeNode(3);
            var E2 = new TreeNode(3);
            var E3 = new TreeNode(3);
            var E4 = new TreeNode(3);
            var E5 = new TreeNode(3);
            var E6 = new TreeNode(3);
            var E7 = new TreeNode(3);
            var E8 = new TreeNode(3);
            var E9 = new TreeNode(3);
            var E0 = new TreeNode(3);
            var EA = new TreeNode(3);
            var EB = new TreeNode(3);
            var EC = new TreeNode(3);
            var ED = new TreeNode(3);
            var EE = new TreeNode(3);
            var EF = new TreeNode(3);

            var D1 = new TreeNode(3, E1, E2);
            var D2 = new TreeNode(3, E3, E4);
            var D3 = new TreeNode(3, E5, E6);
            var D4 = new TreeNode(3, E7, E8);
            var D5 = new TreeNode(3, E9, E0);
            var D6 = new TreeNode(3, EA, EB);
            var D7 = new TreeNode(3, EC, ED);
            var D8 = new TreeNode(3, EE, EF);

            var C1 = new TreeNode(2, D1, D2);
            var C2 = new TreeNode(2, D3, D4);
            var C3 = new TreeNode(2, D5, D6);
            var C4 = new TreeNode(2, D7, D8);

            var B1 = new TreeNode(1, C1, C2);
            var B2 = new TreeNode(1, C3, C4);

            var root = new TreeNode(3, B1, B2);

            var result = MaxPathTreeCount.maxPathCount(root);

            expect(result).toBe(16);
        });

        it("testMaxPathCountOne", function () {
            var E1 = new TreeNode(2);
            var E2 = new TreeNode(2);
            var E3 = new TreeNode(2);
            var E4 = new TreeNode(2);
            var E5 = new TreeNode(2);
            var E6 = new TreeNode(2);
            var E7 = new TreeNode(3);
            var E8 = new TreeNode(3);
            var E9 = new TreeNode(3);
            var E0 = new TreeNode(3);
            var EA = new TreeNode(3);
            var EB = new TreeNode(3);
            var EC = new TreeNode(3);
            var ED = new TreeNode(4);
            var EE = new TreeNode(4);
            var EF = new TreeNode(4);

            var D1 = new TreeNode(3, E1, E2);
            var D2 = new TreeNode(3, E3, E4);
            var D3 = new TreeNode(3, E5, E6);
            var D4 = new TreeNode(3, E7, E8);
            var D5 = new TreeNode(3, E9, E0);
            var D6 = new TreeNode(3, EA, EB);
            var D7 = new TreeNode(2, EC, ED);
            var D8 = new TreeNode(2, EE, EF);

            var C1 = new TreeNode(2, D1, D2);
            var C2 = new TreeNode(2, D3, D4);
            var C3 = new TreeNode(2, D5, D6);
            var C4 = new TreeNode(2, D7, D8);

            var B1 = new TreeNode(1, C1, C2);
            var B2 = new TreeNode(1, C3, C4);

            var root = new TreeNode(3, B1, B2);

            var result = MaxPathTreeCount.maxPathCount(root);

            expect(result).toBe(9);
        });

    });
})();