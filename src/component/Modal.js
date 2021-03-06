(() => {
  "use strict";

  const doc = document.currentScript.ownerDocument;
  function stopCb(e) {
    e.stopPropagation();
  }

  class Modal extends HTMLElement {

    createdCallback() {
      const template = document.importNode(doc.getElementById("main").content, true);

      this._styles = [];

      this._modalBg = template.querySelector("#modal-bg");
      this.content = template.querySelector("#modal");

      const innerHTML = this.innerHTML;
      this.innerHTML = "";
      template.innerHTML = innerHTML;
      this.createShadowRoot().appendChild(template);

      this.attributeChangedCallback("width", null, this.getAttribute("width"));
      this.attributeChangedCallback("height", null, this.getAttribute("height"));
      this.attributeChangedCallback("visible", null, this.getAttribute("visible"));

      this._template = null;
      this._width = 400;
      this._height = 300;
      this._relative = false;
      this._top = 0;
      this._left = 0;
      this._right = 0;
      this._bottom = 0;

      this.refreshSize();
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
      if (attrName === "visible") {
        if (newVal !== null) {
          this._modalBg.classList.remove("hidden");
          this.addEventListener("mousemove", stopCb, true);
        } else {
          this._modalBg.classList.add("hidden");
          this.removeEventListener("mousemove", stopCb, true);
        }
      }
    }

    appendStyle(style) {
      let s;
      if (typeof style === "string") {
        s = document.createElement("style");
        s.textContent = style;
      } else {
        s = style;
      }

      this._styles.push(s);
      this.shadowRoot.insertBefore(s, this._modalBg);
    }

    emptyStyle() {
      this._styles.forEach(s => {
        this.shadowRoot.removeChild(s);
      }, this);
      this._styles = [];
      this._template = null;
    }

    appendContent(content, name) {
      if (typeof content === "string")
        this.content.innerHTML += content;
      else
        this.content.appendChild(content);
      if (typeof name === "string")
        this._template = name;
      else
        this._template = null;
    }

    emptyContent() {
      this.content.innerHTML = "";
    }

    use(name, content, listener1, listener2, listener3) {
      let cb = null;

      if (name === "main" || name === this._template)
        return void 0;

      const template = doc.querySelector("template#" + name);
      if (!template) return void 0;
      const root = document.importNode(template.content, true);

      this.relative = false;
      this.width = parseInt(template.dataset.width, 10);
      this.height = parseInt(template.dataset.height, 10);

      if (
        name !== "loading" &&
        name !== "progress-cancelable" &&
        name !== "list"
      )
        root.querySelector(".modal-content").innerHTML = content;
      if (name === "yesno") {
        root.querySelector("#modal-btn-no").addEventListener(
          "click", listener1 || (() => this.hide()).bind(this));
        root.querySelector("#modal-btn-yes").addEventListener(
          "click", listener2 || (() => this.hide()).bind(this));
      } else if (name === "alert") {
        root.querySelector("#modal-btn-ok").addEventListener(
          "click", listener1 || (() => this.hide()).bind(this));
      } else if (name === "progress-cancelable") {
        const progressbar = root.querySelector("#modal-progressbar");
        const progressContent = root.querySelector("#modal-progress-content");
        progressContent.innerHTML = content;
        root.querySelector("#modal-btn-cancel").addEventListener(
          "click", listener1 || (() => this.hide()).bind(this));
        progressbar.style.width = "0%";
        cb = (progress, pcontent) => {
          progressbar.style.width = progress + "%";
          if (typeof content === "string")
            progressContent.innerHTML = pcontent;
        };
      } else if (name === "list") {
        root.querySelector("#modal-content").innerHTML = content;
        const list = root.querySelector("#modal-select");
        list.innerHTML = "";
        listener1.forEach(l => {
          const option = document.createElement("option");
          option.textContent = l;
          list.appendChild(option);
        });
        list.selectedIndex = 0;
        root.querySelector("#modal-btn-ok").addEventListener("click", listener2 ? () => {
          listener2(list.selectedIndex);
        } : (() => this.hide()).bind(this));
        root.querySelector("#modal-btn-cancel").addEventListener(
          "click", listener3 || (() => this.hide()).bind(this));
      }

      this.emptyStyle();
      this.emptyContent();
      this.appendContent(root, name);
      this.refreshSize();

      return cb;
    }

    show() {
      this.refreshSize();
      this.setAttribute("visible", "visible");
    }

    hide() {
      this.removeAttribute("visible");
    }

    get width() {
      return this._width;
    }

    set width(value) {
      this._width = Math.floor(value);
    }

    get height() {
      return this._height;
    }

    set height(value) {
      this._height = Math.floor(value);
    }

    get relative() {
      return this._relative;
    }

    set relative(value) {
      this._relative = !!value;
    }

    get top() {
      return this._top;
    }

    set top(value) {
      this._top = value;
    }

    get left() {
      return this._left;
    }

    set left(value) {
      this._left = value;
    }

    get right() {
      return this._right;
    }

    set right(value) {
      this._right = value;
    }

    get bottom() {
      return this._bottom;
    }

    set bottom(value) {
      this._bottom = value;
    }

    refreshSize() {
      function style(v) {
        return typeof v === "number" ? Math.floor(v) + "px" : v;
      }

      if (this._relative) {
        this.content.style.width = null;
        this.content.style.height = null;
        this.content.style.top = style(this._top);
        this.content.style.left = style(this._left);
        this.content.style.right = style(this._right);
        this.content.style.bottom = style(this._bottom);
        this.content.style.marginLeft = null;
        this.content.style.marginTop = null;
      } else {
        this.content.style.top = "50%";
        this.content.style.left = "50%";
        this.content.style.right = null;
        this.content.style.bottom = null;
        this.content.style.width = this._width + "px";
        this.content.style.height = this._height + "px";
        this.content.style.marginLeft = (-this._width / 2) + "px";
        this.content.style.marginTop = (-this._height / 2) + "px";
      }
    }

  }

  window.jikkyo.Modal = document.registerElement("jikkyo-modal", {
    prototype: Modal.prototype
  });

})();
