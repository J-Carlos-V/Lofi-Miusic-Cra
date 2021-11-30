(this["webpackJsonplofi-music-cra"] =
  this["webpackJsonplofi-music-cra"] || []).push([
  [0],
  {
    18: function (e, t, c) {},
    21: function (e, t, c) {},
    22: function (e, t, c) {
      "use strict";
      c.r(t);
      var n = c(1),
        a = c(10),
        s = c.n(a),
        r = c(4),
        i = c(5),
        j = c(2),
        o = c(12),
        l = (c(18), c(0)),
        u = function (e) {
          var t = e.setCategories,
            c = Object(n.useState)(""),
            a = Object(r.a)(c, 2),
            s = a[0],
            j = a[1],
            u = function (e) {
              e.preventDefault(),
                s.trim().length > 2 &&
                  (t(function (e) {
                    return [s].concat(Object(o.a)(e));
                  }),
                  j(""));
            };
          return Object(l.jsx)("div", {
            className: "container",
            children: Object(l.jsxs)("nav", {
              className: "nav-main navbar-expand-sm navbar-dark",
              children: [
                Object(l.jsx)(i.b, {
                  className: "navbar-brand",
                  to: "/Lofi-Miusic-Cra",
                  children: Object(l.jsx)("img", {
                    src: "assets/musicicon.jpg",
                    alt: "Lofi Music logo",
                    className: "nav-brand",
                  }),
                }),
                Object(l.jsx)("div", {
                  className: "navbar-collapse",
                  children: Object(l.jsx)("div", {
                    className: "navbar-nav",
                    children: Object(l.jsxs)("ul", {
                      className: "nav-menu",
                      children: [
                        Object(l.jsx)(i.c, {
                          className: function (e) {
                            return (
                              "nav-item nav-link" +
                              (e.isActive ? "active" : " ")
                            );
                          },
                          to: "/Lofi-Miusic-Cra",
                          children: "Home",
                        }),
                        Object(l.jsx)(i.c, {
                          className: function (e) {
                            return (
                              "nav-item nav-link" +
                              (e.isActive ? "active" : " ")
                            );
                          },
                          to: "/about",
                          children: "About",
                        }),
                        Object(l.jsx)(i.c, {
                          className: function (e) {
                            return (
                              "nav-item nav-link" +
                              (e.isActive ? "active" : " ")
                            );
                          },
                          to: "/contact",
                          children: "Contact",
                        }),
                      ],
                    }),
                  }),
                }),
                Object(l.jsx)("form", {
                  onSubmit: u,
                  children: Object(l.jsx)("div", {
                    className:
                      "navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end",
                    children: Object(l.jsxs)("ul", {
                      className: "nav-menu-right",
                      children: [
                        Object(l.jsx)("input", {
                          type: "text",
                          value: s,
                          onChange: function (e) {
                            !(function (e) {
                              j(e.target.value);
                            })(e);
                          },
                        }),
                        Object(l.jsx)("button", {
                          type: "button",
                          className: "btn",
                          onClick: u,
                          children: Object(l.jsx)("i", {
                            className: "fas fa-search",
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          });
        };
      function b() {
        return Object(l.jsx)("div", {
          children: Object(l.jsx)("h1", { children: "soy el about" }),
        });
      }
      var d = function () {
          return Object(l.jsxs)("div", {
            children: [
              Object(l.jsx)("hr", {}),
              Object(l.jsx)("h1", { children: "Soy el contacto" }),
            ],
          });
        },
        h = c.p + "Lofi-Miusic-Cra/static/media/showcase2.9ce7895a.jpg",
        O = c(13),
        m = c(9),
        x = c.n(m),
        p = c(11),
        f = function (e) {
          e.id;
          var t = e.title,
            c = e.artist,
            n = e.url,
            a = e.details;
          return Object(l.jsx)("div", {
            children: Object(l.jsxs)("div", {
              children: [
                Object(l.jsx)("img", { src: n, alt: t }),
                Object(l.jsxs)("h3", { children: [" ", t, " "] }),
                Object(l.jsxs)("p", { children: ["por: ", c, " "] }),
                Object(l.jsxs)("a", {
                  href: a,
                  children: [
                    "leer m\xe1s ",
                    Object(l.jsx)("i", {
                      className: "fas fa-angle-double-right",
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        v = function (e) {
          var t = e.category,
            c = Object(n.useState)([]),
            a = Object(r.a)(c, 2),
            s = a[0],
            i = a[1];
          Object(n.useEffect)(
            function () {
              j();
            },
            [t]
          );
          var j = (function () {
            var e = Object(p.a)(
              x.a.mark(function e() {
                var c, n, a, s;
                return x.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          fetch(
                            "https://genius.p.rapidapi.com/search?q=".concat(
                              encodeURI(t)
                            ),
                            {
                              method: "GET",
                              headers: {
                                "x-rapidapi-host": "genius.p.rapidapi.com",
                                "x-rapidapi-key":
                                  "634f32e93fmsh084184834fbb8f5p1f6761jsn774df2b2397d",
                              },
                            }
                          )
                        );
                      case 2:
                        return (c = e.sent), (e.next = 5), c.json();
                      case 5:
                        (n = e.sent),
                          (a = n.response),
                          (s = a.hits.map(function (e) {
                            return {
                              id: e.result.id,
                              title: e.result.title,
                              artist: e.result.primary_artist.name,
                              details: e.result.url,
                              url: e.result.header_image_url,
                            };
                          })),
                          i(s);
                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
          return Object(l.jsxs)(l.Fragment, {
            children: [
              Object(l.jsx)("h4", { children: t }),
              Object(l.jsx)("div", {
                className: "news-cards animate__fadeInLeft",
                children: s.map(function (e) {
                  return Object(l.jsx)(f, Object(O.a)({}, e), e.id);
                }),
              }),
            ],
          });
        },
        g = {
          container: {
            backgroundImage: "url(".concat(h, ")"),
            backgroundPosition: "center/cover",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          },
        },
        N = function (e) {
          e.setCategories;
          var t = e.Categories;
          return Object(l.jsxs)(l.Fragment, {
            children: [
              Object(l.jsx)("hr", {}),
              Object(l.jsxs)("header", {
                className: "showcase",
                style: g.container,
                children: [
                  Object(l.jsx)("h2", { children: "Lo m\xe1s reciente" }),
                  Object(l.jsx)("p", {
                    children:
                      "Lo-fi hip hop o chillhop es una forma de downtempo que combina elementos de hip hop y m\xfasica chill-out. Se populariz\xf3 en la d\xe9cada de 2010 en YouTube.",
                  }),
                ],
              }),
              t.map(function (e) {
                return Object(l.jsx)(v, { category: e }, e);
              }),
            ],
          });
        },
        y = function () {
          return Object(l.jsx)("div", {
            children: Object(l.jsx)("h1", { children: "soy el buscador" }),
          });
        },
        k = function () {
          var e = Object(n.useState)(["Lofis"]),
            t = Object(r.a)(e, 2),
            c = t[0],
            a = t[1];
          return Object(l.jsxs)(i.a, {
            children: [
              Object(l.jsx)(u, { setCategories: a }),
              Object(l.jsx)("div", {
                className: "container",
                children: Object(l.jsxs)(j.c, {
                  children: [
                    Object(l.jsx)(j.a, {
                      path: "/Lofi-Miusic-Cra",
                      element: Object(l.jsx)(N, {
                        setCategories: a,
                        Categories: c,
                      }),
                    }),
                    Object(l.jsx)(j.a, {
                      path: "about",
                      element: Object(l.jsx)(b, {}),
                    }),
                    Object(l.jsx)(j.a, {
                      path: "contact",
                      element: Object(l.jsx)(d, {}),
                    }),
                    Object(l.jsx)(j.a, {
                      path: "search",
                      element: Object(l.jsx)(y, {}),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        C = function () {
          return Object(l.jsx)(k, {});
        };
      c(21);
      s.a.render(Object(l.jsx)(C, {}), document.getElementById("root"));
    },
  },
  [[22, 1, 2]],
]);
//# sourceMappingURL=main.b24a6935.chunk.js.map
