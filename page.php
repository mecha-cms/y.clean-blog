<?= self::enter(); ?>
<article class="mb-4">
  <div class="container px-4 px-lg-5">
    <div class="row gx-4 gx-lg-5 justify-content-center">
      <div class="col-md-10 col-lg-8 col-xl-7">
        <?php if ($page->exist): ?>
          <?= $page->content; ?>
          <?php if (isset($state->x->comment) && $site->has('parent')): ?>
            <hr class="my-4">
            <?= self::comments(); ?>
          <?php endif; ?>
        <?php else: ?>
          <p class="alert alert-danger m-0 mb-4" role="status">
            <?= i('%s does not exist.', 'Page'); ?>
          </p>
        <?php endif; ?>
      </div>
    </div>
  </div>
</article>
<?= self::exit(); ?>