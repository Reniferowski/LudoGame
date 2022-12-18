import { defineConfig, searchForWorkspaceRoot } from "vite";
import react from "@vitejs/plugin-react";
import commonjs from "vite-plugin-commonjs";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), commonjs()],
	build: {
		commonjsOptions: {
			include: [/GameLogic/],
		},
	},
	server: {
		fs: {
			strict: false,
			allow: [
				searchForWorkspaceRoot(process.cwd()),
				"/../users.json",
				"/../ManageUser/getUsers",
				"/../ManageUser/addScore",
			],
		},
	},
});
