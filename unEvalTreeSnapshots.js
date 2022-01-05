export default [
  {
    Input1: {
      text: '{{Input2.text / 5}}',
    },
    Input2: {
      text: 10,
    },
  },
  {
    Input1: {
      text: '{{Input2.text / 5}}',
    },
    Input2: {
      text: 2,
    },
  },
  {
    Input1: {
      text: '{{Input2.text / 5}}',
    },
    Input2: {
      text: 3,
    },
  },
  {
    Input1: {
      text: '{{Input2.text / 5}}',
    },
    Input2: {
      text: 3,
    },
    API: {
      config: {
        url: "https://example.com/'",
      },
      run: function () {
        return Promise(function (resolve, reject) {
          debugger;
          fetch(API.config.url)
            .then((res) => {
              API.setData(res);
              resolve(res);
            })
            .catch((error) => reject(error));
        });
      },
      data: undefined,
      setData: (value) => {
        this.notify({
          pathModified: 'API.data',
          oldValue: API.data,
          newValue: value,
        });
        API.data = value;
      },
    },
  },
];
