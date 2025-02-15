<nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
  <div class="container px-4 px-lg-5">
    <a class="navbar-brand" href="<?= eat($url); ?>">
      <?= $site->title; ?>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <?= i('Menu'); ?> <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ms-auto py-4 py-lg-0">
        <li class="nav-item">
          <a class="<?= $site->is('home') ? 'active ' : ""; ?>nav-link px-lg-3 py-3 py-lg-4" href="<?= eat($url); ?>">
            <?= i('Home'); ?>
          </a>
        </li>
        <?php foreach ($links as $link): ?>
          <?php $children = $link->children ?? false; ?>
          <li class="nav-item">
            <a class="<?= $link->current ? 'active ' : ""; ?>nav-link px-lg-3 py-3 py-lg-4" href="<?= eat($link->url . ($children && $children->count ? '/1' : "")); ?>">
              <?= $link->title; ?>
            </a>
          </li>
        <?php endforeach; ?>
      </ul>
    </div>
  </div>
</nav>