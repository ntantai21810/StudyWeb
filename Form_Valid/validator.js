function Validator(options) {
  let formElement = document.querySelector(options.form);
  let selectorRules = {};
  if (formElement) {
    formElement.onsubmit = function (e) {
      e.preventDefault();
      options.rules.forEach(function (rule) {
        let inputElement = formElement.querySelector(rule.selector);
        validate(inputElement, rule, options.errorSelector, selectorRules);
      });
    };
    options.rules.forEach(function (rule) {
      if (Array.isArray(selectorRules[rule.selector])) {
        selectorRules[rule.selector].push(rule.test);
      } else {
        selectorRules[rule.selector] = [rule.test];
      }
      let inputElement = formElement.querySelector(rule.selector);
      let errorElement = inputElement.parentElement.querySelector(
        options.errorSelector
      );

      if (inputElement) {
        inputElement.onblur = function () {
          validate(inputElement, rule, options.errorSelector, selectorRules);
        };

        inputElement.oninput = function () {
          errorElement.innerText = "";
          inputElement.parentElement.classList.remove("invalid");
        };
      }
    });
  }
}

Validator.isRequired = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : message || "Vui long nhap truong nay ";
    },
  };
};

Validator.isEmail = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      return regex.test(value)
        ? undefined
        : message || "Truong nay phai la email";
    },
  };
};

Validator.minLength = function (selector, min, message) {
  return {
    selector: selector,
    test: function (value) {
      return value.length >= min
        ? undefined
        : message || `It nhat ${min} ki tu`;
    },
  };
};

Validator.isConfirmed = function (selector, getConfirmValue, message) {
  return {
    selector: selector,
    test: function (value) {
      return value == getConfirmValue()
        ? undefined
        : message || "Gia tri nhap vao khong chinh xac";
    },
  };
};

function validate(inputElement, rule, errorSelector, selectorRules) {
  let errorMessage = rule.test(inputElement.value);
  let rules = selectorRules[rule.selector];
  let errorElement = inputElement.parentElement.querySelector(errorSelector);
  for (let i = 0; i < rules.length; i++) {
    errorMessage = rules[i](inputElement.value);
    if (errorMessage) break;
  }
  if (errorMessage) {
    errorElement.innerText = errorMessage;
    inputElement.parentElement.classList.add("invalid");
  } else {
    errorElement.innerText = "";
    inputElement.parentElement.classList.remove("invalid");
  }
}
