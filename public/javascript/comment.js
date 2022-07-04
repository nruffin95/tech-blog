async function upvoteClickHandler(event) {
  event.preventDefault();

  const title = document
    .querySelector('textarea[name="title"]')
    .value.trim();

  const comment_desc = document
    .querySelector('textarea[name="description"]')
    .value.trim();

  const comment_markdown = document
    .querySelector('textarea[name="markdown"]')
    .value.trim();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  // console.log(comment_title, comment_desc, comment_markdown);

  if (title) {
    const response = await fetch("/articles/New", {
      method: "POST",
      body: JSON.stringify({
        title,
        comment_desc,
        comment_markdown,
        id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document.getElementById("btn").addEventListener("click", upvoteClickHandler);

