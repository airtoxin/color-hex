import assert from "assert";
import is from "is";
import * as colorPalette from "../src/color-palette";

describe("colorPalette", () => {
    it("listPopular", (done) => {
        colorPalette.listPopular().then((palettes) => {
            assert(is.array(palettes));
            for (const palette of palettes) {
                assert(is.object(palette));
                assert(is.string(palette.id));
                assert(is.string(palette.name));
                assert(is.array(palette.colors));
                assert(palette.colors.length === 5);
                for (const color of palette.colors) {
                    assert(is.string(color));
                }
            }
            done();
        });
    });
});
