<?= self::before(); ?>
<article>
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        <?= $page->content; ?>
        <?php if (!empty($state->x->comment)): ?>
        <hr>
        <?= self::comments(); ?>
        <?php endif; ?>
      </div>
    </div>
  </div>
</article>
<hr>
<?= self::after(); ?>