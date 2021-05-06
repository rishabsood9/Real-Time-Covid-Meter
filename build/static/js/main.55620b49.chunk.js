(this.webpackJsonpcovid = this.webpackJsonpcovid || []).push([
  [0],
  {
    18: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        r = a.n(n),
        c = a(5),
        l = a.n(c),
        o = a(3),
        s = a.n(o),
        i = a(6),
        u = a(2);
      var m = function (e) {
        return r.a.createElement(
          "div",
          {
            className: "card",
            style: { margin: 100, marginTop: 10, textAlign: "center" },
          },
          r.a.createElement(
            "div",
            { className: "card-body" },
            r.a.createElement(
              "div",
              { className: "card-title" },
              r.a.createElement(
                "h2",
                null,
                r.a.createElement("strong", null, e.country)
              )
            ),
            r.a.createElement("br", null),
            r.a.createElement(
              "div",
              { className: "card-text" },
              r.a.createElement(
                "div",
                { className: "row" },
                r.a.createElement(
                  "div",
                  { className: "col-md-4" },
                  r.a.createElement("h3", null, "Population "),
                  " ",
                  e.population,
                  r.a.createElement("h3", null, "Number of tests "),
                  " ",
                  e.tests,
                  r.a.createElement("h3", null, "Total number of cases "),
                  " ",
                  e.cases
                ),
                r.a.createElement(
                  "div",
                  { className: "col-md-4" },
                  r.a.createElement("h3", null, "Active "),
                  " ",
                  e.active,
                  r.a.createElement("h3", null, "Recovered "),
                  " ",
                  e.recovered,
                  r.a.createElement("h3", null, "Deaths "),
                  " ",
                  e.deaths
                ),
                r.a.createElement(
                  "div",
                  { className: "col-md-4" },
                  r.a.createElement("h3", null, "New cases today "),
                  " ",
                  e.todayCases,
                  r.a.createElement("h3", null, "Recovered today "),
                  " ",
                  e.todayRecovered,
                  r.a.createElement("h3", null, "Deaths today "),
                  " ",
                  e.todayDeaths
                )
              )
            )
          )
        );
      };
      var d = function (e) {
        return r.a.createElement(
          "h2",
          { style: { textAlign: "center" } },
          "Sorry, no countries match your search. Please try again."
        );
      };
      var v = function (e) {
        return r.a.createElement(
          "div",
          null,
          e.country
            ? r.a.createElement(m, {
                cases: e.cases,
                population: e.population,
                tests: e.tests,
                country: e.country,
                active: e.active,
                recovered: e.recovered,
                todayRecovered: e.todayRecovered,
                deaths: e.deaths,
                todayDeaths: e.todayDeaths,
                todayCases: e.todayCases,
              })
            : r.a.createElement(d, null)
        );
      };
      var h = function (e) {
        return r.a.createElement(
          "div",
          null,
          r.a.createElement(
            "h2",
            { style: { textAlign: "center" } },
            "  Want some real-time information on Covid-19 cases around the globe? "
          )
        );
      };
      var y = function (e) {
          return r.a.createElement(
            "div",
            null,
            !1 === e.loading && r.a.createElement(h, null)
          );
        },
        E = a(7),
        p = a.n(E);
      var g = function () {
          return r.a.createElement(
            "div",
            null,
            r.a.createElement(
              "center",
              null,
              r.a.createElement("img", {
                src: p.a,
                style: { height: 200, width: 250, margin: 20 },
              })
            )
          );
        },
        f = a(20);
      var b = function () {
        var e = Object(n.useState)([]),
          t = Object(u.a)(e, 2),
          a = t[0],
          c = t[1],
          l = Object(n.useState)([]),
          o = Object(u.a)(l, 2),
          m = o[0],
          d = o[1],
          h = Object(n.useState)([]),
          E = Object(u.a)(h, 2),
          p = E[0],
          b = E[1],
          j = Object(n.useState)([!1]),
          O = Object(u.a)(j, 2),
          x = O[0],
          w = O[1],
          N = Object(n.useState)([!1]),
          R = Object(u.a)(N, 2),
          C = R[0],
          S = R[1],
          D = Object(n.useState)([!1]),
          k = Object(u.a)(D, 2),
          A = k[0],
          B = k[1],
          T = Object(n.useState)([]),
          J = Object(u.a)(T, 2),
          L = J[0],
          P = J[1];
        return (
          Object(n.useEffect)(
            function () {
              function e() {
                return (e = Object(i.a)(
                  s.a.mark(function e() {
                    var t, a;
                    return s.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (e.next = 3),
                                fetch(
                                  "https://corona.lmao.ninja/v2/countries/".concat(
                                    m,
                                    "?yesterday=true&strict=true&query"
                                  )
                                )
                              );
                            case 3:
                              return (t = e.sent), (e.next = 6), t.json();
                            case 6:
                              (a = e.sent) ? (c(a), B(!0)) : c(null),
                                P(!1),
                                (e.next = 14);
                              break;
                            case 11:
                              (e.prev = 11),
                                (e.t0 = e.catch(0)),
                                console.log(e.t0);
                            case 14:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 11]]
                    );
                  })
                )).apply(this, arguments);
              }
              !(function () {
                e.apply(this, arguments);
              })();
            },
            [{ clickFalse: x }]
          ),
          r.a.createElement(
            "div",
            { className: "App" },
            r.a.createElement(
              "strong",
              null,
              r.a.createElement(
                "h1",
                {
                  style: {
                    textAlign: "center",
                    marginBottom: 50,
                    marginLeft: 100,
                    marginRight: 100,
                    marginTop: 50,
                  },
                },
                "Real Time Corona Meter"
              )
            ),
            r.a.createElement(
              "div",
              {
                style: {
                  marginBottom: 50,
                  marginLeft: 100,
                  marginRight: 100,
                  marginTop: 50,
                },
              },
              r.a.createElement(
                "form",
                { style: { width: window } },
                r.a.createElement("input", {
                  type: "text",
                  onChange: function (e) {
                    var t = e.target.value;
                    b(t);
                  },
                  name: "searchBox",
                  placeholder: "Type in the country name",
                  className: "searchBox form-control",
                  style: { marginBottom: 20 },
                }),
                r.a.createElement(
                  f.a,
                  {
                    type: "submit",
                    onClick: function (e) {
                      d(p), w(!0), S(!0), e.preventDefault(), P(!0);
                    },
                    className: "btn btn-md btn-success form-control",
                    style: { width: window },
                  },
                  "Search"
                )
              ),
              L && r.a.createElement(g, null)
            ),
            !0 === C && !0 === A && !1 === L
              ? r.a.createElement(v, {
                  cases: a.cases,
                  population: a.population,
                  tests: a.tests,
                  country: a.country,
                  active: a.active,
                  recovered: a.recovered,
                  deaths: a.deaths,
                  todayRecovered: a.todayRecovered,
                  todayDeaths: a.todayDeaths,
                  todayCases: a.todayCases,
                })
              : r.a.createElement(y, { noResults: C, loading: L })
          )
        );
      };
      a(17);
      l.a.render(r.a.createElement(b, null), document.getElementById("root"));
    },
    7: function (e, t, a) {
      e.exports = a.p + "static/media/loading.3551210e.gif";
    },
    9: function (e, t, a) {
      e.exports = a(18);
    },
  },
  [[9, 1, 2]],
]);
//# sourceMappingURL=main.55620b49.chunk.js.map
