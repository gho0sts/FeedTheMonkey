/*
 * This file is part of FeedTheMonkey.
 *
 * Copyright 2015 Jeena
 *
 * FeedTheMonkey is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * FeedTheMonkey is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with FeedTheMonkey.  If not, see <http://www.gnu.org/licenses/>.
 */

function $(id) {
    return document.getElementById(id);
}

function setArticle(article) {
    window.scrollTo(0, 0);

    $("date").innerHTML = "";
    $("title").innerHTML = "";
    $("title").href = "";
    $("title").title = "";
    $("feed_title").innerHTML = "";
    $("author").innerHTML = "";
    $("article").innerHTML = "";

    if(article === "empty") {

        $("article").innerHTML = "No unread articles to display.";

    } else if(article === "loading") {

        $("article").innerHTML = "Loading <blink>&hellip;</blink>";

    } else if (article === "logout") {

    } else if(article) {

        $("date").innerHTML = (new Date(parseInt(article.updated, 10) * 1000));
        $("title").innerHTML = article.title;
        $("title").href = article.link;
        $("title").title = article.link;
        $("feed_title").innerHTML = article.feed_title;
        $("title").className = article.marked ? "starred" : "";
        $("author").innerHTML = "";
        if(article.author && article.author.length > 0)
            $("author").innerHTML = "&ndash; " + article.author
        $("article").innerHTML = article.content;

        var as = $("article").getElementsByTagName("a");
        for(var i = 0; i < as.length; i++) {
            as[i].target = "";
        }
    }
}

function setFont(font, size) {
    document.body.style.fontFamily = font;
    document.body.style.fontSize = size + "pt";
}

function setNightmode(nightmode) {
    if(nightmode) document.body.className = "nightmode";
    else document.body.className = "";
}
