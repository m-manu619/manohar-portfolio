import { useEffect, useState } from 'react';

// Fetches the live public repo count from GitHub; returns null until loaded
// (callers should fall back to a static value). Fails silently on rate
// limits or network errors so the page never breaks.
function useGitHubRepoCount(username) {
  const [count, setCount] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled && data && typeof data.public_repos === 'number') {
          setCount(data.public_repos);
        }
      })
      .catch(() => {});
    return () => { cancelled = true; };
  }, [username]);

  return count;
}

export default useGitHubRepoCount;
