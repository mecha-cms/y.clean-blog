<?= self::enter(); ?>
<main class="container px-4 px-lg-5">
  <div class="row gx-4 gx-lg-5 justify-content-center mb-4">
    <div class="col-md-10 col-lg-8 col-xl-7">
      <?php if ($page->exist): ?>
        <?php if ($pages->count): ?>
          <?php foreach ($pages as $page): ?>
            <article class="post-preview">
              <?php $children = $page->children ?? false; ?>
              <a href="<?= eat($page->url . ($children && $children->count ? '/1' : "")); ?>">
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
          <div class="d-flex justify-content-<?= $pager->next && $pager->prev ? 'between' : ($pager->next ? 'end' : ($pager->prev ? 'start' : 'between')); ?> mb-4">
            <?php if ($prev = $pager->prev): ?>
              <a class="btn btn-primary text-uppercase" href="<?= eat($prev->link ?? $prev->url ?? ""); ?>" rel="prev">
                &larr; <?= i('Newer Posts'); ?>
              </a>
            <?php endif; ?>
            <?php if ($next = $pager->next): ?>
              <a class="btn btn-primary text-uppercase" href="<?= eat($next->link ?? $next->url ?? ""); ?>" rel="next">
                <?= i('Older Posts'); ?> &rarr;
              </a>
            <?php endif; ?>
          </div>
        <?php else: ?>
          <p class="alert alert-danger m-0 mb-4" role="status">
            <?php if ($site->has('part')): ?>
              <?= i('No more %s to show.', 'posts'); ?>
            <?php else: ?>
              <?= i('No %s yet.', 'posts'); ?>
            <?php endif; ?>
          </p>
        <?php endif; ?>
      <?php else: ?>
        <p class="alert alert-danger m-0 mb-4" role="status">
          <?= i('%s does not exist.', 'Page'); ?>
        </p>
      <?php endif; ?>
    </div>
  </div>
</main>
<?= self::exit(); ?>