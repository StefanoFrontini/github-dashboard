// https://api.github.com/repos/facebook/react/pulls?per_page=10&state=closed
import type { Endpoints } from "@octokit/types";

type listPullsReposResponse =
  Endpoints["GET /repos/{owner}/{repo}/pulls"]["response"];
const mockPulls: listPullsReposResponse["data"] = [
  {
    url: "https://api.github.com/repos/facebook/react/pulls/26288",
    id: 1261396388,
    node_id: "PR_kwDOAJy2Ks5LL2Gk",
    html_url: "https://github.com/facebook/react/pull/26288",
    diff_url: "https://github.com/facebook/react/pull/26288.diff",
    patch_url: "https://github.com/facebook/react/pull/26288.patch",
    issue_url: "https://api.github.com/repos/facebook/react/issues/26288",
    number: 26288,
    state: "closed",
    locked: false,
    title: "Codemod tests to waitFor pattern (1/?)",
    user: {
      login: "acdlite",
      id: 3624098,
      node_id: "MDQ6VXNlcjM2MjQwOTg=",
      avatar_url: "https://avatars.githubusercontent.com/u/3624098?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/acdlite",
      html_url: "https://github.com/acdlite",
      followers_url: "https://api.github.com/users/acdlite/followers",
      following_url:
        "https://api.github.com/users/acdlite/following{/other_user}",
      gists_url: "https://api.github.com/users/acdlite/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/acdlite/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/acdlite/subscriptions",
      organizations_url: "https://api.github.com/users/acdlite/orgs",
      repos_url: "https://api.github.com/users/acdlite/repos",
      events_url: "https://api.github.com/users/acdlite/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/acdlite/received_events",
      type: "User",
      site_admin: false,
    },
    body: "This converts some of our test suite to use the `waitFor` test pattern, instead of the `expect(Scheduler).toFlushAndYield` pattern. Most of these changes are automated with jscodeshift, with some slight manual cleanup in certain cases.\r\n\r\nSee #26285 for full context.",
    created_at: "2023-03-03T02:59:05Z",
    updated_at: "2023-03-03T04:26:02Z",
    closed_at: "2023-03-03T03:34:58Z",
    merged_at: "2023-03-03T03:34:58Z",
    merge_commit_sha: "25a8b9735ce7c84210707d5eced7fe2c9abbd0e1",
    assignee: null,
    assignees: [],
    requested_reviewers: [],
    requested_teams: [],
    labels: [
      {
        id: 196858374,
        node_id: "MDU6TGFiZWwxOTY4NTgzNzQ=",
        url: "https://api.github.com/repos/facebook/react/labels/CLA%20Signed",
        name: "CLA Signed",
        color: "e7e7e7",
        default: false,
        description: "",
      },
      {
        id: 1775958285,
        node_id: "MDU6TGFiZWwxNzc1OTU4Mjg1",
        url: "https://api.github.com/repos/facebook/react/labels/React%20Core%20Team",
        name: "React Core Team",
        color: "9149d1",
        default: false,
        description: "Opened by a member of the React Core Team",
      },
    ],
    milestone: null,
    draft: false,
    commits_url:
      "https://api.github.com/repos/facebook/react/pulls/26288/commits",
    review_comments_url:
      "https://api.github.com/repos/facebook/react/pulls/26288/comments",
    review_comment_url:
      "https://api.github.com/repos/facebook/react/pulls/comments{/number}",
    comments_url:
      "https://api.github.com/repos/facebook/react/issues/26288/comments",
    statuses_url:
      "https://api.github.com/repos/facebook/react/statuses/4b9c9392a6cb04b57cf6a31dcdf4a1cc37ad4ad5",
    head: {
      label: "acdlite:codemod-tests-waitfor",
      ref: "codemod-tests-waitfor",
      sha: "4b9c9392a6cb04b57cf6a31dcdf4a1cc37ad4ad5",
      user: {
        login: "acdlite",
        id: 3624098,
        node_id: "MDQ6VXNlcjM2MjQwOTg=",
        avatar_url: "https://avatars.githubusercontent.com/u/3624098?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/acdlite",
        html_url: "https://github.com/acdlite",
        followers_url: "https://api.github.com/users/acdlite/followers",
        following_url:
          "https://api.github.com/users/acdlite/following{/other_user}",
        gists_url: "https://api.github.com/users/acdlite/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/acdlite/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/acdlite/subscriptions",
        organizations_url: "https://api.github.com/users/acdlite/orgs",
        repos_url: "https://api.github.com/users/acdlite/repos",
        events_url: "https://api.github.com/users/acdlite/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/acdlite/received_events",
        type: "User",
        site_admin: false,
      },
      repo: {
        id: 45281256,
        node_id: "MDEwOlJlcG9zaXRvcnk0NTI4MTI1Ng==",
        name: "react",
        full_name: "acdlite/react",
        private: false,
        owner: {
          login: "acdlite",
          id: 3624098,
          node_id: "MDQ6VXNlcjM2MjQwOTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/3624098?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/acdlite",
          html_url: "https://github.com/acdlite",
          followers_url: "https://api.github.com/users/acdlite/followers",
          following_url:
            "https://api.github.com/users/acdlite/following{/other_user}",
          gists_url: "https://api.github.com/users/acdlite/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/acdlite/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/acdlite/subscriptions",
          organizations_url: "https://api.github.com/users/acdlite/orgs",
          repos_url: "https://api.github.com/users/acdlite/repos",
          events_url: "https://api.github.com/users/acdlite/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/acdlite/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/acdlite/react",
        description:
          "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
        fork: true,
        url: "https://api.github.com/repos/acdlite/react",
        forks_url: "https://api.github.com/repos/acdlite/react/forks",
        keys_url: "https://api.github.com/repos/acdlite/react/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/acdlite/react/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/acdlite/react/teams",
        hooks_url: "https://api.github.com/repos/acdlite/react/hooks",
        issue_events_url:
          "https://api.github.com/repos/acdlite/react/issues/events{/number}",
        events_url: "https://api.github.com/repos/acdlite/react/events",
        assignees_url:
          "https://api.github.com/repos/acdlite/react/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/acdlite/react/branches{/branch}",
        tags_url: "https://api.github.com/repos/acdlite/react/tags",
        blobs_url: "https://api.github.com/repos/acdlite/react/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/acdlite/react/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/acdlite/react/git/refs{/sha}",
        trees_url: "https://api.github.com/repos/acdlite/react/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/acdlite/react/statuses/{sha}",
        languages_url: "https://api.github.com/repos/acdlite/react/languages",
        stargazers_url: "https://api.github.com/repos/acdlite/react/stargazers",
        contributors_url:
          "https://api.github.com/repos/acdlite/react/contributors",
        subscribers_url:
          "https://api.github.com/repos/acdlite/react/subscribers",
        subscription_url:
          "https://api.github.com/repos/acdlite/react/subscription",
        commits_url: "https://api.github.com/repos/acdlite/react/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/acdlite/react/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/acdlite/react/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/acdlite/react/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/acdlite/react/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/acdlite/react/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/acdlite/react/merges",
        archive_url:
          "https://api.github.com/repos/acdlite/react/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/acdlite/react/downloads",
        issues_url:
          "https://api.github.com/repos/acdlite/react/issues{/number}",
        pulls_url: "https://api.github.com/repos/acdlite/react/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/acdlite/react/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/acdlite/react/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/acdlite/react/labels{/name}",
        releases_url:
          "https://api.github.com/repos/acdlite/react/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/acdlite/react/deployments",
        created_at: "2015-10-30T23:18:48Z",
        updated_at: "2023-02-11T11:07:33Z",
        pushed_at: "2023-03-03T03:24:18Z",
        git_url: "git://github.com/acdlite/react.git",
        ssh_url: "git@github.com:acdlite/react.git",
        clone_url: "https://github.com/acdlite/react.git",
        svn_url: "https://github.com/acdlite/react",
        homepage: "https://facebook.github.io/react/",
        size: 173457,
        stargazers_count: 37,
        watchers_count: 37,
        language: "JavaScript",
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: true,
        has_discussions: false,
        forks_count: 8,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 1,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 8,
        open_issues: 1,
        watchers: 37,
        default_branch: "master",
      },
    },
    base: {
      label: "facebook:main",
      ref: "main",
      sha: "e5244673388a58eaf8f02a9e44749bef3ffee615",
      user: {
        login: "facebook",
        id: 69631,
        node_id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
        avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/facebook",
        html_url: "https://github.com/facebook",
        followers_url: "https://api.github.com/users/facebook/followers",
        following_url:
          "https://api.github.com/users/facebook/following{/other_user}",
        gists_url: "https://api.github.com/users/facebook/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/facebook/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/facebook/subscriptions",
        organizations_url: "https://api.github.com/users/facebook/orgs",
        repos_url: "https://api.github.com/users/facebook/repos",
        events_url: "https://api.github.com/users/facebook/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/facebook/received_events",
        type: "Organization",
        site_admin: false,
      },
      repo: {
        id: 10270250,
        node_id: "MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==",
        name: "react",
        full_name: "facebook/react",
        private: false,
        owner: {
          login: "facebook",
          id: 69631,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
          avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/facebook",
          html_url: "https://github.com/facebook",
          followers_url: "https://api.github.com/users/facebook/followers",
          following_url:
            "https://api.github.com/users/facebook/following{/other_user}",
          gists_url: "https://api.github.com/users/facebook/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/facebook/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/facebook/subscriptions",
          organizations_url: "https://api.github.com/users/facebook/orgs",
          repos_url: "https://api.github.com/users/facebook/repos",
          events_url: "https://api.github.com/users/facebook/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/facebook/received_events",
          type: "Organization",
          site_admin: false,
        },
        html_url: "https://github.com/facebook/react",
        description:
          "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
        fork: false,
        url: "https://api.github.com/repos/facebook/react",
        forks_url: "https://api.github.com/repos/facebook/react/forks",
        keys_url: "https://api.github.com/repos/facebook/react/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/facebook/react/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/facebook/react/teams",
        hooks_url: "https://api.github.com/repos/facebook/react/hooks",
        issue_events_url:
          "https://api.github.com/repos/facebook/react/issues/events{/number}",
        events_url: "https://api.github.com/repos/facebook/react/events",
        assignees_url:
          "https://api.github.com/repos/facebook/react/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/facebook/react/branches{/branch}",
        tags_url: "https://api.github.com/repos/facebook/react/tags",
        blobs_url:
          "https://api.github.com/repos/facebook/react/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/facebook/react/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/facebook/react/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/facebook/react/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/facebook/react/statuses/{sha}",
        languages_url: "https://api.github.com/repos/facebook/react/languages",
        stargazers_url:
          "https://api.github.com/repos/facebook/react/stargazers",
        contributors_url:
          "https://api.github.com/repos/facebook/react/contributors",
        subscribers_url:
          "https://api.github.com/repos/facebook/react/subscribers",
        subscription_url:
          "https://api.github.com/repos/facebook/react/subscription",
        commits_url:
          "https://api.github.com/repos/facebook/react/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/facebook/react/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/facebook/react/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/facebook/react/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/facebook/react/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/facebook/react/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/facebook/react/merges",
        archive_url:
          "https://api.github.com/repos/facebook/react/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/facebook/react/downloads",
        issues_url:
          "https://api.github.com/repos/facebook/react/issues{/number}",
        pulls_url: "https://api.github.com/repos/facebook/react/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/facebook/react/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/facebook/react/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/facebook/react/labels{/name}",
        releases_url:
          "https://api.github.com/repos/facebook/react/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/facebook/react/deployments",
        created_at: "2013-05-24T16:15:54Z",
        updated_at: "2023-03-03T10:33:02Z",
        pushed_at: "2023-03-03T09:43:05Z",
        git_url: "git://github.com/facebook/react.git",
        ssh_url: "git@github.com:facebook/react.git",
        clone_url: "https://github.com/facebook/react.git",
        svn_url: "https://github.com/facebook/react",
        homepage: "https://reactjs.org",
        size: 276472,
        stargazers_count: 203166,
        watchers_count: 203166,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: true,
        has_discussions: false,
        forks_count: 42233,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 1187,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
          "declarative",
          "frontend",
          "javascript",
          "library",
          "react",
          "ui",
        ],
        visibility: "public",
        forks: 42233,
        open_issues: 1187,
        watchers: 203166,
        default_branch: "main",
      },
    },
    _links: {
      self: {
        href: "https://api.github.com/repos/facebook/react/pulls/26288",
      },
      html: {
        href: "https://github.com/facebook/react/pull/26288",
      },
      issue: {
        href: "https://api.github.com/repos/facebook/react/issues/26288",
      },
      comments: {
        href: "https://api.github.com/repos/facebook/react/issues/26288/comments",
      },
      review_comments: {
        href: "https://api.github.com/repos/facebook/react/pulls/26288/comments",
      },
      review_comment: {
        href: "https://api.github.com/repos/facebook/react/pulls/comments{/number}",
      },
      commits: {
        href: "https://api.github.com/repos/facebook/react/pulls/26288/commits",
      },
      statuses: {
        href: "https://api.github.com/repos/facebook/react/statuses/4b9c9392a6cb04b57cf6a31dcdf4a1cc37ad4ad5",
      },
    },
    author_association: "COLLABORATOR",
    auto_merge: null,
    active_lock_reason: null,
  },
  {
    url: "https://api.github.com/repos/facebook/react/pulls/26285",
    id: 1261115615,
    node_id: "PR_kwDOAJy2Ks5LKxjf",
    html_url: "https://github.com/facebook/react/pull/26285",
    diff_url: "https://github.com/facebook/react/pull/26285.diff",
    patch_url: "https://github.com/facebook/react/pull/26285.patch",
    issue_url: "https://api.github.com/repos/facebook/react/issues/26285",
    number: 26285,
    state: "closed",
    locked: false,
    title: "New internal testing helpers: waitFor, waitForAll, waitForPaint",
    user: {
      login: "acdlite",
      id: 3624098,
      node_id: "MDQ6VXNlcjM2MjQwOTg=",
      avatar_url: "https://avatars.githubusercontent.com/u/3624098?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/acdlite",
      html_url: "https://github.com/acdlite",
      followers_url: "https://api.github.com/users/acdlite/followers",
      following_url:
        "https://api.github.com/users/acdlite/following{/other_user}",
      gists_url: "https://api.github.com/users/acdlite/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/acdlite/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/acdlite/subscriptions",
      organizations_url: "https://api.github.com/users/acdlite/orgs",
      repos_url: "https://api.github.com/users/acdlite/repos",
      events_url: "https://api.github.com/users/acdlite/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/acdlite/received_events",
      type: "User",
      site_admin: false,
    },
    body: "Over the years, we've gradually aligned on a set of best practices for for testing concurrent React features in this repo. The default in most cases is to use `act`, the same as you would do when testing a real React app. However, because we're testing React itself, as opposed to an app that uses React, our internal tests sometimes need to make assertions on intermediate states that `act` intentionally disallows.\r\n\r\nFor those cases, we built a custom set of Jest assertion matchers that provide greater control over the concurrent work queue. It works by mocking the Scheduler package. (When we eventually migrate to using native postTask, it would probably work by stubbing that instead.)\r\n\r\nA problem with these helpers that we recently discovered is, because they are synchronous function calls, they aren't sufficient if the work you need to flush is scheduled in a microtask — we don't control the microtask queue, and can't mock it.\r\n\r\n`act` addresses this problem by encouraging you to await the result of the `act` call. (It's not currently required to await, but in future versions of React it likely will be.) It will then continue flushing work until both the microtask queue and the Scheduler queue is exhausted.\r\n\r\nWe can follow a similar strategy for our custom test helpers, by replacing the current set of synchronous helpers with a corresponding set of async ones:\r\n\r\n- `expect(Scheduler).toFlushAndYield(log)` -> `await waitForAll(log)`\r\n- `expect(Scheduler).toFlushAndYieldThrough(log)` -> `await waitFor(log)`\r\n- `expect(Scheduler).toFlushUntilNextPaint(log)` -> `await waitForPaint(log)`\r\n\r\nThese APIs are inspired by the existing best practice for writing e2e React tests. Rather than mock all task queues, in an e2e test you set up a timer loop and wait for the UI to match an expecte condition. Although we are mocking _some_ of the task queues in our tests, the general principle still holds: it makes it less likely that our tests will diverge from real world behavior in an actual browser.\r\n\r\nIn this commit, I've implemented the new testing helpers and converted one of the Suspense tests to use them. In subsequent steps, I'll codemod the rest of our test suite.",
    created_at: "2023-03-02T21:42:12Z",
    updated_at: "2023-03-03T03:57:22Z",
    closed_at: "2023-03-03T02:58:12Z",
    merged_at: "2023-03-03T02:58:12Z",
    merge_commit_sha: "e5244673388a58eaf8f02a9e44749bef3ffee615",
    assignee: null,
    assignees: [],
    requested_reviewers: [
      {
        login: "sebmarkbage",
        id: 63648,
        node_id: "MDQ6VXNlcjYzNjQ4",
        avatar_url: "https://avatars.githubusercontent.com/u/63648?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/sebmarkbage",
        html_url: "https://github.com/sebmarkbage",
        followers_url: "https://api.github.com/users/sebmarkbage/followers",
        following_url:
          "https://api.github.com/users/sebmarkbage/following{/other_user}",
        gists_url: "https://api.github.com/users/sebmarkbage/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/sebmarkbage/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/sebmarkbage/subscriptions",
        organizations_url: "https://api.github.com/users/sebmarkbage/orgs",
        repos_url: "https://api.github.com/users/sebmarkbage/repos",
        events_url: "https://api.github.com/users/sebmarkbage/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/sebmarkbage/received_events",
        type: "User",
        site_admin: false,
      },
    ],
    requested_teams: [],
    labels: [
      {
        id: 196858374,
        node_id: "MDU6TGFiZWwxOTY4NTgzNzQ=",
        url: "https://api.github.com/repos/facebook/react/labels/CLA%20Signed",
        name: "CLA Signed",
        color: "e7e7e7",
        default: false,
        description: "",
      },
      {
        id: 1775958285,
        node_id: "MDU6TGFiZWwxNzc1OTU4Mjg1",
        url: "https://api.github.com/repos/facebook/react/labels/React%20Core%20Team",
        name: "React Core Team",
        color: "9149d1",
        default: false,
        description: "Opened by a member of the React Core Team",
      },
    ],
    milestone: null,
    draft: false,
    commits_url:
      "https://api.github.com/repos/facebook/react/pulls/26285/commits",
    review_comments_url:
      "https://api.github.com/repos/facebook/react/pulls/26285/comments",
    review_comment_url:
      "https://api.github.com/repos/facebook/react/pulls/comments{/number}",
    comments_url:
      "https://api.github.com/repos/facebook/react/issues/26285/comments",
    statuses_url:
      "https://api.github.com/repos/facebook/react/statuses/8aadd4fce92ceb42b2596f32363dc6b3e0c9cb9e",
    head: {
      label: "acdlite:new-test-helpers-waitFor",
      ref: "new-test-helpers-waitFor",
      sha: "8aadd4fce92ceb42b2596f32363dc6b3e0c9cb9e",
      user: {
        login: "acdlite",
        id: 3624098,
        node_id: "MDQ6VXNlcjM2MjQwOTg=",
        avatar_url: "https://avatars.githubusercontent.com/u/3624098?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/acdlite",
        html_url: "https://github.com/acdlite",
        followers_url: "https://api.github.com/users/acdlite/followers",
        following_url:
          "https://api.github.com/users/acdlite/following{/other_user}",
        gists_url: "https://api.github.com/users/acdlite/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/acdlite/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/acdlite/subscriptions",
        organizations_url: "https://api.github.com/users/acdlite/orgs",
        repos_url: "https://api.github.com/users/acdlite/repos",
        events_url: "https://api.github.com/users/acdlite/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/acdlite/received_events",
        type: "User",
        site_admin: false,
      },
      repo: {
        id: 45281256,
        node_id: "MDEwOlJlcG9zaXRvcnk0NTI4MTI1Ng==",
        name: "react",
        full_name: "acdlite/react",
        private: false,
        owner: {
          login: "acdlite",
          id: 3624098,
          node_id: "MDQ6VXNlcjM2MjQwOTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/3624098?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/acdlite",
          html_url: "https://github.com/acdlite",
          followers_url: "https://api.github.com/users/acdlite/followers",
          following_url:
            "https://api.github.com/users/acdlite/following{/other_user}",
          gists_url: "https://api.github.com/users/acdlite/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/acdlite/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/acdlite/subscriptions",
          organizations_url: "https://api.github.com/users/acdlite/orgs",
          repos_url: "https://api.github.com/users/acdlite/repos",
          events_url: "https://api.github.com/users/acdlite/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/acdlite/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/acdlite/react",
        description:
          "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
        fork: true,
        url: "https://api.github.com/repos/acdlite/react",
        forks_url: "https://api.github.com/repos/acdlite/react/forks",
        keys_url: "https://api.github.com/repos/acdlite/react/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/acdlite/react/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/acdlite/react/teams",
        hooks_url: "https://api.github.com/repos/acdlite/react/hooks",
        issue_events_url:
          "https://api.github.com/repos/acdlite/react/issues/events{/number}",
        events_url: "https://api.github.com/repos/acdlite/react/events",
        assignees_url:
          "https://api.github.com/repos/acdlite/react/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/acdlite/react/branches{/branch}",
        tags_url: "https://api.github.com/repos/acdlite/react/tags",
        blobs_url: "https://api.github.com/repos/acdlite/react/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/acdlite/react/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/acdlite/react/git/refs{/sha}",
        trees_url: "https://api.github.com/repos/acdlite/react/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/acdlite/react/statuses/{sha}",
        languages_url: "https://api.github.com/repos/acdlite/react/languages",
        stargazers_url: "https://api.github.com/repos/acdlite/react/stargazers",
        contributors_url:
          "https://api.github.com/repos/acdlite/react/contributors",
        subscribers_url:
          "https://api.github.com/repos/acdlite/react/subscribers",
        subscription_url:
          "https://api.github.com/repos/acdlite/react/subscription",
        commits_url: "https://api.github.com/repos/acdlite/react/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/acdlite/react/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/acdlite/react/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/acdlite/react/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/acdlite/react/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/acdlite/react/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/acdlite/react/merges",
        archive_url:
          "https://api.github.com/repos/acdlite/react/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/acdlite/react/downloads",
        issues_url:
          "https://api.github.com/repos/acdlite/react/issues{/number}",
        pulls_url: "https://api.github.com/repos/acdlite/react/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/acdlite/react/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/acdlite/react/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/acdlite/react/labels{/name}",
        releases_url:
          "https://api.github.com/repos/acdlite/react/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/acdlite/react/deployments",
        created_at: "2015-10-30T23:18:48Z",
        updated_at: "2023-02-11T11:07:33Z",
        pushed_at: "2023-03-03T03:24:18Z",
        git_url: "git://github.com/acdlite/react.git",
        ssh_url: "git@github.com:acdlite/react.git",
        clone_url: "https://github.com/acdlite/react.git",
        svn_url: "https://github.com/acdlite/react",
        homepage: "https://facebook.github.io/react/",
        size: 173457,
        stargazers_count: 37,
        watchers_count: 37,
        language: "JavaScript",
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: true,
        has_discussions: false,
        forks_count: 8,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 1,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 8,
        open_issues: 1,
        watchers: 37,
        default_branch: "master",
      },
    },
    base: {
      label: "facebook:main",
      ref: "main",
      sha: "d49e0e0be0941490fe709f80de137516ba4c0ee3",
      user: {
        login: "facebook",
        id: 69631,
        node_id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
        avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/facebook",
        html_url: "https://github.com/facebook",
        followers_url: "https://api.github.com/users/facebook/followers",
        following_url:
          "https://api.github.com/users/facebook/following{/other_user}",
        gists_url: "https://api.github.com/users/facebook/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/facebook/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/facebook/subscriptions",
        organizations_url: "https://api.github.com/users/facebook/orgs",
        repos_url: "https://api.github.com/users/facebook/repos",
        events_url: "https://api.github.com/users/facebook/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/facebook/received_events",
        type: "Organization",
        site_admin: false,
      },
      repo: {
        id: 10270250,
        node_id: "MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==",
        name: "react",
        full_name: "facebook/react",
        private: false,
        owner: {
          login: "facebook",
          id: 69631,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
          avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/facebook",
          html_url: "https://github.com/facebook",
          followers_url: "https://api.github.com/users/facebook/followers",
          following_url:
            "https://api.github.com/users/facebook/following{/other_user}",
          gists_url: "https://api.github.com/users/facebook/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/facebook/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/facebook/subscriptions",
          organizations_url: "https://api.github.com/users/facebook/orgs",
          repos_url: "https://api.github.com/users/facebook/repos",
          events_url: "https://api.github.com/users/facebook/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/facebook/received_events",
          type: "Organization",
          site_admin: false,
        },
        html_url: "https://github.com/facebook/react",
        description:
          "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
        fork: false,
        url: "https://api.github.com/repos/facebook/react",
        forks_url: "https://api.github.com/repos/facebook/react/forks",
        keys_url: "https://api.github.com/repos/facebook/react/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/facebook/react/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/facebook/react/teams",
        hooks_url: "https://api.github.com/repos/facebook/react/hooks",
        issue_events_url:
          "https://api.github.com/repos/facebook/react/issues/events{/number}",
        events_url: "https://api.github.com/repos/facebook/react/events",
        assignees_url:
          "https://api.github.com/repos/facebook/react/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/facebook/react/branches{/branch}",
        tags_url: "https://api.github.com/repos/facebook/react/tags",
        blobs_url:
          "https://api.github.com/repos/facebook/react/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/facebook/react/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/facebook/react/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/facebook/react/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/facebook/react/statuses/{sha}",
        languages_url: "https://api.github.com/repos/facebook/react/languages",
        stargazers_url:
          "https://api.github.com/repos/facebook/react/stargazers",
        contributors_url:
          "https://api.github.com/repos/facebook/react/contributors",
        subscribers_url:
          "https://api.github.com/repos/facebook/react/subscribers",
        subscription_url:
          "https://api.github.com/repos/facebook/react/subscription",
        commits_url:
          "https://api.github.com/repos/facebook/react/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/facebook/react/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/facebook/react/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/facebook/react/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/facebook/react/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/facebook/react/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/facebook/react/merges",
        archive_url:
          "https://api.github.com/repos/facebook/react/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/facebook/react/downloads",
        issues_url:
          "https://api.github.com/repos/facebook/react/issues{/number}",
        pulls_url: "https://api.github.com/repos/facebook/react/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/facebook/react/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/facebook/react/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/facebook/react/labels{/name}",
        releases_url:
          "https://api.github.com/repos/facebook/react/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/facebook/react/deployments",
        created_at: "2013-05-24T16:15:54Z",
        updated_at: "2023-03-03T10:33:02Z",
        pushed_at: "2023-03-03T09:43:05Z",
        git_url: "git://github.com/facebook/react.git",
        ssh_url: "git@github.com:facebook/react.git",
        clone_url: "https://github.com/facebook/react.git",
        svn_url: "https://github.com/facebook/react",
        homepage: "https://reactjs.org",
        size: 276472,
        stargazers_count: 203166,
        watchers_count: 203166,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: true,
        has_discussions: false,
        forks_count: 42233,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 1187,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
          "declarative",
          "frontend",
          "javascript",
          "library",
          "react",
          "ui",
        ],
        visibility: "public",
        forks: 42233,
        open_issues: 1187,
        watchers: 203166,
        default_branch: "main",
      },
    },
    _links: {
      self: {
        href: "https://api.github.com/repos/facebook/react/pulls/26285",
      },
      html: {
        href: "https://github.com/facebook/react/pull/26285",
      },
      issue: {
        href: "https://api.github.com/repos/facebook/react/issues/26285",
      },
      comments: {
        href: "https://api.github.com/repos/facebook/react/issues/26285/comments",
      },
      review_comments: {
        href: "https://api.github.com/repos/facebook/react/pulls/26285/comments",
      },
      review_comment: {
        href: "https://api.github.com/repos/facebook/react/pulls/comments{/number}",
      },
      commits: {
        href: "https://api.github.com/repos/facebook/react/pulls/26285/commits",
      },
      statuses: {
        href: "https://api.github.com/repos/facebook/react/statuses/8aadd4fce92ceb42b2596f32363dc6b3e0c9cb9e",
      },
    },
    author_association: "COLLABORATOR",
    auto_merge: null,
    active_lock_reason: null,
  },
  {
    url: "https://api.github.com/repos/facebook/react/pulls/26283",
    id: 1260740677,
    node_id: "PR_kwDOAJy2Ks5LJWBF",
    html_url: "https://github.com/facebook/react/pull/26283",
    diff_url: "https://github.com/facebook/react/pull/26283.diff",
    patch_url: "https://github.com/facebook/react/pull/26283.patch",
    issue_url: "https://api.github.com/repos/facebook/react/issues/26283",
    number: 26283,
    state: "closed",
    locked: false,
    title: "Fixed incorrect value returned as public instance from reconciler",
    user: {
      login: "rubennorte",
      id: 117921,
      node_id: "MDQ6VXNlcjExNzkyMQ==",
      avatar_url: "https://avatars.githubusercontent.com/u/117921?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/rubennorte",
      html_url: "https://github.com/rubennorte",
      followers_url: "https://api.github.com/users/rubennorte/followers",
      following_url:
        "https://api.github.com/users/rubennorte/following{/other_user}",
      gists_url: "https://api.github.com/users/rubennorte/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/rubennorte/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/rubennorte/subscriptions",
      organizations_url: "https://api.github.com/users/rubennorte/orgs",
      repos_url: "https://api.github.com/users/rubennorte/repos",
      events_url: "https://api.github.com/users/rubennorte/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/rubennorte/received_events",
      type: "User",
      site_admin: false,
    },
    body: "## Summary\r\n\r\nA few methods in `ReactFiberReconciler` are supposed to return `PublicInstance` values, but they return the `stateNode` from the fiber directly. This assumes that the `stateNode` always matches the public instance (which it does on Web) but that's not the case in React Native, where the public instance is a field in that object.\r\n\r\nThis hasn't caused issues because everywhere where we use that method in React Native we actually extract the real public instance from this \"fake\" public instance.\r\n\r\nThis PR fixes the inconsistency and cleans up some code.\r\n\r\n## How did you test this change?\r\n\r\nExisting tests.",
    created_at: "2023-03-02T16:32:29Z",
    updated_at: "2023-03-03T09:38:15Z",
    closed_at: "2023-03-03T09:38:09Z",
    merged_at: "2023-03-03T09:38:09Z",
    merge_commit_sha: "b72ed698fb5f15e0c33c5017422b8428b01ff12a",
    assignee: null,
    assignees: [],
    requested_reviewers: [
      {
        login: "kassens",
        id: 11849,
        node_id: "MDQ6VXNlcjExODQ5",
        avatar_url: "https://avatars.githubusercontent.com/u/11849?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/kassens",
        html_url: "https://github.com/kassens",
        followers_url: "https://api.github.com/users/kassens/followers",
        following_url:
          "https://api.github.com/users/kassens/following{/other_user}",
        gists_url: "https://api.github.com/users/kassens/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/kassens/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/kassens/subscriptions",
        organizations_url: "https://api.github.com/users/kassens/orgs",
        repos_url: "https://api.github.com/users/kassens/repos",
        events_url: "https://api.github.com/users/kassens/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/kassens/received_events",
        type: "User",
        site_admin: false,
      },
      {
        login: "sammy-SC",
        id: 1733610,
        node_id: "MDQ6VXNlcjE3MzM2MTA=",
        avatar_url: "https://avatars.githubusercontent.com/u/1733610?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/sammy-SC",
        html_url: "https://github.com/sammy-SC",
        followers_url: "https://api.github.com/users/sammy-SC/followers",
        following_url:
          "https://api.github.com/users/sammy-SC/following{/other_user}",
        gists_url: "https://api.github.com/users/sammy-SC/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/sammy-SC/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/sammy-SC/subscriptions",
        organizations_url: "https://api.github.com/users/sammy-SC/orgs",
        repos_url: "https://api.github.com/users/sammy-SC/repos",
        events_url: "https://api.github.com/users/sammy-SC/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/sammy-SC/received_events",
        type: "User",
        site_admin: false,
      },
      {
        login: "acdlite",
        id: 3624098,
        node_id: "MDQ6VXNlcjM2MjQwOTg=",
        avatar_url: "https://avatars.githubusercontent.com/u/3624098?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/acdlite",
        html_url: "https://github.com/acdlite",
        followers_url: "https://api.github.com/users/acdlite/followers",
        following_url:
          "https://api.github.com/users/acdlite/following{/other_user}",
        gists_url: "https://api.github.com/users/acdlite/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/acdlite/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/acdlite/subscriptions",
        organizations_url: "https://api.github.com/users/acdlite/orgs",
        repos_url: "https://api.github.com/users/acdlite/repos",
        events_url: "https://api.github.com/users/acdlite/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/acdlite/received_events",
        type: "User",
        site_admin: false,
      },
    ],
    requested_teams: [],
    labels: [
      {
        id: 196858374,
        node_id: "MDU6TGFiZWwxOTY4NTgzNzQ=",
        url: "https://api.github.com/repos/facebook/react/labels/CLA%20Signed",
        name: "CLA Signed",
        color: "e7e7e7",
        default: false,
        description: "",
      },
    ],
    milestone: null,
    draft: false,
    commits_url:
      "https://api.github.com/repos/facebook/react/pulls/26283/commits",
    review_comments_url:
      "https://api.github.com/repos/facebook/react/pulls/26283/comments",
    review_comment_url:
      "https://api.github.com/repos/facebook/react/pulls/comments{/number}",
    comments_url:
      "https://api.github.com/repos/facebook/react/issues/26283/comments",
    statuses_url:
      "https://api.github.com/repos/facebook/react/statuses/90fff0651139c055696b5770b7bbc42ce633117b",
    head: {
      label: "rubennorte:fix-incorrect-use-of-public-instance-in-reconciler",
      ref: "fix-incorrect-use-of-public-instance-in-reconciler",
      sha: "90fff0651139c055696b5770b7bbc42ce633117b",
      user: {
        login: "rubennorte",
        id: 117921,
        node_id: "MDQ6VXNlcjExNzkyMQ==",
        avatar_url: "https://avatars.githubusercontent.com/u/117921?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/rubennorte",
        html_url: "https://github.com/rubennorte",
        followers_url: "https://api.github.com/users/rubennorte/followers",
        following_url:
          "https://api.github.com/users/rubennorte/following{/other_user}",
        gists_url: "https://api.github.com/users/rubennorte/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/rubennorte/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/rubennorte/subscriptions",
        organizations_url: "https://api.github.com/users/rubennorte/orgs",
        repos_url: "https://api.github.com/users/rubennorte/repos",
        events_url: "https://api.github.com/users/rubennorte/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/rubennorte/received_events",
        type: "User",
        site_admin: false,
      },
      repo: {
        id: 326428927,
        node_id: "MDEwOlJlcG9zaXRvcnkzMjY0Mjg5Mjc=",
        name: "react",
        full_name: "rubennorte/react",
        private: false,
        owner: {
          login: "rubennorte",
          id: 117921,
          node_id: "MDQ6VXNlcjExNzkyMQ==",
          avatar_url: "https://avatars.githubusercontent.com/u/117921?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/rubennorte",
          html_url: "https://github.com/rubennorte",
          followers_url: "https://api.github.com/users/rubennorte/followers",
          following_url:
            "https://api.github.com/users/rubennorte/following{/other_user}",
          gists_url: "https://api.github.com/users/rubennorte/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/rubennorte/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/rubennorte/subscriptions",
          organizations_url: "https://api.github.com/users/rubennorte/orgs",
          repos_url: "https://api.github.com/users/rubennorte/repos",
          events_url:
            "https://api.github.com/users/rubennorte/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/rubennorte/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/rubennorte/react",
        description:
          "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
        fork: true,
        url: "https://api.github.com/repos/rubennorte/react",
        forks_url: "https://api.github.com/repos/rubennorte/react/forks",
        keys_url: "https://api.github.com/repos/rubennorte/react/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/rubennorte/react/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/rubennorte/react/teams",
        hooks_url: "https://api.github.com/repos/rubennorte/react/hooks",
        issue_events_url:
          "https://api.github.com/repos/rubennorte/react/issues/events{/number}",
        events_url: "https://api.github.com/repos/rubennorte/react/events",
        assignees_url:
          "https://api.github.com/repos/rubennorte/react/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/rubennorte/react/branches{/branch}",
        tags_url: "https://api.github.com/repos/rubennorte/react/tags",
        blobs_url:
          "https://api.github.com/repos/rubennorte/react/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/rubennorte/react/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/rubennorte/react/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/rubennorte/react/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/rubennorte/react/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/rubennorte/react/languages",
        stargazers_url:
          "https://api.github.com/repos/rubennorte/react/stargazers",
        contributors_url:
          "https://api.github.com/repos/rubennorte/react/contributors",
        subscribers_url:
          "https://api.github.com/repos/rubennorte/react/subscribers",
        subscription_url:
          "https://api.github.com/repos/rubennorte/react/subscription",
        commits_url:
          "https://api.github.com/repos/rubennorte/react/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/rubennorte/react/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/rubennorte/react/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/rubennorte/react/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/rubennorte/react/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/rubennorte/react/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/rubennorte/react/merges",
        archive_url:
          "https://api.github.com/repos/rubennorte/react/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/rubennorte/react/downloads",
        issues_url:
          "https://api.github.com/repos/rubennorte/react/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/rubennorte/react/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/rubennorte/react/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/rubennorte/react/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/rubennorte/react/labels{/name}",
        releases_url:
          "https://api.github.com/repos/rubennorte/react/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/rubennorte/react/deployments",
        created_at: "2021-01-03T14:42:23Z",
        updated_at: "2022-12-02T16:26:52Z",
        pushed_at: "2023-03-03T09:38:15Z",
        git_url: "git://github.com/rubennorte/react.git",
        ssh_url: "git@github.com:rubennorte/react.git",
        clone_url: "https://github.com/rubennorte/react.git",
        svn_url: "https://github.com/rubennorte/react",
        homepage: "https://reactjs.org",
        size: 194541,
        stargazers_count: 0,
        watchers_count: 0,
        language: "JavaScript",
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: "main",
      },
    },
    base: {
      label: "facebook:main",
      ref: "main",
      sha: "25a8b9735ce7c84210707d5eced7fe2c9abbd0e1",
      user: {
        login: "facebook",
        id: 69631,
        node_id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
        avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/facebook",
        html_url: "https://github.com/facebook",
        followers_url: "https://api.github.com/users/facebook/followers",
        following_url:
          "https://api.github.com/users/facebook/following{/other_user}",
        gists_url: "https://api.github.com/users/facebook/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/facebook/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/facebook/subscriptions",
        organizations_url: "https://api.github.com/users/facebook/orgs",
        repos_url: "https://api.github.com/users/facebook/repos",
        events_url: "https://api.github.com/users/facebook/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/facebook/received_events",
        type: "Organization",
        site_admin: false,
      },
      repo: {
        id: 10270250,
        node_id: "MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==",
        name: "react",
        full_name: "facebook/react",
        private: false,
        owner: {
          login: "facebook",
          id: 69631,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
          avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/facebook",
          html_url: "https://github.com/facebook",
          followers_url: "https://api.github.com/users/facebook/followers",
          following_url:
            "https://api.github.com/users/facebook/following{/other_user}",
          gists_url: "https://api.github.com/users/facebook/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/facebook/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/facebook/subscriptions",
          organizations_url: "https://api.github.com/users/facebook/orgs",
          repos_url: "https://api.github.com/users/facebook/repos",
          events_url: "https://api.github.com/users/facebook/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/facebook/received_events",
          type: "Organization",
          site_admin: false,
        },
        html_url: "https://github.com/facebook/react",
        description:
          "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
        fork: false,
        url: "https://api.github.com/repos/facebook/react",
        forks_url: "https://api.github.com/repos/facebook/react/forks",
        keys_url: "https://api.github.com/repos/facebook/react/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/facebook/react/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/facebook/react/teams",
        hooks_url: "https://api.github.com/repos/facebook/react/hooks",
        issue_events_url:
          "https://api.github.com/repos/facebook/react/issues/events{/number}",
        events_url: "https://api.github.com/repos/facebook/react/events",
        assignees_url:
          "https://api.github.com/repos/facebook/react/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/facebook/react/branches{/branch}",
        tags_url: "https://api.github.com/repos/facebook/react/tags",
        blobs_url:
          "https://api.github.com/repos/facebook/react/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/facebook/react/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/facebook/react/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/facebook/react/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/facebook/react/statuses/{sha}",
        languages_url: "https://api.github.com/repos/facebook/react/languages",
        stargazers_url:
          "https://api.github.com/repos/facebook/react/stargazers",
        contributors_url:
          "https://api.github.com/repos/facebook/react/contributors",
        subscribers_url:
          "https://api.github.com/repos/facebook/react/subscribers",
        subscription_url:
          "https://api.github.com/repos/facebook/react/subscription",
        commits_url:
          "https://api.github.com/repos/facebook/react/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/facebook/react/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/facebook/react/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/facebook/react/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/facebook/react/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/facebook/react/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/facebook/react/merges",
        archive_url:
          "https://api.github.com/repos/facebook/react/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/facebook/react/downloads",
        issues_url:
          "https://api.github.com/repos/facebook/react/issues{/number}",
        pulls_url: "https://api.github.com/repos/facebook/react/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/facebook/react/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/facebook/react/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/facebook/react/labels{/name}",
        releases_url:
          "https://api.github.com/repos/facebook/react/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/facebook/react/deployments",
        created_at: "2013-05-24T16:15:54Z",
        updated_at: "2023-03-03T10:33:02Z",
        pushed_at: "2023-03-03T09:43:05Z",
        git_url: "git://github.com/facebook/react.git",
        ssh_url: "git@github.com:facebook/react.git",
        clone_url: "https://github.com/facebook/react.git",
        svn_url: "https://github.com/facebook/react",
        homepage: "https://reactjs.org",
        size: 276472,
        stargazers_count: 203166,
        watchers_count: 203166,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: true,
        has_discussions: false,
        forks_count: 42233,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 1187,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
          "declarative",
          "frontend",
          "javascript",
          "library",
          "react",
          "ui",
        ],
        visibility: "public",
        forks: 42233,
        open_issues: 1187,
        watchers: 203166,
        default_branch: "main",
      },
    },
    _links: {
      self: {
        href: "https://api.github.com/repos/facebook/react/pulls/26283",
      },
      html: {
        href: "https://github.com/facebook/react/pull/26283",
      },
      issue: {
        href: "https://api.github.com/repos/facebook/react/issues/26283",
      },
      comments: {
        href: "https://api.github.com/repos/facebook/react/issues/26283/comments",
      },
      review_comments: {
        href: "https://api.github.com/repos/facebook/react/pulls/26283/comments",
      },
      review_comment: {
        href: "https://api.github.com/repos/facebook/react/pulls/comments{/number}",
      },
      commits: {
        href: "https://api.github.com/repos/facebook/react/pulls/26283/commits",
      },
      statuses: {
        href: "https://api.github.com/repos/facebook/react/statuses/90fff0651139c055696b5770b7bbc42ce633117b",
      },
    },
    author_association: "CONTRIBUTOR",
    auto_merge: null,
    active_lock_reason: null,
  },
  {
    url: "https://api.github.com/repos/facebook/react/pulls/26282",
    id: 1260590517,
    node_id: "PR_kwDOAJy2Ks5LIxW1",
    html_url: "https://github.com/facebook/react/pull/26282",
    diff_url: "https://github.com/facebook/react/pull/26282.diff",
    patch_url: "https://github.com/facebook/react/pull/26282.patch",
    issue_url: "https://api.github.com/repos/facebook/react/issues/26282",
    number: 26282,
    state: "closed",
    locked: false,
    title:
      "Removed unused imperative events implementation from React Native renderer",
    user: {
      login: "rubennorte",
      id: 117921,
      node_id: "MDQ6VXNlcjExNzkyMQ==",
      avatar_url: "https://avatars.githubusercontent.com/u/117921?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/rubennorte",
      html_url: "https://github.com/rubennorte",
      followers_url: "https://api.github.com/users/rubennorte/followers",
      following_url:
        "https://api.github.com/users/rubennorte/following{/other_user}",
      gists_url: "https://api.github.com/users/rubennorte/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/rubennorte/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/rubennorte/subscriptions",
      organizations_url: "https://api.github.com/users/rubennorte/orgs",
      repos_url: "https://api.github.com/users/rubennorte/repos",
      events_url: "https://api.github.com/users/rubennorte/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/rubennorte/received_events",
      type: "User",
      site_admin: false,
    },
    body: "## Summary\r\n\r\nI'm going to start implementing parts of this proposal https://github.com/react-native-community/discussions-and-proposals/pull/607\r\n\r\nAs part of that implementation I'm going to refactor a few parts of the interface between React and React Native. One of the main problems we have right now is that we have private parts used by React and React Native in the public instance exported by refs. I want to properly separate that.\r\n\r\nI saw that a few methods to attach event handlers imperatively on refs were also exposing some things in the public instance (the `_eventListeners`). I checked and these methods are unused, so we can just clean them up instead of having to refactor them too. Adding support for imperative event listeners is in the roadmap after this proposal, and its implementation might differ after this refactor.\r\n\r\nThis is essentially a manual revert of #23386.\r\n\r\nI'll submit more PRs after this for the rest of the refactor.\r\n\r\n## How did you test this change?\r\n\r\nExisting jest tests. Will test a React sync internally at Meta.\r\n",
    created_at: "2023-03-02T14:54:28Z",
    updated_at: "2023-03-02T15:54:52Z",
    closed_at: "2023-03-02T15:54:52Z",
    merged_at: "2023-03-02T15:54:52Z",
    merge_commit_sha: "d49e0e0be0941490fe709f80de137516ba4c0ee3",
    assignee: null,
    assignees: [],
    requested_reviewers: [],
    requested_teams: [],
    labels: [
      {
        id: 196858374,
        node_id: "MDU6TGFiZWwxOTY4NTgzNzQ=",
        url: "https://api.github.com/repos/facebook/react/labels/CLA%20Signed",
        name: "CLA Signed",
        color: "e7e7e7",
        default: false,
        description: "",
      },
    ],
    milestone: null,
    draft: false,
    commits_url:
      "https://api.github.com/repos/facebook/react/pulls/26282/commits",
    review_comments_url:
      "https://api.github.com/repos/facebook/react/pulls/26282/comments",
    review_comment_url:
      "https://api.github.com/repos/facebook/react/pulls/comments{/number}",
    comments_url:
      "https://api.github.com/repos/facebook/react/issues/26282/comments",
    statuses_url:
      "https://api.github.com/repos/facebook/react/statuses/abab75d3e01482843b527a11a0cdfdddb12ad791",
    head: {
      label: "rubennorte:remove-unused-imperative-events",
      ref: "remove-unused-imperative-events",
      sha: "abab75d3e01482843b527a11a0cdfdddb12ad791",
      user: {
        login: "rubennorte",
        id: 117921,
        node_id: "MDQ6VXNlcjExNzkyMQ==",
        avatar_url: "https://avatars.githubusercontent.com/u/117921?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/rubennorte",
        html_url: "https://github.com/rubennorte",
        followers_url: "https://api.github.com/users/rubennorte/followers",
        following_url:
          "https://api.github.com/users/rubennorte/following{/other_user}",
        gists_url: "https://api.github.com/users/rubennorte/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/rubennorte/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/rubennorte/subscriptions",
        organizations_url: "https://api.github.com/users/rubennorte/orgs",
        repos_url: "https://api.github.com/users/rubennorte/repos",
        events_url: "https://api.github.com/users/rubennorte/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/rubennorte/received_events",
        type: "User",
        site_admin: false,
      },
      repo: {
        id: 326428927,
        node_id: "MDEwOlJlcG9zaXRvcnkzMjY0Mjg5Mjc=",
        name: "react",
        full_name: "rubennorte/react",
        private: false,
        owner: {
          login: "rubennorte",
          id: 117921,
          node_id: "MDQ6VXNlcjExNzkyMQ==",
          avatar_url: "https://avatars.githubusercontent.com/u/117921?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/rubennorte",
          html_url: "https://github.com/rubennorte",
          followers_url: "https://api.github.com/users/rubennorte/followers",
          following_url:
            "https://api.github.com/users/rubennorte/following{/other_user}",
          gists_url: "https://api.github.com/users/rubennorte/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/rubennorte/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/rubennorte/subscriptions",
          organizations_url: "https://api.github.com/users/rubennorte/orgs",
          repos_url: "https://api.github.com/users/rubennorte/repos",
          events_url:
            "https://api.github.com/users/rubennorte/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/rubennorte/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/rubennorte/react",
        description:
          "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
        fork: true,
        url: "https://api.github.com/repos/rubennorte/react",
        forks_url: "https://api.github.com/repos/rubennorte/react/forks",
        keys_url: "https://api.github.com/repos/rubennorte/react/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/rubennorte/react/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/rubennorte/react/teams",
        hooks_url: "https://api.github.com/repos/rubennorte/react/hooks",
        issue_events_url:
          "https://api.github.com/repos/rubennorte/react/issues/events{/number}",
        events_url: "https://api.github.com/repos/rubennorte/react/events",
        assignees_url:
          "https://api.github.com/repos/rubennorte/react/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/rubennorte/react/branches{/branch}",
        tags_url: "https://api.github.com/repos/rubennorte/react/tags",
        blobs_url:
          "https://api.github.com/repos/rubennorte/react/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/rubennorte/react/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/rubennorte/react/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/rubennorte/react/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/rubennorte/react/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/rubennorte/react/languages",
        stargazers_url:
          "https://api.github.com/repos/rubennorte/react/stargazers",
        contributors_url:
          "https://api.github.com/repos/rubennorte/react/contributors",
        subscribers_url:
          "https://api.github.com/repos/rubennorte/react/subscribers",
        subscription_url:
          "https://api.github.com/repos/rubennorte/react/subscription",
        commits_url:
          "https://api.github.com/repos/rubennorte/react/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/rubennorte/react/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/rubennorte/react/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/rubennorte/react/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/rubennorte/react/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/rubennorte/react/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/rubennorte/react/merges",
        archive_url:
          "https://api.github.com/repos/rubennorte/react/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/rubennorte/react/downloads",
        issues_url:
          "https://api.github.com/repos/rubennorte/react/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/rubennorte/react/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/rubennorte/react/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/rubennorte/react/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/rubennorte/react/labels{/name}",
        releases_url:
          "https://api.github.com/repos/rubennorte/react/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/rubennorte/react/deployments",
        created_at: "2021-01-03T14:42:23Z",
        updated_at: "2022-12-02T16:26:52Z",
        pushed_at: "2023-03-03T09:38:15Z",
        git_url: "git://github.com/rubennorte/react.git",
        ssh_url: "git@github.com:rubennorte/react.git",
        clone_url: "https://github.com/rubennorte/react.git",
        svn_url: "https://github.com/rubennorte/react",
        homepage: "https://reactjs.org",
        size: 194541,
        stargazers_count: 0,
        watchers_count: 0,
        language: "JavaScript",
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: "main",
      },
    },
    base: {
      label: "facebook:main",
      ref: "main",
      sha: "41110021f28100b16c11d6d9a248582c5bb6bc3c",
      user: {
        login: "facebook",
        id: 69631,
        node_id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
        avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/facebook",
        html_url: "https://github.com/facebook",
        followers_url: "https://api.github.com/users/facebook/followers",
        following_url:
          "https://api.github.com/users/facebook/following{/other_user}",
        gists_url: "https://api.github.com/users/facebook/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/facebook/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/facebook/subscriptions",
        organizations_url: "https://api.github.com/users/facebook/orgs",
        repos_url: "https://api.github.com/users/facebook/repos",
        events_url: "https://api.github.com/users/facebook/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/facebook/received_events",
        type: "Organization",
        site_admin: false,
      },
      repo: {
        id: 10270250,
        node_id: "MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==",
        name: "react",
        full_name: "facebook/react",
        private: false,
        owner: {
          login: "facebook",
          id: 69631,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
          avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/facebook",
          html_url: "https://github.com/facebook",
          followers_url: "https://api.github.com/users/facebook/followers",
          following_url:
            "https://api.github.com/users/facebook/following{/other_user}",
          gists_url: "https://api.github.com/users/facebook/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/facebook/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/facebook/subscriptions",
          organizations_url: "https://api.github.com/users/facebook/orgs",
          repos_url: "https://api.github.com/users/facebook/repos",
          events_url: "https://api.github.com/users/facebook/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/facebook/received_events",
          type: "Organization",
          site_admin: false,
        },
        html_url: "https://github.com/facebook/react",
        description:
          "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
        fork: false,
        url: "https://api.github.com/repos/facebook/react",
        forks_url: "https://api.github.com/repos/facebook/react/forks",
        keys_url: "https://api.github.com/repos/facebook/react/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/facebook/react/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/facebook/react/teams",
        hooks_url: "https://api.github.com/repos/facebook/react/hooks",
        issue_events_url:
          "https://api.github.com/repos/facebook/react/issues/events{/number}",
        events_url: "https://api.github.com/repos/facebook/react/events",
        assignees_url:
          "https://api.github.com/repos/facebook/react/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/facebook/react/branches{/branch}",
        tags_url: "https://api.github.com/repos/facebook/react/tags",
        blobs_url:
          "https://api.github.com/repos/facebook/react/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/facebook/react/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/facebook/react/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/facebook/react/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/facebook/react/statuses/{sha}",
        languages_url: "https://api.github.com/repos/facebook/react/languages",
        stargazers_url:
          "https://api.github.com/repos/facebook/react/stargazers",
        contributors_url:
          "https://api.github.com/repos/facebook/react/contributors",
        subscribers_url:
          "https://api.github.com/repos/facebook/react/subscribers",
        subscription_url:
          "https://api.github.com/repos/facebook/react/subscription",
        commits_url:
          "https://api.github.com/repos/facebook/react/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/facebook/react/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/facebook/react/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/facebook/react/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/facebook/react/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/facebook/react/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/facebook/react/merges",
        archive_url:
          "https://api.github.com/repos/facebook/react/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/facebook/react/downloads",
        issues_url:
          "https://api.github.com/repos/facebook/react/issues{/number}",
        pulls_url: "https://api.github.com/repos/facebook/react/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/facebook/react/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/facebook/react/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/facebook/react/labels{/name}",
        releases_url:
          "https://api.github.com/repos/facebook/react/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/facebook/react/deployments",
        created_at: "2013-05-24T16:15:54Z",
        updated_at: "2023-03-03T10:33:02Z",
        pushed_at: "2023-03-03T09:43:05Z",
        git_url: "git://github.com/facebook/react.git",
        ssh_url: "git@github.com:facebook/react.git",
        clone_url: "https://github.com/facebook/react.git",
        svn_url: "https://github.com/facebook/react",
        homepage: "https://reactjs.org",
        size: 276472,
        stargazers_count: 203166,
        watchers_count: 203166,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: true,
        has_discussions: false,
        forks_count: 42233,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 1187,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
          "declarative",
          "frontend",
          "javascript",
          "library",
          "react",
          "ui",
        ],
        visibility: "public",
        forks: 42233,
        open_issues: 1187,
        watchers: 203166,
        default_branch: "main",
      },
    },
    _links: {
      self: {
        href: "https://api.github.com/repos/facebook/react/pulls/26282",
      },
      html: {
        href: "https://github.com/facebook/react/pull/26282",
      },
      issue: {
        href: "https://api.github.com/repos/facebook/react/issues/26282",
      },
      comments: {
        href: "https://api.github.com/repos/facebook/react/issues/26282/comments",
      },
      review_comments: {
        href: "https://api.github.com/repos/facebook/react/pulls/26282/comments",
      },
      review_comment: {
        href: "https://api.github.com/repos/facebook/react/pulls/comments{/number}",
      },
      commits: {
        href: "https://api.github.com/repos/facebook/react/pulls/26282/commits",
      },
      statuses: {
        href: "https://api.github.com/repos/facebook/react/statuses/abab75d3e01482843b527a11a0cdfdddb12ad791",
      },
    },
    author_association: "CONTRIBUTOR",
    auto_merge: null,
    active_lock_reason: null,
  },
  {
    url: "https://api.github.com/repos/facebook/react/pulls/26278",
    id: 1259743538,
    node_id: "PR_kwDOAJy2Ks5LFiky",
    html_url: "https://github.com/facebook/react/pull/26278",
    diff_url: "https://github.com/facebook/react/pull/26278.diff",
    patch_url: "https://github.com/facebook/react/pull/26278.patch",
    issue_url: "https://api.github.com/repos/facebook/react/issues/26278",
    number: 26278,
    state: "closed",
    locked: false,
    title:
      "Add an option to 'react-hooks/exhaustive-deps' effect that configures disallowed dependencies",
    user: {
      login: "gaspar09",
      id: 5875536,
      node_id: "MDQ6VXNlcjU4NzU1MzY=",
      avatar_url: "https://avatars.githubusercontent.com/u/5875536?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/gaspar09",
      html_url: "https://github.com/gaspar09",
      followers_url: "https://api.github.com/users/gaspar09/followers",
      following_url:
        "https://api.github.com/users/gaspar09/following{/other_user}",
      gists_url: "https://api.github.com/users/gaspar09/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/gaspar09/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/gaspar09/subscriptions",
      organizations_url: "https://api.github.com/users/gaspar09/orgs",
      repos_url: "https://api.github.com/users/gaspar09/repos",
      events_url: "https://api.github.com/users/gaspar09/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/gaspar09/received_events",
      type: "User",
      site_admin: false,
    },
    body: "<!--\r\n  Thanks for submitting a pull request!\r\n  We appreciate you spending the time to work on these changes. Please provide enough information so that others can review your pull request. The three fields below are mandatory.\r\n\r\n  Before submitting a pull request, please make sure the following is done:\r\n\r\n  1. Fork [the repository](https://github.com/facebook/react) and create your branch from `main`.\r\n  2. Run `yarn` in the repository root.\r\n  3. If you've fixed a bug or added code that should be tested, add tests!\r\n  4. Ensure the test suite passes (`yarn test`). Tip: `yarn test --watch TestName` is helpful in development.\r\n  5. Run `yarn test --prod` to test in the production environment. It supports the same options as `yarn test`.\r\n  6. If you need a debugger, run `yarn test --debug --watch TestName`, open `chrome://inspect`, and press \"Inspect\".\r\n  7. Format your code with [prettier](https://github.com/prettier/prettier) (`yarn prettier`).\r\n  8. Make sure your code lints (`yarn lint`). Tip: `yarn linc` to only check changed files.\r\n  9. Run the [Flow](https://flowtype.org/) type checks (`yarn flow`).\r\n  10. If you haven't already, complete the CLA.\r\n\r\n  Learn more about contributing: https://reactjs.org/docs/how-to-contribute.html\r\n-->\r\n\r\n## Summary\r\n\r\nThis PR adds option `effectDisallowedDependencies` to the `react-hooks/exhaustive-deps` eslint rule.\r\n\r\nThe `effectDisallowedDependencies` specifies an array of imports that should not be added to the effect dependencies array. Each item in the array contains a `module` and `imports` field.\r\n\r\n- `module`: The source identifier of the module for example: `'some/module'` in the import declaration `import { someImport } from 'some/module'`. `someImport` can not be included in the dependencies array.\r\n\r\n- `imports`:  Is an array of items that include `name` and `fields` properties.\r\n\r\nMore on `imports`:\r\n\r\n- `name`: the imported property. For example `someImport` in the import declaration `import { someImport } from 'some/module'`.\r\n\r\n- `fields`: the list of fields of imported `name` property that should not be included in the dependencies array. For example, if `fields` includes `fieldOne` and `name` is `someImport`, then `someImport.fieldOne` cannot be included in the dependencies array. \r\n\r\n<!--\r\n Explain the **motivation** for making this change. What existing problem does the pull request solve?\r\n-->\r\n\r\n## How did you test this change?\r\n\r\nI added tests cases to the existing test suite in  https://github.com/facebook/react/blob/47b6a05a146a92033d41f5dc3c20bd2987519193/packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js\r\n\r\nThe added tests are on this PR.\r\n\r\n<!--\r\n  Demonstrate the code is solid. Example: The exact commands you ran and their output, screenshots / videos if the pull request changes the user interface.\r\n  How exactly did you verify that your PR solves the issue you wanted to solve?\r\n  If you leave this empty, your PR will very likely be closed.\r\n-->\r\n",
    created_at: "2023-03-02T02:34:13Z",
    updated_at: "2023-03-02T03:04:02Z",
    closed_at: "2023-03-02T03:04:02Z",
    merged_at: null,
    merge_commit_sha: "b912fc95b9ca5f26c2574c7c77fd42bb6fc99e8f",
    assignee: null,
    assignees: [],
    requested_reviewers: [],
    requested_teams: [],
    labels: [
      {
        id: 196858374,
        node_id: "MDU6TGFiZWwxOTY4NTgzNzQ=",
        url: "https://api.github.com/repos/facebook/react/labels/CLA%20Signed",
        name: "CLA Signed",
        color: "e7e7e7",
        default: false,
        description: "",
      },
    ],
    milestone: null,
    draft: false,
    commits_url:
      "https://api.github.com/repos/facebook/react/pulls/26278/commits",
    review_comments_url:
      "https://api.github.com/repos/facebook/react/pulls/26278/comments",
    review_comment_url:
      "https://api.github.com/repos/facebook/react/pulls/comments{/number}",
    comments_url:
      "https://api.github.com/repos/facebook/react/issues/26278/comments",
    statuses_url:
      "https://api.github.com/repos/facebook/react/statuses/47b6a05a146a92033d41f5dc3c20bd2987519193",
    head: {
      label:
        "gaspar09:add-effectDisallowedDependencies-to-exhaustive-deps-eslint-rule",
      ref: "add-effectDisallowedDependencies-to-exhaustive-deps-eslint-rule",
      sha: "47b6a05a146a92033d41f5dc3c20bd2987519193",
      user: {
        login: "gaspar09",
        id: 5875536,
        node_id: "MDQ6VXNlcjU4NzU1MzY=",
        avatar_url: "https://avatars.githubusercontent.com/u/5875536?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/gaspar09",
        html_url: "https://github.com/gaspar09",
        followers_url: "https://api.github.com/users/gaspar09/followers",
        following_url:
          "https://api.github.com/users/gaspar09/following{/other_user}",
        gists_url: "https://api.github.com/users/gaspar09/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/gaspar09/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/gaspar09/subscriptions",
        organizations_url: "https://api.github.com/users/gaspar09/orgs",
        repos_url: "https://api.github.com/users/gaspar09/repos",
        events_url: "https://api.github.com/users/gaspar09/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/gaspar09/received_events",
        type: "User",
        site_admin: false,
      },
      repo: {
        id: 607926337,
        node_id: "R_kgDOJDw4QQ",
        name: "react",
        full_name: "gaspar09/react",
        private: false,
        owner: {
          login: "gaspar09",
          id: 5875536,
          node_id: "MDQ6VXNlcjU4NzU1MzY=",
          avatar_url: "https://avatars.githubusercontent.com/u/5875536?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/gaspar09",
          html_url: "https://github.com/gaspar09",
          followers_url: "https://api.github.com/users/gaspar09/followers",
          following_url:
            "https://api.github.com/users/gaspar09/following{/other_user}",
          gists_url: "https://api.github.com/users/gaspar09/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/gaspar09/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/gaspar09/subscriptions",
          organizations_url: "https://api.github.com/users/gaspar09/orgs",
          repos_url: "https://api.github.com/users/gaspar09/repos",
          events_url: "https://api.github.com/users/gaspar09/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/gaspar09/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/gaspar09/react",
        description:
          "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
        fork: true,
        url: "https://api.github.com/repos/gaspar09/react",
        forks_url: "https://api.github.com/repos/gaspar09/react/forks",
        keys_url: "https://api.github.com/repos/gaspar09/react/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/gaspar09/react/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/gaspar09/react/teams",
        hooks_url: "https://api.github.com/repos/gaspar09/react/hooks",
        issue_events_url:
          "https://api.github.com/repos/gaspar09/react/issues/events{/number}",
        events_url: "https://api.github.com/repos/gaspar09/react/events",
        assignees_url:
          "https://api.github.com/repos/gaspar09/react/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/gaspar09/react/branches{/branch}",
        tags_url: "https://api.github.com/repos/gaspar09/react/tags",
        blobs_url:
          "https://api.github.com/repos/gaspar09/react/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/gaspar09/react/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/gaspar09/react/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/gaspar09/react/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/gaspar09/react/statuses/{sha}",
        languages_url: "https://api.github.com/repos/gaspar09/react/languages",
        stargazers_url:
          "https://api.github.com/repos/gaspar09/react/stargazers",
        contributors_url:
          "https://api.github.com/repos/gaspar09/react/contributors",
        subscribers_url:
          "https://api.github.com/repos/gaspar09/react/subscribers",
        subscription_url:
          "https://api.github.com/repos/gaspar09/react/subscription",
        commits_url:
          "https://api.github.com/repos/gaspar09/react/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/gaspar09/react/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/gaspar09/react/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/gaspar09/react/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/gaspar09/react/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/gaspar09/react/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/gaspar09/react/merges",
        archive_url:
          "https://api.github.com/repos/gaspar09/react/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/gaspar09/react/downloads",
        issues_url:
          "https://api.github.com/repos/gaspar09/react/issues{/number}",
        pulls_url: "https://api.github.com/repos/gaspar09/react/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/gaspar09/react/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/gaspar09/react/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/gaspar09/react/labels{/name}",
        releases_url:
          "https://api.github.com/repos/gaspar09/react/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/gaspar09/react/deployments",
        created_at: "2023-03-01T00:29:53Z",
        updated_at: "2023-03-01T00:38:44Z",
        pushed_at: "2023-03-02T03:23:01Z",
        git_url: "git://github.com/gaspar09/react.git",
        ssh_url: "git@github.com:gaspar09/react.git",
        clone_url: "https://github.com/gaspar09/react.git",
        svn_url: "https://github.com/gaspar09/react",
        homepage: "https://reactjs.org",
        size: 143501,
        stargazers_count: 0,
        watchers_count: 0,
        language: "JavaScript",
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 1,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 0,
        open_issues: 1,
        watchers: 0,
        default_branch: "main",
      },
    },
    base: {
      label: "facebook:main",
      ref: "main",
      sha: "41110021f28100b16c11d6d9a248582c5bb6bc3c",
      user: {
        login: "facebook",
        id: 69631,
        node_id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
        avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/facebook",
        html_url: "https://github.com/facebook",
        followers_url: "https://api.github.com/users/facebook/followers",
        following_url:
          "https://api.github.com/users/facebook/following{/other_user}",
        gists_url: "https://api.github.com/users/facebook/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/facebook/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/facebook/subscriptions",
        organizations_url: "https://api.github.com/users/facebook/orgs",
        repos_url: "https://api.github.com/users/facebook/repos",
        events_url: "https://api.github.com/users/facebook/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/facebook/received_events",
        type: "Organization",
        site_admin: false,
      },
      repo: {
        id: 10270250,
        node_id: "MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==",
        name: "react",
        full_name: "facebook/react",
        private: false,
        owner: {
          login: "facebook",
          id: 69631,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
          avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/facebook",
          html_url: "https://github.com/facebook",
          followers_url: "https://api.github.com/users/facebook/followers",
          following_url:
            "https://api.github.com/users/facebook/following{/other_user}",
          gists_url: "https://api.github.com/users/facebook/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/facebook/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/facebook/subscriptions",
          organizations_url: "https://api.github.com/users/facebook/orgs",
          repos_url: "https://api.github.com/users/facebook/repos",
          events_url: "https://api.github.com/users/facebook/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/facebook/received_events",
          type: "Organization",
          site_admin: false,
        },
        html_url: "https://github.com/facebook/react",
        description:
          "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
        fork: false,
        url: "https://api.github.com/repos/facebook/react",
        forks_url: "https://api.github.com/repos/facebook/react/forks",
        keys_url: "https://api.github.com/repos/facebook/react/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/facebook/react/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/facebook/react/teams",
        hooks_url: "https://api.github.com/repos/facebook/react/hooks",
        issue_events_url:
          "https://api.github.com/repos/facebook/react/issues/events{/number}",
        events_url: "https://api.github.com/repos/facebook/react/events",
        assignees_url:
          "https://api.github.com/repos/facebook/react/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/facebook/react/branches{/branch}",
        tags_url: "https://api.github.com/repos/facebook/react/tags",
        blobs_url:
          "https://api.github.com/repos/facebook/react/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/facebook/react/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/facebook/react/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/facebook/react/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/facebook/react/statuses/{sha}",
        languages_url: "https://api.github.com/repos/facebook/react/languages",
        stargazers_url:
          "https://api.github.com/repos/facebook/react/stargazers",
        contributors_url:
          "https://api.github.com/repos/facebook/react/contributors",
        subscribers_url:
          "https://api.github.com/repos/facebook/react/subscribers",
        subscription_url:
          "https://api.github.com/repos/facebook/react/subscription",
        commits_url:
          "https://api.github.com/repos/facebook/react/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/facebook/react/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/facebook/react/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/facebook/react/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/facebook/react/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/facebook/react/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/facebook/react/merges",
        archive_url:
          "https://api.github.com/repos/facebook/react/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/facebook/react/downloads",
        issues_url:
          "https://api.github.com/repos/facebook/react/issues{/number}",
        pulls_url: "https://api.github.com/repos/facebook/react/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/facebook/react/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/facebook/react/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/facebook/react/labels{/name}",
        releases_url:
          "https://api.github.com/repos/facebook/react/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/facebook/react/deployments",
        created_at: "2013-05-24T16:15:54Z",
        updated_at: "2023-03-03T10:33:02Z",
        pushed_at: "2023-03-03T09:43:05Z",
        git_url: "git://github.com/facebook/react.git",
        ssh_url: "git@github.com:facebook/react.git",
        clone_url: "https://github.com/facebook/react.git",
        svn_url: "https://github.com/facebook/react",
        homepage: "https://reactjs.org",
        size: 276472,
        stargazers_count: 203166,
        watchers_count: 203166,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: true,
        has_discussions: false,
        forks_count: 42233,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 1187,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
          "declarative",
          "frontend",
          "javascript",
          "library",
          "react",
          "ui",
        ],
        visibility: "public",
        forks: 42233,
        open_issues: 1187,
        watchers: 203166,
        default_branch: "main",
      },
    },
    _links: {
      self: {
        href: "https://api.github.com/repos/facebook/react/pulls/26278",
      },
      html: {
        href: "https://github.com/facebook/react/pull/26278",
      },
      issue: {
        href: "https://api.github.com/repos/facebook/react/issues/26278",
      },
      comments: {
        href: "https://api.github.com/repos/facebook/react/issues/26278/comments",
      },
      review_comments: {
        href: "https://api.github.com/repos/facebook/react/pulls/26278/comments",
      },
      review_comment: {
        href: "https://api.github.com/repos/facebook/react/pulls/comments{/number}",
      },
      commits: {
        href: "https://api.github.com/repos/facebook/react/pulls/26278/commits",
      },
      statuses: {
        href: "https://api.github.com/repos/facebook/react/statuses/47b6a05a146a92033d41f5dc3c20bd2987519193",
      },
    },
    author_association: "NONE",
    auto_merge: null,
    active_lock_reason: null,
  },
  {
    url: "https://api.github.com/repos/facebook/react/pulls/26275",
    id: 1259100301,
    node_id: "PR_kwDOAJy2Ks5LDFiN",
    html_url: "https://github.com/facebook/react/pull/26275",
    diff_url: "https://github.com/facebook/react/pull/26275.diff",
    patch_url: "https://github.com/facebook/react/pull/26275.patch",
    issue_url: "https://api.github.com/repos/facebook/react/issues/26275",
    number: 26275,
    state: "closed",
    locked: false,
    title:
      "Fix: Selective hydration causing incorrect thenable type passed to DevTools",
    user: {
      login: "acdlite",
      id: 3624098,
      node_id: "MDQ6VXNlcjM2MjQwOTg=",
      avatar_url: "https://avatars.githubusercontent.com/u/3624098?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/acdlite",
      html_url: "https://github.com/acdlite",
      followers_url: "https://api.github.com/users/acdlite/followers",
      following_url:
        "https://api.github.com/users/acdlite/following{/other_user}",
      gists_url: "https://api.github.com/users/acdlite/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/acdlite/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/acdlite/subscriptions",
      organizations_url: "https://api.github.com/users/acdlite/orgs",
      repos_url: "https://api.github.com/users/acdlite/repos",
      events_url: "https://api.github.com/users/acdlite/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/acdlite/received_events",
      type: "User",
      site_admin: false,
    },
    body: "Selective hydration is implemented by suspending the current render using a special internal opaque object. This is conceptually similar to suspending with a thenable in userspace, but the opaque object should not leak outside of the reconciler.\r\n\r\nWe were accidentally passing this object to DevTool's markComponentSuspended function, which expects an actual thenable. This happens in the error handling path (handleThrow).\r\n\r\nThe fix is to check for the exception reason before calling markComponentSuspended. There was already a naive check in place, but it didn't account for all possible enum values of the exception reason.",
    created_at: "2023-03-01T16:25:00Z",
    updated_at: "2023-03-01T18:22:57Z",
    closed_at: "2023-03-01T16:38:49Z",
    merged_at: "2023-03-01T16:38:49Z",
    merge_commit_sha: "41110021f28100b16c11d6d9a248582c5bb6bc3c",
    assignee: null,
    assignees: [],
    requested_reviewers: [
      {
        login: "mondaychen",
        id: 1001890,
        node_id: "MDQ6VXNlcjEwMDE4OTA=",
        avatar_url: "https://avatars.githubusercontent.com/u/1001890?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/mondaychen",
        html_url: "https://github.com/mondaychen",
        followers_url: "https://api.github.com/users/mondaychen/followers",
        following_url:
          "https://api.github.com/users/mondaychen/following{/other_user}",
        gists_url: "https://api.github.com/users/mondaychen/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/mondaychen/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/mondaychen/subscriptions",
        organizations_url: "https://api.github.com/users/mondaychen/orgs",
        repos_url: "https://api.github.com/users/mondaychen/repos",
        events_url: "https://api.github.com/users/mondaychen/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/mondaychen/received_events",
        type: "User",
        site_admin: false,
      },
    ],
    requested_teams: [],
    labels: [
      {
        id: 196858374,
        node_id: "MDU6TGFiZWwxOTY4NTgzNzQ=",
        url: "https://api.github.com/repos/facebook/react/labels/CLA%20Signed",
        name: "CLA Signed",
        color: "e7e7e7",
        default: false,
        description: "",
      },
      {
        id: 1775958285,
        node_id: "MDU6TGFiZWwxNzc1OTU4Mjg1",
        url: "https://api.github.com/repos/facebook/react/labels/React%20Core%20Team",
        name: "React Core Team",
        color: "9149d1",
        default: false,
        description: "Opened by a member of the React Core Team",
      },
    ],
    milestone: null,
    draft: false,
    commits_url:
      "https://api.github.com/repos/facebook/react/pulls/26275/commits",
    review_comments_url:
      "https://api.github.com/repos/facebook/react/pulls/26275/comments",
    review_comment_url:
      "https://api.github.com/repos/facebook/react/pulls/comments{/number}",
    comments_url:
      "https://api.github.com/repos/facebook/react/issues/26275/comments",
    statuses_url:
      "https://api.github.com/repos/facebook/react/statuses/d20f72cc728d24320cd7a18c0c4834478f9493db",
    head: {
      label: "acdlite:fix-selective-hydration-type-error",
      ref: "fix-selective-hydration-type-error",
      sha: "d20f72cc728d24320cd7a18c0c4834478f9493db",
      user: {
        login: "acdlite",
        id: 3624098,
        node_id: "MDQ6VXNlcjM2MjQwOTg=",
        avatar_url: "https://avatars.githubusercontent.com/u/3624098?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/acdlite",
        html_url: "https://github.com/acdlite",
        followers_url: "https://api.github.com/users/acdlite/followers",
        following_url:
          "https://api.github.com/users/acdlite/following{/other_user}",
        gists_url: "https://api.github.com/users/acdlite/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/acdlite/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/acdlite/subscriptions",
        organizations_url: "https://api.github.com/users/acdlite/orgs",
        repos_url: "https://api.github.com/users/acdlite/repos",
        events_url: "https://api.github.com/users/acdlite/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/acdlite/received_events",
        type: "User",
        site_admin: false,
      },
      repo: {
        id: 45281256,
        node_id: "MDEwOlJlcG9zaXRvcnk0NTI4MTI1Ng==",
        name: "react",
        full_name: "acdlite/react",
        private: false,
        owner: {
          login: "acdlite",
          id: 3624098,
          node_id: "MDQ6VXNlcjM2MjQwOTg=",
          avatar_url: "https://avatars.githubusercontent.com/u/3624098?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/acdlite",
          html_url: "https://github.com/acdlite",
          followers_url: "https://api.github.com/users/acdlite/followers",
          following_url:
            "https://api.github.com/users/acdlite/following{/other_user}",
          gists_url: "https://api.github.com/users/acdlite/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/acdlite/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/acdlite/subscriptions",
          organizations_url: "https://api.github.com/users/acdlite/orgs",
          repos_url: "https://api.github.com/users/acdlite/repos",
          events_url: "https://api.github.com/users/acdlite/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/acdlite/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/acdlite/react",
        description:
          "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
        fork: true,
        url: "https://api.github.com/repos/acdlite/react",
        forks_url: "https://api.github.com/repos/acdlite/react/forks",
        keys_url: "https://api.github.com/repos/acdlite/react/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/acdlite/react/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/acdlite/react/teams",
        hooks_url: "https://api.github.com/repos/acdlite/react/hooks",
        issue_events_url:
          "https://api.github.com/repos/acdlite/react/issues/events{/number}",
        events_url: "https://api.github.com/repos/acdlite/react/events",
        assignees_url:
          "https://api.github.com/repos/acdlite/react/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/acdlite/react/branches{/branch}",
        tags_url: "https://api.github.com/repos/acdlite/react/tags",
        blobs_url: "https://api.github.com/repos/acdlite/react/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/acdlite/react/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/acdlite/react/git/refs{/sha}",
        trees_url: "https://api.github.com/repos/acdlite/react/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/acdlite/react/statuses/{sha}",
        languages_url: "https://api.github.com/repos/acdlite/react/languages",
        stargazers_url: "https://api.github.com/repos/acdlite/react/stargazers",
        contributors_url:
          "https://api.github.com/repos/acdlite/react/contributors",
        subscribers_url:
          "https://api.github.com/repos/acdlite/react/subscribers",
        subscription_url:
          "https://api.github.com/repos/acdlite/react/subscription",
        commits_url: "https://api.github.com/repos/acdlite/react/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/acdlite/react/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/acdlite/react/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/acdlite/react/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/acdlite/react/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/acdlite/react/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/acdlite/react/merges",
        archive_url:
          "https://api.github.com/repos/acdlite/react/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/acdlite/react/downloads",
        issues_url:
          "https://api.github.com/repos/acdlite/react/issues{/number}",
        pulls_url: "https://api.github.com/repos/acdlite/react/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/acdlite/react/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/acdlite/react/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/acdlite/react/labels{/name}",
        releases_url:
          "https://api.github.com/repos/acdlite/react/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/acdlite/react/deployments",
        created_at: "2015-10-30T23:18:48Z",
        updated_at: "2023-02-11T11:07:33Z",
        pushed_at: "2023-03-03T03:24:18Z",
        git_url: "git://github.com/acdlite/react.git",
        ssh_url: "git@github.com:acdlite/react.git",
        clone_url: "https://github.com/acdlite/react.git",
        svn_url: "https://github.com/acdlite/react",
        homepage: "https://facebook.github.io/react/",
        size: 173457,
        stargazers_count: 37,
        watchers_count: 37,
        language: "JavaScript",
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: true,
        has_discussions: false,
        forks_count: 8,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 1,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 8,
        open_issues: 1,
        watchers: 37,
        default_branch: "master",
      },
    },
    base: {
      label: "facebook:main",
      ref: "main",
      sha: "67a61d5bd7f731f5eb37d148dfc4ae0515a8c934",
      user: {
        login: "facebook",
        id: 69631,
        node_id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
        avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/facebook",
        html_url: "https://github.com/facebook",
        followers_url: "https://api.github.com/users/facebook/followers",
        following_url:
          "https://api.github.com/users/facebook/following{/other_user}",
        gists_url: "https://api.github.com/users/facebook/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/facebook/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/facebook/subscriptions",
        organizations_url: "https://api.github.com/users/facebook/orgs",
        repos_url: "https://api.github.com/users/facebook/repos",
        events_url: "https://api.github.com/users/facebook/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/facebook/received_events",
        type: "Organization",
        site_admin: false,
      },
      repo: {
        id: 10270250,
        node_id: "MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==",
        name: "react",
        full_name: "facebook/react",
        private: false,
        owner: {
          login: "facebook",
          id: 69631,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
          avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/facebook",
          html_url: "https://github.com/facebook",
          followers_url: "https://api.github.com/users/facebook/followers",
          following_url:
            "https://api.github.com/users/facebook/following{/other_user}",
          gists_url: "https://api.github.com/users/facebook/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/facebook/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/facebook/subscriptions",
          organizations_url: "https://api.github.com/users/facebook/orgs",
          repos_url: "https://api.github.com/users/facebook/repos",
          events_url: "https://api.github.com/users/facebook/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/facebook/received_events",
          type: "Organization",
          site_admin: false,
        },
        html_url: "https://github.com/facebook/react",
        description:
          "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
        fork: false,
        url: "https://api.github.com/repos/facebook/react",
        forks_url: "https://api.github.com/repos/facebook/react/forks",
        keys_url: "https://api.github.com/repos/facebook/react/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/facebook/react/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/facebook/react/teams",
        hooks_url: "https://api.github.com/repos/facebook/react/hooks",
        issue_events_url:
          "https://api.github.com/repos/facebook/react/issues/events{/number}",
        events_url: "https://api.github.com/repos/facebook/react/events",
        assignees_url:
          "https://api.github.com/repos/facebook/react/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/facebook/react/branches{/branch}",
        tags_url: "https://api.github.com/repos/facebook/react/tags",
        blobs_url:
          "https://api.github.com/repos/facebook/react/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/facebook/react/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/facebook/react/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/facebook/react/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/facebook/react/statuses/{sha}",
        languages_url: "https://api.github.com/repos/facebook/react/languages",
        stargazers_url:
          "https://api.github.com/repos/facebook/react/stargazers",
        contributors_url:
          "https://api.github.com/repos/facebook/react/contributors",
        subscribers_url:
          "https://api.github.com/repos/facebook/react/subscribers",
        subscription_url:
          "https://api.github.com/repos/facebook/react/subscription",
        commits_url:
          "https://api.github.com/repos/facebook/react/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/facebook/react/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/facebook/react/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/facebook/react/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/facebook/react/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/facebook/react/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/facebook/react/merges",
        archive_url:
          "https://api.github.com/repos/facebook/react/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/facebook/react/downloads",
        issues_url:
          "https://api.github.com/repos/facebook/react/issues{/number}",
        pulls_url: "https://api.github.com/repos/facebook/react/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/facebook/react/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/facebook/react/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/facebook/react/labels{/name}",
        releases_url:
          "https://api.github.com/repos/facebook/react/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/facebook/react/deployments",
        created_at: "2013-05-24T16:15:54Z",
        updated_at: "2023-03-03T10:33:02Z",
        pushed_at: "2023-03-03T09:43:05Z",
        git_url: "git://github.com/facebook/react.git",
        ssh_url: "git@github.com:facebook/react.git",
        clone_url: "https://github.com/facebook/react.git",
        svn_url: "https://github.com/facebook/react",
        homepage: "https://reactjs.org",
        size: 276472,
        stargazers_count: 203166,
        watchers_count: 203166,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: true,
        has_discussions: false,
        forks_count: 42233,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 1187,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
          "declarative",
          "frontend",
          "javascript",
          "library",
          "react",
          "ui",
        ],
        visibility: "public",
        forks: 42233,
        open_issues: 1187,
        watchers: 203166,
        default_branch: "main",
      },
    },
    _links: {
      self: {
        href: "https://api.github.com/repos/facebook/react/pulls/26275",
      },
      html: {
        href: "https://github.com/facebook/react/pull/26275",
      },
      issue: {
        href: "https://api.github.com/repos/facebook/react/issues/26275",
      },
      comments: {
        href: "https://api.github.com/repos/facebook/react/issues/26275/comments",
      },
      review_comments: {
        href: "https://api.github.com/repos/facebook/react/pulls/26275/comments",
      },
      review_comment: {
        href: "https://api.github.com/repos/facebook/react/pulls/comments{/number}",
      },
      commits: {
        href: "https://api.github.com/repos/facebook/react/pulls/26275/commits",
      },
      statuses: {
        href: "https://api.github.com/repos/facebook/react/statuses/d20f72cc728d24320cd7a18c0c4834478f9493db",
      },
    },
    author_association: "COLLABORATOR",
    auto_merge: null,
    active_lock_reason: null,
  },
  {
    url: "https://api.github.com/repos/facebook/react/pulls/26274",
    id: 1258890429,
    node_id: "PR_kwDOAJy2Ks5LCSS9",
    html_url: "https://github.com/facebook/react/pull/26274",
    diff_url: "https://github.com/facebook/react/pull/26274.diff",
    patch_url: "https://github.com/facebook/react/pull/26274.patch",
    issue_url: "https://api.github.com/repos/facebook/react/issues/26274",
    number: 26274,
    state: "closed",
    locked: false,
    title:
      "Fixed Issue #26042  ERROR TypeError: Cannot read property 'createElement' of undefined, js engine: hermes",
    user: {
      login: "Surendra-Mundvadiya",
      id: 97657580,
      node_id: "U_kgDOBdIi7A",
      avatar_url: "https://avatars.githubusercontent.com/u/97657580?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/Surendra-Mundvadiya",
      html_url: "https://github.com/Surendra-Mundvadiya",
      followers_url:
        "https://api.github.com/users/Surendra-Mundvadiya/followers",
      following_url:
        "https://api.github.com/users/Surendra-Mundvadiya/following{/other_user}",
      gists_url:
        "https://api.github.com/users/Surendra-Mundvadiya/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/Surendra-Mundvadiya/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/Surendra-Mundvadiya/subscriptions",
      organizations_url:
        "https://api.github.com/users/Surendra-Mundvadiya/orgs",
      repos_url: "https://api.github.com/users/Surendra-Mundvadiya/repos",
      events_url:
        "https://api.github.com/users/Surendra-Mundvadiya/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/Surendra-Mundvadiya/received_events",
      type: "User",
      site_admin: false,
    },
    body: "<!--\n  Thanks for submitting a pull request!\n  We appreciate you spending the time to work on these changes. Please provide enough information so that others can review your pull request. The three fields below are mandatory.\n\n  Before submitting a pull request, please make sure the following is done:\n\n  1. Fork [the repository](https://github.com/facebook/react) and create your branch from `main`.\n  2. Run `yarn` in the repository root.\n  3. If you've fixed a bug or added code that should be tested, add tests!\n  4. Ensure the test suite passes (`yarn test`). Tip: `yarn test --watch TestName` is helpful in development.\n  5. Run `yarn test --prod` to test in the production environment. It supports the same options as `yarn test`.\n  6. If you need a debugger, run `yarn test --debug --watch TestName`, open `chrome://inspect`, and press \"Inspect\".\n  7. Format your code with [prettier](https://github.com/prettier/prettier) (`yarn prettier`).\n  8. Make sure your code lints (`yarn lint`). Tip: `yarn linc` to only check changed files.\n  9. Run the [Flow](https://flowtype.org/) type checks (`yarn flow`).\n  10. If you haven't already, complete the CLA.\n\n  Learn more about contributing: https://reactjs.org/docs/how-to-contribute.html\n-->\n\n## Summary\n\n<!--\n Explain the **motivation** for making this change. What existing problem does the pull request solve?\n-->\n\n## How did you test this change?\n\n<!--\n  Demonstrate the code is solid. Example: The exact commands you ran and their output, screenshots / videos if the pull request changes the user interface.\n  How exactly did you verify that your PR solves the issue you wanted to solve?\n  If you leave this empty, your PR will very likely be closed.\n-->\n",
    created_at: "2023-03-01T14:07:11Z",
    updated_at: "2023-03-01T20:31:19Z",
    closed_at: "2023-03-01T20:31:19Z",
    merged_at: null,
    merge_commit_sha: "eb137d1a8276cf0a8ee3baa7358aca0acb4a3804",
    assignee: null,
    assignees: [],
    requested_reviewers: [
      {
        login: "mondaychen",
        id: 1001890,
        node_id: "MDQ6VXNlcjEwMDE4OTA=",
        avatar_url: "https://avatars.githubusercontent.com/u/1001890?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/mondaychen",
        html_url: "https://github.com/mondaychen",
        followers_url: "https://api.github.com/users/mondaychen/followers",
        following_url:
          "https://api.github.com/users/mondaychen/following{/other_user}",
        gists_url: "https://api.github.com/users/mondaychen/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/mondaychen/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/mondaychen/subscriptions",
        organizations_url: "https://api.github.com/users/mondaychen/orgs",
        repos_url: "https://api.github.com/users/mondaychen/repos",
        events_url: "https://api.github.com/users/mondaychen/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/mondaychen/received_events",
        type: "User",
        site_admin: false,
      },
    ],
    requested_teams: [],
    labels: [],
    milestone: null,
    draft: false,
    commits_url:
      "https://api.github.com/repos/facebook/react/pulls/26274/commits",
    review_comments_url:
      "https://api.github.com/repos/facebook/react/pulls/26274/comments",
    review_comment_url:
      "https://api.github.com/repos/facebook/react/pulls/comments{/number}",
    comments_url:
      "https://api.github.com/repos/facebook/react/issues/26274/comments",
    statuses_url:
      "https://api.github.com/repos/facebook/react/statuses/850671322cadf4df3007896bb4c6684c3d404af2",
    head: {
      label:
        "Surendra-Mundvadiya:Fixed-Issue-#26042-ERROR-TypeError--Cannot-read-property-'createElement'-of-undefined",
      ref: "Fixed-Issue-#26042-ERROR-TypeError--Cannot-read-property-'createElement'-of-undefined",
      sha: "850671322cadf4df3007896bb4c6684c3d404af2",
      user: {
        login: "Surendra-Mundvadiya",
        id: 97657580,
        node_id: "U_kgDOBdIi7A",
        avatar_url: "https://avatars.githubusercontent.com/u/97657580?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/Surendra-Mundvadiya",
        html_url: "https://github.com/Surendra-Mundvadiya",
        followers_url:
          "https://api.github.com/users/Surendra-Mundvadiya/followers",
        following_url:
          "https://api.github.com/users/Surendra-Mundvadiya/following{/other_user}",
        gists_url:
          "https://api.github.com/users/Surendra-Mundvadiya/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/Surendra-Mundvadiya/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/Surendra-Mundvadiya/subscriptions",
        organizations_url:
          "https://api.github.com/users/Surendra-Mundvadiya/orgs",
        repos_url: "https://api.github.com/users/Surendra-Mundvadiya/repos",
        events_url:
          "https://api.github.com/users/Surendra-Mundvadiya/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/Surendra-Mundvadiya/received_events",
        type: "User",
        site_admin: false,
      },
      repo: {
        id: 608190961,
        node_id: "R_kgDOJEBB8Q",
        name: "react",
        full_name: "Surendra-Mundvadiya/react",
        private: false,
        owner: {
          login: "Surendra-Mundvadiya",
          id: 97657580,
          node_id: "U_kgDOBdIi7A",
          avatar_url: "https://avatars.githubusercontent.com/u/97657580?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/Surendra-Mundvadiya",
          html_url: "https://github.com/Surendra-Mundvadiya",
          followers_url:
            "https://api.github.com/users/Surendra-Mundvadiya/followers",
          following_url:
            "https://api.github.com/users/Surendra-Mundvadiya/following{/other_user}",
          gists_url:
            "https://api.github.com/users/Surendra-Mundvadiya/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/Surendra-Mundvadiya/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/Surendra-Mundvadiya/subscriptions",
          organizations_url:
            "https://api.github.com/users/Surendra-Mundvadiya/orgs",
          repos_url: "https://api.github.com/users/Surendra-Mundvadiya/repos",
          events_url:
            "https://api.github.com/users/Surendra-Mundvadiya/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/Surendra-Mundvadiya/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/Surendra-Mundvadiya/react",
        description:
          "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
        fork: true,
        url: "https://api.github.com/repos/Surendra-Mundvadiya/react",
        forks_url:
          "https://api.github.com/repos/Surendra-Mundvadiya/react/forks",
        keys_url:
          "https://api.github.com/repos/Surendra-Mundvadiya/react/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/Surendra-Mundvadiya/react/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/Surendra-Mundvadiya/react/teams",
        hooks_url:
          "https://api.github.com/repos/Surendra-Mundvadiya/react/hooks",
        issue_events_url:
          "https://api.github.com/repos/Surendra-Mundvadiya/react/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/Surendra-Mundvadiya/react/events",
        assignees_url:
          "https://api.github.com/repos/Surendra-Mundvadiya/react/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/Surendra-Mundvadiya/react/branches{/branch}",
        tags_url: "https://api.github.com/repos/Surendra-Mundvadiya/react/tags",
        blobs_url:
          "https://api.github.com/repos/Surendra-Mundvadiya/react/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/Surendra-Mundvadiya/react/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/Surendra-Mundvadiya/react/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/Surendra-Mundvadiya/react/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/Surendra-Mundvadiya/react/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/Surendra-Mundvadiya/react/languages",
        stargazers_url:
          "https://api.github.com/repos/Surendra-Mundvadiya/react/stargazers",
        contributors_url:
          "https://api.github.com/repos/Surendra-Mundvadiya/react/contributors",
        subscribers_url:
          "https://api.github.com/repos/Surendra-Mundvadiya/react/subscribers",
        subscription_url:
          "https://api.github.com/repos/Surendra-Mundvadiya/react/subscription",
        commits_url:
          "https://api.github.com/repos/Surendra-Mundvadiya/react/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/Surendra-Mundvadiya/react/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/Surendra-Mundvadiya/react/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/Surendra-Mundvadiya/react/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/Surendra-Mundvadiya/react/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/Surendra-Mundvadiya/react/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/Surendra-Mundvadiya/react/merges",
        archive_url:
          "https://api.github.com/repos/Surendra-Mundvadiya/react/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/Surendra-Mundvadiya/react/downloads",
        issues_url:
          "https://api.github.com/repos/Surendra-Mundvadiya/react/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/Surendra-Mundvadiya/react/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/Surendra-Mundvadiya/react/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/Surendra-Mundvadiya/react/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/Surendra-Mundvadiya/react/labels{/name}",
        releases_url:
          "https://api.github.com/repos/Surendra-Mundvadiya/react/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/Surendra-Mundvadiya/react/deployments",
        created_at: "2023-03-01T14:06:26Z",
        updated_at: "2023-03-01T14:08:21Z",
        pushed_at: "2023-03-01T14:06:56Z",
        git_url: "git://github.com/Surendra-Mundvadiya/react.git",
        ssh_url: "git@github.com:Surendra-Mundvadiya/react.git",
        clone_url: "https://github.com/Surendra-Mundvadiya/react.git",
        svn_url: "https://github.com/Surendra-Mundvadiya/react",
        homepage: "https://reactjs.org",
        size: 273611,
        stargazers_count: 1,
        watchers_count: 1,
        language: null,
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        has_discussions: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [],
        visibility: "public",
        forks: 0,
        open_issues: 0,
        watchers: 1,
        default_branch: "main",
      },
    },
    base: {
      label: "facebook:main",
      ref: "main",
      sha: "67a61d5bd7f731f5eb37d148dfc4ae0515a8c934",
      user: {
        login: "facebook",
        id: 69631,
        node_id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
        avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/facebook",
        html_url: "https://github.com/facebook",
        followers_url: "https://api.github.com/users/facebook/followers",
        following_url:
          "https://api.github.com/users/facebook/following{/other_user}",
        gists_url: "https://api.github.com/users/facebook/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/facebook/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/facebook/subscriptions",
        organizations_url: "https://api.github.com/users/facebook/orgs",
        repos_url: "https://api.github.com/users/facebook/repos",
        events_url: "https://api.github.com/users/facebook/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/facebook/received_events",
        type: "Organization",
        site_admin: false,
      },
      repo: {
        id: 10270250,
        node_id: "MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==",
        name: "react",
        full_name: "facebook/react",
        private: false,
        owner: {
          login: "facebook",
          id: 69631,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
          avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/facebook",
          html_url: "https://github.com/facebook",
          followers_url: "https://api.github.com/users/facebook/followers",
          following_url:
            "https://api.github.com/users/facebook/following{/other_user}",
          gists_url: "https://api.github.com/users/facebook/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/facebook/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/facebook/subscriptions",
          organizations_url: "https://api.github.com/users/facebook/orgs",
          repos_url: "https://api.github.com/users/facebook/repos",
          events_url: "https://api.github.com/users/facebook/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/facebook/received_events",
          type: "Organization",
          site_admin: false,
        },
        html_url: "https://github.com/facebook/react",
        description:
          "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
        fork: false,
        url: "https://api.github.com/repos/facebook/react",
        forks_url: "https://api.github.com/repos/facebook/react/forks",
        keys_url: "https://api.github.com/repos/facebook/react/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/facebook/react/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/facebook/react/teams",
        hooks_url: "https://api.github.com/repos/facebook/react/hooks",
        issue_events_url:
          "https://api.github.com/repos/facebook/react/issues/events{/number}",
        events_url: "https://api.github.com/repos/facebook/react/events",
        assignees_url:
          "https://api.github.com/repos/facebook/react/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/facebook/react/branches{/branch}",
        tags_url: "https://api.github.com/repos/facebook/react/tags",
        blobs_url:
          "https://api.github.com/repos/facebook/react/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/facebook/react/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/facebook/react/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/facebook/react/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/facebook/react/statuses/{sha}",
        languages_url: "https://api.github.com/repos/facebook/react/languages",
        stargazers_url:
          "https://api.github.com/repos/facebook/react/stargazers",
        contributors_url:
          "https://api.github.com/repos/facebook/react/contributors",
        subscribers_url:
          "https://api.github.com/repos/facebook/react/subscribers",
        subscription_url:
          "https://api.github.com/repos/facebook/react/subscription",
        commits_url:
          "https://api.github.com/repos/facebook/react/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/facebook/react/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/facebook/react/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/facebook/react/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/facebook/react/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/facebook/react/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/facebook/react/merges",
        archive_url:
          "https://api.github.com/repos/facebook/react/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/facebook/react/downloads",
        issues_url:
          "https://api.github.com/repos/facebook/react/issues{/number}",
        pulls_url: "https://api.github.com/repos/facebook/react/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/facebook/react/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/facebook/react/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/facebook/react/labels{/name}",
        releases_url:
          "https://api.github.com/repos/facebook/react/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/facebook/react/deployments",
        created_at: "2013-05-24T16:15:54Z",
        updated_at: "2023-03-03T10:33:02Z",
        pushed_at: "2023-03-03T09:43:05Z",
        git_url: "git://github.com/facebook/react.git",
        ssh_url: "git@github.com:facebook/react.git",
        clone_url: "https://github.com/facebook/react.git",
        svn_url: "https://github.com/facebook/react",
        homepage: "https://reactjs.org",
        size: 276472,
        stargazers_count: 203166,
        watchers_count: 203166,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: true,
        has_discussions: false,
        forks_count: 42233,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 1187,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
          "declarative",
          "frontend",
          "javascript",
          "library",
          "react",
          "ui",
        ],
        visibility: "public",
        forks: 42233,
        open_issues: 1187,
        watchers: 203166,
        default_branch: "main",
      },
    },
    _links: {
      self: {
        href: "https://api.github.com/repos/facebook/react/pulls/26274",
      },
      html: {
        href: "https://github.com/facebook/react/pull/26274",
      },
      issue: {
        href: "https://api.github.com/repos/facebook/react/issues/26274",
      },
      comments: {
        href: "https://api.github.com/repos/facebook/react/issues/26274/comments",
      },
      review_comments: {
        href: "https://api.github.com/repos/facebook/react/pulls/26274/comments",
      },
      review_comment: {
        href: "https://api.github.com/repos/facebook/react/pulls/comments{/number}",
      },
      commits: {
        href: "https://api.github.com/repos/facebook/react/pulls/26274/commits",
      },
      statuses: {
        href: "https://api.github.com/repos/facebook/react/statuses/850671322cadf4df3007896bb4c6684c3d404af2",
      },
    },
    author_association: "NONE",
    auto_merge: null,
    active_lock_reason: null,
  },
  {
    url: "https://api.github.com/repos/facebook/react/pulls/26272",
    id: 1257974509,
    node_id: "PR_kwDOAJy2Ks5K-yrt",
    html_url: "https://github.com/facebook/react/pull/26272",
    diff_url: "https://github.com/facebook/react/pull/26272.diff",
    patch_url: "https://github.com/facebook/react/pull/26272.patch",
    issue_url: "https://api.github.com/repos/facebook/react/issues/26272",
    number: 26272,
    state: "closed",
    locked: false,
    title: "Bump minimist from 1.2.3 to 1.2.6",
    user: {
      login: "dependabot[bot]",
      id: 49699333,
      node_id: "MDM6Qm90NDk2OTkzMzM=",
      avatar_url: "https://avatars.githubusercontent.com/in/29110?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/dependabot%5Bbot%5D",
      html_url: "https://github.com/apps/dependabot",
      followers_url:
        "https://api.github.com/users/dependabot%5Bbot%5D/followers",
      following_url:
        "https://api.github.com/users/dependabot%5Bbot%5D/following{/other_user}",
      gists_url:
        "https://api.github.com/users/dependabot%5Bbot%5D/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/dependabot%5Bbot%5D/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/dependabot%5Bbot%5D/subscriptions",
      organizations_url:
        "https://api.github.com/users/dependabot%5Bbot%5D/orgs",
      repos_url: "https://api.github.com/users/dependabot%5Bbot%5D/repos",
      events_url:
        "https://api.github.com/users/dependabot%5Bbot%5D/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/dependabot%5Bbot%5D/received_events",
      type: "Bot",
      site_admin: false,
    },
    body: 'Bumps [minimist](https://github.com/minimistjs/minimist) from 1.2.3 to 1.2.6.\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a href="https://github.com/minimistjs/minimist/blob/main/CHANGELOG.md">minimist\'s changelog</a>.</em></p>\n<blockquote>\n<h2><a href="https://github.com/minimistjs/minimist/compare/v1.2.5...v1.2.6">v1.2.6</a> - 2022-03-21</h2>\n<h3>Commits</h3>\n<ul>\n<li>test from prototype pollution PR <a href="https://github.com/minimistjs/minimist/commit/bc8ecee43875261f4f17eb20b1243d3ed15e70eb"><code>bc8ecee</code></a></li>\n<li>isConstructorOrProto adapted from PR <a href="https://github.com/minimistjs/minimist/commit/c2b981977fa834b223b408cfb860f933c9811e4d"><code>c2b9819</code></a></li>\n<li>security notice for additional prototype pollution issue <a href="https://github.com/minimistjs/minimist/commit/ef88b9325f77b5ee643ccfc97e2ebda577e4c4e2"><code>ef88b93</code></a></li>\n</ul>\n<h2><a href="https://github.com/minimistjs/minimist/compare/v1.2.4...v1.2.5">v1.2.5</a> - 2020-03-12</h2>\n<h2><a href="https://github.com/minimistjs/minimist/compare/v1.2.3...v1.2.4">v1.2.4</a> - 2020-03-11</h2>\n<h3>Commits</h3>\n<ul>\n<li>security notice <a href="https://github.com/minimistjs/minimist/commit/4cf1354839cb972e38496d35e12f806eea92c11f"><code>4cf1354</code></a></li>\n<li>additional test for constructor prototype pollution <a href="https://github.com/minimistjs/minimist/commit/1043d212c3caaf871966e710f52cfdf02f9eea4b"><code>1043d21</code></a></li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a href="https://github.com/minimistjs/minimist/commit/7efb22a518b53b06f5b02a1038a88bd6290c2846"><code>7efb22a</code></a> 1.2.6</li>\n<li><a href="https://github.com/minimistjs/minimist/commit/ef88b9325f77b5ee643ccfc97e2ebda577e4c4e2"><code>ef88b93</code></a> security notice for additional prototype pollution issue</li>\n<li><a href="https://github.com/minimistjs/minimist/commit/c2b981977fa834b223b408cfb860f933c9811e4d"><code>c2b9819</code></a> isConstructorOrProto adapted from PR</li>\n<li><a href="https://github.com/minimistjs/minimist/commit/bc8ecee43875261f4f17eb20b1243d3ed15e70eb"><code>bc8ecee</code></a> test from prototype pollution PR</li>\n<li><a href="https://github.com/minimistjs/minimist/commit/aeb3e27dae0412de5c0494e9563a5f10c82cc7a9"><code>aeb3e27</code></a> 1.2.5</li>\n<li><a href="https://github.com/minimistjs/minimist/commit/278677b171d956b46613a158c6c486c3ef979b20"><code>278677b</code></a> 1.2.4</li>\n<li><a href="https://github.com/minimistjs/minimist/commit/4cf1354839cb972e38496d35e12f806eea92c11f"><code>4cf1354</code></a> security notice</li>\n<li><a href="https://github.com/minimistjs/minimist/commit/1043d212c3caaf871966e710f52cfdf02f9eea4b"><code>1043d21</code></a> additional test for constructor prototype pollution</li>\n<li>See full diff in <a href="https://github.com/minimistjs/minimist/compare/v1.2.3...v1.2.6">compare view</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility score](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=minimist&package-manager=npm_and_yarn&previous-version=1.2.3&new-version=1.2.6)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don\'t alter it yourself. You can also trigger a rebase manually by commenting `@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits that have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after your CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge and block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating it. You can achieve the same result by closing it manually\n- `@dependabot ignore this major version` will close this PR and stop Dependabot creating any more for this major version (unless you reopen the PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop Dependabot creating any more for this minor version (unless you reopen the PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop Dependabot creating any more for this dependency (unless you reopen the PR or upgrade to it yourself)\n- `@dependabot use these labels` will set the current labels as the default for future PRs for this repo and language\n- `@dependabot use these reviewers` will set the current reviewers as the default for future PRs for this repo and language\n- `@dependabot use these assignees` will set the current assignees as the default for future PRs for this repo and language\n- `@dependabot use this milestone` will set the current milestone as the default for future PRs for this repo and language\n\nYou can disable automated security fix PRs for this repo from the [Security Alerts page](https://github.com/facebook/react/network/alerts).\n\n</details>',
    created_at: "2023-03-01T00:25:47Z",
    updated_at: "2023-03-02T15:26:13Z",
    closed_at: "2023-03-02T15:25:44Z",
    merged_at: null,
    merge_commit_sha: "b3da802031a9bce27164b08190d1800e0c120b3e",
    assignee: null,
    assignees: [],
    requested_reviewers: [],
    requested_teams: [],
    labels: [
      {
        id: 196858374,
        node_id: "MDU6TGFiZWwxOTY4NTgzNzQ=",
        url: "https://api.github.com/repos/facebook/react/labels/CLA%20Signed",
        name: "CLA Signed",
        color: "e7e7e7",
        default: false,
        description: "",
      },
      {
        id: 1757816973,
        node_id: "MDU6TGFiZWwxNzU3ODE2OTcz",
        url: "https://api.github.com/repos/facebook/react/labels/dependencies",
        name: "dependencies",
        color: "0366d6",
        default: false,
        description: "Pull requests that update a dependency file",
      },
    ],
    milestone: null,
    draft: false,
    commits_url:
      "https://api.github.com/repos/facebook/react/pulls/26272/commits",
    review_comments_url:
      "https://api.github.com/repos/facebook/react/pulls/26272/comments",
    review_comment_url:
      "https://api.github.com/repos/facebook/react/pulls/comments{/number}",
    comments_url:
      "https://api.github.com/repos/facebook/react/issues/26272/comments",
    statuses_url:
      "https://api.github.com/repos/facebook/react/statuses/b5248f13c3944c1955718598c6caa860c9fc397b",
    head: {
      label: "facebook:dependabot/npm_and_yarn/minimist-1.2.6",
      ref: "dependabot/npm_and_yarn/minimist-1.2.6",
      sha: "b5248f13c3944c1955718598c6caa860c9fc397b",
      user: {
        login: "facebook",
        id: 69631,
        node_id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
        avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/facebook",
        html_url: "https://github.com/facebook",
        followers_url: "https://api.github.com/users/facebook/followers",
        following_url:
          "https://api.github.com/users/facebook/following{/other_user}",
        gists_url: "https://api.github.com/users/facebook/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/facebook/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/facebook/subscriptions",
        organizations_url: "https://api.github.com/users/facebook/orgs",
        repos_url: "https://api.github.com/users/facebook/repos",
        events_url: "https://api.github.com/users/facebook/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/facebook/received_events",
        type: "Organization",
        site_admin: false,
      },
      repo: {
        id: 10270250,
        node_id: "MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==",
        name: "react",
        full_name: "facebook/react",
        private: false,
        owner: {
          login: "facebook",
          id: 69631,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
          avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/facebook",
          html_url: "https://github.com/facebook",
          followers_url: "https://api.github.com/users/facebook/followers",
          following_url:
            "https://api.github.com/users/facebook/following{/other_user}",
          gists_url: "https://api.github.com/users/facebook/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/facebook/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/facebook/subscriptions",
          organizations_url: "https://api.github.com/users/facebook/orgs",
          repos_url: "https://api.github.com/users/facebook/repos",
          events_url: "https://api.github.com/users/facebook/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/facebook/received_events",
          type: "Organization",
          site_admin: false,
        },
        html_url: "https://github.com/facebook/react",
        description:
          "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
        fork: false,
        url: "https://api.github.com/repos/facebook/react",
        forks_url: "https://api.github.com/repos/facebook/react/forks",
        keys_url: "https://api.github.com/repos/facebook/react/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/facebook/react/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/facebook/react/teams",
        hooks_url: "https://api.github.com/repos/facebook/react/hooks",
        issue_events_url:
          "https://api.github.com/repos/facebook/react/issues/events{/number}",
        events_url: "https://api.github.com/repos/facebook/react/events",
        assignees_url:
          "https://api.github.com/repos/facebook/react/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/facebook/react/branches{/branch}",
        tags_url: "https://api.github.com/repos/facebook/react/tags",
        blobs_url:
          "https://api.github.com/repos/facebook/react/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/facebook/react/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/facebook/react/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/facebook/react/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/facebook/react/statuses/{sha}",
        languages_url: "https://api.github.com/repos/facebook/react/languages",
        stargazers_url:
          "https://api.github.com/repos/facebook/react/stargazers",
        contributors_url:
          "https://api.github.com/repos/facebook/react/contributors",
        subscribers_url:
          "https://api.github.com/repos/facebook/react/subscribers",
        subscription_url:
          "https://api.github.com/repos/facebook/react/subscription",
        commits_url:
          "https://api.github.com/repos/facebook/react/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/facebook/react/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/facebook/react/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/facebook/react/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/facebook/react/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/facebook/react/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/facebook/react/merges",
        archive_url:
          "https://api.github.com/repos/facebook/react/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/facebook/react/downloads",
        issues_url:
          "https://api.github.com/repos/facebook/react/issues{/number}",
        pulls_url: "https://api.github.com/repos/facebook/react/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/facebook/react/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/facebook/react/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/facebook/react/labels{/name}",
        releases_url:
          "https://api.github.com/repos/facebook/react/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/facebook/react/deployments",
        created_at: "2013-05-24T16:15:54Z",
        updated_at: "2023-03-03T10:33:02Z",
        pushed_at: "2023-03-03T09:43:05Z",
        git_url: "git://github.com/facebook/react.git",
        ssh_url: "git@github.com:facebook/react.git",
        clone_url: "https://github.com/facebook/react.git",
        svn_url: "https://github.com/facebook/react",
        homepage: "https://reactjs.org",
        size: 276472,
        stargazers_count: 203166,
        watchers_count: 203166,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: true,
        has_discussions: false,
        forks_count: 42233,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 1187,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
          "declarative",
          "frontend",
          "javascript",
          "library",
          "react",
          "ui",
        ],
        visibility: "public",
        forks: 42233,
        open_issues: 1187,
        watchers: 203166,
        default_branch: "main",
      },
    },
    base: {
      label: "facebook:main",
      ref: "main",
      sha: "40755c01a68de4b44bc24cca7f03a46140f31d5e",
      user: {
        login: "facebook",
        id: 69631,
        node_id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
        avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/facebook",
        html_url: "https://github.com/facebook",
        followers_url: "https://api.github.com/users/facebook/followers",
        following_url:
          "https://api.github.com/users/facebook/following{/other_user}",
        gists_url: "https://api.github.com/users/facebook/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/facebook/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/facebook/subscriptions",
        organizations_url: "https://api.github.com/users/facebook/orgs",
        repos_url: "https://api.github.com/users/facebook/repos",
        events_url: "https://api.github.com/users/facebook/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/facebook/received_events",
        type: "Organization",
        site_admin: false,
      },
      repo: {
        id: 10270250,
        node_id: "MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==",
        name: "react",
        full_name: "facebook/react",
        private: false,
        owner: {
          login: "facebook",
          id: 69631,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
          avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/facebook",
          html_url: "https://github.com/facebook",
          followers_url: "https://api.github.com/users/facebook/followers",
          following_url:
            "https://api.github.com/users/facebook/following{/other_user}",
          gists_url: "https://api.github.com/users/facebook/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/facebook/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/facebook/subscriptions",
          organizations_url: "https://api.github.com/users/facebook/orgs",
          repos_url: "https://api.github.com/users/facebook/repos",
          events_url: "https://api.github.com/users/facebook/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/facebook/received_events",
          type: "Organization",
          site_admin: false,
        },
        html_url: "https://github.com/facebook/react",
        description:
          "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
        fork: false,
        url: "https://api.github.com/repos/facebook/react",
        forks_url: "https://api.github.com/repos/facebook/react/forks",
        keys_url: "https://api.github.com/repos/facebook/react/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/facebook/react/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/facebook/react/teams",
        hooks_url: "https://api.github.com/repos/facebook/react/hooks",
        issue_events_url:
          "https://api.github.com/repos/facebook/react/issues/events{/number}",
        events_url: "https://api.github.com/repos/facebook/react/events",
        assignees_url:
          "https://api.github.com/repos/facebook/react/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/facebook/react/branches{/branch}",
        tags_url: "https://api.github.com/repos/facebook/react/tags",
        blobs_url:
          "https://api.github.com/repos/facebook/react/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/facebook/react/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/facebook/react/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/facebook/react/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/facebook/react/statuses/{sha}",
        languages_url: "https://api.github.com/repos/facebook/react/languages",
        stargazers_url:
          "https://api.github.com/repos/facebook/react/stargazers",
        contributors_url:
          "https://api.github.com/repos/facebook/react/contributors",
        subscribers_url:
          "https://api.github.com/repos/facebook/react/subscribers",
        subscription_url:
          "https://api.github.com/repos/facebook/react/subscription",
        commits_url:
          "https://api.github.com/repos/facebook/react/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/facebook/react/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/facebook/react/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/facebook/react/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/facebook/react/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/facebook/react/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/facebook/react/merges",
        archive_url:
          "https://api.github.com/repos/facebook/react/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/facebook/react/downloads",
        issues_url:
          "https://api.github.com/repos/facebook/react/issues{/number}",
        pulls_url: "https://api.github.com/repos/facebook/react/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/facebook/react/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/facebook/react/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/facebook/react/labels{/name}",
        releases_url:
          "https://api.github.com/repos/facebook/react/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/facebook/react/deployments",
        created_at: "2013-05-24T16:15:54Z",
        updated_at: "2023-03-03T10:33:02Z",
        pushed_at: "2023-03-03T09:43:05Z",
        git_url: "git://github.com/facebook/react.git",
        ssh_url: "git@github.com:facebook/react.git",
        clone_url: "https://github.com/facebook/react.git",
        svn_url: "https://github.com/facebook/react",
        homepage: "https://reactjs.org",
        size: 276472,
        stargazers_count: 203166,
        watchers_count: 203166,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: true,
        has_discussions: false,
        forks_count: 42233,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 1187,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
          "declarative",
          "frontend",
          "javascript",
          "library",
          "react",
          "ui",
        ],
        visibility: "public",
        forks: 42233,
        open_issues: 1187,
        watchers: 203166,
        default_branch: "main",
      },
    },
    _links: {
      self: {
        href: "https://api.github.com/repos/facebook/react/pulls/26272",
      },
      html: {
        href: "https://github.com/facebook/react/pull/26272",
      },
      issue: {
        href: "https://api.github.com/repos/facebook/react/issues/26272",
      },
      comments: {
        href: "https://api.github.com/repos/facebook/react/issues/26272/comments",
      },
      review_comments: {
        href: "https://api.github.com/repos/facebook/react/pulls/26272/comments",
      },
      review_comment: {
        href: "https://api.github.com/repos/facebook/react/pulls/comments{/number}",
      },
      commits: {
        href: "https://api.github.com/repos/facebook/react/pulls/26272/commits",
      },
      statuses: {
        href: "https://api.github.com/repos/facebook/react/statuses/b5248f13c3944c1955718598c6caa860c9fc397b",
      },
    },
    author_association: "CONTRIBUTOR",
    auto_merge: null,
    active_lock_reason: null,
  },
  {
    url: "https://api.github.com/repos/facebook/react/pulls/26271",
    id: 1257974400,
    node_id: "PR_kwDOAJy2Ks5K-yqA",
    html_url: "https://github.com/facebook/react/pull/26271",
    diff_url: "https://github.com/facebook/react/pull/26271.diff",
    patch_url: "https://github.com/facebook/react/pull/26271.patch",
    issue_url: "https://api.github.com/repos/facebook/react/issues/26271",
    number: 26271,
    state: "closed",
    locked: false,
    title: "Bump minimist from 1.2.5 to 1.2.8 in /fixtures/ssr2",
    user: {
      login: "dependabot[bot]",
      id: 49699333,
      node_id: "MDM6Qm90NDk2OTkzMzM=",
      avatar_url: "https://avatars.githubusercontent.com/in/29110?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/dependabot%5Bbot%5D",
      html_url: "https://github.com/apps/dependabot",
      followers_url:
        "https://api.github.com/users/dependabot%5Bbot%5D/followers",
      following_url:
        "https://api.github.com/users/dependabot%5Bbot%5D/following{/other_user}",
      gists_url:
        "https://api.github.com/users/dependabot%5Bbot%5D/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/dependabot%5Bbot%5D/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/dependabot%5Bbot%5D/subscriptions",
      organizations_url:
        "https://api.github.com/users/dependabot%5Bbot%5D/orgs",
      repos_url: "https://api.github.com/users/dependabot%5Bbot%5D/repos",
      events_url:
        "https://api.github.com/users/dependabot%5Bbot%5D/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/dependabot%5Bbot%5D/received_events",
      type: "Bot",
      site_admin: false,
    },
    body: 'Bumps [minimist](https://github.com/minimistjs/minimist) from 1.2.5 to 1.2.8.\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a href="https://github.com/minimistjs/minimist/blob/main/CHANGELOG.md">minimist\'s changelog</a>.</em></p>\n<blockquote>\n<h2><a href="https://github.com/minimistjs/minimist/compare/v1.2.7...v1.2.8">v1.2.8</a> - 2023-02-09</h2>\n<h3>Merged</h3>\n<ul>\n<li>[Fix] Fix long option followed by single dash <a href="https://github-redirect.dependabot.com/minimistjs/minimist/pull/17"><code>[#17](https://github.com/minimistjs/minimist/issues/17)</code></a></li>\n<li>[Tests] Remove duplicate test <a href="https://github-redirect.dependabot.com/minimistjs/minimist/pull/12"><code>[#12](https://github.com/minimistjs/minimist/issues/12)</code></a></li>\n<li>[Fix] opt.string works with multiple aliases <a href="https://github-redirect.dependabot.com/minimistjs/minimist/pull/10"><code>[#10](https://github.com/minimistjs/minimist/issues/10)</code></a></li>\n</ul>\n<h3>Fixed</h3>\n<ul>\n<li>[Fix] Fix long option followed by single dash (<a href="https://github-redirect.dependabot.com/minimistjs/minimist/issues/17">#17</a>) <a href="https://github-redirect.dependabot.com/minimistjs/minimist/issues/15"><code>[#15](https://github.com/minimistjs/minimist/issues/15)</code></a></li>\n<li>[Tests] Remove duplicate test (<a href="https://github-redirect.dependabot.com/minimistjs/minimist/issues/12">#12</a>) <a href="https://github-redirect.dependabot.com/minimistjs/minimist/issues/8"><code>[#8](https://github.com/minimistjs/minimist/issues/8)</code></a></li>\n<li>[Fix] Fix long option followed by single dash <a href="https://github-redirect.dependabot.com/minimistjs/minimist/issues/15"><code>[#15](https://github.com/minimistjs/minimist/issues/15)</code></a></li>\n<li>[Fix] opt.string works with multiple aliases (<a href="https://github-redirect.dependabot.com/minimistjs/minimist/issues/10">#10</a>) <a href="https://github-redirect.dependabot.com/minimistjs/minimist/issues/9"><code>[#9](https://github.com/minimistjs/minimist/issues/9)</code></a></li>\n<li>[Fix] Fix handling of short option with non-trivial equals <a href="https://github-redirect.dependabot.com/minimistjs/minimist/issues/5"><code>[#5](https://github.com/minimistjs/minimist/issues/5)</code></a></li>\n<li>[Tests] Remove duplicate test <a href="https://github-redirect.dependabot.com/minimistjs/minimist/issues/8"><code>[#8](https://github.com/minimistjs/minimist/issues/8)</code></a></li>\n<li>[Fix] opt.string works with multiple aliases <a href="https://github-redirect.dependabot.com/minimistjs/minimist/issues/9"><code>[#9](https://github.com/minimistjs/minimist/issues/9)</code></a></li>\n</ul>\n<h3>Commits</h3>\n<ul>\n<li>Merge tag \'v0.2.3\' <a href="https://github.com/minimistjs/minimist/commit/a0267947c7870fc5847cf2d437fbe33f392767da"><code>a026794</code></a></li>\n<li>[eslint] fix indentation and whitespace <a href="https://github.com/minimistjs/minimist/commit/5368ca4147e974138a54cc0dc4cea8f756546b70"><code>5368ca4</code></a></li>\n<li>[eslint] fix indentation and whitespace <a href="https://github.com/minimistjs/minimist/commit/e5f5067259ceeaf0b098d14bec910f87e58708c7"><code>e5f5067</code></a></li>\n<li>[eslint] more cleanup <a href="https://github.com/minimistjs/minimist/commit/62fde7d935f83417fb046741531a9e2346a36976"><code>62fde7d</code></a></li>\n<li>[eslint] more cleanup <a href="https://github.com/minimistjs/minimist/commit/36ac5d0d95e4947d074e5737d94814034ca335d1"><code>36ac5d0</code></a></li>\n<li>[meta] add <code>auto-changelog</code> <a href="https://github.com/minimistjs/minimist/commit/73923d223553fca08b1ba77e3fbc2a492862ae4c"><code>73923d2</code></a></li>\n<li>[actions] add reusable workflows <a href="https://github.com/minimistjs/minimist/commit/d80727df77bfa9e631044d7f16368d8f09242c91"><code>d80727d</code></a></li>\n<li>[eslint] add eslint; rules to enable later are warnings <a href="https://github.com/minimistjs/minimist/commit/48bc06a1b41f00e9cdf183db34f7a51ba70e98d4"><code>48bc06a</code></a></li>\n<li>[eslint] fix indentation <a href="https://github.com/minimistjs/minimist/commit/34b0f1ccaa45183c3c4f06a91f9b405180a6f982"><code>34b0f1c</code></a></li>\n<li>[readme] rename and add badges <a href="https://github.com/minimistjs/minimist/commit/5df0fe49211bd09a3636f8686a7cb3012c3e98f0"><code>5df0fe4</code></a></li>\n<li>[Dev Deps] switch from <code>covert</code> to <code>nyc</code> <a href="https://github.com/minimistjs/minimist/commit/a48b128fdb8d427dfb20a15273f83e38d97bef07"><code>a48b128</code></a></li>\n<li>[Dev Deps] update <code>covert</code>, <code>tape</code>; remove unnecessary <code>tap</code> <a href="https://github.com/minimistjs/minimist/commit/f0fb958e9a1fe980cdffc436a211b0bda58f621b"><code>f0fb958</code></a></li>\n<li>[meta] create FUNDING.yml; add <code>funding</code> in package.json <a href="https://github.com/minimistjs/minimist/commit/3639e0c819359a366387e425ab6eabf4c78d3caa"><code>3639e0c</code></a></li>\n<li>[meta] use <code>npmignore</code> to autogenerate an npmignore file <a href="https://github.com/minimistjs/minimist/commit/be2e038c342d8333b32f0fde67a0026b79c8150e"><code>be2e038</code></a></li>\n<li>Only apps should have lockfiles <a href="https://github.com/minimistjs/minimist/commit/282b570e7489d01b03f2d6d3dabf79cd3e5f84cf"><code>282b570</code></a></li>\n<li>isConstructorOrProto adapted from PR <a href="https://github.com/minimistjs/minimist/commit/ef9153fc52b6cea0744b2239921c5dcae4697f11"><code>ef9153f</code></a></li>\n<li>[Dev Deps] update <code>@ljharb/eslint-config</code>, <code>aud</code> <a href="https://github.com/minimistjs/minimist/commit/098873c213cdb7c92e55ae1ef5aa1af3a8192a79"><code>098873c</code></a></li>\n<li>[Dev Deps] update <code>@ljharb/eslint-config</code>, <code>aud</code> <a href="https://github.com/minimistjs/minimist/commit/3124ed3e46306301ebb3c834874ce0241555c2c4"><code>3124ed3</code></a></li>\n<li>[meta] add <code>safe-publish-latest</code> <a href="https://github.com/minimistjs/minimist/commit/4b927de696d561c636b4f43bf49d4597cb36d6d6"><code>4b927de</code></a></li>\n<li>[Tests] add <code>aud</code> in <code>posttest</code> <a href="https://github.com/minimistjs/minimist/commit/b32d9bd0ab340f4e9f8c3a97ff2a4424f25fab8c"><code>b32d9bd</code></a></li>\n<li>[meta] update repo URLs <a href="https://github.com/minimistjs/minimist/commit/f9fdfc032c54884d9a9996a390c63cd0719bbe1a"><code>f9fdfc0</code></a></li>\n<li>[actions] Avoid 0.6 tests due to build failures <a href="https://github.com/minimistjs/minimist/commit/ba92fe6ebbdc0431cca9a2ea8f27beb492f5e4ec"><code>ba92fe6</code></a></li>\n<li>[Dev Deps] update <code>tape</code> <a href="https://github.com/minimistjs/minimist/commit/950eaa74f112e04d23e9c606c67472c46739b473"><code>950eaa7</code></a></li>\n<li>[Dev Deps] add missing <code>npmignore</code> dev dep <a href="https://github.com/minimistjs/minimist/commit/3226afaf09e9d127ca369742437fe6e88f752d6b"><code>3226afa</code></a></li>\n<li>Merge tag \'v0.2.2\' <a href="https://github.com/minimistjs/minimist/commit/980d7ac61a0b4bd552711251ac107d506b23e41f"><code>980d7ac</code></a></li>\n</ul>\n<h2><a href="https://github.com/minimistjs/minimist/compare/v1.2.6...v1.2.7">v1.2.7</a> - 2022-10-10</h2>\n<h3>Commits</h3>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a href="https://github.com/minimistjs/minimist/commit/6901ee286bc4c16da6830b48b46ce1574703cea1"><code>6901ee2</code></a> v1.2.8</li>\n<li><a href="https://github.com/minimistjs/minimist/commit/a0267947c7870fc5847cf2d437fbe33f392767da"><code>a026794</code></a> Merge tag \'v0.2.3\'</li>\n<li><a href="https://github.com/minimistjs/minimist/commit/c0b26618322e94adea26c68e613ef0be482c6c63"><code>c0b2661</code></a> v0.2.3</li>\n<li><a href="https://github.com/minimistjs/minimist/commit/63b8fee87b8e7a003216d5d77ba5d6decf3cfb0d"><code>63b8fee</code></a> [Fix] Fix long option followed by single dash (<a href="https://github-redirect.dependabot.com/minimistjs/minimist/issues/17">#17</a>)</li>\n<li><a href="https://github.com/minimistjs/minimist/commit/72239e6f0ea77d8be0ad4f682b7ae7d142144395"><code>72239e6</code></a> [Tests] Remove duplicate test (<a href="https://github-redirect.dependabot.com/minimistjs/minimist/issues/12">#12</a>)</li>\n<li><a href="https://github.com/minimistjs/minimist/commit/34b0f1ccaa45183c3c4f06a91f9b405180a6f982"><code>34b0f1c</code></a> [eslint] fix indentation</li>\n<li><a href="https://github.com/minimistjs/minimist/commit/3226afaf09e9d127ca369742437fe6e88f752d6b"><code>3226afa</code></a> [Dev Deps] add missing <code>npmignore</code> dev dep</li>\n<li><a href="https://github.com/minimistjs/minimist/commit/098873c213cdb7c92e55ae1ef5aa1af3a8192a79"><code>098873c</code></a> [Dev Deps] update <code>@ljharb/eslint-config</code>, <code>aud</code></li>\n<li><a href="https://github.com/minimistjs/minimist/commit/9ec4d279ced72ea2f60237218e71cc03aa0dfdd6"><code>9ec4d27</code></a> [Fix] Fix long option followed by single dash</li>\n<li><a href="https://github.com/minimistjs/minimist/commit/ba92fe6ebbdc0431cca9a2ea8f27beb492f5e4ec"><code>ba92fe6</code></a> [actions] Avoid 0.6 tests due to build failures</li>\n<li>Additional commits viewable in <a href="https://github.com/minimistjs/minimist/compare/v1.2.5...v1.2.8">compare view</a></li>\n</ul>\n</details>\n<details>\n<summary>Maintainer changes</summary>\n<p>This version was pushed to npm by <a href="https://www.npmjs.com/~ljharb">ljharb</a>, a new releaser for minimist since your current version.</p>\n</details>\n<br />\n\n\n[![Dependabot compatibility score](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=minimist&package-manager=npm_and_yarn&previous-version=1.2.5&new-version=1.2.8)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don\'t alter it yourself. You can also trigger a rebase manually by commenting `@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits that have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after your CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge and block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating it. You can achieve the same result by closing it manually\n- `@dependabot ignore this major version` will close this PR and stop Dependabot creating any more for this major version (unless you reopen the PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop Dependabot creating any more for this minor version (unless you reopen the PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop Dependabot creating any more for this dependency (unless you reopen the PR or upgrade to it yourself)\n- `@dependabot use these labels` will set the current labels as the default for future PRs for this repo and language\n- `@dependabot use these reviewers` will set the current reviewers as the default for future PRs for this repo and language\n- `@dependabot use these assignees` will set the current assignees as the default for future PRs for this repo and language\n- `@dependabot use this milestone` will set the current milestone as the default for future PRs for this repo and language\n\nYou can disable automated security fix PRs for this repo from the [Security Alerts page](https://github.com/facebook/react/network/alerts).\n\n</details>',
    created_at: "2023-03-01T00:25:38Z",
    updated_at: "2023-03-02T15:26:13Z",
    closed_at: "2023-03-02T15:25:44Z",
    merged_at: null,
    merge_commit_sha: "340ce314c8119b842eb78d039ab6644201c2261b",
    assignee: null,
    assignees: [],
    requested_reviewers: [],
    requested_teams: [],
    labels: [
      {
        id: 196858374,
        node_id: "MDU6TGFiZWwxOTY4NTgzNzQ=",
        url: "https://api.github.com/repos/facebook/react/labels/CLA%20Signed",
        name: "CLA Signed",
        color: "e7e7e7",
        default: false,
        description: "",
      },
      {
        id: 1757816973,
        node_id: "MDU6TGFiZWwxNzU3ODE2OTcz",
        url: "https://api.github.com/repos/facebook/react/labels/dependencies",
        name: "dependencies",
        color: "0366d6",
        default: false,
        description: "Pull requests that update a dependency file",
      },
    ],
    milestone: null,
    draft: false,
    commits_url:
      "https://api.github.com/repos/facebook/react/pulls/26271/commits",
    review_comments_url:
      "https://api.github.com/repos/facebook/react/pulls/26271/comments",
    review_comment_url:
      "https://api.github.com/repos/facebook/react/pulls/comments{/number}",
    comments_url:
      "https://api.github.com/repos/facebook/react/issues/26271/comments",
    statuses_url:
      "https://api.github.com/repos/facebook/react/statuses/e01909d632ad3cc382bb7e7eaea201ac1273028e",
    head: {
      label: "facebook:dependabot/npm_and_yarn/fixtures/ssr2/minimist-1.2.8",
      ref: "dependabot/npm_and_yarn/fixtures/ssr2/minimist-1.2.8",
      sha: "e01909d632ad3cc382bb7e7eaea201ac1273028e",
      user: {
        login: "facebook",
        id: 69631,
        node_id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
        avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/facebook",
        html_url: "https://github.com/facebook",
        followers_url: "https://api.github.com/users/facebook/followers",
        following_url:
          "https://api.github.com/users/facebook/following{/other_user}",
        gists_url: "https://api.github.com/users/facebook/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/facebook/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/facebook/subscriptions",
        organizations_url: "https://api.github.com/users/facebook/orgs",
        repos_url: "https://api.github.com/users/facebook/repos",
        events_url: "https://api.github.com/users/facebook/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/facebook/received_events",
        type: "Organization",
        site_admin: false,
      },
      repo: {
        id: 10270250,
        node_id: "MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==",
        name: "react",
        full_name: "facebook/react",
        private: false,
        owner: {
          login: "facebook",
          id: 69631,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
          avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/facebook",
          html_url: "https://github.com/facebook",
          followers_url: "https://api.github.com/users/facebook/followers",
          following_url:
            "https://api.github.com/users/facebook/following{/other_user}",
          gists_url: "https://api.github.com/users/facebook/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/facebook/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/facebook/subscriptions",
          organizations_url: "https://api.github.com/users/facebook/orgs",
          repos_url: "https://api.github.com/users/facebook/repos",
          events_url: "https://api.github.com/users/facebook/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/facebook/received_events",
          type: "Organization",
          site_admin: false,
        },
        html_url: "https://github.com/facebook/react",
        description:
          "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
        fork: false,
        url: "https://api.github.com/repos/facebook/react",
        forks_url: "https://api.github.com/repos/facebook/react/forks",
        keys_url: "https://api.github.com/repos/facebook/react/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/facebook/react/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/facebook/react/teams",
        hooks_url: "https://api.github.com/repos/facebook/react/hooks",
        issue_events_url:
          "https://api.github.com/repos/facebook/react/issues/events{/number}",
        events_url: "https://api.github.com/repos/facebook/react/events",
        assignees_url:
          "https://api.github.com/repos/facebook/react/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/facebook/react/branches{/branch}",
        tags_url: "https://api.github.com/repos/facebook/react/tags",
        blobs_url:
          "https://api.github.com/repos/facebook/react/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/facebook/react/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/facebook/react/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/facebook/react/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/facebook/react/statuses/{sha}",
        languages_url: "https://api.github.com/repos/facebook/react/languages",
        stargazers_url:
          "https://api.github.com/repos/facebook/react/stargazers",
        contributors_url:
          "https://api.github.com/repos/facebook/react/contributors",
        subscribers_url:
          "https://api.github.com/repos/facebook/react/subscribers",
        subscription_url:
          "https://api.github.com/repos/facebook/react/subscription",
        commits_url:
          "https://api.github.com/repos/facebook/react/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/facebook/react/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/facebook/react/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/facebook/react/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/facebook/react/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/facebook/react/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/facebook/react/merges",
        archive_url:
          "https://api.github.com/repos/facebook/react/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/facebook/react/downloads",
        issues_url:
          "https://api.github.com/repos/facebook/react/issues{/number}",
        pulls_url: "https://api.github.com/repos/facebook/react/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/facebook/react/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/facebook/react/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/facebook/react/labels{/name}",
        releases_url:
          "https://api.github.com/repos/facebook/react/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/facebook/react/deployments",
        created_at: "2013-05-24T16:15:54Z",
        updated_at: "2023-03-03T10:33:02Z",
        pushed_at: "2023-03-03T09:43:05Z",
        git_url: "git://github.com/facebook/react.git",
        ssh_url: "git@github.com:facebook/react.git",
        clone_url: "https://github.com/facebook/react.git",
        svn_url: "https://github.com/facebook/react",
        homepage: "https://reactjs.org",
        size: 276472,
        stargazers_count: 203166,
        watchers_count: 203166,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: true,
        has_discussions: false,
        forks_count: 42233,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 1187,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
          "declarative",
          "frontend",
          "javascript",
          "library",
          "react",
          "ui",
        ],
        visibility: "public",
        forks: 42233,
        open_issues: 1187,
        watchers: 203166,
        default_branch: "main",
      },
    },
    base: {
      label: "facebook:main",
      ref: "main",
      sha: "40755c01a68de4b44bc24cca7f03a46140f31d5e",
      user: {
        login: "facebook",
        id: 69631,
        node_id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
        avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/facebook",
        html_url: "https://github.com/facebook",
        followers_url: "https://api.github.com/users/facebook/followers",
        following_url:
          "https://api.github.com/users/facebook/following{/other_user}",
        gists_url: "https://api.github.com/users/facebook/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/facebook/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/facebook/subscriptions",
        organizations_url: "https://api.github.com/users/facebook/orgs",
        repos_url: "https://api.github.com/users/facebook/repos",
        events_url: "https://api.github.com/users/facebook/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/facebook/received_events",
        type: "Organization",
        site_admin: false,
      },
      repo: {
        id: 10270250,
        node_id: "MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==",
        name: "react",
        full_name: "facebook/react",
        private: false,
        owner: {
          login: "facebook",
          id: 69631,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
          avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/facebook",
          html_url: "https://github.com/facebook",
          followers_url: "https://api.github.com/users/facebook/followers",
          following_url:
            "https://api.github.com/users/facebook/following{/other_user}",
          gists_url: "https://api.github.com/users/facebook/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/facebook/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/facebook/subscriptions",
          organizations_url: "https://api.github.com/users/facebook/orgs",
          repos_url: "https://api.github.com/users/facebook/repos",
          events_url: "https://api.github.com/users/facebook/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/facebook/received_events",
          type: "Organization",
          site_admin: false,
        },
        html_url: "https://github.com/facebook/react",
        description:
          "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
        fork: false,
        url: "https://api.github.com/repos/facebook/react",
        forks_url: "https://api.github.com/repos/facebook/react/forks",
        keys_url: "https://api.github.com/repos/facebook/react/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/facebook/react/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/facebook/react/teams",
        hooks_url: "https://api.github.com/repos/facebook/react/hooks",
        issue_events_url:
          "https://api.github.com/repos/facebook/react/issues/events{/number}",
        events_url: "https://api.github.com/repos/facebook/react/events",
        assignees_url:
          "https://api.github.com/repos/facebook/react/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/facebook/react/branches{/branch}",
        tags_url: "https://api.github.com/repos/facebook/react/tags",
        blobs_url:
          "https://api.github.com/repos/facebook/react/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/facebook/react/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/facebook/react/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/facebook/react/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/facebook/react/statuses/{sha}",
        languages_url: "https://api.github.com/repos/facebook/react/languages",
        stargazers_url:
          "https://api.github.com/repos/facebook/react/stargazers",
        contributors_url:
          "https://api.github.com/repos/facebook/react/contributors",
        subscribers_url:
          "https://api.github.com/repos/facebook/react/subscribers",
        subscription_url:
          "https://api.github.com/repos/facebook/react/subscription",
        commits_url:
          "https://api.github.com/repos/facebook/react/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/facebook/react/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/facebook/react/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/facebook/react/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/facebook/react/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/facebook/react/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/facebook/react/merges",
        archive_url:
          "https://api.github.com/repos/facebook/react/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/facebook/react/downloads",
        issues_url:
          "https://api.github.com/repos/facebook/react/issues{/number}",
        pulls_url: "https://api.github.com/repos/facebook/react/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/facebook/react/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/facebook/react/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/facebook/react/labels{/name}",
        releases_url:
          "https://api.github.com/repos/facebook/react/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/facebook/react/deployments",
        created_at: "2013-05-24T16:15:54Z",
        updated_at: "2023-03-03T10:33:02Z",
        pushed_at: "2023-03-03T09:43:05Z",
        git_url: "git://github.com/facebook/react.git",
        ssh_url: "git@github.com:facebook/react.git",
        clone_url: "https://github.com/facebook/react.git",
        svn_url: "https://github.com/facebook/react",
        homepage: "https://reactjs.org",
        size: 276472,
        stargazers_count: 203166,
        watchers_count: 203166,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: true,
        has_discussions: false,
        forks_count: 42233,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 1187,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
          "declarative",
          "frontend",
          "javascript",
          "library",
          "react",
          "ui",
        ],
        visibility: "public",
        forks: 42233,
        open_issues: 1187,
        watchers: 203166,
        default_branch: "main",
      },
    },
    _links: {
      self: {
        href: "https://api.github.com/repos/facebook/react/pulls/26271",
      },
      html: {
        href: "https://github.com/facebook/react/pull/26271",
      },
      issue: {
        href: "https://api.github.com/repos/facebook/react/issues/26271",
      },
      comments: {
        href: "https://api.github.com/repos/facebook/react/issues/26271/comments",
      },
      review_comments: {
        href: "https://api.github.com/repos/facebook/react/pulls/26271/comments",
      },
      review_comment: {
        href: "https://api.github.com/repos/facebook/react/pulls/comments{/number}",
      },
      commits: {
        href: "https://api.github.com/repos/facebook/react/pulls/26271/commits",
      },
      statuses: {
        href: "https://api.github.com/repos/facebook/react/statuses/e01909d632ad3cc382bb7e7eaea201ac1273028e",
      },
    },
    author_association: "CONTRIBUTOR",
    auto_merge: null,
    active_lock_reason: null,
  },
  {
    url: "https://api.github.com/repos/facebook/react/pulls/26270",
    id: 1257952934,
    node_id: "PR_kwDOAJy2Ks5K-tam",
    html_url: "https://github.com/facebook/react/pull/26270",
    diff_url: "https://github.com/facebook/react/pull/26270.diff",
    patch_url: "https://github.com/facebook/react/pull/26270.patch",
    issue_url: "https://api.github.com/repos/facebook/react/issues/26270",
    number: 26270,
    state: "closed",
    locked: false,
    title:
      "Bump minimist from 1.2.0 to 1.2.8 in /fixtures/packaging/browserify/dev",
    user: {
      login: "dependabot[bot]",
      id: 49699333,
      node_id: "MDM6Qm90NDk2OTkzMzM=",
      avatar_url: "https://avatars.githubusercontent.com/in/29110?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/dependabot%5Bbot%5D",
      html_url: "https://github.com/apps/dependabot",
      followers_url:
        "https://api.github.com/users/dependabot%5Bbot%5D/followers",
      following_url:
        "https://api.github.com/users/dependabot%5Bbot%5D/following{/other_user}",
      gists_url:
        "https://api.github.com/users/dependabot%5Bbot%5D/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/dependabot%5Bbot%5D/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/dependabot%5Bbot%5D/subscriptions",
      organizations_url:
        "https://api.github.com/users/dependabot%5Bbot%5D/orgs",
      repos_url: "https://api.github.com/users/dependabot%5Bbot%5D/repos",
      events_url:
        "https://api.github.com/users/dependabot%5Bbot%5D/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/dependabot%5Bbot%5D/received_events",
      type: "Bot",
      site_admin: false,
    },
    body: 'Bumps [minimist](https://github.com/minimistjs/minimist) from 1.2.0 to 1.2.8.\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a href="https://github.com/minimistjs/minimist/blob/main/CHANGELOG.md">minimist\'s changelog</a>.</em></p>\n<blockquote>\n<h2><a href="https://github.com/minimistjs/minimist/compare/v1.2.7...v1.2.8">v1.2.8</a> - 2023-02-09</h2>\n<h3>Merged</h3>\n<ul>\n<li>[Fix] Fix long option followed by single dash <a href="https://github-redirect.dependabot.com/minimistjs/minimist/pull/17"><code>[#17](https://github.com/minimistjs/minimist/issues/17)</code></a></li>\n<li>[Tests] Remove duplicate test <a href="https://github-redirect.dependabot.com/minimistjs/minimist/pull/12"><code>[#12](https://github.com/minimistjs/minimist/issues/12)</code></a></li>\n<li>[Fix] opt.string works with multiple aliases <a href="https://github-redirect.dependabot.com/minimistjs/minimist/pull/10"><code>[#10](https://github.com/minimistjs/minimist/issues/10)</code></a></li>\n</ul>\n<h3>Fixed</h3>\n<ul>\n<li>[Fix] Fix long option followed by single dash (<a href="https://github-redirect.dependabot.com/minimistjs/minimist/issues/17">#17</a>) <a href="https://github-redirect.dependabot.com/minimistjs/minimist/issues/15"><code>[#15](https://github.com/minimistjs/minimist/issues/15)</code></a></li>\n<li>[Tests] Remove duplicate test (<a href="https://github-redirect.dependabot.com/minimistjs/minimist/issues/12">#12</a>) <a href="https://github-redirect.dependabot.com/minimistjs/minimist/issues/8"><code>[#8](https://github.com/minimistjs/minimist/issues/8)</code></a></li>\n<li>[Fix] Fix long option followed by single dash <a href="https://github-redirect.dependabot.com/minimistjs/minimist/issues/15"><code>[#15](https://github.com/minimistjs/minimist/issues/15)</code></a></li>\n<li>[Fix] opt.string works with multiple aliases (<a href="https://github-redirect.dependabot.com/minimistjs/minimist/issues/10">#10</a>) <a href="https://github-redirect.dependabot.com/minimistjs/minimist/issues/9"><code>[#9](https://github.com/minimistjs/minimist/issues/9)</code></a></li>\n<li>[Fix] Fix handling of short option with non-trivial equals <a href="https://github-redirect.dependabot.com/minimistjs/minimist/issues/5"><code>[#5](https://github.com/minimistjs/minimist/issues/5)</code></a></li>\n<li>[Tests] Remove duplicate test <a href="https://github-redirect.dependabot.com/minimistjs/minimist/issues/8"><code>[#8](https://github.com/minimistjs/minimist/issues/8)</code></a></li>\n<li>[Fix] opt.string works with multiple aliases <a href="https://github-redirect.dependabot.com/minimistjs/minimist/issues/9"><code>[#9](https://github.com/minimistjs/minimist/issues/9)</code></a></li>\n</ul>\n<h3>Commits</h3>\n<ul>\n<li>Merge tag \'v0.2.3\' <a href="https://github.com/minimistjs/minimist/commit/a0267947c7870fc5847cf2d437fbe33f392767da"><code>a026794</code></a></li>\n<li>[eslint] fix indentation and whitespace <a href="https://github.com/minimistjs/minimist/commit/5368ca4147e974138a54cc0dc4cea8f756546b70"><code>5368ca4</code></a></li>\n<li>[eslint] fix indentation and whitespace <a href="https://github.com/minimistjs/minimist/commit/e5f5067259ceeaf0b098d14bec910f87e58708c7"><code>e5f5067</code></a></li>\n<li>[eslint] more cleanup <a href="https://github.com/minimistjs/minimist/commit/62fde7d935f83417fb046741531a9e2346a36976"><code>62fde7d</code></a></li>\n<li>[eslint] more cleanup <a href="https://github.com/minimistjs/minimist/commit/36ac5d0d95e4947d074e5737d94814034ca335d1"><code>36ac5d0</code></a></li>\n<li>[meta] add <code>auto-changelog</code> <a href="https://github.com/minimistjs/minimist/commit/73923d223553fca08b1ba77e3fbc2a492862ae4c"><code>73923d2</code></a></li>\n<li>[actions] add reusable workflows <a href="https://github.com/minimistjs/minimist/commit/d80727df77bfa9e631044d7f16368d8f09242c91"><code>d80727d</code></a></li>\n<li>[eslint] add eslint; rules to enable later are warnings <a href="https://github.com/minimistjs/minimist/commit/48bc06a1b41f00e9cdf183db34f7a51ba70e98d4"><code>48bc06a</code></a></li>\n<li>[eslint] fix indentation <a href="https://github.com/minimistjs/minimist/commit/34b0f1ccaa45183c3c4f06a91f9b405180a6f982"><code>34b0f1c</code></a></li>\n<li>[readme] rename and add badges <a href="https://github.com/minimistjs/minimist/commit/5df0fe49211bd09a3636f8686a7cb3012c3e98f0"><code>5df0fe4</code></a></li>\n<li>[Dev Deps] switch from <code>covert</code> to <code>nyc</code> <a href="https://github.com/minimistjs/minimist/commit/a48b128fdb8d427dfb20a15273f83e38d97bef07"><code>a48b128</code></a></li>\n<li>[Dev Deps] update <code>covert</code>, <code>tape</code>; remove unnecessary <code>tap</code> <a href="https://github.com/minimistjs/minimist/commit/f0fb958e9a1fe980cdffc436a211b0bda58f621b"><code>f0fb958</code></a></li>\n<li>[meta] create FUNDING.yml; add <code>funding</code> in package.json <a href="https://github.com/minimistjs/minimist/commit/3639e0c819359a366387e425ab6eabf4c78d3caa"><code>3639e0c</code></a></li>\n<li>[meta] use <code>npmignore</code> to autogenerate an npmignore file <a href="https://github.com/minimistjs/minimist/commit/be2e038c342d8333b32f0fde67a0026b79c8150e"><code>be2e038</code></a></li>\n<li>Only apps should have lockfiles <a href="https://github.com/minimistjs/minimist/commit/282b570e7489d01b03f2d6d3dabf79cd3e5f84cf"><code>282b570</code></a></li>\n<li>isConstructorOrProto adapted from PR <a href="https://github.com/minimistjs/minimist/commit/ef9153fc52b6cea0744b2239921c5dcae4697f11"><code>ef9153f</code></a></li>\n<li>[Dev Deps] update <code>@ljharb/eslint-config</code>, <code>aud</code> <a href="https://github.com/minimistjs/minimist/commit/098873c213cdb7c92e55ae1ef5aa1af3a8192a79"><code>098873c</code></a></li>\n<li>[Dev Deps] update <code>@ljharb/eslint-config</code>, <code>aud</code> <a href="https://github.com/minimistjs/minimist/commit/3124ed3e46306301ebb3c834874ce0241555c2c4"><code>3124ed3</code></a></li>\n<li>[meta] add <code>safe-publish-latest</code> <a href="https://github.com/minimistjs/minimist/commit/4b927de696d561c636b4f43bf49d4597cb36d6d6"><code>4b927de</code></a></li>\n<li>[Tests] add <code>aud</code> in <code>posttest</code> <a href="https://github.com/minimistjs/minimist/commit/b32d9bd0ab340f4e9f8c3a97ff2a4424f25fab8c"><code>b32d9bd</code></a></li>\n<li>[meta] update repo URLs <a href="https://github.com/minimistjs/minimist/commit/f9fdfc032c54884d9a9996a390c63cd0719bbe1a"><code>f9fdfc0</code></a></li>\n<li>[actions] Avoid 0.6 tests due to build failures <a href="https://github.com/minimistjs/minimist/commit/ba92fe6ebbdc0431cca9a2ea8f27beb492f5e4ec"><code>ba92fe6</code></a></li>\n<li>[Dev Deps] update <code>tape</code> <a href="https://github.com/minimistjs/minimist/commit/950eaa74f112e04d23e9c606c67472c46739b473"><code>950eaa7</code></a></li>\n<li>[Dev Deps] add missing <code>npmignore</code> dev dep <a href="https://github.com/minimistjs/minimist/commit/3226afaf09e9d127ca369742437fe6e88f752d6b"><code>3226afa</code></a></li>\n<li>Merge tag \'v0.2.2\' <a href="https://github.com/minimistjs/minimist/commit/980d7ac61a0b4bd552711251ac107d506b23e41f"><code>980d7ac</code></a></li>\n</ul>\n<h2><a href="https://github.com/minimistjs/minimist/compare/v1.2.6...v1.2.7">v1.2.7</a> - 2022-10-10</h2>\n<h3>Commits</h3>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a href="https://github.com/minimistjs/minimist/commit/6901ee286bc4c16da6830b48b46ce1574703cea1"><code>6901ee2</code></a> v1.2.8</li>\n<li><a href="https://github.com/minimistjs/minimist/commit/a0267947c7870fc5847cf2d437fbe33f392767da"><code>a026794</code></a> Merge tag \'v0.2.3\'</li>\n<li><a href="https://github.com/minimistjs/minimist/commit/c0b26618322e94adea26c68e613ef0be482c6c63"><code>c0b2661</code></a> v0.2.3</li>\n<li><a href="https://github.com/minimistjs/minimist/commit/63b8fee87b8e7a003216d5d77ba5d6decf3cfb0d"><code>63b8fee</code></a> [Fix] Fix long option followed by single dash (<a href="https://github-redirect.dependabot.com/minimistjs/minimist/issues/17">#17</a>)</li>\n<li><a href="https://github.com/minimistjs/minimist/commit/72239e6f0ea77d8be0ad4f682b7ae7d142144395"><code>72239e6</code></a> [Tests] Remove duplicate test (<a href="https://github-redirect.dependabot.com/minimistjs/minimist/issues/12">#12</a>)</li>\n<li><a href="https://github.com/minimistjs/minimist/commit/34b0f1ccaa45183c3c4f06a91f9b405180a6f982"><code>34b0f1c</code></a> [eslint] fix indentation</li>\n<li><a href="https://github.com/minimistjs/minimist/commit/3226afaf09e9d127ca369742437fe6e88f752d6b"><code>3226afa</code></a> [Dev Deps] add missing <code>npmignore</code> dev dep</li>\n<li><a href="https://github.com/minimistjs/minimist/commit/098873c213cdb7c92e55ae1ef5aa1af3a8192a79"><code>098873c</code></a> [Dev Deps] update <code>@ljharb/eslint-config</code>, <code>aud</code></li>\n<li><a href="https://github.com/minimistjs/minimist/commit/9ec4d279ced72ea2f60237218e71cc03aa0dfdd6"><code>9ec4d27</code></a> [Fix] Fix long option followed by single dash</li>\n<li><a href="https://github.com/minimistjs/minimist/commit/ba92fe6ebbdc0431cca9a2ea8f27beb492f5e4ec"><code>ba92fe6</code></a> [actions] Avoid 0.6 tests due to build failures</li>\n<li>Additional commits viewable in <a href="https://github.com/minimistjs/minimist/compare/v1.2.0...v1.2.8">compare view</a></li>\n</ul>\n</details>\n<details>\n<summary>Maintainer changes</summary>\n<p>This version was pushed to npm by <a href="https://www.npmjs.com/~ljharb">ljharb</a>, a new releaser for minimist since your current version.</p>\n</details>\n<br />\n\n\n[![Dependabot compatibility score](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=minimist&package-manager=npm_and_yarn&previous-version=1.2.0&new-version=1.2.8)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don\'t alter it yourself. You can also trigger a rebase manually by commenting `@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits that have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after your CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge and block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating it. You can achieve the same result by closing it manually\n- `@dependabot ignore this major version` will close this PR and stop Dependabot creating any more for this major version (unless you reopen the PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop Dependabot creating any more for this minor version (unless you reopen the PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop Dependabot creating any more for this dependency (unless you reopen the PR or upgrade to it yourself)\n- `@dependabot use these labels` will set the current labels as the default for future PRs for this repo and language\n- `@dependabot use these reviewers` will set the current reviewers as the default for future PRs for this repo and language\n- `@dependabot use these assignees` will set the current assignees as the default for future PRs for this repo and language\n- `@dependabot use this milestone` will set the current milestone as the default for future PRs for this repo and language\n\nYou can disable automated security fix PRs for this repo from the [Security Alerts page](https://github.com/facebook/react/network/alerts).\n\n</details>',
    created_at: "2023-02-28T23:55:03Z",
    updated_at: "2023-03-02T15:26:13Z",
    closed_at: "2023-03-02T15:25:43Z",
    merged_at: null,
    merge_commit_sha: "777663d5c789c3ac5796a71cebe882968ce2652f",
    assignee: null,
    assignees: [],
    requested_reviewers: [],
    requested_teams: [],
    labels: [
      {
        id: 196858374,
        node_id: "MDU6TGFiZWwxOTY4NTgzNzQ=",
        url: "https://api.github.com/repos/facebook/react/labels/CLA%20Signed",
        name: "CLA Signed",
        color: "e7e7e7",
        default: false,
        description: "",
      },
      {
        id: 1757816973,
        node_id: "MDU6TGFiZWwxNzU3ODE2OTcz",
        url: "https://api.github.com/repos/facebook/react/labels/dependencies",
        name: "dependencies",
        color: "0366d6",
        default: false,
        description: "Pull requests that update a dependency file",
      },
    ],
    milestone: null,
    draft: false,
    commits_url:
      "https://api.github.com/repos/facebook/react/pulls/26270/commits",
    review_comments_url:
      "https://api.github.com/repos/facebook/react/pulls/26270/comments",
    review_comment_url:
      "https://api.github.com/repos/facebook/react/pulls/comments{/number}",
    comments_url:
      "https://api.github.com/repos/facebook/react/issues/26270/comments",
    statuses_url:
      "https://api.github.com/repos/facebook/react/statuses/95824674de0278037db575608f10c4583871ff31",
    head: {
      label:
        "facebook:dependabot/npm_and_yarn/fixtures/packaging/browserify/dev/minimist-1.2.8",
      ref: "dependabot/npm_and_yarn/fixtures/packaging/browserify/dev/minimist-1.2.8",
      sha: "95824674de0278037db575608f10c4583871ff31",
      user: {
        login: "facebook",
        id: 69631,
        node_id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
        avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/facebook",
        html_url: "https://github.com/facebook",
        followers_url: "https://api.github.com/users/facebook/followers",
        following_url:
          "https://api.github.com/users/facebook/following{/other_user}",
        gists_url: "https://api.github.com/users/facebook/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/facebook/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/facebook/subscriptions",
        organizations_url: "https://api.github.com/users/facebook/orgs",
        repos_url: "https://api.github.com/users/facebook/repos",
        events_url: "https://api.github.com/users/facebook/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/facebook/received_events",
        type: "Organization",
        site_admin: false,
      },
      repo: {
        id: 10270250,
        node_id: "MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==",
        name: "react",
        full_name: "facebook/react",
        private: false,
        owner: {
          login: "facebook",
          id: 69631,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
          avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/facebook",
          html_url: "https://github.com/facebook",
          followers_url: "https://api.github.com/users/facebook/followers",
          following_url:
            "https://api.github.com/users/facebook/following{/other_user}",
          gists_url: "https://api.github.com/users/facebook/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/facebook/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/facebook/subscriptions",
          organizations_url: "https://api.github.com/users/facebook/orgs",
          repos_url: "https://api.github.com/users/facebook/repos",
          events_url: "https://api.github.com/users/facebook/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/facebook/received_events",
          type: "Organization",
          site_admin: false,
        },
        html_url: "https://github.com/facebook/react",
        description:
          "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
        fork: false,
        url: "https://api.github.com/repos/facebook/react",
        forks_url: "https://api.github.com/repos/facebook/react/forks",
        keys_url: "https://api.github.com/repos/facebook/react/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/facebook/react/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/facebook/react/teams",
        hooks_url: "https://api.github.com/repos/facebook/react/hooks",
        issue_events_url:
          "https://api.github.com/repos/facebook/react/issues/events{/number}",
        events_url: "https://api.github.com/repos/facebook/react/events",
        assignees_url:
          "https://api.github.com/repos/facebook/react/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/facebook/react/branches{/branch}",
        tags_url: "https://api.github.com/repos/facebook/react/tags",
        blobs_url:
          "https://api.github.com/repos/facebook/react/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/facebook/react/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/facebook/react/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/facebook/react/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/facebook/react/statuses/{sha}",
        languages_url: "https://api.github.com/repos/facebook/react/languages",
        stargazers_url:
          "https://api.github.com/repos/facebook/react/stargazers",
        contributors_url:
          "https://api.github.com/repos/facebook/react/contributors",
        subscribers_url:
          "https://api.github.com/repos/facebook/react/subscribers",
        subscription_url:
          "https://api.github.com/repos/facebook/react/subscription",
        commits_url:
          "https://api.github.com/repos/facebook/react/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/facebook/react/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/facebook/react/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/facebook/react/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/facebook/react/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/facebook/react/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/facebook/react/merges",
        archive_url:
          "https://api.github.com/repos/facebook/react/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/facebook/react/downloads",
        issues_url:
          "https://api.github.com/repos/facebook/react/issues{/number}",
        pulls_url: "https://api.github.com/repos/facebook/react/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/facebook/react/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/facebook/react/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/facebook/react/labels{/name}",
        releases_url:
          "https://api.github.com/repos/facebook/react/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/facebook/react/deployments",
        created_at: "2013-05-24T16:15:54Z",
        updated_at: "2023-03-03T10:33:02Z",
        pushed_at: "2023-03-03T09:43:05Z",
        git_url: "git://github.com/facebook/react.git",
        ssh_url: "git@github.com:facebook/react.git",
        clone_url: "https://github.com/facebook/react.git",
        svn_url: "https://github.com/facebook/react",
        homepage: "https://reactjs.org",
        size: 276472,
        stargazers_count: 203166,
        watchers_count: 203166,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: true,
        has_discussions: false,
        forks_count: 42233,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 1187,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
          "declarative",
          "frontend",
          "javascript",
          "library",
          "react",
          "ui",
        ],
        visibility: "public",
        forks: 42233,
        open_issues: 1187,
        watchers: 203166,
        default_branch: "main",
      },
    },
    base: {
      label: "facebook:main",
      ref: "main",
      sha: "38509cce9b2f8b2046d2952645879e2f474ca745",
      user: {
        login: "facebook",
        id: 69631,
        node_id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
        avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/facebook",
        html_url: "https://github.com/facebook",
        followers_url: "https://api.github.com/users/facebook/followers",
        following_url:
          "https://api.github.com/users/facebook/following{/other_user}",
        gists_url: "https://api.github.com/users/facebook/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/facebook/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/facebook/subscriptions",
        organizations_url: "https://api.github.com/users/facebook/orgs",
        repos_url: "https://api.github.com/users/facebook/repos",
        events_url: "https://api.github.com/users/facebook/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/facebook/received_events",
        type: "Organization",
        site_admin: false,
      },
      repo: {
        id: 10270250,
        node_id: "MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==",
        name: "react",
        full_name: "facebook/react",
        private: false,
        owner: {
          login: "facebook",
          id: 69631,
          node_id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
          avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/facebook",
          html_url: "https://github.com/facebook",
          followers_url: "https://api.github.com/users/facebook/followers",
          following_url:
            "https://api.github.com/users/facebook/following{/other_user}",
          gists_url: "https://api.github.com/users/facebook/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/facebook/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/facebook/subscriptions",
          organizations_url: "https://api.github.com/users/facebook/orgs",
          repos_url: "https://api.github.com/users/facebook/repos",
          events_url: "https://api.github.com/users/facebook/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/facebook/received_events",
          type: "Organization",
          site_admin: false,
        },
        html_url: "https://github.com/facebook/react",
        description:
          "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
        fork: false,
        url: "https://api.github.com/repos/facebook/react",
        forks_url: "https://api.github.com/repos/facebook/react/forks",
        keys_url: "https://api.github.com/repos/facebook/react/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/facebook/react/collaborators{/collaborator}",
        teams_url: "https://api.github.com/repos/facebook/react/teams",
        hooks_url: "https://api.github.com/repos/facebook/react/hooks",
        issue_events_url:
          "https://api.github.com/repos/facebook/react/issues/events{/number}",
        events_url: "https://api.github.com/repos/facebook/react/events",
        assignees_url:
          "https://api.github.com/repos/facebook/react/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/facebook/react/branches{/branch}",
        tags_url: "https://api.github.com/repos/facebook/react/tags",
        blobs_url:
          "https://api.github.com/repos/facebook/react/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/facebook/react/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/facebook/react/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/facebook/react/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/facebook/react/statuses/{sha}",
        languages_url: "https://api.github.com/repos/facebook/react/languages",
        stargazers_url:
          "https://api.github.com/repos/facebook/react/stargazers",
        contributors_url:
          "https://api.github.com/repos/facebook/react/contributors",
        subscribers_url:
          "https://api.github.com/repos/facebook/react/subscribers",
        subscription_url:
          "https://api.github.com/repos/facebook/react/subscription",
        commits_url:
          "https://api.github.com/repos/facebook/react/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/facebook/react/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/facebook/react/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/facebook/react/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/facebook/react/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/facebook/react/compare/{base}...{head}",
        merges_url: "https://api.github.com/repos/facebook/react/merges",
        archive_url:
          "https://api.github.com/repos/facebook/react/{archive_format}{/ref}",
        downloads_url: "https://api.github.com/repos/facebook/react/downloads",
        issues_url:
          "https://api.github.com/repos/facebook/react/issues{/number}",
        pulls_url: "https://api.github.com/repos/facebook/react/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/facebook/react/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/facebook/react/notifications{?since,all,participating}",
        labels_url: "https://api.github.com/repos/facebook/react/labels{/name}",
        releases_url:
          "https://api.github.com/repos/facebook/react/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/facebook/react/deployments",
        created_at: "2013-05-24T16:15:54Z",
        updated_at: "2023-03-03T10:33:02Z",
        pushed_at: "2023-03-03T09:43:05Z",
        git_url: "git://github.com/facebook/react.git",
        ssh_url: "git@github.com:facebook/react.git",
        clone_url: "https://github.com/facebook/react.git",
        svn_url: "https://github.com/facebook/react",
        homepage: "https://reactjs.org",
        size: 276472,
        stargazers_count: 203166,
        watchers_count: 203166,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: true,
        has_discussions: false,
        forks_count: 42233,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 1187,
        license: {
          key: "mit",
          name: "MIT License",
          spdx_id: "MIT",
          url: "https://api.github.com/licenses/mit",
          node_id: "MDc6TGljZW5zZTEz",
        },
        allow_forking: true,
        is_template: false,
        web_commit_signoff_required: false,
        topics: [
          "declarative",
          "frontend",
          "javascript",
          "library",
          "react",
          "ui",
        ],
        visibility: "public",
        forks: 42233,
        open_issues: 1187,
        watchers: 203166,
        default_branch: "main",
      },
    },
    _links: {
      self: {
        href: "https://api.github.com/repos/facebook/react/pulls/26270",
      },
      html: {
        href: "https://github.com/facebook/react/pull/26270",
      },
      issue: {
        href: "https://api.github.com/repos/facebook/react/issues/26270",
      },
      comments: {
        href: "https://api.github.com/repos/facebook/react/issues/26270/comments",
      },
      review_comments: {
        href: "https://api.github.com/repos/facebook/react/pulls/26270/comments",
      },
      review_comment: {
        href: "https://api.github.com/repos/facebook/react/pulls/comments{/number}",
      },
      commits: {
        href: "https://api.github.com/repos/facebook/react/pulls/26270/commits",
      },
      statuses: {
        href: "https://api.github.com/repos/facebook/react/statuses/95824674de0278037db575608f10c4583871ff31",
      },
    },
    author_association: "CONTRIBUTOR",
    auto_merge: null,
    active_lock_reason: null,
  },
];
export default mockPulls;
