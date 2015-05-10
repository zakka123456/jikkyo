(() => {
  "use strict";

  var fs = require("fs"),
      gui = require("nw.gui"),
      doc = document.currentScript.ownerDocument;

  class PreferenceDialog extends window.jikkyo.Modal {

    createdCallback() {
      super.createdCallback();

      this.width = 640;
      this.height = 420;
      this.preference = null;

      this.appendStyle(document.importNode(doc.querySelector("#style").content, true));
      this.appendContent(document.importNode(doc.querySelector("#content").content, true));

      this._modePrefs = [];
      this._initPrefCb = [];
      this._savePrefCb = [];
      this._tabs = this.content.querySelector("#tabs");
      this._prefs = this.content.querySelector("#prefs");

      var prefc = this.content.querySelectorAll(".pref");
      Array.from(prefc).forEach(c => {
        this.addModePreference(c, c.dataset.title, null, null, true, c.hasAttribute("data-last"));
      }, this);

      this.content.querySelector("#ok").addEventListener("click", (() => {
        this.hide();
      }).bind(this));

      try {
        var packagejson = JSON.parse(fs.readFileSync("package.json", "utf8"));
        if (packagejson.version)
          this.shadowRoot.querySelector("#about-version").textContent = packagejson.version;
        if (packagejson.homepage)
          this.shadowRoot.querySelector("#about-homepage").addEventListener(
            "click", () => gui.Shell.openExternal(packagejson.homepage));
        if (packagejson.repository && packagejson.repository.url)
          this.shadowRoot.querySelector("#about-repository").addEventListener(
            "click", () => gui.Shell.openExternal(packagejson.repository.url));
      } catch(e) {
        this.shadowRoot.querySelector("#about-version").textContent = "ERROR";
      }
    }

    show() {
      var at = this._tabs.querySelector(".active");
      if (at) at.classList.remove("active");
      at = this._prefs.querySelector(".pref.active");
      if (at) at.classList.remove("active");
      at = this._tabs.children[0];
      if (at) at.classList.add("active");
      at = this._prefs.children[0];
      if (at) at.classList.add("active");

      if (this.preference) {
        this._modePrefs.forEach((p, i) => this._initPrefCb[i](p), this);
        if (!this.preference.general)
          this.preference.general = this._initGeneralPreference();
        this._loadGeneralPreference(this.content, this.preference.general);
      }

      super.show();
    }

    hide() {
      var pr = this.preference;
      if (pr) {
        this._modePrefs.forEach((p, i) => this._savePrefCb[i](p), this);
        this._saveGeneralPreference(this.content, this.preference.general);
        pr.save();
      }

      super.hide();
    }

    addModePreference(element, title, initCb, saveCb, builtin, last) {
      if (!element) return;
      var tab = document.createElement("li");
      if (last) tab.setAttribute("data-last", "");
      tab.textContent = title;
      tab.addEventListener("click", (() => {
        var active = this._prefs.querySelector(".active");
        if (active) active.classList.remove("active");
        element.classList.add("active");
        this._tabs.querySelector(".active").classList.remove("active");
        tab.classList.add("active");
      }).bind(this));
      element.classList.add("pref");
      this._prefs.appendChild(element);

      var lastTab = this._tabs.querySelector("li[data-last]");
      if (lastTab) this._tabs.insertBefore(tab, lastTab);
      else this._tabs.appendChild(tab);

      if (!builtin) {
        this._modePrefs.push(element);
        if (initCb) this._initPrefCb.push(initCb);
        if (saveCb) this._savePrefCb.push(saveCb);
      }
    }

    _initGeneralPreference() {
      return {
        fontFamily: process.platform === "darwin" ? "sans-serif" : 'Meiryo, sans-serif',
        duration: 4000,
        usDuration: 3000,
        opacity: 1,
        bulletOpacity: 1,
        sizing: 0,
        fontSize: "32px",
        rows: 12,
        style: "",
        checkNewVersionAuto: true
      };
    }

    _loadGeneralPreference(r, p) {
      r.querySelector("#comment-font-family").value = p.fontFamily;
      r.querySelector("#comment-duration").value = p.duration;
      r.querySelector("#comment-us-duration").value = p.usDuration;
      r.querySelector("#comment-opacity").value = p.opacity;
      r.querySelector("#comment-bullet-opacity").value = p.bulletOpacity;
      r.querySelector("#comment-sizing").value = p.sizing;
      r.querySelector("#comment-font-size").value = p.fontSize;
      r.querySelector("#comment-rows").value = p.rows;
      r.querySelector("#comment-style").value = p.style;
      r.querySelector("#about-check-auto").checked = p.checkNewVersionAuto;
    }

    _saveGeneralPreference(r, p) {
      var tmp;
      p.fontFamily = r.querySelector("#comment-font-family").value;

      tmp = r.querySelector("#comment-duration").value;
      if (tmp >= 100 && tmp < 10000) p.duration = tmp;

      tmp = r.querySelector("#comment-us-duration").value;
      if (tmp >= 100 && tmp < 10000) p.usDuration = tmp;

      tmp = r.querySelector("#comment-opacity").value;
      if (tmp >= 0 && tmp <= 1) p.opacity = tmp;

      tmp = r.querySelector("#comment-bullet-opacity").value;
      if (tmp >= 0 && tmp <= 1) p.bulletOpacity = tmp;

      p.sizing = r.querySelector("#comment-sizing").value;
      p.fontSize = r.querySelector("#comment-font-size").value;

      tmp = r.querySelector("#comment-rows").value;
      if (tmp > 0 && tmp < 40) p.rows = tmp;

      p.style = r.querySelector("#comment-style").value;

      p.checkNewVersionAuto = r.querySelector("#about-check-auto").checked;
    }

  }

  window.jikkyo.PreferenceDialog = document.registerElement("jikkyo-preference-dialog", {
    prototype: PreferenceDialog.prototype
  });

})();
