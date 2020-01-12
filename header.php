<header class="masthead"<?= ($image = $page->image) ? ' style="background-image: url(\'' . $image . '\');"' : ""; ?>>
  <div class="overlay"></div>
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        <div class="site-heading">
          <h1>
            <?= $page->title; ?>
          </h1>
          <span class="subheading">
            <?= w($page->description, ['a', 'abbr', 'b', 'code', 'dfn', 'em', 'kbd', 'strong']); ?>
          </span>
        </div>
      </div>
    </div>
  </div>
</header>
