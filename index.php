<?php

$class_set = static function($tag, $class, &$content) {
    if (false !== strpos($content, '<' . $tag . ' ')) {
        $content = preg_replace_callback('/<' . $tag . '(\s[^>]*)?>/', function($m) use($class, $tag) {
            if (false !== strpos($m[1], ' class="')) {
                $m[1] = str_replace(' class="', ' class="' . $class . ' ', $m[1]);
            } else {
                $m[1] .= ' class="' . $class . '"';
            }
            return '<' . $tag . $m[1] . '>';
        }, $content);
    }
    $content = str_replace('<' . $tag . '>', '<' . $tag . ' class="' . $class . '">', $content);
};

// Tweak(s)
Hook::set('page.content', function($content) use($class_set) {
    if (!$content) {
        return $content;
    }
    $class_set('blockquote', 'blockquote', $content);
    $class_set('figcaption', 'figure-caption', $content);
    $class_set('figure', 'figure', $content);
    $class_set('img', 'img-fluid', $content);
    $class_set('table', 'table', $content);
    return $content;
});

Asset::set('index.min.css', 20);

Asset::set('index.min.js', 20);

// Create site link data to be used in navigation
$GLOBALS['links'] = new Anemone((static function($links, $state, $url) {
    $index = LOT . D . 'page' . D . trim(strtr($state->route, '/', D), D) . '.page';
    $path = $url->path . '/';
    foreach (g(LOT . D . 'page', 'page') as $k => $v) {
        // Exclude home page
        if ($k === $index) {
            continue;
        }
        $v = new Page($k);
        // Add current state
        $v->current = 0 === strpos($path, '/' . $v->name . '/');
        $links[$k] = $v;
    }
    ksort($links);
    return $links;
})([], $state, $url));
