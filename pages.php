<?= self::before(); ?>
<main class="container">
  <div class="row">
    <div class="col-lg-8 col-md-10 mx-auto">
      <?php foreach ($pages as $page): ?>
      <article class="post-preview">
        <a href="<?= $page->url; ?>">
          <h2 class="post-title">
            <?= $page->title; ?>
          </h2>
          <h3 class="post-subtitle">
            <?= w($page->description, ['abbr', 'b', 'code', 'dfn', 'em', 'kbd', 'strong']); ?>
          </h3>
        </a>
        <p class="post-meta">
          <?= i('Posted by %s on %s', [
              self::get('page.author', ['author' => $page->author]),
              $page->time('%B %d, %Y')
          ]); ?>
        </p>
      </article>
      <hr>
      <?php endforeach; ?>
      <div class="clearfix">
        <?php if ($prev = $pager->prev): ?>
        <a class="btn btn-primary float-left" href="<?= $prev; ?>" rel="prev">
          &larr; <?= i('Newer Posts'); ?>
        </a>
        <?php endif; ?>
        <?php if ($next = $pager->next): ?>
        <a class="btn btn-primary float-right" href="<?= $next; ?>" rel="next">
          <?= i('Older Posts'); ?> &rarr;
        </a>
        <?php endif; ?>
      </div>
    </div>
  </div>
</main>
<hr>
<?= self::after(); ?>
