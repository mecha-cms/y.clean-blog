<footer>
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        <!-- TODO: Use Inline SVG -->
        <!-- ul class="list-inline text-center">
          <li class="list-inline-item">
            <a href="#">
              <span class="fa-stack fa-lg">
                <i class="fas fa-circle fa-stack-2x"></i>
                <i class="fab fa-twitter fa-stack-1x fa-inverse"></i>
              </span>
            </a>
          </li>
          <li class="list-inline-item">
            <a href="#">
              <span class="fa-stack fa-lg">
                <i class="fas fa-circle fa-stack-2x"></i>
                <i class="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
              </span>
            </a>
          </li>
          <li class="list-inline-item">
            <a href="#">
              <span class="fa-stack fa-lg">
                <i class="fas fa-circle fa-stack-2x"></i>
                <i class="fab fa-github fa-stack-1x fa-inverse"></i>
              </span>
            </a>
          </li>
        </ul -->
        <p class="copyright text-muted">
          &#x00A9; <a href="<?= $url; ?>">
            <?= $site->title; ?>
          </a> <?= $date->year; ?> &#x00B7; <?= i('Powered by %s', ['<a href="https://mecha-cms.com">Mecha ' . VERSION . '</a>']); ?>
        </p>
      </div>
    </div>
  </div>
</footer>
