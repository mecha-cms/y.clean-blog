<!DOCTYPE html>
<html class>
  <head>
    <meta charset="utf-8">
    <meta content="width=device-width,initial-scale=1,shrink-to-fit=no" name="viewport">
    <?php if ($v = w($page->description ?? $site->description)): ?>
      <meta content="<?= $v; ?>" name="description">
    <?php endif; ?>
    <?php if ('archive' === $page->x): ?>
      <!-- Prevent search engines from indexing pages with `archive` state -->
      <meta content="noindex" name="robots">
    <?php endif; ?>
    <meta content="<?= eat($page->author); ?>" name="author">
    <title>
      <?= w($t->reverse->join(' - ')); ?>
    </title>
    <link href="<?= eat($url . '/favicon.ico'); ?>" rel="icon">
    <link href="<?= eat($url->current(false, false)); ?>" rel="canonical">
    <!-- Font Awesome Icons (free version) -->
    <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossorigin="anonymous"></script>
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800" rel="stylesheet">
  </head>
  <body>
    <?= self::nav(); ?>
    <?= self::header(); ?>