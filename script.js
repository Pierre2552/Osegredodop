<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <title>Menu com Links</title>
  <style>
    nav a {
      margin-right: 15px;
      color: #6b48ff; /* roxo */
      text-decoration: none;
      font-weight: bold;
      cursor: pointer;
    }
    nav a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>

  <nav>
    <a href="#" data-url="https://redacao.mmrcoss.tech/">Redação</a>
    <a href="#" data-url="https://alura.mmrcoss.tech/">Alura</a>
    <a href="#" data-url="https://doritus.mmrcoss.tech/">Doritus</a>
  </nav>

  <script>
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const url = link.getAttribute('data-url');
        window.location.href = url;
      });
    });
  </script>

</body>
</html>
