var _this = this;

class Foo {
  onClick = (...params) => _this.__onClick__REACT_HOT_LOADER__(...params);

  __onClick__REACT_HOT_LOADER__(e) {
    return e.target.value;
  }

}
;

(function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Foo, "Foo", __FILENAME__);
})();

;