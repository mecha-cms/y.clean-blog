<?php namespace y\clean_blog;

\lot('links', new \Anemone(\fire(function ($r) use ($state) {
    $route_current = $this->path . '/';
    $route_r = '/' . \trim($state->route ?? 'index', '/');
    foreach (\g(\LOT . \D . 'page', 'page') as $k => $v) {
        $v = new \Page($k);
        // Exclude home page
        if ($route_r === ($route = $v->route)) {
            continue;
        }
        // Add current state
        $v->current = 0 === \strpos($route_current, $route . '/');
        $r[$v->title . \P . $k] = $v;
    }
    \ksort($r);
    return \array_values($r);
}, [[]], $url)));

function class_set($tag, $class, &$content) {
    if (false !== \strpos($content, '<' . $tag . ' ')) {
        $content = \preg_replace_callback('/<' . $tag . '(\s[^>]*)?>/', function ($m) use ($class, $tag) {
            if (false !== \strpos($m[1], ' class="')) {
                $m[1] = \str_replace(' class="', ' class="' . $class . ' ', $m[1]);
            } else {
                $m[1] .= ' class="' . $class . '"';
            }
            return '<' . $tag . $m[1] . '>';
        }, $content);
    }
    $content = \str_replace('<' . $tag . '>', '<' . $tag . ' class="' . $class . '">', $content);
}

function page__content($content) {
    if (!$content) {
        return $content;
    }
    class_set('blockquote', 'blockquote', $content);
    class_set('figcaption', 'figure-caption', $content);
    class_set('figure', 'figure', $content);
    class_set('img', 'img-fluid', $content);
    class_set('table', 'table', $content);
    if (false !== \strpos($content, '</audio>')) {
        $content = \preg_replace('/<p(?:\s[^>]*)?>\s*<audio([>\s])/', '<audio$1', $content);
        $content = \preg_replace('/<\/audio>\s*<\/p>/', '</audio>', $content);
        $content = \preg_replace_callback('/<audio(?:\s[^>]*)?>[\s\S]*?<\/audio>/', static function ($m) {
            return '<p class="ratio py-4">' . $m[0] . '</p>';
        }, $content);
    }
    if (false !== \strpos($content, '</figure>')) {
        $content = \preg_replace_callback('/<figure(\s[^>]*?)?>([\s\S]*?)<\/figure>/', static function ($m) {
            $f = new \HTML($m[0], true);
            $figure = [$f[0], $f[1], $f[2]];
            if (\is_array($figure[1] ?? 0)) {
                foreach ($figure[1] as &$v) {
                    if (\is_array($v) && 'img' === $v[0]) {
                        $classes = \preg_split('/\s+/', $v[2]['class'] ?? "", -1, \PREG_SPLIT_NO_EMPTY);
                        $classes[] = 'figure-img';
                        \sort($classes);
                        $v[2]['class'] = \implode(' ', \array_unique($classes));
                    }
                }
                unset($v);
            }
            return new \HTML($figure, true);
        }, $content);
    }
    if (false !== \strpos($content, '</video>')) {
        $content = \preg_replace('/<p(?:\s[^>]*)?>\s*<video([>\s])/', '<video$1', $content);
        $content = \preg_replace('/<\/video>\s*<\/p>/', '</video>', $content);
        $content = \preg_replace_callback('/<video(?:\s[^>]*)?>[\s\S]*?<\/video>/', static function ($m) {
            return '<p class="ratio ratio-16x9">' . $m[0] . '</p>';
        }, $content);
    }
    return $content;
}

$states = [
    'x.comment.page.type' => 'Markdown',
    'x.page.page.type' => 'Markdown'
];

foreach ($states as $k => $v) {
    !\State::get($k) && \State::set($k, $v);
}

$z = \defined("\\TEST") && \TEST ? '.' : '.min.';
\Asset::set('index' . $z . 'css', 20);
\Asset::set('index' . $z . 'js', 20);

\Hook::set('page.content', __NAMESPACE__ . "\\page__content");