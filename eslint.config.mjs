import js from "@eslint/js";

export default [
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 2020,
            globals: {
                require: "readonly",
                module: "readonly",
                exports: "readonly",
                process: "readonly",
                console: "readonly",
                global: "readonly",
                window: "readonly",
            }
        }
    }
];
