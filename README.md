# Coderwidget
> Coderwall Widget developed with Vanilla JS

![](screenshot.png)

## Demo
View demo [here](http://www.pinceladasdaweb.com.br/blog/uploads/coderwidget/).

## Getting Started

```bash
# Get the latest snapshot
$ git clone https://github.com/pinceladasdaweb/Awesomstar.git
```

The script depends on the following HTML markup:

```html
<div class="coderwidget"></div>
```

Add the following CSS to the HEAD section of your page:

```html
<link rel="stylesheet" href="path/to/coderwidget.min.css">
```

Add the following javascript after your coderwidget container:

```html
<script src="path/to/coderwidget.min.js"></script>
<script>
    Coderwidget.init({
        user: 'your_coderwall_username',
        orientation: 'horizontal'
    });
</script>
```

The script expect the following values:

| Value                              | Description                                                 |
| ---------------------------------- |:-----------------------------------------------------------:|
| **user**                           | The Coderwall username.                                     |
| **orientation**                    | vertical or horizontal. vertical is default.                |

## Browser support

![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) | ![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png)
--- | --- | --- | --- | --- |
IE 8+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |

## Contributing

Check [CONTRIBUTING.md](CONTRIBUTING.md) for more information.

## History

Check [Releases](https://github.com/pinceladasdaweb/Coderwidget/releases) for detailed changelog.

## License

[MIT](LICENSE)