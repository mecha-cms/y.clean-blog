<header class="masthead"<?= ($cover = $page->exist ? ($page->cover ?: $page->image) : "") ? ' style="background-image: url(\'' . $cover . '\');"' : ""; ?>>
  <div class="container position-relative px-4 px-lg-5">
    <div class="row gx-4 gx-lg-5 justify-content-center">
      <div class="col-md-10 col-lg-8 col-xl-7">
        <div class="<?= $site->is('pages') || $site->is('page') && !$site->has('parent') ? 'site' : 'post'; ?>-heading">
          <h1>
            <?= $page->exist ? $page->title : i('Error'); ?>
          </h1>
          <?php if ($site->is('pages') || $site->is('page') && !$site->has('parent')): ?>
            <span class="subheading">
              <?= $page->exist ? $page->description : i('404 not found.'); ?>
            </span>
          <?php else: ?>
            <h2 class="subheading">
              <?= $page->exist ? $page->description : i('404 not found.'); ?>
            </h2>
            <span class="meta">
              <?= i('Posted by %s on %s', [
                  self::get('page.author', ['author' => $page->author]),
                  $page->time('%B %d, %Y')
              ]); ?>
            </span>
          <?php endif; ?>
        </div>
      </div>
    </div>
  </div>
</header>