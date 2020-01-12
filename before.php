<!DOCTYPE html>
<html class dir="<?= $site->direction; ?>" lang="<?= $site->language; ?>">
  <head>
    <meta charset="<?= $site->charset; ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <?php if ($w = w($page->description ?? $site->description)): ?>
    <meta name="description" content="<?= $w; ?>">
    <?php endif; ?>
    <?php if ('archive' === $page->x): ?>
    <!-- Prevent search engines from indexing pages with `archive` state -->
    <meta name="robots" content="noindex">
    <?php endif; ?>
    <meta name="author" content="<?= $page->author; ?>">
    <title><?= w($t->reverse->join(' - ')); ?></title>
    <link href="<?= $url; ?>/favicon.ico" rel="shortcut icon">
    <link href="<?= $url->clean; ?>" rel="canonical">
    <link href="//fonts.googleapis.com/css?family=Lora:400,700,400i,700i|Open+Sans:300,400,600,700,800,300i,400i,600i,700i,800i" rel="stylesheet">
  </head>
  <body>
    <?= self::nav(); ?>
    <?= self::header(); ?>
