<nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
  <div class="container">
    <a class="navbar-brand" href="<?= $url; ?>">
      <?= $site->title; ?>
    </a>
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <?= i('Menu'); ?> <!-- TODO: Use Inline SVG --><!-- i class="fas fa-bars"></i -->
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link<?= $site->is('home') ? ' active' : ""; ?>" href="<?= $url; ?>">
            <?= i('Home'); ?>
          </a>
        </li>
        <?php foreach ($links as $link): ?>
        <li class="nav-item">
          <a class="nav-link<?= $link->active ? ' active' : ""; ?>" href="<?= $link->url; ?>">
            <?= $link->title; ?>
          </a>
        </li>
        <?php endforeach; ?>
      </ul>
    </div>
  </div>
</nav>