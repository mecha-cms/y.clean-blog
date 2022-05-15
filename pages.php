<?= self::enter(); ?>
<main class="container px-4 px-lg-5">
  <div class="row gx-4 gx-lg-5 justify-content-center">
    <div class="col-md-10 col-lg-8 col-xl-7">
      <?php if ($page->exist): ?>
        <?php foreach ($pages as $page): ?>
          <article class="post-preview">
            <a href="<?= $page->url; ?>">
              <h2 class="post-title">
                <?= w($page->title, ['abbr', 'b', 'code', 'dfn', 'em', 'i', 'strong']); ?>
              </h2>
              <h3 class="post-subtitle">
                <?= w($page->description ?? "", ['abbr', 'b', 'code', 'dfn', 'em', 'i', 'strong']); ?>
              </h3>
            </a>
            <p class="post-meta">
              <?= i('Posted by %s on %s', [
                  self::get('page.author', ['author' => $page->author]),
                  $page->time('%B %d, %Y')
              ]); ?>
            </p>
          </article>
          <hr class="my-4">
        <?php endforeach; ?>
        <div class="d-flex justify-content-between mb-4">
          <?php if ($prev = $pager->prev): ?>
            <a class="btn btn-primary text-uppercase" href="<?= $prev->link; ?>" rel="prev">
              &larr; <?= i('Newer Posts'); ?>
            </a>
          <?php endif; ?>
          <?php if ($next = $pager->next): ?>
            <a class="btn btn-primary text-uppercase" href="<?= $next->link; ?>" rel="next">
              <?= i('Older Posts'); ?> &rarr;
            </a>
          <?php endif; ?>
        </div>
      <?php else: ?>
        <p role="status">
          <?= i('%s does not exist.', 'Page'); ?>
        </p>
      <?php endif; ?>
    </div>
  </div>
</main>
<?= self::exit(); ?>