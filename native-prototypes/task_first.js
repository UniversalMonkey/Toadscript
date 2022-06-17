function f() {
    alert("Hello!");
  }

  Function.prototype.defer = (time) => setTimeout(f, time)

f.defer(1000); // выведет "Hello!" через 1 секунду