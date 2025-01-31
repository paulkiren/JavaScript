function largestIsland(grid: number[][]): number {
    const n = grid.length;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const islandMap = new Map<number, number>(); // Map of island ID to its size
    let islandId = 2; // Start from 2 to differentiate from original 1s
    let maxIsland = 0;

    // DFS to explore and calculate island size
    function dfs(i: number, j: number, id: number): number {
        if (i < 0 || j < 0 || i >= n || j >= n || grid[i][j] !== 1) return 0;
        grid[i][j] = id; // Mark as visited with island ID
        let size = 1;
        for (const [dx, dy] of directions) {
            size += dfs(i + dx, j + dy, id);
        }
        return size;
    }

    // Step 1: Find all islands and mark them with unique IDs
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                const size = dfs(i, j, islandId);
                islandMap.set(islandId, size);
                maxIsland = Math.max(maxIsland, size);
                islandId++;
            }
        }
    }

    // Step 2: Try changing each 0 to 1 and calculate the maximum possible island
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) {
                const connectedIslands = new Set<number>(); // Store unique neighboring island IDs
                for (const [dx, dy] of directions) {
                    const ni = i + dx, nj = j + dy;
                    if (ni >= 0 && nj >= 0 && ni < n && nj < n && grid[ni][nj] > 1) {
                        connectedIslands.add(grid[ni][nj]);
                    }
                }

                // Compute potential island size
                let newSize = 1; // Changing 0 to 1
                for (const id of connectedIslands) {
                    newSize += islandMap.get(id) || 0;
                }
                maxIsland = Math.max(maxIsland, newSize);
            }
        }
    }

    return maxIsland;
}
