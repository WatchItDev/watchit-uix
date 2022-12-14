import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";

import alias from '@rollup/plugin-alias';

import { terser } from "rollup-plugin-terser";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import svgr from '@svgr/rollup'
import url from '@rollup/plugin-url';
import image from 'rollup-plugin-image';


const packageJson = require("./package.json");

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
            postcss({
                extensions: [".scss", ".css"],
                use: ["sass"],
            }),
            terser(),
            alias({
                '@assets': __dirname + '/src/assets'
            }),
            url({
                include: __dirname + '/src/assets/images/icons/*.svg',
            }),
            svgr({
                svgo: true
            }),
            image(),
        ],
    },
    {
        input: "dist/esm/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
        external: [/\.scss$/],
    },
];
