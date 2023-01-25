# Troubleshooting

## Card Templates aren't parsing correctly

Some users have reported that the card templates aren't parsing correctly. This is usually due to the `---` separator being used in the template having extra line breaks. Some Visual Studio Code extensions like [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) will auto format the Markdown by adding the line brakes. After the `---` separator. This will cause the template to not parse correctly. To fix this, you can disable extension or modify its settings.
